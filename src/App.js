import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "../src/component/ScroolToTop";

import Dashboard from "../src/pages/Dashboard";
import Home from "../src/pages/Home";
import Registration from "./pages/Registration";
import Login from "../src/pages/Login";
import Vet from "../src/pages/Vet";
import About from "../src/pages/About";
import Profile from "../src/pages/Profile";
import Cart from "../src/pages/Cart";
import Sale from "../src/pages/Sale";

import One from "../src/pages/One";
import OneC from "../src/pages/OneC";
import Two from "../src/pages/Two";
import TwoC from "../src/pages/TwoC";
import Three from "../src/pages/Three";
import ThreeC from "../src/pages/ThreeC";
import Four from "../src/pages/Four";
import FourC from "../src/pages/FourC";
import Five from "../src/pages/Five";
import FiveC from "../src/pages/FiveC";
import Six from "../src/pages/Six";
import SixC from "../src/pages/SixC";
import Seven from "../src/pages/Seven";
import SevenC from "../src/pages/SevenC";
import Eight from "../src/pages/Eight";
import EightC from "../src/pages/EightC";
import Nine from "../src/pages/Nine";
import NineC from "../src/pages/NineC";
import Ten from "../src/pages/Ten";
import TenC from "../src/pages/TenC";
import OneS from "../src/pages/OneS";
import Terms from "../src/pages/Terms";

import Vetone from "./pages/VetOne";
import VetTwo from "./pages/VetTwo";
import Vetthree from "../src/pages/Vetthree";

// ------------------------------
// Wrapper HOC
// ------------------------------
const withCloseWrapper = (Component) => {
  return function WrappedComponent() {
    const navigate = useNavigate();
    return <Component onClose={() => navigate(-1)} />;
  };
};

// ------------------------------
// Wrapped Components
// ------------------------------
const OneWrapper = withCloseWrapper(One);
const OneCWrapper = withCloseWrapper(OneC);
const TwoWrapper = withCloseWrapper(Two);
const TwoCWrapper = withCloseWrapper(TwoC);
const ThreeWrapper = withCloseWrapper(Three);
const ThreeCWrapper = withCloseWrapper(ThreeC);
const FourWrapper = withCloseWrapper(Four);
const FourCWrapper = withCloseWrapper(FourC);
const FiveWrapper = withCloseWrapper(Five);
const FiveCWrapper = withCloseWrapper(FiveC);
const SixWrapper = withCloseWrapper(Six);
const SixCWrapper = withCloseWrapper(SixC);
const SevenWrapper = withCloseWrapper(Seven);
const SevenCWrapper = withCloseWrapper(SevenC);
const EightWrapper = withCloseWrapper(Eight);
const EightCWrapper = withCloseWrapper(EightC);
const NineWrapper = withCloseWrapper(Nine);
const NineCWrapper = withCloseWrapper(NineC);
const TenWrapper = withCloseWrapper(Ten);
const TenCWrapper = withCloseWrapper(TenC);
const OneSWrapper = withCloseWrapper(OneS);
const VetoneWrapper = withCloseWrapper(Vetone);
const VetTwoWrapper = withCloseWrapper(VetTwo);
const VetthreeWrapper = withCloseWrapper(Vetthree);
const LoginWrapper = withCloseWrapper(Login);
const RegistrationWrapper = withCloseWrapper(Registration);

// ------------------------------
// App Component
// ------------------------------
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/register" element={<RegistrationWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/vet" element={<Vet />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/one" element={<OneWrapper />} />
        <Route path="/onec" element={<OneCWrapper />} />

        <Route path="/two" element={<TwoWrapper />} />
        <Route path="/twoc" element={<TwoCWrapper />} />

        <Route path="/three" element={<ThreeWrapper />} />
        <Route path="/threec" element={<ThreeCWrapper />} />

        <Route path="/four" element={<FourWrapper />} />
        <Route path="/fourc" element={<FourCWrapper />} />

        <Route path="/five" element={<FiveWrapper />} />
        <Route path="/fivec" element={<FiveCWrapper />} />

        <Route path="/six" element={<SixWrapper />} />
        <Route path="/sixc" element={<SixCWrapper />} />

        <Route path="/seven" element={<SevenWrapper />} />
        <Route path="/sevenc" element={<SevenCWrapper />} />

        <Route path="/eight" element={<EightWrapper />} />
        <Route path="/eightc" element={<EightCWrapper />} />

        <Route path="/nine" element={<NineWrapper />} />
        <Route path="/ninec" element={<NineCWrapper />} />

        <Route path="/ten" element={<TenWrapper />} />
        <Route path="/tenc" element={<TenCWrapper />} />

        <Route path="/ones" element={<OneSWrapper />} />

        <Route path="/vetone" element={<VetoneWrapper />} />
        <Route path="/vettwo" element={<VetTwoWrapper />} />
        <Route path="/vetthree" element={<VetthreeWrapper />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
};

export default App;