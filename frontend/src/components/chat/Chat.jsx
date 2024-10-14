import './Chat.scss'
import { useState } from 'react'

const Chat = () =>{
    const [chat,setChat] = useState(true)

    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src='' alt=''/>
                    <span>Paul</span>
                    <p>Reply to me please</p>
                </div>

                <div className="message">
                    <img src='' alt=''/>
                    <span>John</span>
                    <p>Reply to me please</p>
                </div>

                <div className="message">
                    <img src='' alt=''/>
                    <span>John</span>
                    <p>Reply to me please</p>
                </div>

                <div className="message">
                    <img src='' alt=''/>
                    <span>John</span>
                    <p>Reply to me please</p>
                </div>

            </div>
            {chat &&(
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src='' alt=''/>
                        Alban Temdie
                    </div>
                    <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>

                    <div className="chatMessage">
                        <p>FInd and you</p>
                        <span>1 hour ago</span>
                    </div>

                    <div className="chatMessage own">
                        <p>Good bro</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Chat;