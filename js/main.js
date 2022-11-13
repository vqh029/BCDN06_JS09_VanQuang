var dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}

getLocalStorage();

function hienThiTable(mang) {
    var content = "";
    mang.map(function (nv, index) {

        content += `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNV}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')" >Xóa</button>

                <button class="btn btn-success" onclick="capNhatNhanVien('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal" >Cập nhật</button>

            </td>
        </tr>`
    });
    document.querySelector("#tableDanhSach").innerHTML = content;
}

function themNhanVien() {
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    taiKhoan = taiKhoan.replace(/\s/g, "");
    var isValid = true;
    isValid &= validation.checkEmpty(taiKhoan, "Tài khoản không được để trống", "tbTKNV") &&
        validation.taiKhoanTrung(taiKhoan, "Trùng mã", "tbTKNV", dsnv.mangNV);

    isValid &= validation.checkEmpty(hoTen, "Tên nhân viên không được để trống", "tbTen") &&
        validation.checkName(hoTen, "Tên nhân viên không đúng mẫu", "tbTen");

    isValid &= validation.checkEmpty(email, "Email nhân viên không được để trống", "tbEmail") &&
        validation.checkEmail(email, "Email không đúng mẫu", "tbEmail");

    isValid &= validation.checkEmpty(matKhau, "Mật khẩu không được để trống", "tbMatKhau") &&
        validation.checkPass(matKhau, "Mật khẩu không đúng mẫu", "tbMatKhau");

    isValid &= validation.checkEmpty(ngayLam, "Ngày làm không được để trống", "tbNgay") &&
        validation.checkDate(ngayLam, "Ngày làm không đúng định dạng mm/dd/yyyy", "tbNgay");

    isValid &= validation.checkEmpty(luongCoBan, "Lương cơ bản không được để trống", "tbLuongCB") &&
        validation.checkSalary(luongCoBan, "Lương cơ bản 1.000.000-20.000.000", "tbLuongCB");

    isValid &= validation.checkRole(chucVu, "Chức vụ được chọn không đúng", "tbChucVu");

    isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") &&
        validation.checkHour(gioLam, "Giờ làm phải từ 80-200 giờ", "tbGiolam");


    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luongCoBan), chucVu, Number(gioLam));
        nv.tinhLuong();
        nv.xepLoai();
        dsnv.themNV(nv);
        document.getElementById("btnDong").click();
        document.querySelector("form").reset();
        // document.getElementById("btnCapNhat").style.display = "block";
        hienThiTable(dsnv.mangNV);
        setLocalStorage();
    }



}

function xoaNhanVien(taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    setLocalStorage();
    getLocalStorage();
}

$('#myModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    document.getElementById("tknv").disabled = false;
    document.getElementById("btnThemNV").style.display = "block";
    document.getElementById("tbTKNV").style.display = "none";
    document.getElementById("tbTen").style.display = "none";
    document.getElementById("tbEmail").style.display = "none";
    document.getElementById("tbMatKhau").style.display = "none";
    document.getElementById("tbNgay").style.display = "none";
    document.getElementById("tbLuongCB").style.display = "none";
    document.getElementById("tbChucVu").style.display = "none";
    document.getElementById("tbGiolam").style.display = "none";
})


