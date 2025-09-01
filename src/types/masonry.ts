export interface Item {
  id: string;
  img: string;
  url?: string;
  height?: number;
}

export interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}
