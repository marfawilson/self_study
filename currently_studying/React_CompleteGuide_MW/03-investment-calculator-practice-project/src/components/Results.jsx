import { calculateInvestmentResults } from '../util/investment.js';
import { formatter } from '../util/investment.js';
import UserInputs from './UserInputs.jsx';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);

    return <p>Results...</p>

    // return (
    //     <table id = 'result'>
    //         <thead>
    //             <tr>
    //             <th>Year</th>
    //                 <td>Investment Value</td>
    //                 <td>Interest (Year)</td>
    //                 <td>Total Interest</td>
    //                 <td>Invested Capital</td>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //         </tbody>
    //     </table>
    // )
}