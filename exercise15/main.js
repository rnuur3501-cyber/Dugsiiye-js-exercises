// for...of loop

const people = [
   { name: "rahma", age: 19, city: "mogadishu" },
   { name: "mryan", age: 14, city: "samareeb" },
   { name: "rimaa", age: 18, city: "galmudug" }
];

console.log("properties and value of each person");

for (const person of people) {
    console.log("-----")
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("city:",  person.city);
}

