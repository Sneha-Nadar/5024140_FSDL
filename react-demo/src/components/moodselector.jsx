import React from "react";

function MoodSelector({ setMood }) {

  const moods = [

    {emoji:"😊",name:"Happy"},
    {emoji:"😐",name:"Neutral"},
    {emoji:"😢",name:"Sad"},
    {emoji:"😡",name:"Angry"},
    {emoji:"😴",name:"Tired"},
    {emoji:"🤩",name:"Excited"},
    {emoji:"😎",name:"Confident"},
    {emoji:"😰",name:"Stressed"},
    {emoji:"🥳",name:"Celebrating"}

  ];

  return (

    <div className="mood-selector">

      <h2>Select Your Mood</h2>

      {moods.map((mood,index)=>(
        <button
        key={index}
        onClick={()=>setMood(mood)}
        >

        <span className="emoji">{mood.emoji}</span>

        <span className="label">{mood.name}</span>

        </button>
      ))}

    </div>

  );
}

export default MoodSelector;