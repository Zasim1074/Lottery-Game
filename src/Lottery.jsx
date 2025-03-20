import { useState } from 'react' 
import { gentckt} from './tickets'
import Ticket from './Ticket';
import './Lottery.css'

// eslint-disable-next-line react/prop-types
export default function Lottery ({num=3, winSum=15, winCondition}) {
    const [tckt, settckt] = useState(gentckt(num));
    
    let iswinning = false;
    if(winCondition(tckt) ||winSum(tckt)){
        iswinning = true;
    }

    let buytckt = () => {
        settckt(gentckt(num));
    };

    return (
        <>
            <h1><span>Lottery</span> Winning Game!</h1>
            <div className="lottery-tckt">
                <Ticket ticket={tckt} />
                <button onClick={buytckt}>Buy new Ticket</button>
                <h3>{iswinning ? ("Congratulations! you won!") : ("")}</h3>
            </div>
        </>
    );
};