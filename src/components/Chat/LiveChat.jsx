import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import DineMeLogo from "../../images/DineMeLogo.png";
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
            <div class="chat-container">
              <span class="chatter_msg_item chatter_msg_item_admin">
                <div class="chatter_avatar">
                  <img src="https://img.lukepeters.me/avatar.jpg" />
                </div>
                <div class="message-content">
                  <strong class="chatter_name">Hema</strong>Hello!
                </div>
              </span>

              <span class="chatter_msg_item chatter_msg_item_user">
                <div class="message-content">
                  <strong class="chatter_name">Dine Me</strong>Oh hello. Who is
                  this?
                </div>
                <div class="chatter_avatar">
                  <img src={DineMeLogo} />
                </div>
              </span>
            </div>

            <form>
              <fieldset>
                <input type="text" placeholder="Massage DineMe" autoFocus />
              </fieldset>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
