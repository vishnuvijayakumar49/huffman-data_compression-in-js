
function trimTree (tree)
    { var p = tree[1];
     if(typeof p == 'string')
        return p;
     else
         return [trimTree(p[0]), trimTree(p[1])];
        }

trees=trimTree([6, [ [2, [[1, "b"], [1, "d"]]],[4, "f"]]])
console.log(trees)



