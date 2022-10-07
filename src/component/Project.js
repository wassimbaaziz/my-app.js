import React from "react";
import proj1 from "../images/proj1.jpg" ;
import proj2 from "../images/proj2.jpg" ;
import proj3 from "../images/proj3.jpg" ;
import proj4 from "../images/proj4.jpg" ;

const Project=({el})=>{
    return(
        <div>

      <div class="projects-container">
        <div class="project-card">
          <img src={el.picture} alt="project" />
          <h3>{el.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        </div>       </div>
    )
}
export default Project