import { useSignal } from "@preact/signals-react";
import { FaPlay, FaStop } from "react-icons/fa";

export default function textToSpeech() {
  const isSpeaking = useSignal(false);
  const text = useSignal("");

  const handleSpeak = () => {
    if (isSpeaking.value) {
      window.speechSynthesis.cancel();
      isSpeaking.value = false;
    } else {
      const utterance = new SpeechSynthesisUtterance(text.value);
      utterance.onend = () => (isSpeaking.value = false);
      window.speechSynthesis.speak(utterance);
      isSpeaking.value = true;
    }
  };

  return (
    <div>
      <textarea
        value={text.value}
        onChange={(e) => (text.value = e.target.value)}
        placeholder="Enter text to read aloud"
        rows="5"
        style={{ width: "100%", padding: "10px" }}
      ></textarea>
      <button
        className="bg-transparent"
        onClick={handleSpeak}
        style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        {isSpeaking.value ? <FaStop /> : <FaPlay />}
      </button>
    </div>
  );
}
