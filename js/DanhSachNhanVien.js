function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timViTriNV = function(manv){
        var viTri = -1;

        viTri = this.mangNV.findIndex(function(nv){
            return manv == nv.taiKhoan
        });
        
        return viTri;
    }

    this.capNhatNV = function(nvCapNhat){
        var viTri = this.timViTriNV(nvCapNhat.taiKhoan);
        if(viTri > -1){
            //tìm thấy
            dsnv.mangNV[viTri] = nvCapNhat
        }
    }

    this.xoaNV = function(nv){
        var viTri = this.timViTriNV(nv);
        if(viTri != -1){
            this.mangNV.splice(viTri,1);
        }
    }
}