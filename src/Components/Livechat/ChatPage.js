import React, { useEffect, useState } from "react";
import './Chat.css'
import axios from "axios";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    useEffect(()=>{
        init();
    },[]);

    const init = () => {
    const initialMessage = {
      text: 'Hi, how can I help you?',
      sender: 'left',
    };
    setMessages([initialMessage]);
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (inputValue === '') {
      return;
    }

    addMessage(inputValue, 'right');

    try {
      const response = await axios.get(
        `https://api.monkedev.com/fun/chat?msg=${inputValue}`
      );
      const res = response.data.response;

      addMessage(res, 'left');
      setInputValue('');
      scroll();
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  };

  const scroll = () => {
    const scrollMsg = document.getElementById('msg');
    scrollMsg.scrollTop = scrollMsg.scrollHeight;
  };
    return (
        <div style={{height:'100%',width:'100%'}}>
        <div style={{borderBottom:'solid 3px'}}>
            <div className='row mt-2' >
                <div className="col-10 d-flex justify-content-center align-items-center ms-3 ps-5" >
                    <h3>Live Chat</h3>  
                </div>
                <div className="col-1 ">
                    <a href='/' style={{color:'black'}}><i class="fa-solid fa-xmark"></i></a> 
                </div>            
            </div> 
        </div>
  
        <div className="msg-area mt-2">
          <div className="ms-2 ">
            <div className="agentPic me-2"></div>
            {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === 'right' ? 'right' : 'left'
              }`}
            >
              {message.text}
            </div>
          ))}
            
        </div>
            
          </div>
          
  
        <div className="inputSection">
          <input
            type="text"
            className="userMessage"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn send" id="reply" onClick={handleSendMessage}>
            Send </button>
        </div>
      </div>
    );
  };

function ChatPage() { 
  return (
    <ChatComponent/>
    
    
  )
}

export default ChatPage
