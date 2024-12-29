
//
/*var dict=  {
		Ich: [{"hasse":1},{"finde":2}],
		hasse: [{"dich":1}],
		du: [{"Arschloch":1}, {"bist":1}, {"hast":1}, {"bloed":1}],
}
*/
var dict={};

var inputString = "Ich habe eine Nase. Ich habe keine Freizeit. Ich habe kein Hotel. Ich habe kein Geld. Ich habe einen Hund. Ich bin ein scheiss Influencer. Meine Nase vin Ich ist toll. Wer will meine Hose . Ich will dir scheiss verkaufen. Ich habe viel Geld";

var sentences = inputString.split(".");

var lastWord = "";

for (sentence in sentences){
	words = sentences[sentence].split(" ");
	for (idx in words){
		word = new String(words[idx]);
		if (lastWord && lastWord.length>0 ){
			var tmp = {};
			tmp[word] = 1;
			if(dict[lastWord][word])
				dict[lastWord][word]++;
			else
				dict[lastWord][word] = 1;
		}
		console.log(word+ ".")
		if (!dict[word]){
			dict[word] = {}
		}
		lastWord = word
	}
}
console.log(dict);