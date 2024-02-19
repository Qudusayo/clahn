import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WhoWeAre from "./pages/who-we-are";
import WhatWeDo from "./pages/what-we-do";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Donate from "./pages/donate";
import GetInvolved from "./pages/get-involved";

function App() {
  return (
    <Routes>
      <Route path="*" Component={Home} />
      <Route path="/who-we-are" Component={WhoWeAre} />
      <Route path="/what-we-do" Component={WhatWeDo} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/events" Component={Events} />
      <Route path="/donate-now" Component={Donate} />
      <Route path="/get-involved" Component={GetInvolved} />
    </Routes>
  );
}

export default App;
