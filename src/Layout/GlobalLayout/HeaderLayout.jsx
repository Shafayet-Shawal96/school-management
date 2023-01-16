import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  useCallback,
} from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import HeaderSearchComponents from "../../Components/HeaderLayoutComponents/HeaderSearchComponents";
import MobileMenu from "../../Components/HeaderLayoutComponents/MobileMenu";
import MobileMenuButton from "../../Components/HeaderLayoutComponents/MobileMenuButton";
import cssClass from "./HeaderLayout.module.css";

const headerImage = {
  backgroundImage: `url(./assets/img/icon-img/header-shape.png)`,
};

function HeaderLayout() {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const mainHeader = useRef(null);

  const updateMenu = useCallback(() => {
    setMenu((prevmenu) => !prevmenu);
  }, []);

  const location = useLocation();

  useEffect(() => {
    const checkWindow = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", checkWindow);
    return () => window.removeEventListener("scroll", checkWindow);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
  }, [location]);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log("is auth:", isAuth);
  return (
    <Fragment>
      <header className="header-area">
        <div className="header-top bg-img" style={headerImage}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-12 col-sm-8">
                <div className="header-contact">
                  <ul>
                    <li>
                      <i className="fa fa-phone"></i> +98 558 547 589
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>

                      <Link to="#">education@email.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-12 col-sm-4">
                <div className="login-register">
                  <ul>
                    <li>
                      {isAuth ? (
                        <Link to="/dashboard">Dashboard</Link>
                      ) : (
                        <Link to="/login-register">Login</Link>
                      )}
                    </li>
                    {/* <li>
                      <Link to="/login-register">Register</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={mainHeader}
          className={
            sticky
              ? "header-bottom sticky-bar stick clearfix"
              : "header-bottom sticky-bar clearfix"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-4">
                <div className="logo">
                  <Link to="#">
                    <img alt="" src="assets/img/logo/logo.png" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-6 col-8">
                <div className="menu-cart-wrap">
                  <div className="main-menu">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/blog">NOTICE BOARD</Link>
                        </li>
                        <li>
                          <Link to="/event">event page</Link>
                        </li>
                        <li>
                          <Link to="/course">PROGRAMMES</Link>
                        </li>

                        <li>
                          <Link to="/contact">CONTACT</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="cart-search-wrap">
                    <HeaderSearchComponents />
                    <MobileMenuButton menu={menu} updateMenu={updateMenu} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={cssClass.mobile_menu}>
        <div
          className={`${cssClass.mobile_menu_container} ${
            menu ? cssClass.transition_open : cssClass.transition_close
          } ${menu ? cssClass.mobile_menu_container_open : ""}`}
        >
          <div className="container">
            <MobileMenu
              menu={menu}
              updateMenu={updateMenu}
              mainHeader={mainHeader}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeaderLayout;
