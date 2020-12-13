const stateDefault = {
    ketQua: "I'm ironman, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    playerSelection: [
        {ma:'keo', hinhAnh: './img/imgOanTuTi/keo.png', datCuoc: false},
        {ma:'bua', hinhAnh: './img/imgOanTuTi/bua.png', datCuoc: true},
        {ma:'bao', hinhAnh: './img/imgOanTuTi/bao.png', datCuoc: false}
    ],

    computer: {ma:'keo', hinhAnh: './img/imgOanTuTi/keo.png'},
}

export const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHANGE_SELECTION':{   
            alert(1);
            
        }
    }
    return {...state};
}