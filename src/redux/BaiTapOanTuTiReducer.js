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
            let playerSelectionUpdate = [...state.playerSelection];
            playerSelectionUpdate = playerSelectionUpdate.map((item, index) => {
                return {...item, datCuoc:false};
            });
            console.log(playerSelectionUpdate);
            const index = playerSelectionUpdate.findIndex(item => item.ma === action.maCuoc);
            console.log(index);
            playerSelectionUpdate[index].datCuoc = true;
            state.playerSelection = playerSelectionUpdate;
            return {...state}
        }
        case 'RANDOM_OAN_TU_TI':{
            let index = Math.floor(Math.random() * 3);
            let newComputer;
            console.log(index);
            switch(index){
                case 0:{
                    newComputer = {ma:'keo', hinhAnh: './img/imgOanTuTi/keo.png'};
                    break;
                }
                case 1:{
                    newComputer = {ma:'bua', hinhAnh: './img/imgOanTuTi/bua.png'};
                    break;
                }
                case 2:{
                    newComputer = {ma:'bao', hinhAnh: './img/imgOanTuTi/bao.png'};
                    break;
                }
            }
            state.computer = newComputer;
            state.soBanChoi += 1;

            let ind = state.playerSelection.findIndex(item => item.datCuoc === true);
            let playerDatCuoc = state.playerSelection[ind].ma;
            if ((playerDatCuoc === 'keo' && newComputer.ma === 'bao') || (playerDatCuoc === 'bua' && newComputer.ma === 'keo') || (playerDatCuoc === 'bao' && newComputer.ma === 'bua')){
                state.soBanThang += 1;
                state.ketQua = "I'm ironman, i love you 3000 !!!";
            }
            else if ((playerDatCuoc === 'keo' && newComputer.ma === 'keo') || (playerDatCuoc === 'bua' && newComputer.ma === 'bua') || (playerDatCuoc === 'bao' && newComputer.ma === 'bao')){
                state.ketQua = "Bạn hòa !!!";
            }
            else{
                state.ketQua = "Bạn thua sml!!!";
            }

            return {...state}
        }
    }
    return {...state};
}