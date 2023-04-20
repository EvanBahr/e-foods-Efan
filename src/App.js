import "./App.css";
import Member from "./Member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dapur from "./admin/Dapur";
import Rekap from "./admin/Rekap";
// import ArrayMap from "./ArrayMap";
import Abal2Array from "./Abal2Array";
import { Member2 } from "./Member2";
import ArrayMap from "./latihan/latihan4/ArrayMap";
import StateSetstate from "./latihan/latihan1/stateSetstate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={<ArrayMap />} /> */}
        <Route index path="/" element={<Abal2Array />} />
        <Route index path="map" element={<ArrayMap />} />
        <Route index path="state" element={<StateSetstate />} />
        {/* <Route path="admin"> */}
        <Route path="member" element={<Member />} />
        {/* <Route path="member" element={<Member2 />} /> */}
        <Route path="rekap" element={<Rekap />} />
        <Route path="dapur" element={<Dapur />} />
        {/* <Route path="dapur" element={<Admin />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
