import { baseService } from "./baseService";

export class QuanLyNguoiDungService  extends baseService{
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
