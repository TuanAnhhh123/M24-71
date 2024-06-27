
import { useSelector, useDispatch } from 'react-redux';
import { generateRandomNumbers } from '../store/reducer/b2';

function App() {
  const numbers :any = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(generateRandomNumbers())}>
        Generate Random Numbers
      </button>
      <ul>
        {numbers.map((number:any, index:any) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;