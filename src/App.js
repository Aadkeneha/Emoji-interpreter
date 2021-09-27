import "./styles.css";
import React, { useState } from "react";

const dict = {
  "😆": " Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "🤗": " Hugging Face"
};

export default function App() {
  const [meaning, setmeaning] = useState("");

  function clickfun(event) {
    var input1 = event.target.value;
    var meaning = dict[input1];
    setmeaning(meaning);

    if (meaning === undefined) {
      meaning = "Sorry,it is not in our database";
      setmeaning(meaning);
    }
  }

  var emojisdb = Object.keys(dict);

  function emohandler(emoji) {
    var meaning = dict[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input
        onChange={clickfun}
        style={{ padding: "2rem", fontSize: "2rem" }}
      />
      <h2>{meaning}</h2>

      <h3> Emojis we have</h3>

      {emojisdb.map(function (emoji) {
        return (
          <span
            onClick={() => emohandler(emoji)}
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
