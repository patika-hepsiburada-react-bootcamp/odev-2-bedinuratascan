import { useState, useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';

const words = ['object', 'programming', 'boolean', 'constants', 'array', 'react', 'javascript', 'library', 'frontend', 'syntax', 'backend', 'component'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeyPress = event => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [correctLetters, wrongLetters]);

  const tryAgain = () => {
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {wrongLetters.length === 6 && <Alert message="Game Over" tryAgain={tryAgain} selectedWord={selectedWord} />}
    </div>
  );
}

export default App;
