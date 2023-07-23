import React from "react";
import {styles} from "./styles";
import ChatPage from "./ChatPage";



const SupportWindow= props => {
    return (
        <div 
            //className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
            
        >
           <ChatPage/>
           
       
            
         
        </div>
    )
}
export default SupportWindow;