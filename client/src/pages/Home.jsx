function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-20 bg-[#00246B]">
      {/* CONTAINER */}
      <form
        action="/"
        method="POST"
        className="flex flex-col items-center rounded-xl border-2 border-gray-300 bg-[#fff8e4] p-10 shadow-xl shadow-black"
      >
        {/* HEADING */}
        <h1 className="text-5xl font-semibold underline decoration-red-400 decoration-2 underline-offset-8">
          Fake News Detector
        </h1>

        {/* USER INPUT */}
        <textarea
          name="userInput"
          cols="80"
          rows="6"
          autoFocus
          className="mt-10 resize-none rounded-xl px-5 py-3 text-xl shadow-md"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-7 select-none rounded-2xl bg-gray-900 px-14 py-3 text-lg font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/30"
        >
          Check
        </button>
      </form>

      <div className="text-xl text-white">Result</div>
    </div>
  );
}

export default Home;
