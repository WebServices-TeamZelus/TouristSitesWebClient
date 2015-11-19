var transitions = {
	fadeIn: function(obj, delay, duration, targetopacity){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.opacity = targetopacity;
	},

	
		fadeOut: function(obj, delay, duration){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.opacity = 0;
	},
	
	moveToX: function(obj, delay, duration, posX){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.left=posX;
	},
	
	moveToY: function(obj, delay, duration, posY){
		var elem = document.getElementById(obj).style;
		elem["-webkit-transition-property"] = "all";
		elem["-webkit-transition-delay"] = delay+"ms";
		elem["-webkit-transition-duration"] = duration+"ms";
		elem.top=posY;
		//elem.background=bkgcol;
	},
	moveToYChangeSize: function(obj, delay, duration, posY, bkgcol, w, h, l){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.top=posY;
		elem.background=bkgcol;
		elem.width=w;
		elem.height=h;
		elem.left=l;
	},
	
	expandHeight: function(obj, delay, duration, height){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.height=height;
	},
	
	expandWidth: function(obj, delay, duration, width){
		var elem = document.getElementById(obj).style;
		elem["property"] = "all";
		elem["delay"] = delay+"ms";
		elem["duration"] = duration+"ms";
		elem.width=width;
	}
}

