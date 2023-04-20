import React, { useState } from "react";
import Datahafalan2 from "../data/datahafalan2";
export default function ArrayMap() {
  return (
    <div className="p-6">
      <div className="text-6xl text-center font-extrabold h-20 uppercase">
        data hafalan santri
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Datahafalan2.status.map((v, i) => (
          <div
            className={`capitalize h-40 border border-x-2 border-black rounded-lg flex p-4 gap-5 ${
              v.status === "baik" ? "bg-blue-200" : "bg-red-200"
            } text-lg font-extrabold`}
          >
            <div
              className={`h-32 w-32 rounded-lg  ${
                v.status === "baik" ? "bg-blue-100" : "bg-red-100"
              }`}
            ></div>
            <div>
              <div>nama: {v.nama}</div>
              <div>asal: {v.asal}</div>
              <div>Hafalan: {v.hafalan}</div>
              <div>Predikat: {v.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
