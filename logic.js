console.log("App Started")

var mood = ["Happy", "Not Sure", "Sad"];





var ranQuote = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotable-quotes.p.rapidapi.com/randomQuotes",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotable-quotes.p.rapidapi.com",
		"x-rapidapi-key": "d82c676afemsh7edaf163ce44088p1641dajsn681616f67751"
	}
}

$.ajax(ranQuote).done(function (response) {
	console.log(response);
});

var sadQuote = {
	"async": true,
	"crossDomain": true,
	"url": "https://qvoca-bestquotes-v1.p.rapidapi.com/quote",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
		"x-rapidapi-key": "d82c676afemsh7edaf163ce44088p1641dajsn681616f67751"
	}
}

$.ajax(sadQuote).done(function (res) {
	console.log(res);
});

var happyQuotes = {
	"async": true,
	"crossDomain": true,
	"url": "https://qvoca-bestquotes-v1.p.rapidapi.com/quote",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
		"x-rapidapi-key": "d82c676afemsh7edaf163ce44088p1641dajsn681616f67751"
	}
}

$.ajax(happyQuotes).done(function (poop) {
	console.log(poop);
});

$(".button").on("click", function () {

	document.getElementById("great").style.visibility = "hidden";
	document.getElementById("notGreat").style.visibility = "hidden";
	document.getElementById("notSure").style.visibility = "hidden";
	document.getElementById("reset").style.visibility = "visible"

}) 


	


