
let obj = {
    name: "Sizning ismingiz",
    age: "Yoshingiz"
}

for (let i = 1; i <= 5; i++) {
    let a = obj.name = prompt("Ismingizni kiriting","name");
    let b = obj.age = +prompt("Yoshingizni kiriting", "21");
    console.log("Foydalanuvchi  " + i);
    console.log("Sizning ismingiz  " + a);
    console.log("Sizning yoshingiz  " + b);
}