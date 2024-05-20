import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import DineMeLogo from "../../images/DineMeLogo.png";
import { FiMic } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import "./LiveChat.scss";

const LiveChat = () => {
  const isChatVisible = useSignal(false);

  const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value;
  };

  useEffect(() => {}, []);

  return (
    <div className="my-live">
      <div id="live-chat">
        <header className="clearfix" onClick={toggleChat}>
          <h4>DineMe</h4>
        </header>

        {isChatVisible.value && (
          <div className="chat">
            <div className="chat-container">
              <span className="chatter_msg_item chatter_msg_item_admin">
                <div className="chatter_avatar">
                  <img src="https://img.lukepeters.me/avatar.jpg" />
                </div>
                <div className="message-content">
                  <strong className="chatter_name">Hema</strong>Hello!
                </div>
              </span>

              <span className="chatter_msg_item chatter_msg_item_user">
                <div className="message-content">
                  <strong className="chatter_name">Dine Me</strong>Oh hello. Who
                  is this?
                </div>
                <div className="chatter_avatar">
                  <img src={DineMeLogo} />
                </div>
              </span>
            </div>

            <form>
              <fieldset className="d-flex align-items-center">
                <button type="button" className="btn btn-icon">
                  <FiMic size={24} />
                </button>
                <input
                  type="text"
                  placeholder="Message DineMe"
                  autoFocus
                  className="form-control"
                />
                <button type="submit" className="btn btn-icon ml-2">
                  <AiOutlineSend size={24} />
                </button>
              </fieldset>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
