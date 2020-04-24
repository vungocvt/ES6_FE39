// Cách khai báo bằng var
// var t = 'cybersoft';
// t= 'cyberSoft';
// window.t = 'cyberSoft'
//
let title = "cybersoft";
{
    let title = 'cybersoft 1';
    console.log('scope',title);
}

console.log(title);
//Khác biệt
//var: hoạt động trên tất cả các scope
//let : hoạt động trong từng scope
//
const tieuDe = 'cyberSoft';
// khai báo bằng const thì không thể gán lại 
// var hoạt động trên tất cả scope
//let hoạt động trên từng scope(dùng mọi ngữ cảnh)
// const giá trị không bị gán lại(dùng cho các biến config hệ thống như domain, tên token,... hoặc function)

// const hocVien = {ma:1, ten:'Nguyễn văn a'};
// const không thể thay đổi vùng nhớ được, nhưng có thể thay đổi giá trị của vùng nhớ cũ
// hocVien.ma = 2;
// hocVien.ten ='Nguyễn văn b';
// console.log(hocVien);
//------------------
// arrow function 
// ES5: function đại diện cho hàm, phương thức, lớp đối tượng.

var showMessage= function(mess){
    alert(mess);
}
//ES6: hàm dùng arrow function
var showMessageArr =(mess)=>{
    alert(mess)
} ;

// showMessage('New');
// showMessageArr()
const test = function(){
    return 'ok';
}
const testArr = ()=> 'ok';
// ex 
const apiThemHocVien = 'https://cypersoft.vn/api/themhocvien';
const apiXoaHocVien = 'https://cypersoft.vn/api/xoahocvien';
const getApi = (urlName)=> 'http://cybersoft.vn/api/'+urlName;
getApi("themhocvien");
console.log(getApi("themhocvien"));

// Ngữ cảnh con trỏ this
window.hoTen='Nguyễn văn b';
let hocVien = {
    hoTen:'Nguyễn văn a',
    lop: 'frontEnd 39',
    layThongTinHocVien: function(){
        var hienThiThongTin = ()=> {
        console.log('ho tên: '+this.hoTen)
        console.log('lớp '+this.lop)
        }
        hienThiThongTin();
    }
};
hocVien.layThongTinHocVien();

// dùng từ khóa function khi là phương thức của lớp đối tượng hoặc là hàm sử lý sự kiện..
// dùng arrowFunction sẽ trả về đúng ngữ cảnh của con trỏ this trong phương thức
// rest params
// function tinhTong (a,b){
//     console.log(a,b);
// }
// function tinhTong(a,b,c){
//     console.log(a,b,c);
// }
function tinhTong(...restparam){
    switch(restparam.length){
        case 2: {
            var tong= 0;
            for(let i=0 ;i<restparam.length; i++){
                
                tong += restparam[i];

            }
            console.log(tong);
        };break;
        case 3:{
            console.log('tích 3 số '+ 3);
        };break;
    }
}
tinhTong(1,2);

var aa= 5;
var bb =aa;
bb=10;
console.log(aa);
console.log(bb);

var sinhVienA = {ma:1,ten:'Nguyễn văn a'};
var sinhVienB = {...sinhVienA,lop:'cybersoft fe39'};
sinhVienB.ten = 'Trần thị B';
console.log(sinhVienA);
console.log(sinhVienB);
