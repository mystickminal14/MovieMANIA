import React, { useContext } from 'react'
import './Home.css'
import { AppContext } from '../context/context.mjs'
import Movies from './Movies'
import Search from './Search'


export default function Home() {
  const appc=useContext(AppContext)
  return (
   <>
   <div className="title">
    <h1 style={{fontFamily:'poppins', textAlign:'center', fontSize:'3.2rem'}}>Movie Mania </h1>

   </div>
   <Search/>
   <Movies/>
   </>
  )
}
