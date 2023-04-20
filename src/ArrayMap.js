import React, { useState, useRef } from "react";
import { products } from "./utils";
import { debounce } from "debounce";
import { FaTrash } from "react-icons/fa";
import { FcExpand } from "react-icons/fc";
import { ImSpoonKnife } from "react-icons/im";
import { GiCoffeeCup } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Default from "./layout/Default";

export default function ArrayMap() {
  const menus = [
    { name: "makanan", icon: <ImSpoonKnife /> },
    { name: "minuman", icon: <GiCoffeeCup /> },
    { name: "lainnya", icon: <MdFastfood /> },
  ];
  const [selected, setSelected] = useState("makanan");

  return (
    <Default>
      <div>
        <div id="content" className={` grid grid-cols-9`}>
          <div id="menus" className="px-2">
            <div>KATEGORI</div>
            <hr />
            {menus.map((v, i) => (
              <div
                onClick={() => setSelected(v.name)}
                className={`${
                  selected === v.name ? "border-4 border-yellow-900" : ""
                } bg-[#a58808]  flex font-semibold font-sans my-3 drop-shadow-md  p-2 cursor-pointer `}
              >
                {v.icon}
                <div>{v.name}</div>
              </div>
            ))}
          </div>
          <div id="items" className="col-span-6 px-2">
            <div>PRODUK</div>
            <hr />
            <div className=" grid grid-cols-5 gap-3">
              {products[selected].map((v, i) => (
                <div className="bg-[#8d0f0f] h-60 text-center">
                  <img
                    src={`/${selected}/${v.gambar}`}
                    alt="produk"
                    className="h-3/5"
                  ></img>
                  <div className="p-3">
                    <div>{v.nama}</div>
                    <div>{v.harga} </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </Default>
  );
}
