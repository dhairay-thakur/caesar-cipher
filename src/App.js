import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const caesarCipher = (str, amount = 0) => {
    // Make an output variable
    var output = "";
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(90 - ((code - 65 + amount) % 26));
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(122 - ((code - 97 + amount) % 26));
        }
      }

      // Append
      output += c;
    }
    return output;
  };

  console.log(encryptedText);
  return (
    <div className="App">
      <h1>Caesar Cipher</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Plain Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="row">
        <button onClick={() => setEncryptedText(caesarCipher(text))}>
          🠗 Encrypt 🠗
        </button>
        <button onClick={() => setText(caesarCipher(encryptedText))}>
          🠕 Decrypt 🠕
        </button>
      </div>
      <textarea
        rows="10"
        cols="80"
        placeholder="Cipher Text"
        value={encryptedText}
        onChange={(e) => setEncryptedText(e.target.value)}
      />
    </div>
  );
}

export default App;
