import logo from './logo.svg';
import './App.css';
import BaiTapOanTuTi from './BaiTapOanTuTi/BaiTapOanTuTi';
import BaiTapDatVeXemPhim from './BaiTapDatVeXemPhim/BaiTapDatVeXemPhim';
import BaiTapQuanLyNguoiDung from './BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung'
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      {/* <BaiTapOanTuTi /> */}
      {/* <BaiTapDatVeXemPhim /> */}
      {/* <BaiTapQuanLyNguoiDung /> */}
      <ToDoList />
    </div>
  );
}

export default App;
