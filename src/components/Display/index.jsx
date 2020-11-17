import './Display.css';

function Display(props) {  
  return (   
    <button id={`display${props.Id}`}>{props.number}</button>

  );
}

export default Display;
