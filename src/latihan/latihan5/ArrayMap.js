import React, { useState } from "react";
import dataPenduduk from "../data/dataPenduduk";
export default function ArrayMap() {
  const daerah = [{ provinsi: "JawaTimur" }, { provinsi: "JawaTengah" }];
  const [pilih, setPilih] = useState("JawaTimur");

  return (
    <div className="grid grid-cols-3 p-10 gap-5">
      <div className="space-y-3">
        <div className=" bg-orange-400 text-Black  p-7 rounded-3xl text-4xl font-extrabold uppercase text-center">
          jam kerja & gaji pegawai
        </div>
        <div className=" bg-green-400 text-Black  p-7 h-full rounded-3xl font-mono text-left font-extrabold uppercase space-y-3">
          <div>jam kerja & gaji pegawai</div>
          {daerah.map((v, i) => (
            <div
              onClick={() => {
                setPilih(v.provinsi);
              }}
              className={`cursor-pointer h-11 text-center text-lg font-semibold p-2 rounded-lg  border-4  ${
                pilih === v.provinsi
                  ? " hover:bg-green-800 "
                  : " hover:bg-blue-500 "
              }
             `}
            >
              {v.provinsi}
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-3">
        {dataPenduduk[pilih].map((v, i) => (
          <div className="grid grid-cols-2 gap-3 p-4 border-2  border-black rounded-lg">
            <div
              className={`h-28 rounded-xl ${
                v.kelamin === "Laki-laki" ? " bg-red-200" : " bg-blue-200"
              } `}
            ></div>
            <div className="font-semibold">
              <div>nama: {v.nama}</div>
              <div>kota: {v.kota}</div>
              <div>
                jam Kerja:{v.kelamin === "Perempuan" ? " 5 jam" : " 8 jam"}
              </div>
              <div>gaji: {v.kelamin === "Perempuan" ? " 2,5 Jt" : " 4 Jt"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
