/**
 * In this Kata you need to write the method SharedBits that returns true if 2 integers share at least two '1' bits. For simplicity assume that all numbers are positive

For example

seven = 7                  //0111
ten = 10                   //1010
fifteen = 15               //1111
SharedBits(seven, ten)     //false
SharedBits(seven, fifteen) //true
SharedBits(ten, fifteen)   //true
seven and ten share only a single '1' (at index 3)
seven and fifteen share 3 bits (at indexes 1, 2, and 3)
ten and fifteen share 2 bits (at indexes 0 and 2)
 */

function sharedBits(a, b) {
    let aBin = a.toString(2)
    let bBin = b.toString(2)

    bBin.length > aBin.length ? aBin = aBin.padStart(bBin.length, '0')
        : bBin.length < aBin.length ? bBin = bBin.padStart(aBin.length, '0')
        : null
    
    let sharedBitIndexArray = aBin.split('').filter((el, i) => Number(el) === 1 && Number(el) === Number(bBin[i]))

    return sharedBitIndexArray.length >= 2
}

console.log(sharedBits(7,15));