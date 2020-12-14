import React, { Component, Fragment } from 'react';
import styleGame from './BaiTapDatVeXemPhim.module.css';
import HangGhe from './HangGhe';
import ThongTin from './ThongTin';
import danhSachGheData from '../Data/danhSachGhe.json'

class BaiTapDatVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe}/>
            </div>
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className={`${styleGame.bgGame} ${styleGame.bookingMovie}`}>
                    <div className={`${styleGame.bgCover}`}>
                        <div className="row">


                            <div className="col-8">
                                <h1 className="text-warning display-4">BÀI TẬP ĐẶT VÉ CYBERLEARN.VN</h1>
                                <div className="text-light mt-4" style={{fontSize:'25px'}}>Màn hình</div>
                                <div className="d-flex justify-content-center mt-2" style={{flexDirection:'column'}}>
                                    <div className={`${styleGame.screen}`}></div>
                                    {this.renderHangGhe()}
                                </div>                             
                            </div>

                            <div className="col-4">
                                <h1 className="text-light display-4">DANH SÁCH GHẾ BẠN CHỌN</h1>
                                <ThongTin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapDatVeXemPhim;