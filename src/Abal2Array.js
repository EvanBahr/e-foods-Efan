import { ImSpoonKnife } from "react-icons/im";
import { GiCoffeeCup } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import React, { Fragment, useState } from "react";
import "./Abal2Array.css";
import { products } from "./utils";
export default function Abal2Array() {
  const menus = [
    { nama: "makanan", icon: <ImSpoonKnife /> },
    { nama: "minuman", icon: <GiCoffeeCup /> },
    { nama: "lainnya", icon: <MdFastfood /> },
  ];
  const [selected, setSelected] = useState("makanan");
  const [pesanan, setPesanan] = useState({
    bungkus: false,
    name: "",
    keranjang: [],
  });
  const newPesanan = { ...pesanan };
  let { keranjang } = newPesanan;
  console.log(newPesanan);

  const pesan = (v) => {
    keranjang.push({
      ...v,
      nama: v.nama,
    });

    setPesanan(newPesanan);
    console.log("kranjang", keranjang);
  };

  return (
    <div className="flex">
      <div className="flex">
        <hr />
        <div>
          {menus.map((v, i) => (
            <Fragment>
              <div
                onClick={() => setSelected(v.nama)}
                className={selected === v.nama ? "aktif" : "NonAktif"}
              >
                <div>
                  {v.icon}
                  <div>
                    <i>{v.nama}</i>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="bungkus" onClick={pesan}>
          {products[selected].map((v, i) => (
            <div className="menu">
              <div className="img-menu">
                <img src={`/${selected}/${v.gambar}`} />
              </div>
              <div className="deskripsi">
                <p className="nama-menu">{v.nama}</p>
                <p className="harga-menu">
                  <b>Rp</b> {v.harga}
                </p>
                <p>id : {v.id}</p>
                <button className="pesan">Pesan </button>
              </div>
            </div>
          ))}
        </div>
        ;
      </div>
      <div>
        <div className="ml-5">
          {keranjang.map((v, i) => (
            <div>
              <p>nama makanan : {v.nama}</p>
              <p>jumlah : {v.jumlah}</p>
              <p>harga : {v.harga}</p>
              <p>nama makanan : {v.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// catatan
// hal penting yang di pelajari
// .1 fungsi map menghindarkan untuk menulis ulang sebuah code
// .2 onclick akan menentukan selected apa yang dipilih
// .3 selected dalam usestate menjadi pedoman utama apapun yang akan ditampilkan setelahnya
// .4 line 37 Abal2Array.js soal img, srcnya bedasarkan index.html yang jadi root, bukan bedasarkan file js atau jsx yang sedang dikerjakan
// karena ketika file js yang jadi pacuan maka srcnya jadii begini "../public/${selected}/${v.property-objek}"
// .5 masuk ke array menggunakan [] , masuk ke objek menggunakan titik ( . )
