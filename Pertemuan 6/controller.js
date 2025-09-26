import users from "./data.js";

// tampilkan semua data
const index = () => {
    console.log("=== Daftar Pemain Bola ===");
    users.map((user, i) => {
        console.log(
            `${i+1}. Nama: ${user.nama}, Umur: ${user.umur}, Asal: ${user.asal}, Alamat: ${user.alamat}, Email: ${user.email}`
        );
    });
};

// tambahkan data baru
const store = (user) => {
    users.push(user);
    console.log(`Data pemain ${user.nama} berhasil ditambahkan`);
};

// hapus data terakhir
const destroy = () => {
    let hapus = users.pop();
    console.log(`Data pemain ${hapus.nama} sudah dihapus`);
};

export { index, store, destroy };
