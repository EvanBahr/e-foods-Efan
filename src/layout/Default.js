import React from "react";
import { Link } from "react-router-dom";


export default function Default({children}) {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div id="navbar" className="bg-[#1579a0] flex p-2">
        <div className="font-[Fantasy] font-bold text-white grow">
          WARMINDO H2
        </div>
        <Link to="/">
          <div>BATAL</div>
        </Link>
        <div>LOGIN</div>
      </div>
      {children}
    </div>
  );
}
