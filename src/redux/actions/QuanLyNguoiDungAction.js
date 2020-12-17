import { THEM_NGUOI_DUNG, SET_NGUOI_DUNG, CAP_NHAT_NGUOI_DUNG, CHINH_SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../types/QuanLyNguoiDungType"



export const themNguoiDung = (nguoiDung) => {
    return {
        type: THEM_NGUOI_DUNG,
        nguoiDung
    }
}

export const setNguoiDung = (nguoiDung) => {
    return {
        type: SET_NGUOI_DUNG,
        nguoiDung
    }
}

export const capNhatNguoiDung = () => {
    return {
        type: CAP_NHAT_NGUOI_DUNG,
    }
}

export const chinhSuaNguoiDung = (thongTin) => {
    return {
        type: CHINH_SUA_NGUOI_DUNG,
        thongTin
    }
}

export const xoaNguoiDung = (thongTin) => {
    return {
        type: XOA_NGUOI_DUNG,
        thongTin
    }
}