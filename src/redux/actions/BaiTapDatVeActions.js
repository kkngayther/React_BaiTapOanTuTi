import { CHON_GHE, XOA_GHE } from "../types/BaiTapDatVeTypes"


export const datGheAction = (ghe) => {
    return {
        type: CHON_GHE,
        ghe
    }
}

export const xoaGheAction = (ghe) => {
    return {
        type: XOA_GHE,
        ghe
    }
}