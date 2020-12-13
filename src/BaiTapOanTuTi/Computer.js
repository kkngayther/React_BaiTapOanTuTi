import React, { Component } from 'react';
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className="col-4">
                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <img width="180" height="180" style={{ background: 'white' }} src={this.props.computer.hinhAnh}/>
                    <img width="180" height="180" src="./img/imgOanTuTi/playerComputer.png" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.stateOanTuTi.computer,
    }
}

export default connect(mapStateToProps)(Computer);