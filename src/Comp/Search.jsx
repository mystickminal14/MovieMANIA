import React, { useState,useContext } from "react";
import "./Home.css";
import { AppContext } from "../context/context.mjs";
export default function Search() {
  const { quer, error,setQuer } = useContext(AppContext);
  const[dat,sets]=useState()
 const  value=(e)=>{
    sets(e.target.value)
  }
  const clicked=()=>{
    setQuer(dat)
  }
  return (
    <>
      <div className="search">
        <h2>Search your fav movie</h2>
        <form action='#' onSubmit={(e)=>{
          e.preventDefault()
        }}>
        <div className="bt">
         
          <input type="text"  onChange={value}/>
          <button onClick={clicked}>search</button>
        </div></form>
        <div className="iserr">
          <p>{error.show && error.msg}</p>
        </div>
      </div>
    </>
  );
}
