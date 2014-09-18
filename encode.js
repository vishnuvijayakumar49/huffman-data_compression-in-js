function encode (str)
     {
	code={d: "0", c: "100", a: "101", b: "11"};
	output = "";
        for (ch in str) 
		{output =output+code[str[ch]];
		 }	
	return output
	}

encod=encode('aabbbcdddd')
console.log(encod)
