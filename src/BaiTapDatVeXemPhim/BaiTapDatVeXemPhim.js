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
                                <h1 className="text-warning">BÀI TẬP ĐẶT VÉ CYBERLEARN.VN</h1>
                                <div className="text-light mt-3" style={{fontSize:'20px'}}>Màn hình</div>
                                <div className="d-flex justify-content-center mt-2 ml-5" style={{flexDirection:'column'}}>
                                    <div className={`${styleGame.screen}`}></div>
                                    {this.renderHangGhe()}
                                </div>                             
                            </div>

                            <div className="col-4">
                                <h1 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h1>
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