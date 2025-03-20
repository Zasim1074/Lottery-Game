import './App.css'
import Lottery from './Lottery'
import { sum } from './tickets';

function App() {
  
  let winSum = (ticket) => {
    return (sum(ticket) === 20); 
  };

  let winCondition = (ticket) => {
    return (ticket.every((num) => num === ticket[0]));
  };

  return (
    <div className='lottery-app'>
      <Lottery num={4} winSum={winSum} winCondition={winCondition}/>
    </div>
  );
};

export default App;
