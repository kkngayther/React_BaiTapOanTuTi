import React, { Component } from 'react';
import DanhSachQuanLyNguoiDung from './DanhSachQuanLyNguoiDung';
import FormDangKy from './FormDangKy';

class BaiTapQuanLyNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FormDangKy />
                <DanhSachQuanLyNguoiDung />
            </div>
        );
    }
}

export default BaiTapQuanLyNguoiDung;