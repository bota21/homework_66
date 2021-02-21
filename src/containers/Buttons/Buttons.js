import "./Buttons.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { ADD_NUMBER } from '../../store/actionTypes';

const Buttons = () => {
    const dispatch = useDispatch();
    const addNumber = number => {
        dispatch({type: ADD_NUMBER, value: number})
    }

  return (
    <div className='Buttons'>
      <Button color='secondary' onClick={() => addNumber(7)}>7</Button>
      <Button color='secondary' onClick={() => addNumber(8)}>8</Button>
      <Button color='secondary' onClick={() => addNumber(9)}>9</Button>
      <Button color='primary'>+</Button>
      <Button color='secondary' onClick={() => addNumber(4)}>4</Button>
      <Button color='secondary' onClick={() => addNumber(5)}>5</Button>
      <Button color='secondary' onClick={() => addNumber(6)}>6</Button>
      <Button color='primary'>&ndash;</Button>
      <Button color='secondary' onClick={() => addNumber(3)}>3</Button>
      <Button color='secondary' onClick={() => addNumber(2)}>2</Button>
      <Button color='secondary' onClick={() => addNumber(1)}>1</Button>
      <Button color='primary'>*</Button>
      <Button color='danger'> &lt; </Button>
      <Button color='secondary' onClick={() => addNumber(0)}>0</Button>
      <Button color='success'>=</Button>
      <Button color='primary'>/</Button>
    </div>
  );
};

export default Buttons;
