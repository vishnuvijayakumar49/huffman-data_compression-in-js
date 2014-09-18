function sortfreq(freq)
    { //letters = Object.keys(freq);
     var tuples = [];
     for (var a in freq)
         tuples.push([freq[a],a])
     tuples.sort()
     return tuples}

tuple=sortfreq({'a': 2, 'c': 1, 'b': 3, 'd': 4});
console.log(tuple)
