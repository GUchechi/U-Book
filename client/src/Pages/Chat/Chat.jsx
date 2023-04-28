import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { userChats } from "../../api/ChatRequest";
import Conversation from "../../components/Conversation/Conversation";
import "./Chat.css";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { user } = useSelector((state) => state.authReducer.authData);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <Link to={"../home"}>
              <UilEstate size="26.5" />
            </Link>
            <UilSetting size="26.5" />
            <img src={Noti} alt="" />
            <Link to="../chat">
              <img src={Comment} alt="" />
            </Link>
          </div>

          {/* Chat Body */}
          <ChatBox chat={currentChat} currentUser={user._id} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
