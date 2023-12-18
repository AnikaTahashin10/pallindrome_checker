import { useState, useMemo } from 'react';
import './App.css'; // Your CSS file for styling

function App() {
  const [inputText, setInputText] = useState('');
  
  const isPalindrome = useMemo(() => {
    const sanitizedInput = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedInput = sanitizedInput.split('').reverse().join('');
    return sanitizedInput === reversedInput;
  }, [inputText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        placeholder="Enter word or phrase"
        value={inputText}
        onChange={handleInputChange}
      /><br/>
      <label>{isPalindrome ? 'Palindrome!' : 'Not a palindrome'}</label>
    </div>
  );
}

export default App;
