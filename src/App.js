import { NavLink, Route, Routes } from "react-router-dom";
import s from "./common/style.css";
import Footer from "./component/Footer/Footer";
import PaContainer from "./component/Page2/PaContainer";
import PlContainer from "./component/Page1/PlContainer";
import Test from "./component/Page1/test";


function App() {
  return (
    <div className={"Container"}>
      Hey
      <Footer/>
        <Routes>
        <Route path="/prodList" element={<PlContainer />} />
        <Route path="/prodAdd" element={<PaContainer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
