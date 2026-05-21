import React, { useEffect, useState } from "react";
import { useProductContext } from "../../useContextHook/productAppContext";
const CounterPage = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);
    const CounterOne = () => {
        setcounterOne(counterOne + 1);
    }
    const CounterTwo = () => {
        setcounterTwo(counterTwo + 2);
    }
    useEffect(() => {
        alert("Special Offer: 30% Discount on Books!");
    }, [])
    useEffect(() => {
        alert("Buy Two: Get One Free!");
    }, [counterTwo])

    const { contextState, setcontextState} = useProductContext();
    return (
        <div className="thanks">
            <img src="https://thumbs.dreamstime.com/z/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-75367702.jpg" alt="" />
            <div className="position">
                <div className="text-center"><h1>{contextState}</h1></div>
                <h2>Special Offers</h2>
                <h1>30% Discount On Books</h1>
                <button className="btn pt-2 pb-2" onClick={CounterOne}>Add One Book {counterOne}</button>
                <button className="btn ms-3 pt-2 pb-2" onClick={CounterTwo}>Add Two Books {counterTwo}</button>
            </div>
        </div>
    );

}
export default CounterPage;

// import React, { useState } from 'react';

// function FactorialCalculator() {
//   const [number, setNumber] = useState('');
//   const [factorial, setFactorial] = useState('');
//   function calculateFactorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result = result * i;
//     }
//     return result;
//   }

//   function handleChange(e) {
//     setNumber(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     let num = Number(number);

//     if (num >= 0) { 
//       let result = calculateFactorial(num);
//       setFactorial(result); 
//     } else {
//       setFactorial("Please enter a positive number");
//     }
//   }

//   return (
//     <div className='container'>
//       <div className="text-center pt-3">
//       <h1>Factorial Calculator</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={number}
//           onChange={handleChange}
//           placeholder="Enter a number"
//           className='mt-3'
//         />
//         <div className="text-center">
//                     <button type="submit" className="btn mt-3">Submit</button>
//                 </div>
//       </form>

//       <div className="text-center pt-3 mb-5">
//       {factorial !== '' && (
//         <h2>Factorial: {factorial}</h2>
//       )}
//       </div>
//     </div>
//   );
// }

// export default FactorialCalculator;