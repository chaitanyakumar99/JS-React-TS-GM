let user={
    uid:101,
    uname:"Rahul",
    address:{
        city:"Banglaore",
        pincode:560038,
        landmark:'Marathahalli Bridge'
    },
    phone:9591111111
}
let {address} = user;
let {landmark} = address;
console.log(landmark)