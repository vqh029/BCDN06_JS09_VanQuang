function NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam){
    //thuộc tính
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNV = "";
    //phương thức
    this.tinhLuong = function(){
        if(this.chucVu == "Sếp")
        {
            this.tongLuong = this.luongCoBan * 3;
        }
        else if(this.chucVu == "Trưởng phòng"){
            this.tongLuong = this.luongCoBan * 2;
        }
        else{
            this.tongLuong = this.luongCoBan;
        }
    }

    this.xepLoai = function(){
        if(this.gioLam >= 192){
            this.loaiNV = "nhân viên xuất sắc";
        }
        else if(this.gioLam >= 176 ){
            this.loaiNV = "nhân viên giỏi";
        }
        else if(this.gioLam >= 160){
            this.loaiNV = "nhân viên khá";
        }
        else{
            this.loaiNV = "nhân viên trung bình";
        }
    }
}