import { useSelector } from 'react-redux';

import logo from 'assets/img/logo.png';
import search from 'assets/img/ic-actions-search.svg';
import cabinet from 'assets/img/ic-actions-user.svg';
import basket from 'assets/img/basket.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const { totalCount } = useSelector(({ goods }) => ({
    totalCount: goods.totalCount,
  }));
  return (
    <header className="header">
      <div className="content">
        <div className="header__nav">
          <Link className="logo-link nav" to="/catalog">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="header__contacts">
            <ul className="header__contacts__list">
              <li className="header__contacts__list-item">
                <Link className="header__contacts__list-link" to="">
                  Chat with us
                </Link>
              </li>
              <li className="header__contacts__list-item">
                <Link className="header__contacts__list-link" to="">
                  +420 336 775 664
                </Link>
              </li>
              <li className="header__contacts__list-item">
                <Link className="header__contacts__list-link" to="">
                  info@freshnesecom.com
                </Link>
              </li>
            </ul>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link className="nav__list-link lime" to="">
                  Blog
                </Link>
              </li>
              <li className="nav__list-item">
                <Link className="nav__list-link lime" to="">
                  About Us
                </Link>
              </li>
              <li className="nav__list-item">
                <Link className="nav__list-link lime" to="">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          <div className="burger__menu">
            <span></span>
          </div>
          <div className="nav__adaptive">
            <h2 className="nav__adaptive-title">Меню</h2>
            <div className="header__contacts adaptive">
              <ul className="header__contacts__list">
                <li className="header__contacts__list-item">
                  <Link className="header__contacts__list-link" to="">
                    Chat with us
                  </Link>
                </li>
                <li className="header__contacts__list-item">
                  <Link className="header__contacts__list-link" to="">
                    +420 336 775 664
                  </Link>
                </li>
                <li className="header__contacts__list-item">
                  <Link className="header__contacts__list-link" to="">
                    info@freshnesecom.com
                  </Link>
                </li>
              </ul>
            </div>
            <nav className="nav adaptive">
              <ul className="nav__list">
                <li className="nav__list-item">
                  <Link className="nav__list-link lime" to="">
                    Blog
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link className="nav__list-link lime" to="">
                    About Us
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link className="nav__list-link lime" to="">
                    Careers
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header__center">
          <Link className="logo-link" to="/catalog">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="search">
            <div className="search-categories">All categories</div>
            <div className="search__input">
              <input
                className="search__input-txt"
                type="text"
                placeholder="Search Products, categories..."
              ></input>
              <img className="search__input-icon" src={search} alt="search-icon"></img>
            </div>
          </div>
          <ul className="cabinet__list">
            <li className="cabinet__list-item">
              <Link className="cabinet__list-link" to="">
                <img className="cabinet__list-img cabinet" src={cabinet} alt="cabinet"></img>
              </Link>
            </li>
            <li className="cabinet__list-item">
              <Link className="cabinet__list-link basket" to="/basket">
                <img className="cabinet__list-img basket" src={basket} alt="basket"></img>
                <span className="cabinet__list-basket-count">{totalCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content bg">
        <div className="header__bottom">
          <ul className="menu__list">
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Bakery
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Fruit and vegetables
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Meat and fish
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Drinks
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Kitchen
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Special nutrition
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Baby
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="">
                Pharmacy
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8125 6.53336L7.5525 9.27336C7.67741 9.39752 7.84638 9.46722 8.0225 9.46722C8.19862 9.46722 8.36759 9.39752 8.4925 9.27336L11.1592 6.60669"
                  stroke="#6A983C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="header__pages">
          <Link className="header__pages-text link" to="">
            Homepage
          </Link>
          <span className="header__pages-text">/</span>
          <Link className="header__pages-text link active" to="">
            Fruit and vegetables
          </Link>
        </div>
      </div>
    </header>
  );
}
