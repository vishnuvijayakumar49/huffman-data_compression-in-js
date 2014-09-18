function frequency(str) {
    var freq = {};
    for (var i=0; i<str.length;i++)
	 {
        var char1=str[i];
        if (freq[char1]) {
           freq[char1]++;
        } else {
           freq[char1] = 1;
        }
    }

    return freq;
}
console.log(frequency("huffmancoding"));
