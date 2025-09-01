import whiteIcon from "../assets/whiteIcon.png";

export default function NavBar() {
  const handleReserveClick = () => {
    window.open(
      "https://www.airbnb.com.br/rooms/53605809?source_impression_id=p3_1695736573_tDUNdktQjbqKh%2B3r",
      "_blank"
    );
  };
  return (
    <div className="navbar bg-marromCabana-500 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-marromCabana-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                href="#gallery"
                className="text-marromCabana-500 hover:text-marromCabana-300"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#Sobre"
                className="text-marromCabana-500 hover:text-marromCabana-300"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#Feedback"
                className="text-marromCabana-500 hover:text-marromCabana-300"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#Contato"
                className="text-marromCabana-500 hover:text-marromCabana-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost items-center hover:bg-transparent">
          <img
            src={whiteIcon}
            alt="Cabana do Pórtico"
            className="md:w-20 md:h-20 w-16 h-16"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#gallery"
              className="text-white hover:text-marromCabana-200 transition-colors"
            >
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#Sobre"
              className="text-white hover:text-marromCabana-200 transition-colors"
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="#Feedback"
              className="text-white hover:text-marromCabana-200 transition-colors"
            >
              Feedback
            </a>
          </li>
          <li>
            <a
              href="#Contato"
              className="text-white hover:text-marromCabana-200 transition-colors"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          onClick={handleReserveClick}
          className="btn bg-marromCabana-100 text-marromCabana-500 font-Karla font-semibold hover:bg-marromCabana-300 hover:border-marromCabana-300 hover:text-marromCabana-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Reserve
        </a>
      </div>
    </div>
  );
}
