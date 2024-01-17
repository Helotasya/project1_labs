// let karyawan = {
//     nip: 123,
//     nama :'amir ahmad',
//     alamat :'pamulang'
// }

// pangkat() = [{
//     jabatan : 'office boy/girl'
// },{jabatan : 'office boy/girl'
// },{jabatan : 'staff'
// },{jabatan : 'manager'
// },{jabatan : 'ceo'
// }]

let pangkat = prompt('masukin lulusan apa');

switch(pangkat){
    case'SMA':
    document.getElementById("body").innerHTML= 'kamu adalah office boy'
    break;
    case'SMK':
    document.getElementById("body").innerHTML= ' kamu adalah assistan'
    break;
    case'D3':
    document.getElementById('body').innerHTML= 'kamu adalah staff'
    break;
    case'S1':
    document.getElementById('body').innerHTML= 'kamu adalah manager'
    break;
    case'S2':
    document.getElementById('body').innerHTML= 'kamu adalah ceo'
    break;
    default:
        console.log('kamu tidak dapat masuk ke perusahaan ini')
        break;
}

// namaPendaftar () = [
//     yanto = {
//         nip: 123,
//         lulusan: 'SMA',
//         alamat :'pamulang'
//     },
//     adi = {
//         nip: 123,
//         lulusan :'S1',
//         alamat :'pamulang1'
//     },
//     nisa = {
//         nip: 123,
//         lulusan :'D3',
//         alamat :'pamulang2'
//     },
//     sifa = {
//     nip: 123,
//     lulusan :'SMK',
//     alamat :'pamulang'
// }
// ]


