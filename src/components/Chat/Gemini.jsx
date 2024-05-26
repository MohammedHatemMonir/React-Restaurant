import DineMeLogo from "../../images/DineMeLogo.png";

export default function Gemini({text}) {
  return (
    <span className="chatter_msg_item chatter_msg_item_user">
      <div className="message-content">
        <strong className="chatter_name">Dine Me</strong>{text}
      </div>
      <div className="chatter_avatar">
        <img src={DineMeLogo} className="bg-light"/>
      </div>
    </span>
  );
}
