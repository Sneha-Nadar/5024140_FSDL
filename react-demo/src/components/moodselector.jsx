import React from "react";

function MoodSelector({ setMood }) {

  const moods = ["😊", "😐", "😢", "😡", "😴"];

  return (

    <div className="mood-selector">

      <h2>Select Your Mood</h2>

      {moods.map((mood, index) => (
        <button
          key={index}
          onClick={() => setMood(mood)}
        >
          {mood}
        </button>
      ))}

    </div>

  );
}

export default MoodSelector;