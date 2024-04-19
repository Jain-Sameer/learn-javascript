const myobject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift By Apple'
}

for (const key in myobject) {
    // console.log(key, " :- ",myobject[key]);
}

const map = new Map()

map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('SL', 'Sri Lanka')

for (const key in map) { //map is not iterable in js
    // console.log([key]);
}

