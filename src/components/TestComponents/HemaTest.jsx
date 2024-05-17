import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import DineMeLogo from "../../images/DineMeLogo.png";
import "./HemaTest.scss";

const LiveChat = () => {
  const isChatVisible = useSignal(true);
  const isChatCounterVisible = useSignal(true);

  const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value;
    isChatCounterVisible.value = !isChatCounterVisible.value;
  };

  const closeChat = (e) => {
    e.preventDefault();
    document.getElementById("live-chat").style.display = "none";
  };

  useEffect(() => {}, []);

  return (
    <div id="live-chat">
      <header className="clearfix" onClick={toggleChat}>
        <Link className="chat-close text-decoration-none" onClick={closeChat}>
          X
        </Link>
        <h4>DineMe</h4>
        {isChatCounterVisible && (
          <span className="chat-message-counter">3</span>
        )}
      </header>

      {isChatVisible.value && (
        <div className="chat">
          <div className="chat-history">
            <div className="chat-message clearfix">
              <img src={DineMeLogo} alt="" width="32" height="32" />
              <div className="chat-message-content clearfix">
                <span className="chat-time">13:35</span>
                <h5>DineMe</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, explicabo quasi ratione odio dolorum harum.
                </p>
              </div>
            </div>
            <hr />
            <div className="chat-message clearfix">
              <img
                src="http://gravatar.com/avatar/2c0ad52fc5943b78d6abe069cc08f320?s=32"
                alt=""
                width="32"
                height="32"
              />
              <div className="chat-message-content clearfix">
                <span className="chat-time">13:37</span>
                <h5>Marco Biedermann</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, nulla accusamus magni vel debitis numquam qui
                  tempora rem voluptatem delectus!
                </p>
              </div>
            </div>
            <hr />
            <div className="chat-message clearfix">
              <img src={DineMeLogo} alt="" width="32" height="32" />
              <div className="chat-message-content clearfix">
                <span className="chat-time">13:38</span>
                <h5>DineMe</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
            </div>
            <hr />
          </div>
          {/* <p className="chat-feedback">Yazıyor..</p> */}
          <form action="#" method="post">
            <fieldset>
              <input type="text" placeholder="Massage DineMe" autoFocus />
              <input type="hidden" />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
