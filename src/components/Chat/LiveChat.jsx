import { useEffect, useState } from "react";
import { useSignal } from "@preact/signals-react";
import { useForm } from "react-hook-form";
import { FiMic } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import "./LiveChat.scss";
import Me from "./Me";
import Gemini from "./Gemini";

const LiveChat = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const inputData = useSignal(null);
  const isChatVisible = useSignal(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [listening, setListening] = useState(false);
  const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value;
  };

  useEffect(() => {
    let recognition = null;
    const startRecognition = () => {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";
      // recognition.lang = "ar-SA";
      // recognition.lang = "ar-EG";
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        fetchMovies(transcript);
      };

      recognition.onerror = (event) => {
        setError(`Voice recognition error: ${event.error}`);
        setListening(false);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.start();
    };

    const stopRecognition = () => {
      if (recognition) {
        recognition.stop();
      }
    };

    if (listening) {
      startRecognition();
    }

    return () => {
      stopRecognition();
    };
  }, [listening]);

  const toggleRecognition = () => {
    setListening(!listening);
  };

  const onSubmit = (data) => {
    console.log("form data", data);
    inputData.value = data.main;
    console.log("form data input", inputData.value);
  };

  return (
    <div className="my-live">
      <div id="live-chat">
        <header className="clearfix" onClick={toggleChat}>
          <h4>DineMe</h4>
        </header>

        {isChatVisible.value && (
          <div className="chat">
            <div className="chat-container">
              <Gemini />
              <Me message={inputData.value} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="d-flex align-items-center">
                <button
                  type="button"
                  className="mr-2"
                  onClick={toggleRecognition}
                >
                  <FiMic size={24} />
                </button>
                <input
                  {...register("main", {
                    // required: "Profile image is required",
                  })}
                  type="text"
                  placeholder="Message DineMe"
                  autoFocus
                  defaultValue={query}
                  className="form-control"
                />
                <button type="submit" className="btn btn-icon ml-2">
                  <AiOutlineSend size={24} />
                </button>
              </fieldset>
              {listening && (
                <p className="text-center font-weight-bold mt-2">
                  Listening...
                </p>
              )}
              {error && (
                <p className="text-center font-weight-bold mt-2">{error}</p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
