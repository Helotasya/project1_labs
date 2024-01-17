// Contoh membuat OBJEK di dalam javascript
//1. Contoh OBJECT sederhana
let karyawan = {
    nip: 123,
    nama :'amir ahmad',
    alamat :'pamulang'
}

console.log('nip                :' + karyawan.nip);
console.log('nama               :' + karyawan.nama);
console.log('alamat             :' + karyawan.alamat);

//2, contoh OBJECT yg kompleks
let pegawai ={
    nip:'111',
    nama:'budi mahmud',
    alamat:{
        jalan:'jl.ayam',
        kecamatan:'meruya',
        kota: 'tangsel'
    }
}

console.log('nip                :'+ pegawai.nip);
console.log('nama               :'+ pegawai.nama);
console.log('alamat jalan       :'+ pegawai.alamat.jalan);
console.log('alamat kecamatan   :'+ pegawai.alamat.kecamatan);
console.log('alamat kota        :'+ pegawai.alamat.kota);

