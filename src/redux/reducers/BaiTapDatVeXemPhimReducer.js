const stateDafault = {
    danhSachGheDangDat: [
        // {soGhe: "A1", gia:1000}
    ]
}

export const BaiTapDatVeXemPhimReducer = (state = stateDafault, action) => {
    switch(action.type){
        case 'CHON_GHE': {
            console.log(action.ghe)
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(item => item.soGhe === action.ghe.soGhe);
            if (index !== -1){
                danhSachGheUpdate.splice(index,1);
            }
            else{
                danhSachGheUpdate.push(action.ghe);
            }
            console.log(danhSachGheUpdate);
            state.danhSachGheDangDat = danhSachGheUpdate;
            return {...state}
        }
        case 'XOA_GHE':{
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(item => item.soGhe === action.ghe.soGhe);
            danhSachGheUpdate.splice(index,1);
            state.danhSachGheDangDat = danhSachGheUpdate;
            return {...state}
        }
    }
    return {...state};
}