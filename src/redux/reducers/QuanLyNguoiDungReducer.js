const stateDefault = {
    danhSachNguoiDung: [
        {
            id:1,
            taiKhoan: 'nguyenVanA',
            matKhau: 'vana',
            email: 'nguyenvana@gmail.com',
            hoTen: 'Nguyen Van A',
            soDienThoai: '0121212121',
            loaiNguoiDung: 'Khách hàng VIP'
        },
        {
            id:2,
            taiKhoan: 'nguyenVanB',
            matKhau: 'vanb',
            email: 'nguyenvanb@gmail.com',
            hoTen: 'Nguyen Van B',
            soDienThoai: '0321898989',
            loaiNguoiDung: 'Khách hàng'
        }
    ],
    nguoiDung: {
        values: {
            id:0,
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            loaiNguoiDung: 'Khách hàng'
        },
        errors: {
            id:0,
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            loaiNguoiDung: ''
        }
    },
    suaNguoiDung:{
        taiKhoan: '',
        matKhau: '',
        email: '',
        hoTen: '',
        soDienThoai: '',
        loaiNguoiDung: ''
    }
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'SET_NGUOI_DUNG':{
            state.nguoiDung = action.nguoiDung;
            return {...state};
        }
        case 'THEM_NGUOI_DUNG':{
            let dsCapNhat = [...state.danhSachNguoiDung];
            let nguoiDungCapNhat = action.nguoiDung;
            dsCapNhat.push(nguoiDungCapNhat);
            console.log(dsCapNhat);
            state.danhSachNguoiDung = dsCapNhat;
            return {...state};
        }
        case 'CHINH_SUA_NGUOI_DUNG':{
            console.log(action);
            state.suaNguoiDung = {...action.thongTin};
            let newNguoiDung = {...state.nguoiDung};
            newNguoiDung.values = {...action.thongTin};
            return {...state, nguoiDung: newNguoiDung};
        }
        case 'CAP_NHAT_NGUOI_DUNG':{
            console.log(state.suaNguoiDung);
            let danhSachNguoiDungCapNhat = [...state.danhSachNguoiDung];
            let nguoiDungUpdate = danhSachNguoiDungCapNhat.find(nd => nd.id === state.nguoiDung.values.id);

            console.log(nguoiDungUpdate);
            if (nguoiDungUpdate){
                nguoiDungUpdate.taiKhoan = state.nguoiDung.values.taiKhoan;
                nguoiDungUpdate.matKhau = state.nguoiDung.values.matKhau;
                nguoiDungUpdate.email = state.nguoiDung.values.email;
                nguoiDungUpdate.hoTen = state.nguoiDung.values.hoTen;
                nguoiDungUpdate.soDienThoai = state.nguoiDung.values.soDienThoai;
                nguoiDungUpdate.loaiNguoiDung = state.nguoiDung.values.loaiNguoiDung;
            }
            state.danhSachNguoiDung = danhSachNguoiDungCapNhat;
            return {...state};
        }
        case 'XOA_NGUOI_DUNG':{
            let danhSachNguoiDungCapNhat = [...state.danhSachNguoiDung];
            let i = 1;
            let index = danhSachNguoiDungCapNhat.findIndex(nd => nd.id === action.thongTin.id);
            danhSachNguoiDungCapNhat.splice(index, 1);
            for (let nguoiDung of danhSachNguoiDungCapNhat){
                nguoiDung.id = i++;
            }
            state.danhSachNguoiDung = danhSachNguoiDungCapNhat;
            return {...state}
        }
    }

    return {...state};
}