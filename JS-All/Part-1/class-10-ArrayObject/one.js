let eids=[101,102,103,104]
eids.push(105)
//console.log(eids.push(105)) //5
console.log(eids) //[ 101, 102, 103, 104, 105]
eids.pop()
console.log(eids) //[ 101, 102, 103, 104]
//append element - begining of array
eids.unshift(100)
console.log(eids) //[ 100, 101, 102, 103, 104 ]
eids.shift()
console.log(eids)//[ 101, 102, 103, 104 ]