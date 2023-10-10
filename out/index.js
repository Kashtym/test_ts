// function hexToDec(hexString: string): number {
//     const hexToDecTable = {
//         "0": 0,
//         "1": 1,
//         "2": 2,
//         "3": 3,
//         "4": 4,
//         "5": 5,
//         "6": 6,
//         "7": 7,
//         "8": 8,
//         "9": 9,
//         A: 10,
//         B: 11,
//         C: 12,
//         D: 13,
//         E: 14,
//         F: 15,
//     };
//     let result: number = 0;
//     function toHex(str: string): number {
//         const arr = str.split("");
//         let number: number = 0;
//         let indexNum: number = 0;
//         for (let index = str.length - 1; index >= 0; index--) {
//             number += hexToDecTable[str[index].toUpperCase()] * 16 ** indexNum;
//             indexNum++;
//         }
//         return number;
//     }
//     return hexString[0] === "-" ? toHex(hexString.slice(1)) * -1 : toHex(hexString);
// }
function alphanumeric(string) {
    if (!string) {
        return false;
    }
    return /[^a-zA-Z0-9]/.test(string) ? false : true;
}
console.log(alphanumeric("hell oworld"));
//# sourceMappingURL=index.js.map