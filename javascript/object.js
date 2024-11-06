const user = { name :'yash ', email :'yash@gmail.com', adress : 'sitapur'};

console.log(user);

console.log(user.name);
console.log(user['email']);

user.password = '3456'
user.adress ='mumbai'

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand : 'samsung',
    model : 'galaxy s23',
    price : 50000,
    colors : ['black', 'white','grey']
};

console.log(smartphone['price']);
smartphone.price = '42000'

smartphone.colors =['red','white','grey']
console.log(smartphone);

smartphone.colors = ['blue','red','white','grey']
console.log(smartphone);

console.log(smartphone.colors[1]);

const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'Galaxy s24 ultra',
        price: 120000,
        colors: ['graphite', 'mint', 'white']
    },
    {
        brand: 'Oneplus',
        model: '10R',
        price: 55000,
        colors: ['blue', 'white']
    },
    {
        brand: 'Redmi',
        model: '11X',
        price: 27000,
        colors: ['grey', 'black', 'lightblue']
    },
    {
        brand: 'Oppo',
        model: 'F27',
        price: 35000,
        colors: ['blue', 'black', 'darkbrown']
    },
    {
        brand: 'Apple',
        model: 'Iphone 16 pro max',
        price: 170000,
        colors: ['black', 'blue', 'white']
    },
    {
        brand: 'Samsung',
        model: 'Galaxy s23',
        price: 120000,
        colors: ['graphite', 'mint', 'white']
    },
];
console.log(smartphoneArray.length);

// filter all phones with blue colour

const bluePhones = smartphoneArray.filter((phone) => {
    return phone.colors.includes('blue');
});
console.log(bluePhones);

const brands = smartphoneArray.map((phone) => {
    return phone.brand;
});
console.log(brands);

const keyword = 'sam';

const results = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase());
});
console.log(results);
