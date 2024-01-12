// BT1
function tinhDiem() {
  const DIEMCHUAN = Number(document.querySelector('#inpDiemChuan').value);
  var chonKV = document.querySelector('#chonKV');
  var diemKV = Number(chonKV.options[chonKV.selectedIndex].value);

  if (diemKV == '') {
      diemKV = 0;
  }
  var chonDT = document.querySelector('#chonDT');
  var diemDT = Number(chonDT.options[chonDT.selectedIndex].value);

  if (diemDT == '') {
      diemDT = 0;
  }

  var diem1 = Number(document.querySelector('#diem1').value);
  var diem2 = Number(document.querySelector('#diem2').value);
  var diem3 = Number(document.querySelector('#diem3').value);
  
  var diem3Mon = diem1 + diem2 + diem3;
  var tongDiem = diem3Mon + diemKV + diemDT;

  if (tongDiem >= DIEMCHUAN) {
      document.querySelector('#kqBai1').innerHTML = 'Bạn đã đậu. Tổng điểm: ' + tongDiem;
  } else {
      document.querySelector('#kqBai1').innerHTML = 'Bạn đã rớt. Tổng điểm: ' + tongDiem;
  }
}

document.querySelector('#btnBai1').onclick = tinhDiem;

// BT2
const KW_0 = 500;
const KW_50 = 650;
const KW_100 = 850;
const KW_150 = 1100;
const TREN_KW150 = 1300;

function tinhTienDien() {
    var hoTen = document.querySelector('#hoTen').value;
    console.log(hoTen);
    var soKW = Number(document.querySelector('#soKW').value);
    console.log(soKW);

    var thanhTien = 0;
    if (0 < soKW && soKW <= 50) {
        thanhTien = soKW * KW_0;
    } else if (50 < soKW && soKW <= 100) {
        thanhTien = 50 * KW_0 + (soKW - 50) * KW_50;
    } else if (100 < soKW && soKW <= 200) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + (soKW - 100) * KW_100;
    } else if (200 < soKW && soKW <= 350) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + 100 * KW_100 + (soKW - 200) * KW_150;
    } else if (soKW > 350) {
        thanhTien = 50 * KW_0 + 50 * KW_50 + 100 * KW_100 + 150 * KW_150 + (soKW - 350) * TREN_KW150;
    }
document.querySelector('#kqBai2').innerHTML = 'Họ tên: ' + hoTen + ', Tiền điện: ' + thanhTien.toLocaleString();
}

document.querySelector('#btnBai2').onclick = tinhTienDien;

// BT3
const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUE960_PLUS = 0.35;

function tinhThue() {
    var hoTen = document.querySelector('#hoTen_b3').value;
    var thuNhapNam = Number(document.querySelector('#thuNhap_b3').value);
    var phuThuoc = Number(document.querySelector('#phuThuoc_b3').value);

    var tienThue = 0;
    if (0 < thuNhapNam && thuNhapNam <= 60000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE0_60;
    } else if (60000000 < thuNhapNam && thuNhapNam <= 120000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE60_120;
    } else if (120000000 < thuNhapNam && thuNhapNam <= 210000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE120_210;
    } else if (210000000 < thuNhapNam && thuNhapNam <= 384000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE210_384;
    } else if (384000000 < thuNhapNam && thuNhapNam <= 624000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE384_624;
    } else if (624000000 < thuNhapNam && thuNhapNam <= 960000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE624_960;
    } else if (thuNhapNam > 960000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE960_PLUS;
    }
    
    document.querySelector('#kqBai3').innerHTML = 'Họ tên: ' + hoTen +  '. Tiền thuế thu nhập cá nhân: ' + tienThue.toLocaleString() + ' VND';
}
document.querySelector('#btnBai3').onclick = tinhThue;