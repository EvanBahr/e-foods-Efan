import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdFastfood } from "react-icons/md";
import { products } from "./utils";

export const Member2 = () => {
  const menus = [
    { name: "makanan", icon: <ImSpoonKnife /> },
    { name: "minuman", icon: <GiCoffeeCup /> },
    { name: "lainnya", icon: <MdFastfood /> },
  ];
  const [selected, setSelected] = useState("makanan");
  const setPesanan = () => {};
  const debaunce = () => {};
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="flex items-center">
            <input type="checkbox" onclick={setPesanan} />
            <label className="ml-1">BUNGKUS</label>
          </div>
        </div>
        <div className="mx-5">
          <label>pembeli:</label>
          <input
            onChange={debaunce}
            placeholder="atas nama"
            className="ml-1 border border-blue-400 p-1 rounded-lg"
          />
        </div>
        {/* fungsi untuk menampilkan tempat duduk pelanggan */}
      </div>
      <div id="content" className="grid grid-cols-9">
        <div id="menus" className="px-2">
          <div>KATEGORI</div>
          <hr />
          {menus.map((v, i) => (
            <div
              onclick={() => setSelected(v.name)}
              className="bg-[#a58808] flex font-semibold font-sans my-3 drop-shadow-md p-2"
            >
              {v.icon}
              <div>{v.name}</div>
            </div>
          ))}
        </div>
        <div id="items" className="col-span-6 px-2">
          <div>PRODUK</div>
          <hr />
          <div className="grid grid-cols-5 gap-3">
            {products[selected].map((v, i) => (
              <div className="bg-[#8d0f0f] h-60">
                <img
                  src={`/${selected}/${v.gambar}`}
                  alt="produk"
                  className="h-3/5"
                ></img>
                <div>{v.nama}</div>
                <div>{v.harga}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
