import Link from "next/link";
import { useState } from "react";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';

import BackToTop from "../back-to-top/Index";
import Pentagon from "@layouts/pentagon/Index";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  AppData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();

    const lists = document.querySelectorAll('.mil-has-children ul');
    lists.forEach((list) => {
        list.classList.remove('mil-active');
    });

    const links = document.querySelectorAll('.mil-has-children a');
    links.forEach((link) => {
        link.classList.remove('mil-active');
    });

    e.target.classList.toggle('mil-active');
    e.target.parentNode.querySelector('ul').classList.toggle('mil-active');
  }

  return (
    <>
    
    {/* menu */}
    <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
            <Link href={AppData.header.logo.link} className="mil-logo">{AppData.header.logo.symbol}</Link>
            <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
                <span />
            </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
              <div className="row">
                  <div className="col-xl-5">

                      <nav className="mil-main-menu" id="swupMenu">
                        <ul>
                            {navItems.map((item, key) => (
                            <li className={item.classes} key={`header-menu-item-${key}`}>
                                <Link href={item.link} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""}>{item.label}</Link>
                                {item.children != 0 &&
                                <ul>
                                    {item.children.map((subitem, key2) => (
                                    <li key={`header-submenu${key}-item-${key2}`} className={ ( ( asPath.indexOf( subitem.link ) != -1 && subitem.link != '/' ) || asPath == subitem.link ) ? "mil-active" : "" }>
                                        <Link href={subitem.link}>{subitem.label}</Link>
                                    </li>
                                    ))}
                                </ul>
                                }
                            </li>
                            ))}
                        </ul>
                      </nav>

                  </div>
                  <div className="col-xl-7">

                      <div className="mil-menu-right-frame">
                          <div className="mil-animation-in">
                              <div className="mil-animation-frame">
                                  <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2">
                                    <Pentagon />
                                  </div>
                              </div>
                          </div>
                          <div className="mil-menu-right">
                              <div className="row">
                                  <div className="col-lg-12 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Portfolio</h6>

                                      <ul className="mil-menu-list">
                                          <li><Link href="/projects/project-1" className="mil-light-soft">Wordpress</Link></li>
                                          <li><Link href="/projects/project-2" className="mil-light-soft">MODX</Link></li>
                                          <li><Link href="/projects/project-3" className="mil-light-soft">Magento</Link></li>
                                          <li><Link href="/projects/project-4" className="mil-light-soft">Laravel</Link></li>
                                          <li><Link href="/projects/project-5" className="mil-light-soft">Others</Link></li>
                                      </ul>

                                  </div>
                              </div>
                              <div className="mil-divider mil-mb-60"></div>
                              <div className="row justify-content-between">

                                  <div className="col-lg-4 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Phone/WhatsApp</h6>

                                      <p className="mil-light-soft mil-up"><a href="https://wa.me/6282139403434?text=Hire%20saya%20di%20nomor%20Whatsapp%20saya%20?" target="_blank"><span className="mil-no-wrap">+62 821 3940 3434</span></a></p>

                                  </div>
                                  <div className="col-lg-4 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Email</h6>

                                      <p className="mil-light-soft"><a href="mailto:ekahandik@gmail.com" target="_blank"><span className="mil-no-wrap">ekahandik@gmail.com</span></a></p>

                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* menu */}
      
      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">{AppData.header.logo.symbol}</Link>
          <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
              <span />
          </div>
        </div>
        <div className="mil-frame-bottom">
            <div className="mil-current-page" />

            <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default DefaultHeader;
