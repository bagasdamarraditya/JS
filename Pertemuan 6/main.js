import { index, store, destroy } from "./controller.js";

const main = () => {
    // tambah 2 data baru
    store({nama: "Paulo Dybala", umur: 29, alamat: "Jl. Argentina 21", email: "dybala@mail.com", asal: "Argentina"});
    store({nama: "Sadio Mane", umur: 31, alamat: "Jl. Senegal 11", email: "mane@mail.com", asal: "Senegal"});
    
    // tampilkan daftar pemain
    index();

    // hapus data terakhir
    destroy();

    // tampilkan lagi setelah dihapus
    index();
};

main();
