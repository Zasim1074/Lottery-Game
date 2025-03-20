import TicketNum from "./TicketNum";
import './Ticket.css'

export default function Ticket({ ticket }) {
    return (
      <div className="Ticket">
        <p>Ticket</p>
        {
          Array.isArray(ticket) ? (ticket.map((num, idx) => <TicketNum num={num} key={idx} />)) : (<p>No ticket data available</p>)
        }
      </div>
    );
  }
  
