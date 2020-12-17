import React, { Component } from 'react';
import { connect } from 'react-redux'
import { chinhSuaNguoiDung, xoaNguoiDung } from '../redux/actions/QuanLyNguoiDungAction';

class DanhSachQuanLyNguoiDung extends Component {
    renderNguoiDung = () => {
        return this.props.danhSachNguoiDung.map((thongTin, index) => (
            <tr key={index }>
                <td>{thongTin.id}</td>
                <td>{thongTin.taiKhoan}</td>
                <td>{thongTin.hoTen}</td>
                <td>{thongTin.matKhau}</td>
                <td>{thongTin.email}</td>
                <td>{thongTin.soDienThoai}</td>
                <td>{thongTin.loaiNguoiDung}</td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() =>
                        this.props.dispatch(chinhSuaNguoiDung(thongTin))
                    }>Chỉnh sửa</button>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.dispatch(xoaNguoiDung(thongTin))
                    }}>Xóa</button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <div>
                <div className="bg-dark text-white p-2 text-left">
                    <h1>Danh sách người dùng</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderNguoiDung()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachNguoiDung: state.QuanLyNguoiDungReducer.danhSachNguoiDung
    }
}

export default connect(mapStateToProps)(DanhSachQuanLyNguoiDung);