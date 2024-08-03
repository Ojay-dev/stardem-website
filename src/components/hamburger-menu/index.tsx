import { useState } from "react";
import DrawerComponent from "../drawer";

import { Link } from "react-router-dom";
import { CloseIcon, HamburgerMenuDark, LogoDark } from "@/assets/svgs";

const HamburgerMenuComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={showDrawer}>
        <img src={HamburgerMenuDark} alt="Hamburger menu" />
      </button>

      <DrawerComponent open={open} width={"80%"} onClose={onClose} rootClassName="hamburger-menu">
        <div className="relative flex flex-col items-center p-6">
          <button onClick={onClose} className="absolute right-3 top-4">
            <img src={CloseIcon} alt="cancel icon" />
          </button>

          <Link to="/">
            <img src={LogoDark} alt="Oriz logo" />
          </Link>

          <ul className="font-jakarta flex flex-col gap-y-10 py-12 text-center text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>

          <button className="rounded-lg bg-yellow px-6 py-3 text-base font-medium text-dark-fill">Contact Us</button>
        </div>
      </DrawerComponent>
    </div>
  );
};

export default HamburgerMenuComponent;
