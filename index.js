// Cách khai báo bằng var
// var t = 'cybersoft';
// t= 'cyberSoft';
// window.t = 'cyberSoft'
// //
// let title = "cybersoft";
// {
//     let title = 'cybersoft 1';
//     console.log('scope',title);
// }

// console.log(title);
// //Khác biệt
// //var: hoạt động trên tất cả các scope
// //let : hoạt động trong từng scope
// //
// const tieuDe = 'cyberSoft';
// // khai báo bằng const thì không thể gán lại 
// // var hoạt động trên tất cả scope
// //let hoạt động trên từng scope(dùng mọi ngữ cảnh)
// // const giá trị không bị gán lại(dùng cho các biến config hệ thống như domain, tên token,... hoặc function)

// // const hocVien = {ma:1, ten:'Nguyễn văn a'};
// // const không thể thay đổi vùng nhớ được, nhưng có thể thay đổi giá trị của vùng nhớ cũ
// // hocVien.ma = 2;
// // hocVien.ten ='Nguyễn văn b';
// // console.log(hocVien);
// //------------------
// // arrow function 
// // ES5: function đại diện cho hàm, phương thức, lớp đối tượng.

// var showMessage= function(mess){
//     alert(mess);
// }
// //ES6: hàm dùng arrow function
// var showMessageArr =(mess)=>{
//     alert(mess)
// } ;

// // showMessage('New');
// // showMessageArr()
// const test = function(){
//     return 'ok';
// }
// const testArr = ()=> 'ok';
// // ex 
// const apiThemHocVien = 'https://cypersoft.vn/api/themhocvien';
// const apiXoaHocVien = 'https://cypersoft.vn/api/xoahocvien';
// const getApi = (urlName)=> 'http://cybersoft.vn/api/'+urlName;
// getApi("themhocvien");
// console.log(getApi("themhocvien"));

// // Ngữ cảnh con trỏ this
// window.hoTen='Nguyễn văn b';
// let hocVien = {
//     hoTen:'Nguyễn văn a',
//     lop: 'frontEnd 39',
//     layThongTinHocVien: function(){
//         var hienThiThongTin = ()=> {
//         console.log('ho tên: '+this.hoTen)
//         console.log('lớp '+this.lop)
//         }
//         hienThiThongTin();
//     }
// };
// hocVien.layThongTinHocVien();

// // dùng từ khóa function khi là phương thức của lớp đối tượng hoặc là hàm sử lý sự kiện..
// // dùng arrowFunction sẽ trả về đúng ngữ cảnh của con trỏ this trong phương thức
// // rest params
// // function tinhTong (a,b){
// //     console.log(a,b);
// // }
// // function tinhTong(a,b,c){
// //     console.log(a,b,c);
// // }
// function tinhTong(...restparam){
//     switch(restparam.length){
//         case 2: {
//             var tong= 0;
//             for(let i=0 ;i<restparam.length; i++){
                
//                 tong += restparam[i];

//             }
//             console.log(tong);
//         };break;
//         case 3:{
//             console.log('tích 3 số '+ 3);
//         };break;
//     }
// }
// tinhTong(1,2);

// var aa= 5;
// var bb =aa;
// bb=10;
// console.log(aa);
// console.log(bb);

// var sinhVienA = {ma:1,ten:'Nguyễn văn a'};
// var sinhVienB = {...sinhVienA,lop:'cybersoft fe39'};
// sinhVienB.ten = 'Trần thị B';
// console.log(sinhVienA);
// console.log(sinhVienB);

// let sv = {ma:'SV01',
// ten:'Nguyen van a', 
// lop:'FE39',
// thongTinCaNhan:{
//     diaChi:'376 võ văn tần',
//     tuoi:19},
// xuatThongTinCaNhan: function () {
//     console.log(this)
//     console.log(this.ten);
//     console.log(this.lop);
//     console.log(this.thongTinCaNhan.diaChi);
// }};
//Khai báo thông thường theo ES5 
//lấy biến giá trị các phần tử
// let maSV = sv.ma;
// let tenSV = sv.ten;
// ES6
// let {ma,ten,thongTinCaNhan,xuatThongTinCaNhan} = sv;

