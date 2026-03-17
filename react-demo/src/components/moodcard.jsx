import React from "react";

function MoodCard({ mood }) {

  return (

    <div className="mood-card">

      <h2>Your Mood Today</h2>

      <p className="big-mood">{mood.emoji}</p>

      <h3>{mood.name}</h3>

    </div>

  );
}

export default MoodCard;