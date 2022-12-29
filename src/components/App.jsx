import {useState} from 'react';
import Feedback from './Feedback';
import Statistic from './Statistic';
import Section from './Section';
import Message from './Message';
import { AiOutlineCoffee } from 'react-icons/ai';
import { Container, Title } from './App.styled';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const onClick = (option) => {
    switch(option){
      case 'good': setGood(prevGood => prevGood + 1);
      break;
      case 'bad': setBad(prevBad => prevBad + 1);
      break;
      case 'neutral': setNeutral(prevNeutral => prevNeutral + 1);
      break;
      default:
      console.log('This type of button is absent.');
    }
  };


   const countTotalFeedback = () => {
     const comments = Object.values({good, neutral, bad} );
     return comments.reduce((acc, comment) => acc + comment, 0);
   };
 

  const countPositiveFeedbackPercentage = (total, good) => {
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

    const total = countTotalFeedback();
    
  return (
       <Container>
        <Title>Cafe "Expresso"</Title>
        <AiOutlineCoffee color="#45322E" fontSize="5em" />
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={onClick}
          ></Feedback>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Message message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total, good)}
            ></Statistic>
          )}
        </Section>
      </Container>)
}

