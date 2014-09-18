var codes={};
function assign_code(node, pat)
    {if (typeof(node) == 'string')
       {  codes[node] = pat;
          console.log(codes)
         }
     else {
        assign_code(node[0], pat+"0");
        assign_code(node[1], pat+"1");
    }
     console.log(codes) 
        }
    
code=assign_code(["d", [["c", "a"], "b"]],pat='');
console.log(code); 

