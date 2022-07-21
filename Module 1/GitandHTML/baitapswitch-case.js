// var var1 = "var1";
// let let1 = "let1";
// console.log(var1);
// console.log(let1);

// {
//     var var1 = "var2";
//     let let1 = "let2";
// }
// console.log(var1);
// console.log(let1);

// var var1 = "var3";
// let var1 = "let3";
// console.log(var1);
// console.log(let1);

// const ten = "sjdfdsjf";
// {
//     {
//         {
//             {
//                 {
//                     {
//                         var var1 = "var2";
//                         let let1 = "let2";
//                         var var1 = "var2";
//                          let1 = "let2";
//                         var var1 = "var2";
//                          let1 = "let2";
//                         console.log(let1);
//                     }
//                 }
//             }
//         }
//     }

// }
// console.log(var1);
// let c = document.querySelector(".month").value;
// let d = document.querySelector("input");
// document.getElementsByTagName("input")
// let a = document.getElementsByClassName("month");
// let b = document.getElementById("mon");
// console.log(c);
// console.log(d);
// console.log(a);
// console.log(b);

// switch (c) {
//     case 1:
//         document.querySelector("p").innerHTML = "day la thang 1";
//         break;

//     default:
//         break;
// }
let thang_1 = "1";
let thang_2 = "2";
let thang_3 = "3";
let thang_4 = "4";
let thang_5 = "5";
let thang_6 = "6";
let thang_7 = "7";
let thang_8 = "8";
let thang_9 = "9";
let thang_10 = "10";
let thang_11 = "11";
let thang_12 = "12";
function result() {
    let browser = prompt("Enter browser name!")
    let c = document.querySelector(".month").value;
    // switch (c) {
    //     case "1":
    //         document.querySelector("p").innerHTML = "day la thang 1";
    //         break;
    //     case "2":
    //         document.querySelector("p").innerHTML = "day la thang 2";
    //         break;
    //     case "3":
    //         document.querySelector("p").innerHTML = "day la thang 3";
    //         break;
    //     case "4":
    //         document.querySelector("p").innerHTML = "day la thang 4";
    //         break;
    //     case "5":
    //         document.querySelector("p").innerHTML = "day la thang 5";
    //         break;
    //     case "6":
    //         document.querySelector("p").innerHTML = "day la thang 6";
    //         break;
    //     case "7":
    //         document.querySelector("p").innerHTML = "day la thang 7";
    //         break;
    //     case "8":
    //         document.querySelector("p").innerHTML = "day la thang 8";
    //         break;
    //     case "9":
    //         document.querySelector("p").innerHTML = "day la thang 9";
    //         break;
    //     case "10":
    //         document.querySelector("p").innerHTML = "day la thang 10";
    //         break;
    //     case "11":
    //         document.querySelector("p").innerHTML = "day la thang 11";
    //         break;
    //     case "12":
    //         document.querySelector("p").innerHTML = "day la thang 12";
    //         break;
    //     default: document.querySelector("p").innerHTML = "ban hay nhap so tu 1 -12";
    //         break;
    // }
}
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
            document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày"
            break;
        case thang_4:
        case thang_6:
        case thang_9:
        case thang_11:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 30 ngày"
            break;
        case thang_2:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 28 hoặc 29 ngày"
            break;
        default:
            document.getElementById("result").innerHTML = "Vui lòng nhập lại tháng"
    }
}