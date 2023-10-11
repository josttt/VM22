let array = [1, 2, true, 1.2, 'hello'];
console.log(array);
console.log(array[4]);

array[3] = 69;
console.log(array);
array.push('new value')
console.log(array);
array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array);
console.log(array[1][2]);

let object = {
    name: 'tyrone',
    age: 12,
    pronouns: ['nig', 'ga']
};
console.log(object);
console.log(object.pronouns);

for(let i=0; i<10; i++){
    console.log(i);
}
let i = 1;
while(i<1_000_000){
    console.log(i);
    i*=2;
}

i = 1;
do {
    console.log('xd');
} while(i>10);

let fruits=['banana', 'cherry', 'apple', 'pear']

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(const fruit of fruits){
    console.log(fruit);
}

for(const property in object){
    console.log(property);
    console.log(object[property]);
}


for (i = 1; i < 1000; i++){
    if (i % 3 == 0 || i % 5 == 0)
    
}