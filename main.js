// if-1 

// let Son = 5;

// if (Son > 0) {
//     Son += 1;
// } else {
//     Son -= 2;
// }

// console.log(Son);



// if-2

// let son1 = 5;
// let son2 = -3;
// let son3 = 8;

// let musbatSonlar = 0;
// let manfiySonlar = 0;

// // Birinchi sonni tekshirish
// if (son1 > 0) {
//     musbatSonlar++;
// } else if (son1 < 0) {
//     manfiySonlar++;
// }

// // Ikkinchi sonni tekshirish
// if (son2 > 0) {
//     musbatSonlar++;
// } else if (son2 < 0) {
//     manfiySonlar++;
// }

// // Uchinchi sonni tekshirish
// if (son3 > 0) {
//     musbatSonlar++;
// } else if (son3 < 0) {
//     manfiySonlar++;
// }

// // Natijalarni ekranga chiqarish
// console.log("Musbat sonlar soni: " + musbatSonlar);
// console.log("Manfiy sonlar soni: " + manfiySonlar);




// if-3

// let son1 = 5;
// let son2 = -3;
// let son3 = 8;

// let musbatSonlarSoni = 0;

// // Birinchi sonni tekshirish
// if (son1 > 0) {
//     musbatSonlarSoni++;
// }

// // Ikkinchi sonni tekshirish
// if (son2 > 0) {
//     musbatSonlarSoni++;
// }

// // Uchinchi sonni tekshirish
// if (son3 > 0) {
//     musbatSonlarSoni++;
// }

// // Natijani ekranga chiqarish
// console.log("Musbat sonlar soni: " + musbatSonlarSoni);



// if-4

// let son1 = 5;
// let son2 = 8;

// let kattaSon;

// if (son1 > son2) {
//     kattaSon = son1;
// } else {
//     kattaSon = son2;
// }

// console.log("Katta son: " + kattaSon);




// if-5

// let son1 = 5;
// let son2 = 8;

// let kichikSon;

// if (son1 < son2) {
//     kichikSon = son1;
// } else {
//     kichikSon = son2;
// }

// console.log("Kichik son: " + kichikSon);



// if-6

// let son1 = 20;
// let son2 = 10;

// let kattaSon;
// let kichikSon;

// if (son1 > son2) {
//     kattaSon = son1;
//     kichikSon = son2;
// } else {
//     kattaSon = son2;
//     kichikSon = son1;
// }

// console.log("katta son: " + kattaSon);
// console.log("kichik son: " + kichikSon);



// if-7

// let A = 14;
// let B = 18;

// let kattaSon;
// let kichikSon;

// if (A > B) {
//     kattaSon = A;
//     kichikSon = B;
// } else {
//     kattaSon = B;
//     kichikSon = A;
// }

// console.log("B katta son: " + kattaSon);
// console.log("A kichik son: " + kichikSon);




// if-10

// let A = 10;
// let B = 5;
// let C = 20;

// let kichikSon = A;

// if (B < kichikSon) {
//     kichikSon = B;
// }

// if (C < kichikSon) {
//     kichikSon = C;
// }

// console.log("sonlaring kichigi: " + kichikSon);



// if-11

// let A = 15;
// let B = 5;
// let C = 18;

// let oratachaSon;

// if (A >= B && A <= C) {
//     oratachaSon = A;
// } else if (B >= A && B <= C) {
//     oratachaSon = B;
// } else {
//     oratachaSon = C;
// }

// console.log("Uchta sonlarning o'ratachasi: " + oratachaSon);




// if-12

// let son1 = 7;
// let son2 = 3;
// let son3 = 9;

// let yigindi = son1 + son2 + son3;

// let kattaSon1 = son1 >= son2 && son1 >= son3 ? son1 : (son2 >= son1 && son2 >= son3 ? son2 : son3);
// let kattaSon2 = yigindi - kattaSon1;

// console.log("Eng katta bo'ladigan ikkita son: " + kattaSon1 + " va " + kattaSon2);




// if-15

// let son1 = 7;
// let son2 = 5;
// let son3 = 7;
// let son4 = 7;

// if (son1 === son2 && son1 === son3) {
//     console.log("Uchtasi o'zaro teng sonlar: " + son1 + ", " + son2 + ", " + son3);
    
//     let qolganSon;
//     if (son1 === son4) {
//         qolganSon = son2;
//     } else if (son2 === son4) {
//         qolganSon = son1;
//     } else {
//         qolganSon = son4;
//     }

//     console.log("Qolgan son (tartib raqami): " + qolganSon);
// } else {
//     console.log("Uchtasi o'zaro teng bo'lmagan sonlar: " + son1 + ", " + son2 + ", " + son3 + ", " + son4);
// }



