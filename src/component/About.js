import React from "react";
import JohnDoe from "../images/John-Doe.jpg"
const About=({name})=>{
    return(
        <div>
<h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={JohnDoe} alt="jhon-doe" />        </div>
    )
}
export default About