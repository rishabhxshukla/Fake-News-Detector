import "@babel/polyfill";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Home() {
  const [news, setNews] = useState("");
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  async function handleForm(e) {
    e.preventDefault();

    const combinedText = (news + transcript).trim(); // Combine typed text with speech recognition text

    await fetch("http://localhost:8080/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ news: combinedText }),
    })
      .then((res) => console.log("Data sent!"))
      .catch((err) => console.log(err));

    // Reset transcript after form submission
    resetTranscript();
    setNews(""); // Clear the typed text input
  }

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  function startListening() {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  }

  function stopListening() {
    SpeechRecognition.stopListening();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-20 bg-[#00246B]">
      {/* CONTAINER */}
      <form
        action="/"
        method="POST"
        onSubmit={handleForm}
        className="flex flex-col items-center rounded-xl border-2 border-gray-300 bg-[#fff8e4] p-10 shadow-xl shadow-black"
      >
        {/* HEADING */}
        <h1 className="text-5xl font-semibold underline decoration-red-400 decoration-2 underline-offset-8">
          Fake News Detector
        </h1>

        {/* USER INPUT */}
        <textarea
          name="userInput"
          placeholder="Enter your news article"
          cols="80"
          rows="6"
          autoFocus
          value={news + transcript}
          onChange={(e) => setNews(e.target.value)}
          className="mt-10 resize-none rounded-xl px-5 py-3 text-xl shadow-md"
        />

        <div className="mt-10 flex w-[50%] items-center justify-between">
          {/* START BUTTON */}
          <button
            onClick={startListening}
            className="rounded-xl bg-green-500 px-8 py-2"
          >
            Start
          </button>

          {/* STOP BUTTON */}
          <button
            onClick={stopListening}
            className="rounded-xl bg-red-500 px-8 py-2"
          >
            Stop
          </button>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="rounded-xl bg-gray-900 px-8 py-2 text-white"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="text-xl text-white">Result</div>
    </div>
  );
}

export default Home;
