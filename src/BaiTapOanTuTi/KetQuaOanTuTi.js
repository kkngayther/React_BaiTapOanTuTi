import React, { Component } from 'react';
import {connect} from 'react-redux'

class KetQuaOanTuTi extends Component {
    render() {
        return (
            <div className="col-4">
                <h1 className="text-warning display-4">{this.props.ketQua}</h1>
                <h1 className="text-success display-4 mt-4">Số bàn thắng: <span>{this.props.soBanThang}</span></h1>
                <h1 className="text-success display-4 mt-4">Số bàn chơi: <span>{this.props.soBanChoi}</span></h1>
                <button className="btn btn-success mt-4" onClick={() => {
                        this.props.dispatch({
                            type: 'RANDOM_OAN_TU_TI'
                        })
                    }}>Play Game</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.stateOanTuTi.ketQua,
        soBanThang: state.stateOanTuTi.soBanThang,
        soBanChoi: state.stateOanTuTi.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaOanTuTi);