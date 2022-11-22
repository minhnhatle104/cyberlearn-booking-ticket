import {quanLyNguoiDungService} from "../../services/QuanLyNguoiDung"
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType"

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            
            if(result.data.statusCode === 200){
                console.log(result.data.content)
                dispatch({
                    type:DANG_NHAP_ACTION,
                    thongTinDangNhap:result.data.content
                })
            }
        }catch(error){
            console.log(error.response.data)
        }
    }
}