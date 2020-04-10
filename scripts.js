
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
		intro: "dear taro,",
		body: ["<span style='font-size: 18px; color: #00ffff;'>HAPPY BIRTHDAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</span> 🤗", 
		"I know the circumstances are not ideal, but I hope you were able to have a really nice 21st birthday! I know how much you love to receive letters so I hope you like this &quot;book&quot; we put together for you! So even though we couldn't all be there to celebrate with you, you can still feel warm and fuzzy and remember how much of a positive impact you have on those around you 🙂", 
		"There isn't much that I can say that you don't already know, but it doesn't hurt to repeat it so here I go!", 
		"<span style='font-size: 18px;'>WHY YOU ARE THE BEST</span>", 
		"- You <span style='font-size: 18px;'>ALWAYS</span> motivate me to be a better version of myself. From your work ethic (even if you start things late, you still get things done hehe), your determination to get through anything, your compassion (you always see the best in people), to your love for K-dramas and Cha EunWoo HEHE (im gonna insert a picture of him here )",
		"<img src='eunwoo.png'></img>", 
		"- Honestly, I am not sure how I managed to find a best friend/roommate like you cuz you suck. JK LOL. You are so similar to me and you always know what I am thinking, how to make me laugh when I am down, and you encourage my big dreamy dreams haha without laughing at me or making me feel dumb.", 
		"Thank you for being such an amazing best friend and roommate and for putting up with me hehe. ALSO, CRASH LANDING ON YOU IS SO GOOD LOL IM ON EP 10 SO WE CAN WATCH NOW. I hope you had an amazing day and I can't wait to have more adventures with you, make our youtube channel, podcast, and travel!",
		"I hope you had an amazing day and I can't wait to have more adventures with you, make our youtube channel, podcast, and travel!"],
		conclusion: "LOVE, shreya"
	},
	{
		intro: "dear taro,",
		body: ["Happy happy birthday! I’m so so so sad we didn’t get to be in the Bay Area together this summer, it would have been the most fun thing ever and I feel robbed :(( But we still have time for lots of adventures and traveling though, and I’m super excited for the future! Asia senior trip 2021 heheh",
			"Thank you for the millions of hours of emotional support and adventures in Chi, I’m so lucky that Rach and I somehow managed to meet you after that SWE brunch the first week of freshman year (best thing to come out of living in the fairchildren). You are such a smart, strong, beautiful, caring, and intelligent person and I am proud to know you! You are going to do such great things, and I can’t wait to see you go places!",
			"Here are some fun memssss:",
			"- Getting boba at Joy Yees for the very first time (lol), the first of many boba trips!!! (just not at joy yees)",
			"- Binge watching the first season of Riverdale and Rach saying cole sprouse’s name as cold sprouts (the og group chat)",
			"- When you successfully merged your two friend groups (cold sprouts + samosa social) and we all went shopping in Chi and then got deep dish at Gino's",
			"- When we went to that formal in heels and came back in fuzzy socks",
			"- Dinner in NYC the summer after sophomore year!!!",
			"- Going to Kresge like every other night freshman year to study and avoid the weird plastic art baby next to the vending machine and eat too many snacks from the vending machine",
			"- Making all those cute saturday morning brunches!",
			"and lots of other good times!!!! <333",
			"Let’s plan another roadtrip soon (Michigan weekend roadtrip 2.0!!!), I love and miss you and will see you soon!!"],
		conclusion: "lots of love, elise"
	},
	{
		intro: "stara,",
		body: ["You know how much I love you. The past year has been different because I don’t get to see you as much as I wan’t to. I don’t get to barge into your room and hide below your desk and scare you or make fun of your “wine” wired wall thing. Neither do I get to eat all or your korean beebombim, intentionally sit on your pillow or rip the tassels off your wall. Okay yeah I wreck havoc as I breath. Previous point wasn’t building up to anything but I just wanna say that there’s a reason why your friends look up to you soooo fucking much. You might type the wrong address for uber or not be in on contemportary popular culture, but you are a gem. You care for your friends in a way that is so rare, you radiate positivity towards others even when you yourself are feeling down and lets be real... you’re a fucking humble hotty. I’ve grown so immensely in college and I’m not saying this for the sake of a card or ur bday, but you have such a big role in that. I love you, admire you and will be ur friend forever- even if we live in opposite sides of the country. I know moving off campus has made things different but winter brought all of us back on track- fuck corona, but next year is OUR year. Once I get a job hopefully- fuck corona- we’re literally gonna eat, sleep, party and cook tgt. You are my moth and I am ur leech.",
			"<span style='font-size: 14px;'>* there’s a lot of typos, but I only think its fitting since you’re always my grammar ninja. Happy birthday. We will have an actual blast when the quarantines over.</span>"],
		conclusion: "love you to the moon and stara back, <br> sai"
	},
	{
		intro: "dear tara,",
		body: ["Happy 21st birthday! So sorry we couldn’t have the lit celebration you wanted this year, but we’ll definitely make up for it once we’re all back on campus healthy and safe 🙂",
		"Thank you for being such a kind and awesome human being to live and experience college with for the past three years. It’s pretty crazy to see how much we’ve both changed the past few years, and also how we’re growing in the same direction.",
		"So so thankful to have you as a friend and can’t wait to see you soon. Love you!"],
		conclusion: "love, rach"
	},
	{
		intro: "dear tara,",
		body: ["Happy birthday Tara! Thank you for always being so incredibly supportive of all your friends. Even though we don't see each other often anymore, the vibe of our friendship never changes and I am always glad to see you whenever I do!! Btw I hope you're eating proper meals now instead of just bananas and Starbucks. HAVE A GREAT 21ST BIRTHDAY!! Even though we can't celebrate together now, let's throw a little party for all the missed birthdays when all this pandemic business is over ~"],
		conclusion: "sincerely, khizar"
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
	conclusion.innerHTML = letters[letter_index].conclusion;
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