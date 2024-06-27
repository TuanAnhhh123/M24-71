
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../store/reducer/b3';

function B3() {
  const isDarkMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Ứng dụng thay đổi chế độ sáng tối</h1>
      <div className="toggle-container">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Chuyển sang Chế độ Sáng' : 'Chuyển sang Chế độ Tối'}
        </button>
      </div>
      <p>Đây là nội dung của ứng dụng.</p>
    </div>
  );
}

export default B3;