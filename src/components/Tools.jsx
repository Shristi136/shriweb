import React from "react";
import tools from "../api/tools.json";
import tailwindConfig from "../../tailwind.config";

export const Toolsuse =()=>{
    return(
        <>
        <div className="head-container">
        <h2 className="common-heading">tools i use</h2>
        </div>
        <div className="tools-section">
                  <div className="tools-wrapper">
        {
            tools.map((curele)=>{
                return(
                    <div className="tool-item" key={curele.id}>
                     <img src={curele.image} alt="Canva Icon" />
                     <h3>{curele["tool-name"]}</h3>
                     <p className="text-3xl font-bold underline">{curele.description}</p>
                    </div>
                )

            })
        }
        </div>
        </div>
        </>

    )
}