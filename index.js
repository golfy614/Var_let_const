//case var 
const var_player = "golf"
var var_exper = 100
var var_vizar = false
if(var_exper > 90)
{
    var var_vizar = true // ถือว่าเป็นตัวแปรเดียวกัน ใช้ร่วมกันได้
}
console.log('var vizar',var_vizar)
//end case var

//case let จะเป็น scope variable
const let_player = "golf"
var let_exper = 100
let let_vizar = false
if(let_exper > 90)
{
    let let_vizar = true // ถ้าประกาศโดยใช้ let ใหม่ ตัวแปร vizar จะเป็นคนละตัว
}
console.log('let vizar',let_vizar)
//end case let

//case const จะเป็น constant variable
const const_player = "golf"
var const_exper = 100
const const_vizar = false
if(const_exper > 90)
{
    const const_vizar = true // ถ้าประกาศโดยใช้ let ใหม่ ตัวแปร vizar จะเป็นคนละตัว
}
console.log('const vizar',const_vizar)
//end case let