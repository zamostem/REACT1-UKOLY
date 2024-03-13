import React, { useState } from 'react';
import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';

export const Question = ({ text }) => {
  /* DOTAZNÍK - FAJFKA
  const [answered, setAnswered] = useState(false);

  const handleSelect = () => {
    console.log('vybráno');
    setAnswered(true);
  */

  const [answer, setAnswer] = useState('symbolQuestion');

  const handleSelect = (iconType) => {
    // console.log('kontrola');
    setAnswer(iconType);
  };

  return (
    <div className="question">
      <QuestionBody
      /* DOTAZNÍK - FAJFKA
        iconType={answered ? "symbolTick" : "symbolQuestion"} 
      */

        iconType={answer}
        text={text}
      />
      <div className="question__options">
          <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect}/>
          <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelect}/>
          <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect}/>
          <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelect}/>
          <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelect}/>
      </div>
    </div>
  );
};

