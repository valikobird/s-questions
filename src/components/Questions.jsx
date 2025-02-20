import Question from './Question';

const Questions = ({ questions, selectedIndex, toggleAnswer }) => {
  return (
    <div className='listContainer'>
      {questions.map((question, index) => {
        const isSelected = index === selectedIndex;
        return (
          <Question
            question={question}
            isSelected={isSelected}
            index={index}
            toggleAnswer={toggleAnswer}
            key={question.id}
          />
        );
      })}
    </div>
  );
};

export default Questions;
