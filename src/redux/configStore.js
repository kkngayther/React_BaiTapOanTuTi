import {combineReducers, createStore} from 'redux';
import { BaiTapOanTuTiReducer } from './BaiTapOanTuTiReducer';
import {BaiTapDatVeXemPhimReducer} from './BaiTapDatVeXemPhimReducer'

const rootReducer = combineReducers({
    stateOanTuTi: BaiTapOanTuTiReducer,
    BaiTapDatVeXemPhimReducer: BaiTapDatVeXemPhimReducer
})

export const store = createStore(rootReducer);