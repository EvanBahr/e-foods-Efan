import React, { useState } from "react";

export default function StateSetstate() {
  // state sifatnya immutable
  const [data, setdata] = useState({ nama: "efan" });
  console.log("Data", data);
  const gantiData = () => {
    const newData = { ...data };
    newData.nama = "faqih";
    newData.kelas = 1;
    newData.umur = 12;
    setdata(newData);
  };

  const data2 = { nama: "fazufi" };
  data2.nama = "hehe";
  console.log("data2", data2);

  //   let ini = "mobil";
  //   ini = {};

  //   const itu = { nama: "efan" };
  //   itu.nama = "fazufi";

  //   //   itu = {nama: "faqih"}

  //   console.log("ini", ini);
  //   console.log("itu", itu);

  return (
    <div>
      <buttonitu
        // onClick={() => {
        //   ini = "motor";
        //   console.log("ini", ini);
        // }}
        onClick={() => {
          gantiData();
        }}
      >
        ganti ini
      </buttonitu>
      {/* <div> {ini}</div> */}
      <div>{data.nama} </div>
    </div>
  );
}

// VARIABLE bisa diganti isinya, tp tidak bisa dirender ulang
// let itu bisa merubah value nya bagaimanapun tnp syarat
// const hanya bisa bermutasi

// state itu bisa diganti valuenya dan pasti derender ulang
// yang bisa mengganti value state hanyalah setstate (value baru berada di kurung eksekutor nya setstate)
// state tidak bisa bermutasi spt yang di varible utk rerendernya
