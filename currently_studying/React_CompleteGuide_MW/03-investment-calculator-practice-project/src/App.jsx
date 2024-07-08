import { useState } from 'react';
import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInputs from './components/UserInputs.jsx';

function App() {
  // managing state of user inputs with an object of initial values for each input
  // property name = input identifier
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

function handleChange(inputIdentifier, newValue) {
  // arrays/objects must be treated as immutable, so use of the spread operator
  // allows us to update values without changing the original array (just a copy)
  setUserInput((prevUserInput) => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
      };
  });
}

  return (
    <>
      <Header />
      <UserInputs userInput = {userInput} onChange = {handleChange} />
      <Results input = {userInput}/>
    </>
  )
}

export default App
