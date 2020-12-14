import React, { Component } from 'react';
import styleGame from './BaiTapDatVeXemPhim.module.css';
import {connect} from 'react-redux'

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';

            if (Number(ghe.soGhe)%1 === 0){
                return <span className={`${styleGame.rowNumber} ml-5`}>{ghe.soGhe}</span>
            }

            if (ghe.daDat){
                cssGheDaDat = `${styleGame.gheDuocChon}`;
                return <button className={`${styleGame.ghe} ${styleGame.gheDuocChon}`} key={index}>
                {ghe.soGhe}
            </button>
            }

            let ind = this.props.mangGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (ind !== -1){
                return <button className={`${styleGame.ghe} ${styleGame.gheDangChon}`} key={index} onClick={() => {
                    this.props.dispatch({
                        type: 'CHON_GHE',
                        ghe
                    })
                }}>
                {ghe.soGhe}
            </button>
            }

            return <button className={`${styleGame.ghe}`} key={index} onClick={() => {
                this.props.dispatch({
                    type: 'CHON_GHE',
                    ghe
                })
            }}>
                {ghe.soGhe}
            </button>
        })
    }
    render() {
        return (
            <div className="text-light text-left mt-2" style={{fontSize: 20}}>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mangGheDangDat: state.BaiTapDatVeXemPhimReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(HangGhe);