import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';

const Question = ({ question, isSelected, toggleAnswer }) => {
  const icon = isSelected ? (
    <FaCircleMinus className='icon' onClick={() => toggleAnswer(question.id)} />
  ) : (
    <FaCirclePlus className='icon' onClick={() => toggleAnswer(question.id)} />
  );

  return (
    <article className='singleQuestion'>
      <div className='titleContainer'>
        <h5 className='title'>{question.title}</h5>
        {icon}
      </div>
      {isSelected && <p className='info'>{question.info}</p>}
    </article>
  );
};

export default Question;
