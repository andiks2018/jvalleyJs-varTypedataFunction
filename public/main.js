console.info("basic js - fadliselaz");
console.log("test");

// ini adalah comment

/**
 * disini kita bisa
 * membuat komnetart
 * dengan banyak baris 
 */

//variable
//deklarasi
//assignment

// KEYWORD (var, let, const) VARIABLE_NAME ;
// kita akan jarang menggunakan var nantinya
var username;
var email;
var phone;
var age;
//syrat penaman bvariable
/**
 * 1. tidak boleh diawali dengan angka
 * 2. tidak boleh menggunakan spaci
 * 3. tidak boleh menggunakan special caracter kecuali _ dan $
 * 4. tidak boleh sama dengan keyword javascript contoh var
 * 5. 
 */

// proses assignment /penugasan
username = "andiismail";
email= "andiks2018@andi";
phone = "081210431234";
age = 32;

console.info(username);
console.info(email);
console.info(phone);
console.info(age);

//namun biasanya proses declare sekaligus assignment 
var married = true; //tipe data boolean (true dan false)
var address = "Jemblongan";

console.info(married);
console.info(address);

//perbedaan var let dan const

/**VAR
 * bisa di declare kembali
 * bisa ditugaskna kembali 
 */
var secret ="ini secret saya ";
var secret = "ini bukan secrete saya ";
console.info(secret);

/**LET
 * tidak bisa di declare kembali 
 * tapi masih bisa digunkan kembali dengan value yangb berbeda
 */
let passwd = "123";
passwd = "311";
passwd = "001";
passwd = "321";

/**CONST
 * tidak bisa di declare
 * tidak bisa diisi data lain 
 * harus di declare langsung
 */

const text ="12345";
console.info(text);