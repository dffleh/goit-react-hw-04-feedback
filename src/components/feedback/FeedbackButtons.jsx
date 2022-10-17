import React from 'react';
import { BItem, BList, Button } from './FeedbackButtons.styled';

const FeedbackButtons = ({ buttons }) => (
  <BList>
    {buttons.map(({ id, name, quantity }) => (
      <BItem key={id}>
        <Button>{name}</Button>
        <span> : {quantity}</span>
      </BItem>
    ))}
  </BList>
);

export default FeedbackButtons;

// export class FeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           <h2>Please leave feedback</h2>
//           <ul>
//             <li>
//               <button>Good</button>
//             </li>
//             <li>
//               <button>Neutral</button>
//             </li>
//             <li>
//               <button>Bad</button>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2>Statistics</h2>
//           <ul>
//             <li>Good:</li>
//             <li>Neutral:</li>
//             <li>Bad:</li>
//             <li>Total:</li>
//             <li>Positive feedback:</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
