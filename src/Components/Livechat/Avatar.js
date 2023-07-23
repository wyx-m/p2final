import React, { useState } from "react";

import { styles } from './styles'

const Avatar = props => {
    const lang=localStorage.getItem('lang')
    const [hovered, setHovered] = useState(false)

    return (
        <div style={{position:"fixed", bottom:"24px", right:"24px"}}>
            <div style={{
                ...styles.avatarHello,
                ...{opacity:hovered?'1':'0'}}}>
               {lang==='en'?'Chat with us':'客服'}
            </div>

            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ?  '4px solid #7a39e0' :  '1px solid #f9f0ff'}
                }}
            />
        </div>
    )
}

export default Avatar;