import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {Update} from './Store/Reducers/reducer1'

function App() {
  //map state to props
  const data=useSelector((state)=>{
    return state;
  })
  const dispatch=useDispatch()
const disp_data=(data)=>{
  //map dispatch to props
   // dispatch(set_data(data))
   // dispatch(fetch_data())
   dispatch(Update(data))
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
