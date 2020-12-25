import {combineReducers, createStore} from 'redux';
import { BaiTapOanTuTiReducer } from './BaiTapOanTuTiReducer';
import {BaiTapDatVeXemPhimReducer} from './BaiTapDatVeXemPhimReducer'
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDungReducer';
import {ToDoListReducer} from './ToDoListReducer'

const rootReducer = combineReducers({
    stateOanTuTi: BaiTapOanTuTiReducer,
    BaiTapDatVeXemPhimReducer: BaiTapDatVeXemPhimReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    ToDoListReducer
})

export const store = createStore(rootReducer);