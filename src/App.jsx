import { useState } from 'react';
import questions from './data';
import Questions from './components/Questions';

const App = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(1);

  const toggleAnswer = (clickedIndex) => {
    setSelectedQuestionIndex((currentIndex) => {
      const newIndex = clickedIndex === currentIndex ? -1 : clickedIndex;
      return newIndex;
    });
  };

  return (
    <main>
      <section className='container'>
        <h2>Questions</h2>
        <Questions
          questions={questions}
          selectedIndex={selectedQuestionIndex}
          toggleAnswer={toggleAnswer}
        />
      </section>
    </main>
  );
};

export default App;
