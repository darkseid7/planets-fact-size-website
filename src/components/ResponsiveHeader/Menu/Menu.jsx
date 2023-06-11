import movileMenu from "../../../assets/icon-hamburger.svg";
import anime from "animejs";

function Menu({ showResponsiveMenu, setShowResponsiveMenu }) {
  const showMobileMenu = (e) => {
    e.preventDefault();
    if (showResponsiveMenu) {
      setShowResponsiveMenu(false);
    } else {
      anime({
        targets: ".planet-option",
        translateX: [-270, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(50),
      });
      setShowResponsiveMenu(true);
    }
  };

  return (
    <a href="" className="icon" onClick={showMobileMenu}>
      <img src={movileMenu} alt="" />
    </a>
  );
}

export default Menu;
