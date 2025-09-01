import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

import { useMedia } from "../../hooks/useMedia";
import { useMeasure } from "../../hooks/useMeasure";
import { preloadImages } from "../../utils/imageUtils";
import { GridItem, MasonryProps } from "../../types/masonry";
import ImageModal from "./ImageModal";
import "./Masonry.css";

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>("");

  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === "random") {
      const directions = ["top", "bottom", "left", "right"];
      direction = directions[
        Math.floor(Math.random() * directions.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];

    const gap = width < 768 ? 4 : 8;
    const colHeights = new Array(columns).fill(0);
    const columnWidth = (width - gap * (columns - 1)) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);

      // Usar altura fornecida ou proporção realista
      let height: number;
      if (child.height) {
        height = child.height;
      } else {
        // Proporção mais realista para fotos (3:4 para retrato, 4:3 para paisagem)
        // Priorizar fotos mais altas no início
        const randomRatio = Math.random() > 0.3 ? 4 / 3 : 3 / 4; // 70% paisagem, 30% retrato
        height = columnWidth * randomRatio;
      }

      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  // Calcular a altura total do container baseada na coluna mais alta
  const containerHeight = useMemo(() => {
    if (!width) return 0;

    const gap = width < 768 ? 4 : 8;
    const colHeights = new Array(columns).fill(0);
    const columnWidth = (width - gap * (columns - 1)) / columns;

    items.forEach((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));

      // Usar altura fornecida ou proporção realista
      let height: number;
      if (child.height) {
        height = child.height;
      } else {
        // Proporção mais realista para fotos (3:4 para retrato, 4:3 para paisagem)
        // Priorizar fotos mais altas no início
        const randomRatio = Math.random() > 0.3 ? 4 / 3 : 3 / 4; // 70% paisagem, 30% retrato
        height = columnWidth * randomRatio;
      }

      colHeights[col] += height + gap;
    });

    // Adicionar margem extra para garantir que todas as imagens sejam visíveis
    return Math.max(...colHeights) + 80;
  }, [columns, items, width]);

  const handleImageClick = (imageSrc: string, imageAlt?: string) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt || "Imagem da galeria");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    setSelectedImageAlt("");
  };

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="list"
        style={{
          height: `${containerHeight}px`,
          position: "relative",
          marginBottom: "20px",
        }}
      >
        {grid.map((item) => {
          return (
            <div
              key={item.id}
              data-key={item.id}
              className="item-wrapper"
              onClick={() => handleImageClick(item.img, `Imagem ${item.id}`)}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={(e) => handleMouseLeave(e, item)}
            >
              <div
                className="item-img"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {colorShiftOnHover && (
                  <div
                    className="color-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                      opacity: 0,
                      pointerEvents: "none",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
        imageAlt={selectedImageAlt}
      />
    </>
  );
};

export default Masonry;
