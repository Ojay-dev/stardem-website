import { Facebook, Linkedin, LogoDark, LogoLight, Twitter } from "@/assets/svgs";
import HamburgerMenuComponent from "@/components/hamburger-menu";
import { useMemo } from "react";
import { Link } from "react-router-dom";

type DefaultLayoutProps = React.PropsWithChildren;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <nav className="border-b border-[#F1F4FC]">
        <div className="mx-auto my-5 flex w-10/12 items-center justify-between 2xl:max-w-[1440px]">
          <Link to="/">
            <img src={LogoDark} alt="stardem logo" />
          </Link>

          <ul className="hidden gap-x-8 font-rubik font-normal lg:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>

          <button className="hidden rounded-lg bg-yellow px-6 py-3 text-base font-medium text-dark-fill lg:block">Contact Us</button>
          <HamburgerMenuComponent />
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-background pt-14 font-rubik">
        <div className="mx-auto w-11/12 2xl:max-w-[1440px]">
          <div className="flex flex-col items-center gap-y-8 border-b border-[#7B869F] pb-8 text-[#7B869F]">
            <img src={LogoLight} alt="stardem logo" />
            <p className="max-w-[805px] text-center text-xl leading-8">
              We are a leading technology consulting company committed to delivering cutting-edge solutions that drive innovation,
              streamline operations, and propel businesses toward success.
            </p>

            <div className="flex items-center justify-center gap-x-6">
              <a href="#">
                <img src={Twitter} alt="twitter icon" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="linkedin icon" />
              </a>
              <a href="#">
                <img src={Facebook} alt="facebook icon" />
              </a>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-y-5 py-8 text-base text-[#DEE3EB] md:flex-row">
            <p>&copy; {currentYear} Stardem. All rights reserved.</p>

            <div>
              <ul className="flex gap-x-4">
                <li>
                  <Link to="#">Terms</Link>
                </li>
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
