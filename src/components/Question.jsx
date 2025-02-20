import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';

const Question = ({ question, isSelected, index, toggleAnswer }) => {
  const icon = isSelected ? (
    <FaCircleMinus className='icon' onClick={() => toggleAnswer(index)} />
  ) : (
    <FaCirclePlus className='icon' onClick={() => toggleAnswer(index)} />
  );

  return (
    <article className='singleQuestion'>
      <div className='titleContainer'>
        <p className='title'>{question.title}</p>
        {icon}
      </div>
      {isSelected && <p className='info'>{question.info}</p>}
    </article>
  );
};

export default Question;
