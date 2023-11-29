import { useState } from "react";

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  function palindrome() {
    //name.replace(/\s/g, '') //HimynameisFlavio
    //The \s meta character in JavaScript regular expressions matches any whitespace character: spaces, tabs, newlines and Unicode spaces. And the g flag tells JavaScript to replace it multiple times. If you miss it, it will only replace the first occurrence of the white space.
    let string = String(searchValue).toLowerCase().replace(/\s/g, '');
    let reverseString = string.split('').reverse().join('');
    if (searchValue === "") {
      return "";
    } else if (string === reverseString) {
      return "This is palindrome!"
    } else {
      return "This is not palindrome!"
    }
  }

  return (
    <>
      <div className="container">
        <div className="inputValue">
          <h1>Palindrome checker App</h1>
          <input id="search"
            type="text"
            value={searchValue}
            placeholder="Enter word or number" onChange={searchHandler} />
          <p>{palindrome()}</p>
        </div>
      </div>
    </>
  );
}

