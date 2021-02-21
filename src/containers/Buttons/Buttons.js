import "./Buttons.css";
import { Button } from "reactstrap";

const Buttons = () => {
  
  return (
    <div className='Buttons'>
      <Button color='secondary'>7</Button>
      <Button color='secondary'>8</Button>
      <Button color='secondary'>9</Button>
      <Button color='primary'>+</Button>
      <Button color='secondary'>4</Button>
      <Button color='secondary'>5</Button>
      <Button color='secondary'>6</Button>
      <Button color='primary'>&ndash;</Button>
      <Button color='secondary'>3</Button>
      <Button color='secondary'>2</Button>
      <Button color='secondary'>1</Button>
      <Button color='primary'>*</Button>
      <Button color='danger'> &lt; </Button>
      <Button color='secondary'>0</Button>
      <Button color='success'>=</Button>
      <Button color='primary'>/</Button>
    </div>
  );
};

export default Buttons;
