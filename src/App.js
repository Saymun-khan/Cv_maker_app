import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './cvComponents/Home';
import ContactInfo from "./cvComponents/individualVite/ContactInfo";
import Education from "./cvComponents/individualVite/Education";
import HomeVite from './cvComponents/individualVite/home';
import PersonalInfo from "./cvComponents/individualVite/PersonalInfo";
import Qualification from "./cvComponents/individualVite/Qualification";
import TemplateOne from "./cvComponents/template/templateOne";
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/individualvite' element={<HomeVite />} />
          <Route path='/' element={<PersonalInfo />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route path='/education' element={<Education />} />
          <Route path='/qualification' element={<Qualification />} />
          <Route path='/templateone' element={<TemplateOne />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
