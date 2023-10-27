import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNum,decNum} from "./Actions/index";
function App() {
  const mystate = useSelector((state)=>state.changeNum)
  const dispatch= useDispatch();
  return (
    <div className="App">
      <h1>react redux</h1>
        <a title='increment' onClick={()=>dispatch(incNum(10))}>+</a>
        <input type="text" value={mystate}></input>
        <a title='decrement' onClick={()=>dispatch({type: "decrement"})}>-</a>
    </div>
  );
}

export default App;
