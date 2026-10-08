# Beatmap

Beatmap adalah aplikasi sederhana berbasis web untuk mengelola dan mengelompokkan daftar beatmap berdasarkan kategori seperti `Any`, `Stream`, dan `DT`.

Aplikasi ini dibuat dengan JavaScript vanilla dan menyimpan data di `localStorage` browser, sehingga pengguna bisa menambahkan beatmap tanpa membutuhkan backend atau database.

## Fitur

- Menambahkan beatmap baru
- Input nama beatmap, BPM, dan AR
- Pilih tipe kategori:
  - Any
  - Stream
  - DT
  - Stream & DT
- Kelompokkan beatmap berdasarkan:
  - BPM 160, 180, 190, 200
  - AR 8 / 9
- Hapus beatmap dari daftar
- Data tersimpan secara lokal di browser

## Teknologi

- HTML
- CSS
- JavaScript

## Struktur Project

```bash
Beatmap/
├── index.html
├── style.css
├── index.js
├── .gitignore
└── README.md
```

## Cara Menjalankan

Karena project ini adalah aplikasi frontend statis, kamu cukup membuka file `index.html` di browser.

### Opsi 1: Buka langsung di browser
- Buka `index.html`
- Aplikasi akan berjalan langsung

### Opsi 2: Pakai local server (opsional)
Kalau ingin menjalankan dengan server lokal, misalnya menggunakan Python:

```bash
python -m http.server 8000
```

Lalu buka:

```bash
http://localhost:8000
```

## Cara Penggunaan

1. Masukkan nama beatmap
2. Masukkan BPM
3. Masukkan AR
4. Pilih tipe kategori
5. Klik tombol `input`
6. Beatmap akan otomatis masuk ke kategori yang sesuai
7. Jika ingin menghapus, klik tombol `DELETE` pada item yang ada

## Kategori Yang Digunakan

### Any
- `ar<9`
- `ar>=9`

### Stream
- `160bpm`
- `180bpm`
- `190bpm`
- `200bpm`

### DT
- `base ar8`
- `base ar9`

## Catatan

Project ini masih bersifat front-end sederhana dan tidak menggunakan database serta autentikasi. Semua data disimpan di browser melalui `localStorage`, jadi data akan hilang jika browser dibersihkan.

## Lisensi

Project ini dibuat untuk kebutuhan pribadi dan dapat digunakan serta dikembangkan lebih lanjut sesuai kebutuhan.

## Kontribusi

Jika kamu ingin mengembangkan project ini:
1. Fork repository
2. Buat branch baru
3. Lakukan perubahan
4. Commit dan push
5. Buka Pull Request
