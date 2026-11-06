const oNhapSo = document.querySelector(".o-nhap-so");
const nutDoan = document.querySelector(".nut-doan");
const thongBao = document.querySelector(".thong-bao");
const nhanLuotDoan = document.querySelector(".nhan-luot-doan");
const nutChoiLai = document.querySelector(".nut-choi-lai");
// dung querySelectorAll vi co tong cong 7 dau cham
const danhSachCham = document.querySelectorAll(".cham");
// co dinh thi dung const
const soLuotToiDa = 7;
// vi cac bien duoi thay doi lien tuc nen dung let
// Math.random() tao ra cac so tu 0.0 den 99.99 dung Math.floor
// loai bo phan thap phan di
let soBiMat = Math.floor(Math.random() * 100) + 1;
let soLuotDaDoan = 0;
// nut co dung de biet ng choi thang hay thua
let daKetThuc = false;
function xuLiDoanSo() {
  if (daKetThuc) return;
  const soNguoiChoiDoan = Number(oNhapSo.value);

  if (!oNhapSo.value || soNguoiChoiDoan < 1 || soNguoiChoiDoan > 100) {
    thongBao.textContent = "Vui lòng chỉ nhâp từ 1 đến 100!";
    thongBao.style.color = "orange";
    return;
  }
  soLuotDaDoan++;
  // To mau xanh cho cham tron tuong ung(mang tinh tu 0 nen lay soLuotDaDoan -1)
  if (soLuotDaDoan <= soLuotToiDa) {
    danhSachCham[soLuotDaDoan - 1].classList.add("da-dung");
  }
  //Cập nhập lại dòng chữ đếm lượt
  nhanLuotDoan.textContent = `Lần đoán ${soLuotDaDoan}/${soLuotToiDa}`;

  // So sanh so
  if (soNguoiChoiDoan < soBiMat) {
    thongBao.textContent = "Số quá nhỏ, thử số lớn hơn! ";
    thongBao.style.color = "red";
  } else if (soNguoiChoiDoan > soBiMat) {
    thongBao.textContent = "Số quá lớn, thử số nhỏ hơn! ";
    thongBao.style.color = "red";
  } else {
    thongBao.textContent = `Chính xác ! Bạn đã đúng ở lượt ${soLuotDaDoan}`;
    thongBao.style.color = "green";
    ketThucTroChoi();
    return;
  }
  if (soLuotDaDoan >= soLuotToiDa) {
    thongBao.textContent = `Bạn đã thua, đáp án đúng là ${soBiMat}`;
    thongBao.style.color = "red";
    ketThucTroChoi();
  }
  oNhapSo.value = "";
  oNhapSo.focus();
}
// disabled làm mờ nút kh cho nhâp nữa
function ketThucTroChoi() {
  daKetThuc = true;
  nutDoan.disabled = true;
  oNhapSo.disabled = true;
}
function choiLai() {
  // 1. Tạo lại số bí mật mới và đặt lại số lượt về 0
  soBiMat = Math.floor(Math.random() * 100) + 1;
  soLuotDaDoan = 0;
  daKetThuc = false;
  console.log("Số bí mật mới:", soBiMat);
  nutDoan.disabled = false;
  oNhapSo.disabled = false;
  oNhapSo.value = "";
  thongBao.textContent = "";
  nhanLuotDoan.textContent = `Lần đoán 0/${soLuotToiDa}`;
  danhSachCham.forEach((cham) => cham.classList.remove("da-dung"));
  oNhapSo.focus();
}
// doi nguoi dung click r chay
nutDoan.addEventListener("click", xuLiDoanSo);
nutChoiLai.addEventListener("click", choiLai);

// cho phep enter de doan so thay vi bat click chuot
oNhapSo.addEventListener("keydown", function (suKien) {
  if (suKien.key == "Enter") xuLiDoanSo();
});
