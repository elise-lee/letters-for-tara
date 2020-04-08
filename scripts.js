
// Handle letters
var letter_index = 0;
var letters = [
	{
		intro: "dear tara,",
		body: ["Happy 21st birthday! Sorry that we couldn't be there in person to celebrate, but we miss you and can't wait to see you soon - in the meantime, here's a little something we put together for you!",
			"We were thinking that sending packages or letters in this time could be risky so we wanted to send you this book of virtual letters instead! We all appreciate you so much and we're so happy you're in all of our lives. We love you so much, and we'll see you before you know it!"
		],
		conclusion: "love, your pals"

	},
	{
		intro: "hi taro,",
		body: ["Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
				"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu."],
		conclusion: "love, elise"
	},
	{
		intro: "dear tara,",
		body: ["Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu."],
		conclusion: "love, shreya"
	},
	{
		intro: "dear tara,",
		body: ["Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu."],
		conclusion: "love, rach"
	},
	{
		intro: "dear tara,",
		body: ["Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu.", 
		"Lorem ipsum dolor sit amet, errem dictas ea mei. An iuvaret quaeque voluptatibus has. Modus forensibus referrentur in mel, dicunt invenire delicatissimi et sit, quodsi nusquam constituto an cum. Ne qui regione quaeque, option alterum contentiones ea usu."],
		conclusion: "love, sai"
	},
];
var max_letter_index = letters.length - 1;

update_tracker(letter_index);

function update_tracker(letter_index) {
	var tracker = document.getElementById("tracker");
	tracker.textContent = (letter_index + 1).toString() + " / " + letters.length.toString()
}

function next_letter() {
	console.log('Next letter, current index ' + letter_index.toString())
	if (letter_index === max_letter_index) {
		letter_index = 0;
	} else {
		letter_index++;
	} 
	change_text(letter_index);
	update_tracker(letter_index);
}

function prev_letter() {
	console.log('Prev letter, current index ' + letter_index.toString())
	if (letter_index === 0) {
		letter_index = max_letter_index;
	} else {
		letter_index--;
	}
	change_text(letter_index);
	update_tracker(letter_index);
}

function change_text(letter_index) {
	var intro = document.getElementById("intro");
	var body = document.getElementById("letter-body");
	var conclusion = document.getElementById("conclusion");

	intro.textContent = letters[letter_index].intro;
	var body_string = ""
	for (var paragraph of letters[letter_index].body) {
		body_string += "<p>" + paragraph + "</p>";
	  }
	body.innerHTML = body_string 
	conclusion.textContent = letters[letter_index].conclusion;
}


// Handle hearts
var brd = document.createElement("DIV");
		document.body.insertBefore(brd, document.getElementById("board"));

		const duration = 3000;
		const speed = 0.5;
		const cursorXOffset = 0;
		const cursorYOffset = -5;

		var hearts = [];
		
		function generateHeart(x, y, xBound, xStart, scale)
		{
			var heart = document.createElement("DIV");
			heart.setAttribute('class', 'heart');
			brd.appendChild(heart);
			heart.time = duration;
			heart.x = x;
			heart.y = y;
			heart.bound = xBound;
			heart.direction = xStart;
			heart.style.left = heart.x + "px";
			heart.style.top = heart.y + "px";
			heart.scale = scale;
			heart.style.transform = "scale(" + scale + "," + scale + ")";
			if(hearts == null)
				hearts = [];
			hearts.push(heart);
			return heart;
		}

		var down = true;
		var event = null;

		// document.onmousedown = function(e) {
		// 	down = true;
		// 	event = e;
		// }

		// document.onmouseup = function(e) {
		// 	down = false;
		// }

		// document.onmousemove = function(e) {
		// 	event = e;
		// }

		// document.ontouchstart = function(e) {
		// 	down = true;
		// 	event = e.touches[0];
		// }

		// document.ontouchend = function(e) {
		// 	down = false;
		// }

		// document.ontouchmove = function(e) {
		// 	event = e.touches[0];
		// }

		var before = Date.now();
		var id = setInterval(frame, 5);
		var gr = setInterval(check, 300);

		function frame()
		{
			var current = Date.now();
			var deltaTime = current - before;
			before = current;
			for(i in hearts)
			{
				var heart = hearts[i];
				heart.time -= deltaTime;
				if(heart.time > 0)
				{
					heart.y -= speed;
					heart.style.top = heart.y + "px";
					heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 200 + "px";
				}
				else
				{
					heart.parentNode.removeChild(heart);
					hearts.splice(i, 1);
				}
			}
		}

		function check()
		{
			if(down)
			{
				var start = 1 - Math.round(Math.random()) * 2;
				var scale = Math.random() * Math.random() * 0.8 + 0.2;
				var bound = 30 + Math.random() * 20;
				//generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
				generateHeart(200 - brd.offsetLeft + cursorXOffset, 725 - brd.offsetTop + cursorYOffset, bound, start, scale);
			}
		}