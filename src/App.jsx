import { useState } from 'react';
import questions from './data';
import Questions from './components/Questions';

const App = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (clickedId) => {
    setActiveId((currentActiveId) => {
      const newActiveId = clickedId === currentActiveId ? null : clickedId;
      return newActiveId;
    });
  };

  return (
    <main>
      <section className='container'>
        <h2>Questions</h2>
        <Questions
          questions={questions}
          actitveId={activeId}
          toggleAnswer={toggleAnswer}
        />
      </section>
    </main>
  );
};

export default App;
