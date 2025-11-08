//user-defined module
//method-1
// let add = (a,b) => {
//     return a+b
// }
// let prod = (a,b) => {
//     return a*b
// }
// module.exports = {
//     add : add,
//     prod : prod
// }

//method-2
exports.add = (a,b) => {
    return a+b
}
exports.prod = (a,b) => {
    return a*b
}