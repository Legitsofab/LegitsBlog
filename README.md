# Dokumentasi mini-project Legit's Blog

## Apa itu Legit's Blog ?

Legit's Blog adalah situs untuk membuat rilisan catatan berupa blog yang dapat melakukan aktivitas CRUD (Create, Read, Update, dan Delete) pada entitas blog.

### C- Create Blog
Pengguna dapat membuat/menambahkan blog baru dengan mengisi form tentang judul dan isi dari blog yang ingin dibuat.

### R - Read Blog
Pengguna dapat melihat blog apa saja yang sudah terbuat dan belum terhapus.

### U - Update Blog
Pengguna dapat mengubah status rilis dari sebuah blog. Jika status rilis dari sebuah blog adalah `true`, maka blog tersebut akan muncul pada halaman daftar blog yang sudah dirilis. Selain itu, pengguna juga dapat mengubah judul dan/atau isi dari blog jika diperlukan.

### D - Delete Blog
Pengguna dapat menghapus blog yang telah dibuat.

## Penggunaan Library

| Part  | Library |
| ------------- |:-------------:|
| Backend      | Express, Sequelize, Cors, Pg-hstore     |
| Frontend      | Next, Axios, React, Tailwindcss     |

## Cara Run project di Environment Lokal

### Requierements
- PostgreSQL Database terinstall
- Node Package Manager (NPM) terinstall

### Step
1. Pull folder project dari repository ini
2. Lakukan perintah `npm i` pada direktori masing - masing project (backend dan frontend) dan tunggu hingga selesai
3. Pada bagian backend, ubah isi file `app\config\db.config.js` sesuai dengan kredensial Database PostgreSQL yang Anda miliki.
4. Jalankan project backend dengan melakukan perintah `npm run dev` pada direktori root project backend
5. Jalankan project frontend dengan melakukan perintah `npm run build`, lalu `npm run start` pada direktori root project frontend
6. Proyek Frontend dapat dilihat melalui `http://localhost:3000`
7. Proyek Backend dapat dilihat melalui `http://localhost:8080`

## Bug
Jika terdapat Bug (minor/major) mohon disampaikan :D
