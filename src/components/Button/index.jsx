import './Button.css';

function Button(props) {
  console.log(props)

  return (   
    
    <button 
      id={`number${props.number}`} 
      className="calc-button"
      onClick={e =>  props.click(props.number)}
      >
        {props.number}
    </button>

  );
}

export default Button;