// let {diaChi,tuoi} = thongTinCaNhan;
// console.log(diaChi,tuoi);
// xuatThongTinCaNhan.bind(sv)();

let hocSinh = [1,'Trần Văn B', function(){
    console.log('mã', hocSinh[0])
    console.log('Tên', hocSinh[1])
}]

hocSinh[2]()

let [maHS,tenHS,xuatThongTinHS] = hocSinh;

xuatThongTinHS();

// Tham số mặc định 
let getInfo = (ten='Ngọc', namSinh =2000, tuoi= 2020- namSinh)=> {
    console.log(ten,namSinh,tuoi+' tuổi');

}


getInfo('trần văn a',1996);


let sv = {ma:'SV01',
ten:'Nguyen van a', 
lop:'FE39',
thongTinCaNhan:{
    diaChi:'376 võ văn tần',
    tuoi:19},
xuatThongTinCaNhan: function () {
    console.log(this)
    console.log(this.ten);
    console.log(this.lop);
    console.log(this.thongTinCaNhan.diaChi);
}};

let key= "maSv";
let value ="sv001";
let lop = "FrontEnd 39";
let sinhVien = {
    [key]: value,
    lop
}
console.log(sinhVien["maSv"]);
console.log(sinhVien["lop"]);


// for : 
// for in :

 var mangSinhVien = [
     {ma:1,ten:'nguyễn a'},
     {ma:2,ten:'nguyễn b'},
     {ma:3,ten:'nguyễn c'},
     {ma:4,ten:'nguyễn d'}
 ]
// //for es5
//  for(let i = 0; i < mangSinhVien.length ;i++){
//      console.log(mangSinhVien[i]);
//  }
 //for es6 for in dùng để duyệt một mảng object
//  for (let index in mangSinhVien){
//     console.log(mangSinhVien[index]);
//  }
 // for of : mỗi lần duyệt trả về một đối tượng trong mảng.. mảng bình thường
 for( let obj of mangSinhVien){
     console.log(obj)
 }

// thể hiện mảng dưới dạng object
let objMangHocVien = {
    'fasf': {ma:1,ten:'nguyễn a'},
    'jasdjh':{ma:2,ten:'nguyễn b'},
    'ssdf':{ma:3,ten:'nguyễn c'}
}

for( let key in objMangHocVien){
    console.log(objMangHocVien[key]);
}
// hướng đối tượng: có 4 tính chất
// Khai báo lớp đối tượng:

var LopHoc = function (maLop,tenLop){
    // Khai báo thuộc tính
    this.maLop = maLop;
    this.tenLop=tenLop;
    //Khai báo phương thức
    this.XuatThongTin = function(){
        console.log(this.maLop);
        console.log(this.tenLop)
    }
}

let lop2 = new LopHoc('FE39','FrontEnd 39');
console.log(lop2);

//es6
class LopHoc_ {
    maLop;
    tenLop;
    constructor(maLop,tenLop){
        this.maLop = maLop;
        this.tenLop = tenLop;
    }
    XuatThongTin(){
        console.log(this.maLop);
        console.log(this.tenLop)
    }
}

let lop3 = new LopHoc_('fe39','frontEnd 39');

console.log(lop3)
lop3.XuatThongTin();

// Tính kế thừa
class NhanVien {
    ma;
    hoTen;
    namSinh;
    constructor(ma,hoTen,namSinh){
            
    }
}

class QuanTriVien extends NhanVien {
    constructor(ma,hoTen,namSinh,danhSachChucNang){// tối thiểu tham số của hàm cha
        super(ma,hoTen,namSinh);//Khi kế thừa có tham số bắt buộc constructor khi có hàm super
        
    }
}

var quanTriVien = new QuanTriVien(1,'Nguyễn Văn B',1990,['chucnanga']);
console.log(quanTriVien);