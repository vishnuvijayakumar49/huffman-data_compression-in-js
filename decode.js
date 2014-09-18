function decode (tree, str)
    {var output = "";
     var p = tree;
     for (bit in str)
        { if (str[bit] == '0')
	     {	 p = p[0];
		}   
         else   
		{ p = p[1];
		 }    
         if (typeof(p) == 'string')     
             {output += p;             
             p = tree;}}                
     return output;}


decod=decode(["d", [["c", "a"], "b"]],"1011011111111000000")
console.log(decod)
