import {combineReducers, createStore} from 'redux';
import { BaiTapOanTuTiReducer } from './BaiTapOanTuTiReducer';

const rootReducer = combineReducers({
    stateOanTuTi: BaiTapOanTuTiReducer,
})

export const store = createStore(rootReducer);