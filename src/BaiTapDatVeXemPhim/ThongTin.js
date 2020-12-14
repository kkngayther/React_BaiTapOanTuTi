import React, { Component } from 'react';
import styleGame from './BaiTapDatVeXemPhim.module.css';
import {connect} from 'react-redux'

class ThongTin extends Component {
    renderDanhSachGheDanhChon = () => {
        return this.props.dsGheDangDat.map((ghe, index) => {
            return <tr>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.dispatch({
                        type:'XOA_GHE',
                        ghe
                    })
                }}>Hủy</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div className="text-left">
                    <button className={`${styleGame.gheDuocChon}`}></button>
                    <span className="text-light ml-3" style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className={`${styleGame.gheDangChon}`}></button>
                    <span className="text-light ml-3" style={{ fontSize: '30px' }}>Ghế đang chọn</span>
                    <br />
                    <button className={`${styleGame.ghe}`} style={{ margin: '0' }}></button>
                    <span className="text-light ml-3" style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
                </div>
                <div className="mt-5">
                    <table className="table text-light" border={2}>
                        <thead>
                            <tr style={{fontSize:'25px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSachGheDanhChon()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Tổng tiền</td>
                                <td className="text-warning">{
                                    this.props.dsGheDangDat.reduce((tongTien, ghe, index) => {
                                        return tongTien += ghe.gia;
                                    }, 0)
                                }</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dsGheDangDat: state.BaiTapDatVeXemPhimReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTin);