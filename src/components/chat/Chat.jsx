import React, { useState } from "react";
import './chat.scss'

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messagesContainer">
        <div className="title">Messages</div>

        <div className="messages">
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="message">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <h1 className="name">John Doe</h1>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
      {chat && (
        <div className="chatContainer">
          <div className="top">
            <div className="userInfoTop">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h1 className="name">John Doe</h1>
            </div>
            <button onClick={() => setChat((prev) => !prev)} className="close">
              X
            </button>
          </div>
          <div className="middle">
            <div className="chat">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
            <div className="chat own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span className="time">1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
