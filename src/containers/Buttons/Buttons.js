import "./Buttons.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { ADD_MINUS, ADD_MULTIPLICATION, ADD_NUMBER, ADD_PLUS, ADD_DIVISION, TOTAL_SUM, DELETE_ONE, CLEAN_DISPLAY } from '../../store/actionTypes';

const Buttons = () => {
    const dispatch = useDispatch();
    const addNumber = number => {
        dispatch({type: ADD_NUMBER, value: number})
    }
    const addPlus = () => {
        dispatch({type: ADD_PLUS, value: '+'})
    }
    const addMinus = () => {
        dispatch({type: ADD_MINUS, value: '-'})
    }
    const addMultiplication = () => {
        dispatch({type: ADD_MULTIPLICATION, value: '*'})
    }
    const addDivision = () => {
        dispatch({type: ADD_DIVISION, value: '/'})
    }
    const totalSum = () => {
        dispatch({type: TOTAL_SUM})
    }
    const deleteOne = () => {
        dispatch({type: DELETE_ONE})
    }
const cleanDisplay = () => {
    dispatch({type: CLEAN_DISPLAY})
}
  return (
    <div className='Buttons'>
      <Button color='secondary' onClick={() => addNumber('7')}>7</Button>
      <Button color='secondary' onClick={() => addNumber('8')}>8</Button>
      <Button color='secondary' onClick={() => addNumber('9')}>9</Button>
      <Button color='primary' className='symbol' onClick={addPlus} >+</Button>
      <Button color='secondary' onClick={() => addNumber('4')}>4</Button>
      <Button color='secondary' onClick={() => addNumber('5')}>5</Button>
      <Button color='secondary' onClick={() => addNumber('6')}>6</Button>
      <Button color='primary' className='symbol' onClick={addMinus}>&ndash;</Button>
      <Button color='secondary' onClick={() => addNumber('3')}>3</Button>
      <Button color='secondary' onClick={() => addNumber('2')}>2</Button>
      <Button color='secondary' onClick={() => addNumber('1')}>1</Button>
      <Button color='primary' className='symbol' onClick={addMultiplication}>*</Button>
      <Button color='secondary' className='zero' onClick={() => addNumber('0')}>0</Button>
      <Button color='warning' onClick={() => addNumber('.')}>.</Button>
      <Button color='primary' className='symbol' onClick={addDivision}>/</Button>
      <Button color='danger' onClick={deleteOne}> &lt; </Button>
      <Button color='danger' className='clean' onClick={cleanDisplay}>CE</Button>
      <Button color='success' className='symbol' onClick={totalSum}>=</Button>
    </div>
  );
};

export default Buttons;
