import {combineReducers, createStore} from 'redux';
import { BaiTapOanTuTiReducer } from './BaiTapOanTuTiReducer';
import {BaiTapDatVeXemPhimReducer} from './BaiTapDatVeXemPhimReducer'
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDungReducer';

const rootReducer = combineReducers({
    stateOanTuTi: BaiTapOanTuTiReducer,
    BaiTapDatVeXemPhimReducer: BaiTapDatVeXemPhimReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer
})

export const store = createStore(rootReducer);