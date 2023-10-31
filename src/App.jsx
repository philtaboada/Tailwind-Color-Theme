import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const ThemeButtons = ({setTheme}) => {
  return (
    <div className="absolute flex right-8 top-4">
      <ThemeCircle setTheme={setTheme} value='' bg="bg-red-500" />
      <ThemeCircle bg="bg-slate-500" value='dark' setTheme={setTheme} />
      <ThemeCircle bg="bg-purple-500" value='purple' setTheme={setTheme} />
    </div>
  )
}

const ThemeCircle = (props) => {
  return <div onClick={() => props.setTheme(props.value)} className={"h-8 w-8 mr-4 last:mr-0 rounded-full cursor-pointer " + props.bg}>

  </div>
}

const App = () => {

  const [theme, setTheme] = useState("");

  return (
    <div className={theme === "dark" ? "theme-dark" : theme === "purple" ? "theme-purple" : ""}>
      <div className="font-nunito text-skin-base bg-gradient-to-r from-skin-hue h-screen w-screen selection:bg-red-500 selection:text-white ">
        <BrowserRouter>
          <NavBar />
          <ThemeButtons setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

