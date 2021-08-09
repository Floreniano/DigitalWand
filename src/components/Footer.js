import React from 'react';
import { Link } from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';

export default function Footer() {
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
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Beans
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Carrots
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Apples
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Garlic
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Mushrooms
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Tomatoes
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Chilli peppers
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Broccoli
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Watermelons
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Oranges
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Bananas
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Grapes
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Cherries
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Meat
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Seo tag
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Fish
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Seo tag
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Fresh food
                </Link>
              </li>
              <li className="products__tags-list-item">
                <Link className="products__tags-list-link" to="">
                  Lemons
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__author">Copyright © 2020 petrbilek.com</div>
        </div>
      </div>
    </footer>
  );
}
