import React, { Component } from 'react';
import styleGame from './BaiTapOanTuTi.module.css'
import OanTuTi from './OanTuTi';

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                {/* <h1 className="text-warning display-4">I'm ironman, i love you 3000 !!!</h1> */}
                <OanTuTi />
            </div>
        );
    }
}

export default BaiTapOanTuTi;