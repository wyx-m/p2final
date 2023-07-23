import React, { useRef, useEffect, useState } from "react";
import SupportWindow from './SupportWindow';
import Avatar from "./Avatar"

function LiveChat() {
    const[visible,setVisible] =useState(false);
    const ref =useRef(null);

    useEffect(()=>{
        function handleClickOutSide(e){
            if(ref.current&&!ref.current.contains(e.target)){
                setVisible(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutSide);
        return()=>{
            document.removeEventListener("mousedown",handleClickOutSide);
            
        }

    },[ref])
    return(
        <div ref={ref}>
        <SupportWindow visible={visible} />
        
      
        <Avatar 
            onClick={() => setVisible(true)}
            
        />
    </div>
    )
}

export default LiveChat
