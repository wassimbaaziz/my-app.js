
import './App.css';
import About from "./component/About"
import Nav from './component/Nav';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';


import proj1 from "./images/proj1.jpg"
import proj2 from "./images/proj2.jpg"
import proj3 from "./images/proj3.jpg"
import proj4 from "./images/proj4.jpg"
import Projectlist from './component/Projectlist';



function App() {
  const name="John Doe";
  const projects= [
    
 { picture :proj1,
  name : "project1"
  },
  {
    picture : proj2,
    name : "project2"
  },
    {
      picture : proj3,
      name : "project3"
},
      {
        picture : proj4,
        name :"poject4"
        }]

  return (
    <div className="App">
      <Nav name={name}/>
     <About name={name}/>
     <Projectlist projects={projects}/>
     
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
