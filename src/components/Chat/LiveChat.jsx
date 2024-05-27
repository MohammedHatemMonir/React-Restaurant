import { useEffect, useRef } from "react";
import { useSignal } from "@preact/signals-react";
import { useForm } from "react-hook-form";
import { FiMic } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import "./LiveChat.scss";
import Me from "./Me";
import Gemini from "./Gemini";
import { useMutation } from "react-query";
import { apiClient } from "./../../Data/apiclient";
import {useNavigate} from "react-router-dom";
import { AIMealID } from "../../Globals";

const LiveChat = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  
const navigate = useNavigate();
  const data = useSignal([{}]);
  const inputValue = useSignal("");
  const isChatVisible = useSignal(false);
  // const inputRef = useRef(null);
  const query = useSignal("");
  const error = useSignal(null);
  const listening = useSignal(false);

  if (query.value) setValue("message", query.value);

  const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value;
  };

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/SendMessageAI";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  // useForm hook function here
  const onSubmit = async (data1) => {
    if (m.isLoading) return;
    // console.log("form data", data1);
    data1.message.length === 0
      ? (inputValue.value = null)
      : (inputValue.value = data1.message);
    // inputValue.value = data1.message;
    // Add the new value to the data array
    let updatedData = [
      ...data.value,
      { message: inputValue.value, role: "user" },
    ];
    data.value = updatedData;

    const result = await m.mutateAsync({ message: inputValue.value });
    updatedData = [
      ...data.value,
      { message: result.data.response, role: "model" },
    ];
    data.value = updatedData;

    console.log("result", result.data);
    if(result.data.MealID){
      AIMealID.value = result.data.MealID;
    }

    console.log("AIMealID", AIMealID.value);
    if(result.data.redirect){
      navigate(result.data.redirect);
    }

    // Clear the input field
    reset();
  };

  useEffect(() => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }

    // Speech to text to text function here
    let recognition = null;
    const startRecognition = () => {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";
      // recognition.lang = "ar-SA";
      // recognition.lang = "ar-EG";
      recognition.onstart = () => {
        listening.value = true;
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        query.value = transcript;
      };

      recognition.onerror = (event) => {
        error.value = `Voice recognition error: ${event.error}`;
        listening.value = false;
      };

      recognition.onend = () => {
        listening.value = false;
      };

      recognition.start();
    };

    const stopRecognition = () => {
      if (recognition) {
        recognition.stop();
      }
    };

    if (listening.value) {
      startRecognition();
    }

    return () => {
      stopRecognition();
    };
  }, [listening.value]);

  const toggleRecognition = () => {
    listening.value = !listening.value;
  };

  return (
    <div className="my-live">
      <div id="live-chat">
        <header onClick={toggleChat}>
          <h4>DineMe</h4>
        </header>
        {/* {console.log("chatData", chatData)} */}

        {isChatVisible.value && (
          <div className="chat">
            <div className="chat-container">
              <Gemini text={"How can i help you today?"} />
              {data.value.map((comment, index) => {
                if (comment.role === "model") {
                  return <Gemini key={index} text={comment.message} />;
                } else if (comment.role === "user") {
                  return <Me message={comment.message} key={index} />;
                }
              })}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="d-flex align-items-center">
                <button
                  type="button"
                  className="mr-2 bg-transparent"
                  onClick={toggleRecognition}
                >
                  <FiMic size={24} />
                </button>
                <input
                  {...register("message", {
                    // required: "Profile image is required",
                  })}
                  type="text"
                  placeholder="Message DineMe"
                  defaultValue={query.value}
                  className="form-control"
                  // ref={inputRef}
                />
                <button type="submit" className="bg-transparent ml-2">
                  <AiOutlineSend size={24} />
                </button>
              </fieldset>
              {listening.value && (
                <p className="text-center font-weight-bold mt-2">
                  Listening...
                </p>
              )}
              {error.value && (
                <p className="text-center font-weight-bold mt-2">
                  {error.value}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
