import "./ChatLoader.scss";

export default function ChatLoader() {
  return (
    <div className="chat-loader">
      {/* style={{ transform: "scale(1)" }} */}
      <div className="container">
        <div className="dot-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
