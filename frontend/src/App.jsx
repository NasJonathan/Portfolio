import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projecten } from "./pages/Projecten";
import NotFound from "./pages/NotFound";
import { Bewijzen } from "./pages/Bewijzen";
import { Onlybowling } from "./pages/SchoolProjects/Onlybowling";
import { PdfChatbot } from "./pages/SchoolProjects/PdfChatbot";
import { McautherOutlet } from "./pages/SchoolProjects/McautherOutlet";
import { Wesolved } from "./pages/StageProjects/Wesolved";
import { Bikebutler } from "./pages/StageProjects/Bikebutler";
import { BroensbroodBanket } from "./pages/StageProjects/BroensbroodBanket";
import { Impacked } from "./pages/StageProjects/Impacked";
import { Kilokilo } from "./pages/StageProjects/Kilokilo";
import { ScrapMetals } from "./pages/StageProjects/ScrapMetals";
import { Timmermans } from "./pages/StageProjects/Timmermans";
import { Billa } from "./pages/StageProjects/Billa";
import { CefEnMax } from "./pages/StageProjects/CefEnMax";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projecten />} />
          <Route path="/bewijzen" element={<Bewijzen />} />
          <Route path="/school-project/onlybowling" element={<Onlybowling />} />
          <Route path="/school-project/pdf-chatbot" element={<PdfChatbot />} />
          <Route
            path="/school-project/mcarthur-outlet"
            element={<McautherOutlet />}
          />
          <Route path="/stage-project/wesolved" element={<Wesolved />} />
          <Route path="/stage-project/bikebutler" element={<Bikebutler />} />
          <Route
            path="/stage-project/broensbroodbanket"
            element={<BroensbroodBanket />}
          />
          <Route path="/stage-project/impacked" element={<Impacked />} />
          <Route path="/stage-project/kilocilo" element={<Kilokilo />} />
          <Route path="/stage-project/scrap-metals" element={<ScrapMetals />} />
          <Route path="/stage-project/timmermans" element={<Timmermans />} />
          <Route path="/stage-project/billa" element={<Billa />} />
          <Route path="/stage-project/cef-en-max" element={<CefEnMax />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
