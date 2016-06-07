
// I was trying to do something clever here, so that I could get "over 45 million" or "nearly 600 million", but
// then I was like, fuck it

function NiceNumber() {
    if (!(this instanceof NiceNumber)) {
        return new NiceNumber();
    }


    this.text = function(num) {

    	if (num > 1000000)  {
    		return 'over ' + Math.floor(num / 1000000) + ' million';
    	} else {
    		return num;
    	}
    };
}