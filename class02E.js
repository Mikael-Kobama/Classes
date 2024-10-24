// const tags = new Set([]);

// tags.add('js');
// tags.add('js');
// tags.add('javascript');
// tags.add('javascript');

// const result = Array.from(tags)
// const el = result.map((e,i) => ({
//     tag: e, index: i
// }))

// console.log(el)
// console.log(result);

// const listaDeUsuarios = [
//     { name: 'Mikael', username: 'devsolto'},
// ];
// const newUser = [
//     { name: 'Mikael', username: 'devsolto'},
// ];

// const hasUser = listaDeUsuarios.find((user) => {
//     return user.username === newUser.username;
// })
// if(hasUser) {
//     listaDeUsuarios.push(newUser);
// }
// console.log(hasUser)


const listaDeUsuarios = new Map();

listaDeUsuarios.set('devsolto',
     { name: 'Mikael', username: 'devsolto'})
listaDeUsuarios.set('devsolto',
     { name: 'Mikael', username: 'devsolto'})
const result = listaDeUsuarios

console.log(result)