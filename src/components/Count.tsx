
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/reducer/countReducer';

export default function Count() {
    const data :any = useSelector(state=>state);
    console.log("data",data);
    const disPatch=useDispatch();
    const increaseCount=()=>{
        disPatch(increase());
    }
    const decreaseCount=()=>{
        disPatch(decrease());
    }
    
  return (
    <div>Count
        <p>giá trị biến count :{data.count.count}</p>
        <button onClick={increaseCount}>tăng</button>
        <button onClick={decreaseCount}>giảm</button>
    </div>
  )
}
