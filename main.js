console.log("An nhô");

// biến trong javascript

var username = "Dat Zero9";
var address = "112 Cao Thắng";
// Number
var age = 21;
// Boolean
var status = true;
var status = false;
// null
var number_student = null;
// underfined
var people;
console.log(people);

var firstName = "Dat";
var lastName = "zero9";

// console.log("tên là: " + username);
// console.log("địa chỉ: " + address);
// console.log("tên là: " + username, "địa chỉ: " + address);

// Hoisting
// cơ chế hoisting của ES5 tự động tạo biến nếu chưa tạo
// var fullname;
console.log("fullname: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin: ", isLogin);

// console.log(student);
const PI = 3.14;
// PI = 3.15;

/**
 * Câu lệnh điều kiện
 * == so sánh giá trị
 * === so sánh giá trị & kiểu dữ liệu
 *
 * */

if (1 === "1") {
  console.log("DK đúng");
} else {
  console.log("DK sai");
}

// DK ? "Dung" : "Sai"

1 === "1" ? console.log("DK đúng") : console.log("DK sai");

var btA = true;
var btB = true;
btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phủ định của btA: ", !btA);

switch (5) {
  case 0:
    console.log("Đây là số 0");
    break;
  case 1:
    console.log("Đây là số 1");
    break;
  case 2:
    console.log("Đây là số 2");
    break;
  default:
    console.log("Không xác định ");
    break;
}

var list = ["Nguyen", "Tay", "Long", "Nam"];
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);

/**
 * Vòng lặp
 * */
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
// number_2 = "5";
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("Tổng là: ", total);

var total2 = number_3 + number_4;
console.log("Tổng là: ", total2);

/**
 * Hàm
 * - Hàm ko có tham số
 */
// tinhTong();
// tinhTong34();

// function tinhTong() {
//   var sum = number_1 + number_2;
//   console.log("Sum là: ", sum);
// }

// function tinhTong34() {
//   var sum = number_3 + number_4;
//   console.log("Sum là: ", sum);
// }

/**
 * Hàm có tham số
 * Hàm ko có giá trị trả về
 */

// function tinhTong(a, b) {
//   var sum = a + b;
//   console.log("sum là: ", sum);
// }

// tinhTong(number_1, number_2);
// tinhTong(number_3, number_4);
// tinhTong(number_5, number_6);
// tinhTong(50, 50);

/**
 * Hàm có giá trị trả về
 */

function tinhTong(a, b) {
  var sum = a + b;
  return sum;
}

// var total2 = tinhTong(50, 50);
console.log("Tong la: ", total2);
console.log("Tong la: ", tinhTong(50, 50) + 200);

/**
 * (Bài tập) Tính điểm trung bình: toan, ly, hoa
 * dtb = (toan + ly + hoa) / 3;
 * Xếp loại: gioi, kha, tb
 * + 9 < dtb < 10 => xuat sac
 * + 8 < dtb < 9 => gioi
 * + 7 < dtb < 8 => kha
 * + 5 < dtb < 7 => tb
 * + yeu'
 * +=> tinhDTB(), xeploai();
 */

function tinhDTB(a, b, c) {
  var dtb = (a + b + c) / 3;
  return dtb;
}
function xeploai(dtb) {
  var xeploai = "";
  if (dtb >= 9 && dtb <= 10) {
    xeploai = "xuat sac";
  }
  if (dtb >= 8 && dtb <= 9) {
    xeploai = "gioi";
  }
  if (dtb >= 7 && dtb <= 8) {
    xeploai = "kha";
  }
  if (dtb >= 5 && dtb <= 7) {
    xeploai = "tb";
  } else {
    xeploai = "yeu";
  }
  //   return xeploai;
  console.log("Dat loai: ", xeploai);
}

var dtb = tinhDTB(7, 7, 5);
xeploai(dtb);

/**
 * DOM
 */

var txtInput = document.getElementById("txtInput").value;
// console.log(txtInput.value);
console.log(txtInput);
var _pText = document.getElementById("pText").innerHTML;
console.log(_pText);

/**
 * Event
 */

// Cách 1
// function eventClick() {
//   // console.log("eventClick");
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// }

// Cách 2
// document.getElementById("btnClick").onclick = function () {
//   // console.log(123);
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// };

// Cách 3 - callback function (khi hàm là tham số, hàm này ko có tên)
document.getElementById("btnClick").addEventListener("click", function () {
  var txtValue = document.getElementById("txtInput").value;
  console.log(txtValue);
});

//
function demoClick() {
  var txtValue = document.getElementById("txtInput").value;
  console.log(txtValue);
}
document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function () {
  // console.log(123);
  document.getElementById("divContent").innerHTML = "Thay doi roi nhe!";
  document.getElementById("divContent").style.letterSpacing = "5px";
});

// Ẩn và Hiện nút
document.getElementById("btnHide").addEventListener("click", function () {
  document.getElementById("divContent").style.display = "none";
});
document.getElementById("btnShow").addEventListener("click", function () {
  document.getElementById("divContent").style.display = "block";
});

document.getElementById("btnDisable").addEventListener("click", function () {
  document.getElementById("btnNhanEmDi").disabled = true;
});

// document
//   .getElementById("btnRemoveDisable")
//   .addEventListener("click", function () {
//     document.getElementById("btnNhanEmDi").disabled = false;
//   });

document
  .getElementById("btnRemoveDisable")
  .addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");
  });

document.getElementById("btnBulbOn").addEventListener("click", function () {
  document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
});

document.getElementById("btnBulbOff").addEventListener("click", function () {
  document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
});

//
document.getElementById("btnCheck").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // console.log(username, password);

  if (username !== "cybersoft" && password !== "cybersoft") {
    // changeColor("sai ùi", red);
    changeColor2("Login that bai", "alert alert-danger");
  } else {
    // changeColor("that guy", green);
    changeColor2("that guy", "alert alert-success");
  }
});

function changeColor(mess, bg) {
  document.getElementById("txtThongBao").innerHTML = mess;
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").style.backgroundColor = bg;
  document.getElementById("txtThongBao").style.color = "white";
}

function changeColor2(mess, classes) {
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").innerHTML = mess;
  document.getElementById("txtThongBao").className = classes;
}

var tagName = document.getElementsByTagName("button")[0];

console.log(tagName);

/**
 * DOM className
 */
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);

/**
 * DOM querySeletorAll
 */
var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);

document
  .getElementById("btnTinhTienTip")
  .addEventListener("click", function () {
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtShareTip = document.getElementById("txtSoNguoi").value;
    // console.log(txtTongTien, txtPhanTramTip, txtShareTip);

    var totalTip = (txtTongTien * txtPhanTramTip) / 100 / txtShareTip;

    document.getElementById("txtThongBaoTienTip").innerHTML =
      totalTip + "$ mỗi người ";
    document.getElementById("txtThongBaoTienTip").className =
      "alert alert-danger d-block";
  });
