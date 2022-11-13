function Validation() {
    this.checkEmpty = function (valInput, msgErr, spanID) {
        if (valInput.trim() == "") {
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.taiKhoanTrung = function (valInput, msgErr, spanID, mangNV) {

        var isExist = mangNV.some(nv => {

            return nv.taiKhoan === valInput;
        })

        if (isExist) {
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.taiKhoan = function (valInput, msgErr, spanID) {
        var pattern = /\d{4,6}/;
        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkName = function (valInput, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkEmail = function (valInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPass = function (valInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;;

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.checkDate = function (valInput, msgErr, spanID) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkSalary = function (valInput, msgErr, spanID) {
        if (valInput >= 1000000 && valInput <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkHour = function (valInput, msgErr, spanID) {
        if (valInput >= 80 && valInput <= 200) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkRole = function (valInput, msgErr, spanID) {
        if (valInput == "Chọn chức vụ") {
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
}