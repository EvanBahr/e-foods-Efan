import React, { useState } from "react";
import ProdukWarung from "../data/produk";

export default function Warung() {
  const now = new Date();
  const jam = now.getHours();
  const menit = now.getMinutes();
  const detik = now.getSeconds();
  const hari = now.getDate();
  const bulan = now.getMonth() + 1;
  const tahun = now.getFullYear();
  const [pilih, setPilih] = useState("makanan");
  const [pesanan, setPesanan] = useState({
    name: "",
    duduk: "",
    bungkus: false,
    keranjang: [],
  });
  const newPesanan = { ...pesanan };
  const { keranjang } = newPesanan;

  // fungsi - fungsi

  const totalAll = keranjang.reduce(
    (acumulator, currentValue) => acumulator + currentValue.total,
    0
  );
  const tamplAlert = () => {
    if (pesanan.name.length < 1) {
      alert("maaf, masukkan nama pembeli terlebih dahulu  , terima kasih ^_^");
    }
  };
  const pesan = (v) => {
    const sudahAda = keranjang.find((x) => x.nama === v.nama);
    if (sudahAda) {
      console.log("sudah ada", sudahAda);
      sudahAda.jumlah++;
      sudahAda.total += sudahAda.harga;
      setPesanan(newPesanan);
      setNotatampl("hide");
    } else {
      console.log("belum ada");
      keranjang.push({
        nama: v.nama,
        harga: v.harga,
        jumlah: 1,
        total: v.harga,
      });
      setPesanan(newPesanan);
      setNotatampl("hide");
    }
    console.log(pesanan);
  };
  const tambah = (i) => {
    console.log("i=", i);
    keranjang[i].jumlah++;
    keranjang[i].total += keranjang[i].harga;
    setPesanan(newPesanan);
    setNotatampl("hide");
  };
  const kurang = (i) => {
    if (keranjang[i].jumlah > 1) {
      keranjang[i].jumlah--;
      keranjang[i].total -= keranjang[i].harga;
    } else {
      keranjang.splice(i, 1);
    }
    setPesanan(newPesanan);
    setNotatampl("hide");
  };
  const hapus = (i) => {
    keranjang.splice(i, 1);
    setPesanan(newPesanan);
    setNotatampl("hide");
  };
  const [notatmpl, setNotatampl] = useState("hide");

  const menu = [{ name: "makanan" }, { name: "minuman" }, { name: "camilan" }];
  return (
    <div className="p-10 bg-purple-100">
      <div className=" bg-green-900 text-white h-24 p-7 rounded-3xl text-4xl font-extrabold uppercase text-center">
        warung
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {menu.map((v, i) => (
          <div
            onClick={() => {
              setPilih(v.name);
              setNotatampl("hide");
            }}
            className={`cursor-pointer h-16 w-40 text-center text-lg font-semibold p-3 rounded-lg  border-4  ${
              pilih === v.name
                ? "bg-orange-500 border-yellow-200"
                : "bg-yellow-400 border-orange-200"
            } `}
          >
            {v.name}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-5 text-center gap-2">
        <div className="p-3 bg-green-200 rounded-lg max-h-[750px] overflow-y-auto ">
          <div className="uppercase rounded-2xl font-bold h-16 bg-green-700 hover:bg-green-500 text-white p-5 ">
            data pembeli
          </div>
          <div className="text-left ml-3 font-semibold mt-3 capitalize">
            nama
          </div>
          <input
            className="h-8 p-3 box-border w-full border-black  border-2 rounded-lg"
            placeholder="masukkan nama"
            onChange={(e) => {
              setPesanan({ ...newPesanan, name: e.target.value });
              setNotatampl("hide");
            }}
          />
          <div className="flex mt-3">
            <label className="text-left ml-3 font-semibold capitalize">
              bungkus
            </label>
            <input
              onClick={(e) => {
                setPesanan({ ...newPesanan, bungkus: e.target.checked });
                setNotatampl("hide");
              }}
              type="checkbox"
              className=" h-7 p-3 cursor-pointer box-border w-60 border-black  border-2 rounded-lg"
            />
          </div>

          <div
            className={`${
              !newPesanan.bungkus ? "" : "hidden"
            } flex gap-3 mt-3 `}
          >
            <div>
              <div className="text-left ml-3 font-semibold ">Tempat duduk</div>
              <div>
                <select className="cursor-pointer">
                  <option>- - -</option>
                  {Array(10)
                    .fill()
                    .map((v, i) => (
                      <option>{i + 1}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`${notatmpl === "hide" ? "hidden" : ""} ${
                pesanan.name.length < 1 ? "hidden" : ""
              } uppercase mt-3 rounded-sm font-bold h-8 bg-green-700 hover:bg-red-600 cursor-pointer text-black p-1 `}
              onClick={() => {
                // printArea = () => {
                const printContent =
                  document.getElementById("print-area").innerHTML;
                const originalContent = document.body.innerHTML;
                document.body.innerHTML = printContent;
                window.print();
                document.body.innerHTML = originalContent;
                // };
              }}
            >
              Print nota
            </div>
            <div
              id="print-area"
              className={`${notatmpl === "hide" ? "hidden" : ""} ${
                pesanan.name.length < 1 ? "hidden" : ""
              } mt-4 uppercase divide-y divide-black rounded-sm font-mono  bg-white  text-black py-3 px-1`}
            >
              <div>
                <div>Warung Serba Ada</div>
                <div className="capitalize font-serif">
                  Jl.Simorejo 1 b no 16, Surabaya
                </div>
              </div>
              <div className="text-slate-600">
                <div className="  capitalize font-sans text-left text-sm px-5 grid grid-cols-3">
                  <div>nama</div>
                  <div>:</div>
                  <div>{newPesanan.name}</div>
                </div>
                <div className="  capitalize font-sans text-left text-sm px-5 grid grid-cols-3">
                  <div>waktu</div>
                  <div>:</div>
                  <div>
                    {jam}:{menit}:{detik}
                  </div>
                </div>
                <div className="  capitalize font-sans text-left text-sm px-5 grid grid-cols-3">
                  <div>tanggal</div>
                  <div>:</div>
                  <div>
                    {hari}/{bulan}/{tahun}
                  </div>
                </div>
              </div>
              <div>
                {keranjang.map((v, i) => (
                  <div className="grid grid-cols-8 text-sm font-sans divide-y">
                    <div>{i + 1}.</div>
                    <div className="col-span-3 lowercase text-left">
                      {v.nama}
                    </div>
                    <div>({v.jumlah}) </div>
                    <div className="capitalize col-span-3 text-right ">
                      {v.total.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-2 pt-3 capitalize">
                <div>total</div>
                <div className="font-semibold">
                  Rp {totalAll.toLocaleString()}
                </div>
              </div>
              <div>
                <div>silahkan berkunjung kembali ^_^</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className=" grid grid-cols-3 gap-3 max-h-[750px] overflow-y-auto">
            {ProdukWarung[pilih].map((v, i) => (
              <div
                className="grid grid-cols-2 p-4 border-2  border-black rounded-lg"
                onClick={() => {
                  pesan(v);
                }}
              >
                <div className="h-28 rounded-xl bg-blue-200"></div>
                <div>
                  <div className="font-semibold">{v.nama}</div>
                  <div className="font-semibold">
                    Rp {v.harga.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 bg-green-200 max-h-[750px] overflow-y-auto rounded-lg">
          <div
            className={`${
              pesanan.name.length < 1 ? " active:bg-red-500 " : ""
            } uppercase  rounded-2xl font-bold h-16 bg-green-700 hover:bg-green-500 text-white p-5 `}
            onClick={() => {
              setNotatampl("tampil");
              tamplAlert();
            }}
          >
            CHECKOUT
          </div>
          <div>
            Total Semua :
            <span className="font-semibold">
              Rp {totalAll.toLocaleString()}
            </span>{" "}
          </div>
          <div>
            {keranjang.reverse().map((v, i) => (
              <div
                className={`capitalize text-left p-2  rounded-2xl mb-3 bg-white`}
              >
                <div className="flex justify-between">
                  <div>{v.nama}</div>
                  <div>{v.total.toLocaleString()}</div>
                </div>
                <div className=" mt-1 grid grid-cols-5 items-center justify-center gap-1 font-bold">
                  <div className="flex justify-start">
                    <div
                      className="flex justify-center items-center h-5 w-10 rounded-lg bg-red-400 text-center mx-auto cursor-pointer lowercase font-bold"
                      onClick={() => {
                        kurang(i);
                      }}
                    >
                      <p>-</p>
                    </div>
                    <div
                      className="flex justify-center items-center h-5 w-10  rounded-lg bg-emerald-400 hover:bg-emerald-500 text-center mx-auto cursor-pointer  lowercase font-bold"
                      onClick={() => {
                        tambah(i);
                      }}
                    >
                      <p>+</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center  text-center mx-auto lowercase font-bold">
                      <p>{v.jumlah}</p>
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-center h-5 w-5  rounded-lg bg-red-400  hover:bg-red-500 text-center mx-auto cursor-pointer lowercase font-bold mt-1"
                    onClick={() => {
                      hapus(i);
                    }}
                  >
                    <p>x</p>
                  </div>
                  <div className="font-normal">
                    @Rp{v.harga.toLocaleString()}
                  </div>
                </div>
              </div>
              // <div
              //   className=" border-2 border-black p-3 text-left
              // "
              // >
              //   <div>nama: {v.nama}</div>
              //   <div>harga: {v.harga}</div>
              //   <div>jumlah: {v.jumlah}</div>
              //   <div>total: {v.total}</div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// {//* <div className="grid grid-cols-3">
//   <div>total :</div>
//   <div className="col-span-2">Rp total </div>
//   {keranjang.map((v, i) => (
//     <div className="capitalize text-left p-3 rounded-2xl  bg-white">
//       <div className="flex justify-between">
//         <div>{v.nama}</div>
//         <div>{v.total}</div>
//       </div>
//       <div className=" mt-1 flex items-center justify-center gap-2 font-bold">
//         <div className="flex justify-center items-center h-6 w-6 rounded-lg bg-red-400 text-center mx-auto cursor-pointer lowercase font-bold">
//           <p>-</p>
//         </div>
//         <div className="flex justify-center items-center  text-center mx-auto lowercase font-bold">
//           <p>{v.jumlah}</p>
//         </div>
//         <div className="flex justify-center items-center h-6 w-6 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-center mx-auto cursor-pointer  lowercase font-bold">
//           <p>+</p>
//         </div>
//       </div>
//       <div className="flex justify-center items-center h-6 w-6 rounded-lg bg-red-400  hover:bg-red-500 text-center mx-auto cursor-pointer lowercase font-bold mt-1">
//         <p>x</p>
//       </div>
//       <div>@Rp{v.harga}</div>
//     </div>
//   ))}
// </div> */}
