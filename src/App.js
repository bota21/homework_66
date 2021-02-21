import "./App.css";
import Buttons from "./containers/Buttons/Buttons";
import Display from "./containers/Display/Display";

const App = () => {
  return (
    <div className='App'>
      <Display />
      <Buttons />
    </div>
  );
};

export default App;
