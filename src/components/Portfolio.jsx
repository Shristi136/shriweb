import React from "react";
import portfolio from "../api/portfolio.json"
import { Link } from "react-router-dom";

 export const Portfolio=()=>{
return(
    <>
    <div className="head-container">
    <h2 className="common-heading">explore My Project</h2>
    </div>
    <ul className="section-three">
            {
                portfolio.map((curEle)=>{
                    return(
                        <li key={curEle.id}>
                            <h2>{curEle.name}</h2>
                            <div>
                                <img src={curEle.img_url} alt="project_image" className="project-img" width="100%" height="90%" />
                            </div>
                            <Link to={curEle.view_url} target="_blank">
                            <button className="btn">View Project</button>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>

    </>
)
 }