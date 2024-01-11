import "./App.css";
import  MyNavbar from "./Components/MyNav"
import Mytypewritter from "./Components/TypeWriting";
import Intropage from "./pages/Intropage";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SkillSection from "./pages/SkillSection";
import ProjectSection from "./pages/ProjectSection";
import Contactpage from "./pages/Contactpage";
function App() {
  return (
    <div className="App">
      
      <MyNavbar/>
      <br></br>
      {/* <Mytypewritter/> */}
      <Intropage></Intropage>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SkillSection></SkillSection>
      <ProjectSection></ProjectSection>
      <Contactpage></Contactpage>
      <footer id="footer">
      <div class="container">
        <div class="copyright">2024 © Copyright <strong><span>Atharva Khodke</span></strong>. All Rights Reserved</div>
        </div>
        </footer>


      
    </div>
  );
}

export default App;
