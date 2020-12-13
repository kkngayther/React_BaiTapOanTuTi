import React, { Component } from 'react';
import styleGame from './BaiTapOanTuTi.module.css';
import { connect } from 'react-redux'

class Player extends Component {
    renderOanTuTi = () => {
        return this.props.selection.map((select, index) => {
            let border = {};
            if (select.datCuoc){
                border = {border: '3px solid orange'};
            }
            return <div>
                <button style={border} className="mr-3" onClick={() => {
                    this.props.dispatch({
                        type: 'CHANGE_SELECTION',
                        maCuoc: select.ma
                    });
                }} >
                    <img key={index} width="50" height="50" src={select.hinhAnh} style={{ background: 'white' }} alt={select.hinhAnh} />
                </button>
            </div>
        })
    }
    render() {
        return (
            <div className="col-4">
                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <div className={`${styleGame.think}`}>
                        <img width="180" height="180" style={{ background: 'white' }} src={this.props.selection.find(item => item.datCuoc).hinhAnh} />
                    </div>
                    <div className={`${styleGame.bubble}`}></div>
                    <img width="180" height="180" src="./img/imgOanTuTi/player.png" />
                </div>
                <div className="d-flex justify-content-center">
                    {this.renderOanTuTi()}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.stateOanTuTi.playerSelection,
    }
}

export default connect(mapStateToProps)(Player);