const arr =[ 344 ,'hello' , true ,undefined];


console.log(typeof arr);
console.log(Array.isArray(arr));


console.log(arr.length);

const movies = ['Avenger','Animal','Veda','Premalu','1927'];

// Indexing

console.log(movies[3]);
console.log(movies.indexOf('Veda'));
console.log(movies.indexOf('Superman'));
console.log(movies[100]);

console.log(movies.at(-3));

// Slicing
console.log(movies.slice(1,5));

// adding and removing elements

movies.push('laila');//adds at the end
movies.unshift('flash');//adds at the start
console.log(movies);

movies.pop();//removes from the end
movies.shift();//removes from the start
console.log(movies);


// movies.splice(2,2);//removes 2 elements from index 2
// movies.splice(2,2 ,'rama','kamla')//replaces two elements from index
movies.splice(2,0,'rama 1','kamla 1')
console.log(movies);










