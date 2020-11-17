
import { useState } from 'react';
import './App.css';
import Button from './components/Button/index'
import Display from './components/Display'

function App() {// eslint-disable-next-line
  const [conta, setConta] = useState([])// eslint-disable-next-line
  const [resultado, setResultado] = useState(0)

  function addDigit(n) {
    setConta([...conta,n])

}


  return (
    <div className="App">
      <div className="container">
        <Display Id={1} number={conta}/>
        <Display Id={2} number={conta}/>
        <Button click={addDigit} number={7}/>
        <Button click={addDigit} number={8}/>
        <Button click={addDigit} number={9}/>
        <Button click={addDigit} number={"/"}/>
        <Button click={addDigit} number={4}/>
        <Button click={addDigit} number={5}/>
        <Button click={addDigit} number={6}/>
        <Button click={addDigit} number={"*"}/>
        <Button click={addDigit} number={1}/>
        <Button click={addDigit} number={2}/>
        <Button click={addDigit} number={3}/>
        <Button click={addDigit} number={"-"}/>
        <Button click={addDigit} number={0}/>
        <Button click={addDigit} number={'.'}/>
        <Button click={()=>{}} number={"="}/>
        <Button click={addDigit} number={"+"}/>


      </div>
    </div>
  );
}

export default App;
