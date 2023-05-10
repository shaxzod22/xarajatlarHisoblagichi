alert('Xarajatlar hisoblagichi saytiga xush kelibsiz!')

let alisherMoney = prompt('Sizda necha so`m pul bor?')

let planePrice = 500
let hotelPrice = 250
let enjoyingPrice = 120

planePrice *= 11000.34
hotelPrice *= 11000.34
enjoyingPrice *= 12354.03

let needPrice = (planePrice + hotelPrice + enjoyingPrice)

if(alisherMoney >= needPrice) {
    console.log('Oq yo`l, Alisher!');
} else {
    console.log('Alisher, ozgina sabr qilish kerak bo`lar ekan.');
}
