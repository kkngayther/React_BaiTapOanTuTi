import React, { Component } from 'react';
import {connect} from 'react-redux';
import { themNguoiDung, capNhatNguoiDung } from '../redux/actions/QuanLyNguoiDungAction';

class FormDangKy extends Component {
    handleChangeInput = (event) => {
        let {value, name} = event.target;
        let typeInput = event.target.getAttribute('typeInput');

        const newValues = {...this.props.nguoiDung.values};
        newValues[name] = value;

        const newErrors = {...this.props.nguoiDung.errors};
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !!!' : '';

        if (typeInput === 'phone'){
            const regexPhone = /^[0-9]+$/;
            if (!regexPhone.test(value)){
                newErrors[name] = name + ' không đúng định dạng !!!';
            }
        }
        if (typeInput === 'email'){
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)){
                newErrors[name] = name + ' không đúng định dạng !!!';
            }
        }

        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.props.nguoiDung.values);
        })

        this.props.dispatch({
            type: 'SET_NGUOI_DUNG',
            nguoiDung: {
                values: newValues,
                errors: newErrors
            }
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;

        this.props.nguoiDung.values.id = this.props.danhSachNguoiDung.length + 1;
        console.log(this.props.nguoiDung.values.id);

        for (let key in this.props.nguoiDung.values){
            if (key !== 'id' && this.props.nguoiDung.values[key].trim() === ''){
                valid = false;
            }
        }

        for (let key in this.props.nguoiDung.errors){
            if (key !== 'id' && this.props.nguoiDung.errors[key].trim() !== ''){
                valid = false;
            }
        }

        if (!valid){
            alert('Dữ liệu không hợp lệ !!!');
            return;
        }

        this.props.dispatch(themNguoiDung(this.props.nguoiDung.values));
    }
    render() {
        let {taiKhoan, matKhau, email, hoTen, soDienThoai, loaiNguoiDung} = this.props.nguoiDung.values;
        return (
            <form className="text-left" onSubmit={this.handleSubmit}>
                <div className="bg-dark text-white p-2">
                    <h1>Form đăng ký</h1>
                </div>
                <div className="row text-left">
                    <div className="col-6">
                        <div className="form-group">
                            <h3>Tài khoản</h3>
                            <input type="text" className="form-control" onChange={this.handleChangeInput} name="taiKhoan" value={taiKhoan} />
                            <p className="text text-danger">{this.props.nguoiDung.errors.taiKhoan}</p>
                        </div>
                        <div className="form-group">
                            <h3>Mật khẩu</h3>
                            <input type="text" className="form-control" onChange={this.handleChangeInput} name="matKhau" value={matKhau} />
                            <p className="text text-danger">{this.props.nguoiDung.errors.matKhau}</p>
                        </div>
                        <div className="form-group">
                            <h3>Email</h3>
                            <input typeInput="email" type="text" className="form-control" onChange={this.handleChangeInput} name="email" value={email} />
                            <p className="text text-danger">{this.props.nguoiDung.errors.email}</p>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <h3>Họ tên</h3>
                            <input type="text" className="form-control" onChange={this.handleChangeInput} name="hoTen" value={hoTen} />
                            <p className="text text-danger">{this.props.nguoiDung.errors.hoTen}</p>
                        </div>
                        <div className="form-group">
                            <h3>Số điện thoại</h3>
                            <input typeInput="phone" type="text" className="form-control" onChange={this.handleChangeInput} name="soDienThoai" value={soDienThoai} />
                            <p className="text text-danger">{this.props.nguoiDung.errors.soDienThoai}</p>
                        </div>
                        <div className="form-group">
                            <h3>Loại người dùng</h3>
                            <select class="form-control" name="loaiNguoiDung" onChange={this.handleChangeInput} value={loaiNguoiDung}>
                                <option value="Khách hàng">Khách hàng</option>
                                <option value="Khách hàng VIP">Khách hàng VIP</option>
                                <option value="Khách hàng VVIP">Khách hàng VVIP</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-left mb-3">
                    <button className="btn btn-success mr-2" type="submit"> Đăng ký</button>
                    <button className="btn btn-primary" type="button" onClick={() => {
                        this.props.dispatch(capNhatNguoiDung())
                    }}>Cập nhật</button>
                </div>
            </form>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        nguoiDung: state.QuanLyNguoiDungReducer.nguoiDung,
        danhSachNguoiDung: state.QuanLyNguoiDungReducer.danhSachNguoiDung
    }
}

export default connect(mapStateToProps)(FormDangKy);