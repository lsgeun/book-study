let person = { fname: "John", lname: "Doe", age: 25};

for (const key in person) {
    console.log(person[key]);
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

for (const brand in brands) {
    console.log(brand);
}