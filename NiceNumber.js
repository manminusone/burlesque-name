
// NiceNumber is simply a nice way to display the burlesque namespace size, in increments of 5 million

function NiceNumber() {
    if (!(this instanceof NiceNumber)) {
        return new NiceNumber();
    }
    this.text = function(num) {

    	if (num > 10000000)  { // over 10 million
    		var lo_end = 5 * Math.floor(num / 5000000),
    		    hi_end = 5 * Math.ceil (num / 5000000);
    		if (num - lo_end * 1000000 < hi_end * 1000000 - num)
    			return 'over ' + lo_end  + ' million';
    		else
    			return 'nearly ' + hi_end + ' million';
    	} else {
    		return num;
    	}
    };
}