/* ========================================================= */
/* PENGETAHUAN DASAR */
/* ========================================================= */

/* "let" = digunakan untuk membuat variabel(awalan variabel) */
/* "console.log()" = digunakan untuk menampilkan hasil ke-log(mem-print) */
/* "function namafungsi()" = digunakan untuk membungkus operasi yang ada didalamnya, dan bisa dikeluarkan/dipanggil dengan menyebut nama fungsinya */
/* "document.getElementById("namaID")" = digunakan untuk memanggil ID/identitas elemen html yang diberikan ID (khusus web) */
/* "document.getElementsByClassName("namaClass")" = digunakan untuk memanggil class elemen html yang diberikan class (khusus web) */

/* "+" = digunakan untuk menggabungkan variabel/data */


/* ========================================================= */
/* Web/Tampilan/Utama */
/* ========================================================= */

let count = 0

let count_ID = document.getElementById("tampilCount") /* mempersingkat kode, dengan cara memasukkannya kedalam variabel, sehingga dapat dengan mudah dipanggil tanpa harus menulis ulang kodenya */

console.log(count_ID)

let countSave = 0

function tambahAngka() {
    count = count + 1
    count_ID.innerText=count
}

function resetAngka() {
    count = count - count
    count_ID.innerText=count
}

function saveAngka() {
    countSave = count
}

countSave = countSave

function recoveryAngka() {
    count_ID.innerText=countSave
    count = countSave
}


/* ========================================================= */
/* Uji Coba & Belajar*/
/* ========================================================= */


/*let jumlah = "Ada"
let count = 7 + jumlah


console.log(count)
document.getElementById("count").innerText=count */

/* ========================================================= */

/* let myAge = 16
let humanRationDog = 7

let myDogAge = myAge * humanRationDog

console.log(myDogAge)

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints / 4
console.log(bonusPoints)

bonusPoints = bonusPoints * 3 - 5
console.log(bonusPoints) */

/* ========================================================= */

/* function testAngka() {
    console.log(34)
}

testAngka() */
/* ========================================================= */


/* Menghitung angka dengan menggunakan function, menampilkan hasilnya, dan  memanggilnya menggunakan nama fungsi */
/* let Angka1 = 24
let Angka2 = 47
let Angka3 = 15

function hitungAngka1_3() {
    let total = Angka1 + Angka2 + Angka3
    console.log(total)
}

hitungAngka1_3() */

/* ========================================================= */

/* let username = "Rio"
let message = "you have three new notifications"

/* menggabungkan beberapa variabel Dalam satu variabel, menggunakan "+" */
/* let messageToUser = username + "!! " + message
console.log(messageToUser) */

/* ========================================================= */

/* let name = "Rio"
let greeting = "Hi!, my name is "

let myGreeting = greeting + name
console.log(myGreeting) */

/* ========================================================= */

let name = "Rio"
let greeting = "Hi!, my name is "

let myGreeting = greeting + name
let Tampilkan = document.getElementById("welcome-el")

Tampilkan.innerText = myGreeting