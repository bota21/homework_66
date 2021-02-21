import "./Display.css";
import { useSelector } from 'react-redux';

const Display = () => {
    const counter = useSelector(state => state.counter);

  return (
    <div>
      <h2 className='Display'>{counter}</h2>
    </div>
  );
};

export default Display;
