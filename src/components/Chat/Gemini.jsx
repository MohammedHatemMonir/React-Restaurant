import DineMeLogo from "../../images/DineMeLogo.png";
import { useSignal } from "@preact/signals-react";
import { FaPlay, FaStop } from "react-icons/fa";
export default function Gemini({ text }) {
  const isSpeaking = useSignal(false);

  const handleSpeak = () => {
    if (isSpeaking.value) {
      window.speechSynthesis.cancel();
      isSpeaking.value = false;
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => (isSpeaking.value = false);
      window.speechSynthesis.speak(utterance);
      isSpeaking.value = true;
    }
  };

  return (
    <span className="chatter_msg_item chatter_msg_item_user">
      <div className="message-content">
        <span className="chatter_name display-inline">Dine Me</span>
        {/* text  to speech btn */}
        <div className="display-inline">
          <button className="bg-transparent" onClick={handleSpeak} style={{}}>
            {isSpeaking.value ? <FaStop /> : <FaPlay />}
          </button>
        </div>
        {text}
      </div>
      <div className="chatter_avatar">
        <img src={DineMeLogo} className="bg-light" />
      </div>
    </span>
  );
}
