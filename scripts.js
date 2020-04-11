
// Handle letters
var letter_index = 0;
var letters = [
	{
		intro: "dear tara,",
		body: ["Happy 21st birthday! Sorry that we couldn't be there in person to celebrate, but we miss you and can't wait to see you soon - in the meantime, here's a little something we put together for you!",
			"We were thinking that sending packages or letters in this time could be risky so we wanted to send you this book of virtual letters instead! We all appreciate you so much, and we're so happy you're in all of our lives. We love you so much, and we'll see you before you know it!",
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
		"<img src='eunwoo.png' style='border-radius:30px;'/>", 
		"- Honestly, I am not sure how I managed to find a best friend/roommate like you cuz you suck. JK LOL. You are so similar to me and you always know what I am thinking, how to make me laugh when I am down, and you encourage my big dreamy dreams haha without laughing at me or making me feel dumb.", 
		"Thank you for being such an amazing best friend and roommate and for putting up with me hehe. ALSO, CRASH LANDING ON YOU IS SO GOOD LOL IM ON EP 10 SO WE CAN WATCH NOW. ",
		"I hope you had an amazing day and I can't wait to have more adventures with you, make our youtube channel, podcast, and travel!"],
		conclusion: "LOVE, shreya"
	},
	{
		intro: "dear taro,",
		body: ["Happy happy birthday! I’m so sad we didn’t get to be in the Bay Area together this summer, it would have been the most fun thing ever and I feel robbed :(( But we still have time for lots of adventures and traveling though, and I’m super excited for the future! Asia senior trip 2021 heheh",
			"Thank you for the emotional support and adventures in Chi - I’m so lucky that we all happened to meet first week of freshman year (best thing to come out of living in the fairchildren). You are such a smart, strong, beautiful, caring, and intelligent person and I am proud to know you! You are going to do such great things, and I can’t wait to see you go places <3",
			"Here are some fun throwback mems:",
			"- NOT assembly times with russ or the EAs",
			"- Getting boba at Joy Yees for the very first time (lol), the first of many boba trips!!! (just not at joy yees)",
			"- Binge watching the first season of Riverdale and Rach saying cole sprouse’s name as cold sprouts (the og group chat)",
			"- When you successfully merged your two frosh friend groups (cold sprouts + samosa social) and we all went shopping in Chi and then got deep dish at Gino's",
			"- When we went to that formal in heels and came back in fuzzy socks",
			"- Going to that one NU football game, sorry we didn’t go to more :((((",
			"- Dinner in NYC the summer after sophomore year!!!",
			"- Going to Kresge like every other night freshman year to study and avoid the weird plastic art baby next to the vending machine and eat too many snacks from the vending machine",
			"- That one time where we went to boystown and somehow ended up at that cute sushi place called something like Rollapalooza and it was a really wholesome night",
			"- Making all those cute saturday morning brunches!",
			"and lots of other good times!!!! <333 Let’s plan another roadtrip soon (Michigan weekend roadtrip 2.0!!!), I love and miss you and will see you soon (even if it's only through zoom)!!"],
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
		body: ["Happy birthday Tara! Thank you for always being so incredibly supportive of all your friends. Even though we don't see each other often anymore, the vibe of our friendship never changes and I am always glad to see you whenever I do!! Btw I hope you're eating proper meals now instead of just bananas and Starbucks.",
			   "HAVE A GREAT 21ST BIRTHDAY!! Even though we can't celebrate together now, let's throw a little party for all the missed birthdays when all this pandemic business is over ~"],
		conclusion: "-khizar"
	},
	{
		intro: "taro,",
	body: ["Honestly how do I begin to describe how infinitely cool and woke you are? I’ve said it before but I’m obvi going to say it again. You’re one of the strongest, most BEAUTIFUL, smartest, big-hearted girls out there. I know I can always count on you for the best advice and a damn good time whether we’re making pasta, shopping for ~shmexy things~, binge-watching Made in Heaven, or just existing and being beans. I feel like I can completely and wholeheartedly be myself around you and I feel cheated by the universe that we couldn’t spend another amazing Spring Quarter together. I can’t WAIT to hug you, have a drink with you, and metaphorically step on all the people that don’t deserve you."],
		conclusion: "love, sonia"
	},
	{
		intro: "dear tara didi,",
		body: ["Happy Birthday! While we have already written you birthday letters, we thought this would be a nice keepsake. I hope this year will be everything you want and more and that you will be happy and healthy and safe and get all the hugs you could ever want! Of course, they won’t be the same type of hug that you may get at home, but nonetheless, we want you get cuddles galore wherever you are. You are such a kind, loving, incredible sister and I love everything about you, from the strange noises to the random pouncing and great advice. I am so lucky to have grown up with you and to have witnessed many of the high points and low points in your life. I am so happy we have the relationship we have and that we are as close as we are. You have helped and will continue to help shape me to be the person I will become. As I said in the other letter I wrote, having a sister that I know I can always rely on is the most special thing I could have ever asked for, and someone as great as you to look up to is a gift I can’t ignore. I am so grateful that I got to have you as a sister and as a best friend. As a support system and my very own comedic relief. There is no one else I’d rather laugh so hard with that no sound comes out (which seems to be happening a lot recently). ",
			"I’ll leave you with the memory of my past birthday, when we went to the karaoke bar and ‘partied’. That was one of the best days I had ever had and it was because we spent it just having fun with each other and Nemma. We sang until we couldn’t anymore and danced like crazy people, then we had dinner at that Japanese curry place. I hope that we can make more memories like that. Those times are when I am happiest!"],
		conclusion: "lots of love and hugs,<br>anika"
	},
	{
		intro: "dear tara,",
		body: ["Happy Birthday!! Although we are in a quaran-tine at the moment, I hope you had a WILD 21st bday: your parents have probably poured you some bubbly and you've been like, wow yum this is the first time I've had alcohol. ",
		"Nevertheless..... let's be a bit more serious",
		"I'm so lucky that you're in my life. Truly. But first I'm so lucky that we grew closer on that New York trip. Exploring times square at night!!! Walking down two stories of stairs to get to a train!! Through our adventures, I had the opportunity to learn a bit about what you care about and what kind of person you are (there's a lot more to learn:) ). You're thoughtful, hilarious, kind, beautiful, and are driven by purpose. ",
		"I'm sorry that we're apart, but know that I'm sending you love! ",
		"I'm also looking forward to our Netflix movie night. As the birthday girl, you should know that you are tasked with choosing the movie. Don't worry, we aren't judging you at all."],
		conclusion: "love, sophie"
	},
	{
		intro: "dear tara,",
		body: ["HAPPY BIRTHDAY TARA!!!! Welcome to the 21 club !!!! 🍾 🎉 🙌🏾 I hope you have an amazing day, we all love you and miss you"],
		conclusion: "-jayna"
	},
	{
		intro: "Hi My Beautiful Girl,",
		body: ["I am so pleased to announce that today you are turning twenty-one, and that you may now embrace the romantic and legal beauty of early-onset alcoholism in the magnificent state of New Jersey. You’re pretty good at eating jalapeño chips and being a piece of trash, and it has been too long since we’ve done one of those things together. I would fly anywhere for you and your beautiful body. Please remember to eat your vegetables."],
		conclusion: "With Kind Regards, <br> Kathleen"
	},
	{
		intro: "dear tara,",
		body: ["Taraaaaa OMG, don’t worry I’ll never call you tarashi that’s just cringey who would ever address another human being by their Instagram username hehe anyway…HAPPY BIRTHDAY MY STONER FRIEND!! It’s weird because if you think about it, I haven’t known you for particularly long. We met this past summer and baked those awesome brown butter chocolate chip cookies at your place and I was going through a really stressful time but I just remember hanging out with you and Avrati made me feel really relaxed after a really long time. I’m not kidding, idk maybe this quarantine got me senti and shit but there’s a lot of people out there who when you’re talking to them, it feels like work. You know when you’re just like super self-conscious about what you say and it’s mentally taxing. You’re like the opposite of that. I feel like I can be crackhead around you and yeah, I think I always say the wrong thing and talk too much but I appreciate you being receptive and non-judgmental lol. ",
		"You’re one of those people that just has such a warm, positive presence and you really are one of the most grounded but also incredibly funny and lit people I know. I wish I could list out a bunch of nostalgic anecdotes like omg remember when we did that thing in freshman year when we ______ and ______ but even though we’ve hung out so few times (and they’ve been supa lit), I don’t think I need that to convince me that you’re an amazing person. Literally, hit me up anytime if you wanna hang out (even during the quarantine) or talk or whatever, I’ll be there. I’m so sorry your birthday fell on a quarantine day but I hope you had the most amazing day and I’ll be close by in Chicago next year so we gotta hang out. No more excuses, we’re doing it. I’m not a great texter but I love video calls and just like phone calls so ya know if you’re ever super mind-numbingly bored hmu. "],
		conclusion: "-manasa"
	},
	{
		intro: "dear tara,",
		body: ["Wow where do I even begin. So incredibly grateful that I’ve known you since freshman year. Even though we don’t get many chances to hang out (although that can change next year!) I know I can always turn to you for a good, soul-searching conversation or laugh and I trulyyy appreciate your thoughtful, kind, chill, and hilarious presence in my life. You have such a magnetic personality that naturally makes you an incredibly fun and trustworthy person to be around. ",
		"I love especially how we can both relate to being wrapped in our thoughts, emotions, writings (except you prob do a better job translating these abstract things onto paper with all the beautiful poetry you write), for better or worse. Is it weird that I still remember a short conversation (out of many others) summer after freshman year in the good ole Simpson apartment where you understood when I was trying to express the difficulties of articulating emotions on paper because it makes them more “real?” In the moment I thought “yess someone finally understands” – it was heartwarming and validating. It’s the small interactions like these that add up to be a lot, I guess!",
		"I sincerely hope that you’ll embark in more literary adventures in the future in addition to engineering with that big brain of yours and hope I’ll be able to be a part of that because I know you’ll do AMAZING things :) Also so happy that you found yourself a mans heh and hoping that will serve as a rock in these times of uncertainty too. A weird time to turn 21 for sure but we’ll make the best out of it!! I’d love to keep up the calls and when we get back onto campus we have to have PLENTY of fun (and yes I might actually take an engineering course and ask you to help me through it). Best wishes for the rest of this however-long period, we’ll see better versions of ourselves and hopefully the world too at the end of it! ",
		"<div style='display:flex; justify-content:center'><img src='christine.png' style='height:200px; border-radius:30px;'/></div>",
		"<span style='font-size: 14px;'>A major, major throw back……see if you can remember when it’s from</span>"],
		conclusion: "lots of love, christine"
	},
	{
		intro: "dear tara,",
		body: ["I’ve spent almost 2 days trying to write this letter. I believe the reason it took me so long is because I am too emotional to think clearly. There are too many thoughts that come to my mind, but I don’t know how to accurately express what you mean to me. Hence, I am adopting an alternative strategy- I plan to tell you the thoughts in my head when I think of you. ",
		"I’ve told you this one several times before, but I always wonder what would have happened if I did not sit next to you on the first day of class, or if we were not in the same class. I promise the other thoughts are ones I haven’t told you about before.",
		"I wonder how I would survive college if you hadn’t been there every single time I was at my lowest. I don’t know if I would have stopped crying after my DTC meeting, if you hadn’t come to stay the night with me though there was a snowstorm. I don’t know how I would pass EA2 if you had not done all the work while I laughed on the couch. I would have hated eating in dining halls if you did not eat with me. I don’t know when I would have learned how to do makeup if you did not take me to Sephora and teach me later too. I would have taken much longer to get over Dhruv if I didn’t have you. I would have never found my partner in taking 1000 photos if I didn’t meet you. I found family at Northwestern on my first day of class, and I don’t know when that would have happened if I hadn’t met you.",
		"Sometimes I think you’re unreal. I don’t think I can be half the person and friend you are. I can never forget the day you ran in the snow without your heel boots, just so that I reached class in time. I was literally in shock. I wonder what I did to deserve you. I pray that you get everything good this world has because you’re honestly one in a million. ",
		"But among all these thoughts the most overwhelming is the thought that I can’t do life without you. Even if I get to see you only thrice a quarter now (thought it makes me v sad and we need to really change that), knowing that I have you as my best friend and elder sister means the world to me. I want you to know that I will always love you unconditionally and will always be there for you no matter what. "],
		conclusion: "yours forever, <br> archita"
	},
	// {
	// 	intro: "dear tara,",
	// body: ["",
	// "",
	// ""],
	// 	conclusion: "love,"
	// },
];
var max_letter_index = letters.length - 1;

change_text(letter_index);
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