import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AlbumCard from './albumCard';

import AddForm from './addForm';
import { useState } from 'react';
import album from './albumNav.module.css';

function AlbumNav({albumAdded}) {
    const[addPhoto,setaddPhoto]=useState(false);
    const[showCancel,setshowCancel]=useState(false);
    const[showbelow,setshowbelow]=useState(false);
    const add=()=>{
        setaddPhoto(true);
        setshowCancel(true);
        setshowbelow(true);
    }
    const cancel=()=>{
      setaddPhoto(false);
      setshowCancel(false);
      setshowbelow(false);
  }

  return (
    
    addPhoto  ?
   (

   <> 
    <AddForm />
  
         <div className={album.nav}>
         <h3 className={album.albumheading}>Your Habbits</h3>
         <button className={album.albumbutton} onClick={cancel}>{showCancel?"Cancel":"Add Habbit"}</button>
         
        </div>
    
    
    
   </>
     
    
    ) :(albumAdded?(
      <>
    
      <div className={album.nav}>
      <h3 className={album.albumheading}>Your Habbits</h3>
      <button className={album.albumbutton} onClick={add}>{showCancel?"Cancel":"Add Habbit"}</button>
     </div>
      </>
    ):(!addPhoto &&(
      <>
      <div className={album.nav}>
      <h3 className={album.albumheading}>Your Habbits</h3>
      <button className={album.albumbutton} onClick={add}>{showCancel?"Cancel":"Add Habbit"}</button>
     </div>
      </>)
    )
     
        
    )
  
 
  );
}
export default AlbumNav;
