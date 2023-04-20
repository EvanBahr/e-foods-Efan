import React, { useState } from "react";
import DataKendaraan from "../data/dataKendaraan";

export default function ArrayMap() {
  const TempatParkir = [
    {
      tempat: "tempat1",
      class: "rounded-lg hover:bg-green-300 p-3 bg-green-200 ",
    },
    {
      tempat: "tempat2",
      class: "rounded-lg hover:bg-yellow-300 p-3 bg-yellow-200",
    },
  ];

  const [pilih, setPilih] = useState("tempat1");
  return (
    <div>
      <div className="text-3xl font-extrabold uppercase font-sans bg-sky-100 text-center py-7 ">
        PARKIRAN PASAR MALEM
      </div>
      <div className="grid grid-cols-2 gap-7 h-12  text-center font-semibold  ">
        {TempatParkir.map((v, i) => (
          <div
            onClick={() => {
              setPilih(v.tempat);
            }}
            className={v.class}
          >
            {v.tempat}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-10 gap-6">
        {DataKendaraan[pilih].map((v, i) => (
          // <div className={v.jenis === "mobil" ? classMobil : classMotor}>
          <div
            className={`h-80 text-center font-semibold ${
              v.jenis === "mobil" ? "col-span-2 bg-red-400 " : "bg-blue-400 "
            } border-4 rounded-2xl border-blue-100 `}
          >
            {v.jenis}
            <br />
            {v.plat}
          </div>
        ))}
      </div>
    </div>
  );
}
