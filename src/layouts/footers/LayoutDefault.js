import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useRouter } from 'next/router';

const DefaultFooter = ( { extraClass } ) => {
  const { asPath } = useRouter();
  
  return (
    <>
    {/* footer */}
    <footer className="mil-dark-bg" id="footer">
        <div className="mi-invert-fix">
            <div className="container mil-p-120-60">
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-4 mil-mb-60">
                        <div className="mil-muted mil-logo mil-up mil-mb-30">{AppData.footer.logo.text}</div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-lg-7">

                                <nav className="mil-footer-menu mil-mb-60">
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>

                            </div>
                            <div className="col-md-6 col-lg-5">

                                <ul className="mil-menu-list mil-up mil-mb-60">
                                    <li><a href="#." className="mil-light-soft">Wordpress</a></li>
                                    <li><a href="#." className="mil-light-soft">MODX</a></li>
                                    <li><a href="#." className="mil-light-soft">Magento</a></li>
                                    <li><a href="#." className="mil-light-soft">Laravel</a></li>
                                    <li><a href="#." className="mil-light-soft">Others</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between flex-sm-row-reverse">
                    <div className="col-md-7 col-lg-6">

                        <div className="row justify-content-between">

                            <div className="col-md-6 col-lg-5 mil-mb-60">

                                <h6 className="mil-muted mil-up mil-mb-30">Phone/WhatsApp</h6>

                                <p className="mil-light-soft mil-up"><a href="https://wa.me/6282139403434?text=Hire%20saya%20di%20nomor%20Whatsapp%20saya%20?" target="_blank"><span className="mil-no-wrap">+62 821 3940 3434</span></a></p>

                            </div>
                            <div className="col-md-6 col-lg-5 mil-mb-60">

                                <h6 className="mil-muted mil-up mil-mb-30">Email</h6>

                                <p className="mil-light-soft mil-up"><a href="mailto:ekahandik@gmail.com" target="_blank"><span>ekahandik@gmail.com</span></a></p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-6 mil-mb-60">

                        <div className="mil-vert-between">
                            <div className="mil-mb-30">
                                <ul className="mil-social-icons mil-up">
                                    {AppData.social.map((item, key) => (
                                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon"><i className={item.icon} /></a></li>
                                    ))}
                                </ul>
                            </div>
                            <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
