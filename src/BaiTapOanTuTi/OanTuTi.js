import React, { Component } from 'react';
import { connect } from 'react-redux';
import Computer from './Computer';
import KetQuaOanTuTi from './KetQuaOanTuTi';
import Player from './Player';

class OanTuTi extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-4 justify-content-center">
                    <Player />
                    <KetQuaOanTuTi />
                    <Computer />
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

export default connect(mapStateToProps)(OanTuTi);