function capNhatNhanVien(taiKhoan) {
    document.getElementById("btnThemNV").style.display = "none";
    document.getElementById("tknv").disabled = true;

    var viTri = dsnv.timViTriNV(taiKhoan);
    if (viTri > -1) {
        document.getElementById("tknv").value = dsnv.mangNV[viTri].taiKhoan;
        document.getElementById("name").value = dsnv.mangNV[viTri].hoTen;
        document.getElementById("email").value = dsnv.mangNV[viTri].email;
        document.getElementById("password").value = dsnv.mangNV[viTri].matKhau;
        document.getElementById("datepicker").value = dsnv.mangNV[viTri].ngayLam;
        document.getElementById("luongCB").value = dsnv.mangNV[viTri].luongCoBan;
        document.getElementById("chucvu").value = dsnv.mangNV[viTri].chucVu;
        document.getElementById("gioLam").value = dsnv.mangNV[viTri].gioLam;
    }

    document.getElementById("btnCapNhat").addEventListener('click', function () {
        var taiKhoan = document.getElementById("tknv").value;
        var hoTen = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var matKhau = document.getElementById("password").value;
        var ngayLam = document.getElementById("datepicker").value;
        var luongCoBan = document.getElementById("luongCB").value;
        var chucVu = document.getElementById("chucvu").value;
        var gioLam = document.getElementById("gioLam").value;

        var isValid = true;

        isValid &= validation.checkEmpty(hoTen, "Tên nhân viên không được để trống", "tbTen") &&
            validation.checkName(hoTen, "Tên nhân viên không đúng mẫu", "tbTen");

        isValid &= validation.checkEmpty(email, "Email nhân viên không được để trống", "tbEmail") &&
            validation.checkEmail(email, "Email không đúng mẫu", "tbEmail");

        isValid &= validation.checkEmpty(matKhau, "Mật khẩu không được để trống", "tbMatKhau") &&
            validation.checkPass(matKhau, "Mật khẩu không đúng mẫu", "tbMatKhau");

        isValid &= validation.checkEmpty(ngayLam, "Ngày làm không được để trống", "tbNgay") &&
            validation.checkDate(ngayLam, "Ngày làm không đúng định dạng mm/dd/yyyy", "tbNgay");

        isValid &= validation.checkEmpty(luongCoBan, "Lương cơ bản không được để trống", "tbLuongCB") &&
            validation.checkSalary(luongCoBan, "Lương cơ bản 1.000.000-20.000.000", "tbLuongCB");

        isValid &= validation.checkRole(chucVu, "Chức vụ được chọn không đúng", "tbChucVu");

        isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") &&
            validation.checkHour(gioLam, "Giờ làm phải từ 80-200 giờ", "tbGiolam");


        if (isValid) {
            var nvCapNhat = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luongCoBan), chucVu, Number(gioLam));
            nvCapNhat.tinhLuong();
            nvCapNhat.xepLoai();
            dsnv.capNhatNV(nvCapNhat);

            document.getElementById("tknv").disabled = false;
            setLocalStorage();
            getLocalStorage();
            document.getElementById("btnDong").click();
            document.getElementById("btnThemNV").style.display = "block";
        }

    })

}


function locNhanVien() {
    var inputFilter = document.getElementById("searchName");

    var nvXS = [];
    var nvG = [];
    var nvK = [];
    var nvTB = [];

    for (var i = 0; i < dsnv.mangNV.length; i++) {
        if (dsnv.mangNV[i].loaiNV == "nhân viên xuất sắc") {
            var nv = dsnv.mangNV[i];
            nvXS.push(nv);

        }
        else if (dsnv.mangNV[i].loaiNV == "nhân viên giỏi") {
            var nv = dsnv.mangNV[i];
            nvG.push(nv);

        }
        else if (dsnv.mangNV[i].loaiNV == "nhân viên khá") {
            var nv = dsnv.mangNV[i];
            nvK.push(nv);

        }
        else if (dsnv.mangNV[i].loaiNV == "nhân viên trung bình") {
            var nv = dsnv.mangNV[i];
            nvTB.push(nv);

        }
    }

    var valFilter = document.getElementById("searchName").value;
    valFilter = valFilter.toLowerCase().trim();
    if (valFilter == "xuất sắc" || valFilter == "nhân viên xuất săc") {
        hienThiTable(nvXS);
    }
    else if (valFilter == "giỏi" || valFilter == "nhân viên giỏi") {
        hienThiTable(nvG);
    }
    else if (valFilter == "khá" || valFilter == "nhân viên khá") {
        hienThiTable(nvK);
    }
    else if (valFilter == "trung bình" || valFilter == "nhân viên trung bình") {
        hienThiTable(nvTB);
    }
    else if (valFilter == ""){
        hienThiTable(dsnv.mangNV);
    }
    else{
        hienThiTable([]);
    }


}
