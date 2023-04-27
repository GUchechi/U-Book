import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { userChats } from "../../api/ChatRequest";
import "./Chat.css";

const Chat = () => {
  const [chats, setChats] = useState([]);
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
          <div className="Chat-list">Conversation</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="Right-side-chat">
        <h2>Chats</h2>
      </div>
    </div>
  );
};

export default Chat;
