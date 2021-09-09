import React from 'react';
import { Link } from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';

export default function Footer() {
  const productsTags = [
    { value: 'Beans', link: '' },
    { value: 'Carrots', link: '' },
    { value: 'Apples', link: '' },
    { value: 'Garlic', link: '' },
    { value: 'Mushrooms', link: '' },
    { value: 'Chilli peppers', link: '' },
    { value: 'Watermelons', link: '' },
    { value: 'Oranges', link: '' },
    { value: 'Bananas', link: '' },
    { value: 'Grapes', link: '' },
    { value: 'Cherries', link: '' },
    { value: 'Meat', link: '' },
    { value: 'Seo tag', link: '' },
    { value: 'Fish', link: '' },
    { value: 'Seo tag', link: '' },
    { value: 'Fresh food', link: '' },
    { value: 'Lemons', link: '' },
  ];
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer__inner">
          <div className="footer__list">
            <SlideToggle
              duration={400}
              render={({ toggle, setCollapsibleElement }) => (
                <div className="footer__list-item">
                  <h4 className="footer__list-item-title" onTouchStart={toggle}>
                    Get in touch
                  </h4>
                  <ul className="footer__list-info" ref={setCollapsibleElement}>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        About Us
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Careers
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Press Releases
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            />
            <SlideToggle
              duration={400}
              render={({ toggle, setCollapsibleElement }) => (
                <div className="footer__list-item">
                  <h4 className="footer__list-item-title" onTouchStart={toggle}>
                    Connections
                  </h4>
                  <ul className="footer__list-info" ref={setCollapsibleElement}>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Facebook
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Twitter
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Instagram
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Youtube
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            />
            <SlideToggle
              duration={400}
              render={({ toggle, setCollapsibleElement }) => (
                <div className="footer__list-item">
                  <h4 className="footer__list-item-title" onTouchStart={toggle}>
                    Earnings
                  </h4>
                  <ul className="footer__list-info" ref={setCollapsibleElement}>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Become an Affiliate
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Advertise your product
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Sell on Market
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            />
            <SlideToggle
              duration={400}
              render={({ toggle, setCollapsibleElement }) => (
                <div className="footer__list-item">
                  <h4 className="footer__list-item-title" onTouchStart={toggle}>
                    Account
                  </h4>
                  <ul className="footer__list-info" ref={setCollapsibleElement}>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Your account
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Returns Centre
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        100 % purchase protection
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Chat with us
                      </Link>
                    </li>
                    <li className="footer__list-info-item">
                      <Link className="footer__list-info-link" to="">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            />
          </div>
          <div className="products__tags">
            <h3 className="products__tags-title">Product tags</h3>
            <ul className="products__tags-list">
              {productsTags.map((item, index) => (
                <li className="products__tags-list-item" key={index}>
                  <Link className="products__tags-list-link" to={item.link}>
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__author">Copyright © 2020 petrbilek.com</div>
        </div>
      </div>
    </footer>
  );
}
