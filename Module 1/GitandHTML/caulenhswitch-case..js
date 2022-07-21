function check_month() {
    let month = document.getElementById("month").value;
    switch (month) {
        case thang_1:
        case thang_3:
        case thang_5:
        case thang_7:
        case thang_8:
        case thang_10:
        case thang_12:
            document.getElementById("result").innerHTML = "Tháng " + month + " tháng này có 31 ngày"
            break;
            case thang_2:
            document.getElementById("result").innerHTML = "Tháng " + month + " tháng này có 28 hoặc 29 ngày"
            break;
        case thang_4:
        case thang_6:
        case thang_9:
        case thang_11:
            document.getElementById("result").innerHTML = "Tháng " + month + " tháng này có 30 ngày"
        s
        default:
            document.getElementById("result").innerHTML = " xin vui lòng nhập lại tháng"
    }
}