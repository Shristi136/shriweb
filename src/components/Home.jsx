import React from "react";
import { Hero } from "./Herosection";
import { ProjectData } from "./Project";
import { Skill } from "./Skills";
import { Toolsuse } from "./Tools";

export const Home=()=>{
    return (
        <>
        <div className="page-container">
        <Hero/>
        <ProjectData/>
        <Skill/>
        <Toolsuse/>
        </div>
        </>
      )
}