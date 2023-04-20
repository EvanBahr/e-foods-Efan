import React, { useState } from "react";
import dataBuku from "../data/dataBuku";

export default function ArrayMap() {
  const [id, setId] = useState(1);
  return (
    <div className="p-7">
      {dataBuku.buku.map((v, i) => (
        <div className="grid grid-cols-4 ">
          <div
            onClick={() => {
              setId(v.id);
              console.log(id);
            }}
            className=" bg-blue-50 hover:bg-blue-200 active:bg-blue-300 text-left text-lg  font-semibold p-2 rounded-lg  shadow-lg "
          >
            <div>judul: {v.title}</div>
            <div>harga: {v.price}</div>
          </div>
          <div
            className={`${
              v.id === id ? "" : "hidden"
            } bg-purple-200 p-24 col-span-2 font-sans bg-absolute font-extrabold uppercase h-[700px] w-[500px] rounded-xl text-left justify-center items-left fixed right-80 top-3  `}
          >
            <span className="text-4xl "> {v.title}</span>
            <div className="grid grid-cols-3">
              {" "}
              <div className="font-semibold uppercase">judul</div>
              <div className="col-span-2">: {v.title}</div>
            </div>{" "}
            <div className="grid grid-cols-3">
              {" "}
              <div className="font-semibold uppercase">penulis</div>
              <div className="col-span-2">: {v.author}</div>
            </div>{" "}
            <div className="grid grid-cols-3">
              {" "}
              <div className="font-semibold uppercase">harga</div>
              <div className="col-span-2">: {v.price}</div>
            </div>{" "}
            <div className="grid grid-cols-3">
              {" "}
              <div className="font-semibold uppercase">stok</div>
              <div className="col-span-2">: {v.stock}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// export default function ArrayMap() {
//   const [id, setId] = useState([true, 1]);
//   return (
//     <div className="p-5">
//       <div className="grid grid-cols-4 gap-7">
//         <div>
//           {dataBuku.buku.map((v, i) => (
//             <div className=" text-left text-lg font-semibold p-2 rounded-lg  shadow-lg">
//               <div>judul: {v.title}</div>
//               <div>harga: {v.price}</div>
//               <div
//                 onClick={(v) => {
//                   setId([true, v.id]);
//                   console.log(id);
//                 }}
//                 className="cursor-pointer hover:bg-green-500 h-10 bg-green-400 w-28 text-center p-2 rounded-xl"
//               >
//                 detail
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="col-span-2 py-15 px-10">
//           <div className=" bg-purple-200 font-sans bg-absolute  font-extrabold uppercase h-[700px] rounded-xl text-center flex justify-center items-center text-3xl">
//             <div>gambar buku</div>
//           </div>
//         </div>
//         <div>
//           <div className=" text-left text-lg font-semibold p-2 rounded-lg  shadow-lg">
//             {id[0] === true && (
//               <div>
//                 <div>judul: {}</div>
//                 <div>harga: {}</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
