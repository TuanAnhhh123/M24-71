
import Count from "./components/Count";
import Todolist from "./components/Todolist";
import B1 from "./components/B1";
import B2 from "./components/B2";
import B3 from "./components/B3";
import DataDisplaySwitch from "./components/B4";
export default function App() {
  return (
    <div>App
      {/* 
        tại sao lại dùng redux-toolkit thay thì dùng redux
        1. Đối redux khi khởi tạo store thì trong các hàm reducer thường tách ra
        các action, các hàm reducer sẽ tính toán trả về state mới dựa vào action
        truyền lên
        2. Còn đối với redux-toolkit viết code sẽ gọn hơn tại vì những action,
        reducer sẽ được viết gộp lại
        3. Khi dùng Redux thường thì muốn xử lý các tác vụ bất đồng bộ (call API,
        gọi tới server (db.json)) sẽ cài thêm thư viện redux-thunk
        4. Khi dùng Redux toolkit nó sẽ giúp sẽ xử lý được các tác vụ bất đồng bộ
        bằng cách dùng createAsyncThunk

        **************************
        1. cấu hình setup với redux-toolkit.
        2. tương tác xử lý bất đồng bộ.
      */}
      <Count></Count>
      <Todolist></Todolist>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <DataDisplaySwitch></DataDisplaySwitch>
    </div>
  )
}