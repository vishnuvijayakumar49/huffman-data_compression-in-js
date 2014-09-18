function tree(tuples)
    { while (tuples.length > 1)
        { var leastTwo = tuples.slice(0,2);
         var theRest  = tuples.slice(2);
         var combFreq = leastTwo[0][0] + leastTwo[1][0]
         var comb     =[[combFreq].concat([leastTwo])];
         tuples=theRest.concat(comb);
          tuples.sort();}
     return comb}

tuple=tree([ [ 1, 'c' ], [ 2, 'a' ], [ 3, 'b' ], [ 4, 'd' ] ])
console.log(tuple)
