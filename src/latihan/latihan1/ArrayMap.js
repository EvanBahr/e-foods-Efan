import React, { useState } from "react";
import dataArray from "../data/datahafalan";
export default function ArrayMap() {
  const KelasTsanawie = [
    { kelas: "kelas1" },
    { kelas: "kelas2" },
    { kelas: "kelas3" },
  ];
  const [pilih, setPilih] = useState("kelas1");
  return (
    <div>
      <div className="mt-5 ml-5 grid grid-cols-4">
        <div className="space-y-3 mx-auto ">
          {KelasTsanawie.map((v, i) => (
            <div className="">
              <div
                className=" col-span-1 h-10 w-40 bg-orange-600 p-2 text-center font-semibold"
                onClick={() => {
                  setPilih(v.kelas);
                }}
              >
                {v.kelas}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3  w-98 max-h-96 grid grid-cols-3 gap-3 ">
          {dataArray[pilih].map((v, i) => (
            <div className="p-4 border rounded-lg border-emerald-900 h-[180px] space-y-2 grid grid-cols-2 gap-3">
              <div className="bg-emerald-300 h-30  w-30  text-center   font-bold rounded-lg">
                p
              </div>
              <div className=" capitalize font-semibold ">
                <div>nama : {v.nama}</div>
                <div>asal : {v.asal}</div>
                <div>prov : {v.provinsi}</div>
                <div>hafalan : {v.hafalan}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ARAY DENGAN ELEMENT String

// const menus = ["makanan", "minuman", "lainyya"];

// export default function ArrayMap() {
//   return (
//     <div>
//       {menus.map((v, i) => (
//         <div className="bg-[#a58808] flex font-semibold font-sans my-3 drop-shadow-md  p-2 ">
//           <div>{v}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// ARRAY DENGAN ELEMENT OBJECT

// const menus = [
//   { name: "makanan", alias: "food" },
//   { name: "minuman", alias: "drink" },
//   { name: "lainnya", alias: "other" },
// ];

// export default function ArrayMap() {
//   return (
//     <div>
//       {menus.map((v, i) => {
//         console.log("v", v);
//         console.log("i", i);
//         return (
//           <div className="bg-[#a58808] flex font-semibold font-sans my-3 drop-shadow-md  p-2 ">
//             {i}
//             <div>{v.name}</div>
//             <div> {v.alias}</div>
//             <div> test</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const obj = { name: "fazufi" };

// const ini = "name";

// export default function ArrayMap() {
//   return (
//     <div>
//       <div>{obj["name"]} </div>
//       <div>{obj[ini]} </div>
//       <div>{obj.name} </div>
//     </div>
//   );
// }
