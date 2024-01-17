// let pegawai ={
//     nip:'111',
//     nama:'budi mahmud',
//     alamat:{
//         jalan:'jl.ayam',
//         kecamatan:'meruya',
//         kota: 'tangsel'
//     }
// }

let uang = parseInt(prompt('masukkan uang anda'))
let bahanBangunan = prompt ('kamu mau beli apa semen, pasir, dan batu bata')

if (bahanBangunan == "semen" && uang > 8000 ) {
    document.getElementById("body").innerHTML= 'anda mendapatkan semen'
}else if (bahanBangunan == 'pasir' && uang > 50000){
    document.getElementById("body").innerHTML= 'anda mendapatkan pasir'
}else if (bahanBangunan == 'batu bata' && uang > 30000){
    document.getElementById("body").innerHTML= 'anda mendapatkan batu bata'
}else{
    document.getElementById("body").innerHTML= 'tidak ada yg anda beli'
}