// if-16

// function hisoblaFunksiya(x) {
//     if (x <= 0) {
//         return -x;
//     } else if (x > 0 && x < 2) {
//         return x * x;
//     } else { // x ≥ 2
//         return 4;
//     }
// }

// let x = 1.5;
// let natija = hisoblaFunksiya(x);
// console.log("Natija:", natija);



// if-18

// function tahlilEtSon(son) {
//     let xonalarSoni = son.toString().length;

//     let juftYokiToq = son % 2 === 0 ? "juft" : "toq";

//     console.log(`${son} son: ${xonalarSoni} xonali ${juftYokiToq} son`);
// }

// let berilganSon = 753;
// tahlilEtSon(berilganSon);



// case-1

// function bahoNatijasi(k) {
//     if (k >= 1 && k <= 5) {
//         let baho;
//         switch (k) {
//             case 1:
//                 baho = "yomon";
//                 break;
//             case 2:
//                 baho = "qoniqarsiz";
//                 break;
//             case 3:
//                 baho = "qoniqarli";
//                 break;
//             case 4:
//                 baho = "yahshi";
//                 break;
//             case 5:
//                 baho = "a'lo";
//                 break;
//         }
//         console.log(`Natija: ${baho}`);
//     } else {
//         console.log("xato");
//     }
// }

// let kSon = 3;
// bahoNatijasi(kSon);





// case-2

// function aniqlashFasl(oy) {
//     if (oy >= 1 && oy <= 12) {
//         let fasl;
//         switch (oy) {
//             case 12:
//             case 1:
//             case 2:
//                 fasl = "qish";
//                 break;
//             case 3:
//             case 4:
//             case 5:
//                 fasl = "bahor";
//                 break;
//             case 6:
//             case 7:
//             case 8:
//                 fasl = "yoz";
//                 break;
//             case 9:
//             case 10:
//             case 11:
//                 fasl = "kuz";
//                 break;
//         }
//         console.log(`${oy}-chi oy, "${fasl}" fasl`);
//     } else {
//         console.log("Noto'g'ri oy raqami kiritildi.");
//     }
// }

// let oyRaqami = 8;
// aniqlashFasl(oyRaqami);



// case-3

// function kunlarSoni(oy) {
//     if (oy >= 1 && oy <= 12) {
//         let kunlar;
//         switch (oy) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 kunlar = 31;
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 kunlar = 30;
//                 break;
//             case 2:
//                 kunlar = 28;
//                 break;
//         }
//         console.log(`${oy}-chi oyda ${kunlar} kun bor.`);
//     } else {
//         console.log("Noto'g'ri oy raqami kiritildi.");
//     }
// }

// let oyRaqami = 3;
// kunlarSoni(oyRaqami);




// case-4

// function metrdaIfodalash(birlik, uzunlik) {
//     let uzunlikMetr;
    
//     switch (birlik) {
//         case 1: // desimetr
//             uzunlikMetr = uzunlik / 10;
//             break;
//         case 2: // kilometr
//             uzunlikMetr = uzunlik * 1000;
//             break;
//         case 3: // metr
//             uzunlikMetr = uzunlik;
//             break;
//         case 4: // millimetr
//             uzunlikMetr = uzunlik / 1000;
//             break;
//         case 5: // santimetr
//             uzunlikMetr = uzunlik / 100;
//             break;
//         default:
//             console.log("Noto'g'ri uzunlik birliği kiritildi.");
//             return;
//     }

//     console.log(`${uzunlik} ${birlik}-chi birlikda bo'lgan uzunlik ${uzunlikMetr} metr.`);
// }

// let birlik = 4; // millimetr
// let uzunlik = 500;
// metrdaIfodalash(birlik, uzunlik);



// case-7

// function keyingiSanaOy(D, M) {
//     const kabisaBolmaganYilSanasi = 365;

//     if (D >= 1 && D <= 31 && M >= 1 && M <= 12) {
//         const kiritilganSanasi = D + (M - 1) * 31; 
//         const keyingiSanasi = kiritilganSanasi + 1; 

//         const keyingiOy = Math.ceil(keyingiSanasi / 31); 
//         const keyingiKun = keyingiSanasi % 31; 

//         console.log(`Berilgan sana: ${D} - chi kun, ${M} - chi oy`);
//         console.log(`Kiritilgan sanadan keyingi sana: ${keyingiKun} - chi kun, ${keyingiOy} - chi oy`);
//     } else {
//         console.log("Noto'g'ri kun va oy kiritildi.");
//     }
// }

// let kun = 15;
// let oy = 7;
// keyingiSanaOy(kun, oy);
