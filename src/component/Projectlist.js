import React from "react";
import Project from "./Project";

const Projectlist=({projects})=>{
    console.log(projects)
    return(
        <div>
            <h2 class="text-important">Projects</h2>
{projects.map(el=><Project el={el}/>)}
        </div>
    )
}
export default Projectlist