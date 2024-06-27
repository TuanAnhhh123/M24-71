
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/reducer/b1';

function B1() {
  const count : any = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="B1">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default B1;