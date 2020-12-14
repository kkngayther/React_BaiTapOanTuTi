import React, { Component } from 'react';
import styleGame from './BaiTapOanTuTi.module.css'
import OanTuTi from './OanTuTi';

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                <OanTuTi />
            </div>
        );
    }
}

export default BaiTapOanTuTi;