import Question from './Question';

const Questions = ({ questions, actitveId, toggleAnswer }) => {
  return (
    <div className='listContainer'>
      {questions.map((question) => {
        const isSelected = question.id === actitveId;
        return (
          <Question
            question={question}
            isSelected={isSelected}
            toggleAnswer={toggleAnswer}
            key={question.id}
          />
        );
      })}
    </div>
  );
};

export default Questions;
