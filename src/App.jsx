import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { set_data } from './Store/Actions';

function App() {
  const data=useSelector((state)=>{
    return state;
  })
  const dispatch=useDispatch()
const disp_data=(data)=>{
    dispatch(set_data(data))
    //console.log("chal raha==>",data);
}
console.log("redux data==>",data);
  return (
    <div className="App">
      <h1>Redux boiler plate</h1>
      <button onClick={()=>disp_data("helloworld")}>Updation</button>
    </div>
  );
}

export default App;
