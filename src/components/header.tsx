import React from 'react';
import { CgDialpad } from "react-icons/cg";


const Header = () => {
    return (
      <header>
        <h1 className="hero text-8xl pt-10 pr-10 pl-10 ">
          <CgDialpad />
          theAlley Pad
        </h1>
        <p className="hero text-2sm pb-12 py-6">Developer's best pal</p>
      </header>
    );
    };

export default Header;