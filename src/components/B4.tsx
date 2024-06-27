

import { useDispatch, useSelector } from 'react-redux';
import { setDisplayMode } from '../store/reducer/b4';

const DataDisplaySwitch = () => {
  const dispatch = useDispatch();
  const displayMode:any = useSelector(state => state);

  const switchToGrid = () => {
    dispatch(setDisplayMode('grid'));
  };

  const switchToList = () => {
    dispatch(setDisplayMode('list'));
  };

  return (
    <div>
      <button onClick={switchToGrid} disabled={displayMode === 'grid'}>
        Grid View
      </button>
      <button onClick={switchToList} disabled={displayMode === 'list'}>
        List View
      </button>
    </div>
  );
};

export default DataDisplaySwitch;