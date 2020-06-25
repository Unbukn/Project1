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
// ajax request for sad quotes
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

var search = "dogs"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=fUAV70oYpTeS4X52k9Ce031QOrQOi4Tg";
$.ajax({
	url: queryURL,
	method: "GET"
  }).then(function(res2) {
	  console.log(res2)

  })

// function to be called at each "how are you feeling" button event listener
  function replaceButtons() {
	  // replace header in the card with reset text
	$("#headerQuestion").text("Click 'reset' to start again!")
	// empty the question div of all buttons
	$("#questionButtons").empty()
	// var to create a new a element
	var resetDiv = $("<a>")
	// add attributes: class "button", id "resetButton", text "Reset"
	resetDiv.attr("class", "button")
	resetDiv.attr("id", "resetButton")
	resetDiv.text("Reset")
	// append to the question div
	$(resetDiv).appendTo("#questionButtons");
}

// clicker to reset the page
function resetPage() {
	$("#resetButton").on("click", function (event) {
		event.preventDefault()
	// reload the page
	console.log("reset button clicked")
		location.reload()
	});
}

//   event listener for great btn
$("#great").on("click", function (event) {
	event.preventDefault()
// ajax request for good quotes
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
	$.ajax(sadQuote).done(function (bestQuotes) {
		console.log(bestQuotes);
	// create var containing results from Quotes
	// var quote
	var theQuote = bestQuotes.message
	
	// var author
	var theAuthor = bestQuotes.author
		
	// empty the results div
	$("#results").empty();
	// creat new div
	var newDiv = $("<div>")
	
	// apply the card and answerCard class to the new div
	newDiv.addClass("card answerCard");
	
	// create a new para for the quote
	var newPara = $("<p>")

	// apply quote text to the para
	newPara.text(theQuote)
	newPara.attr("class", "quotePara")
	
	// second para for author
	var newPara2 = $("<p>")
	// apply the author text to the second para
	newPara2.text(theAuthor)


	// append the new div to the results div
	$(newDiv).appendTo("#results");
	// append the paras to the new div
	newPara.appendTo(newDiv);
	newPara2.appendTo(newDiv);

	// remove the original buttons div
	replaceButtons()
	resetPage()

})}) 

//   event listener for Sad btn
$("#notGreat").on("click", function (event) {
	event.preventDefault()
// ajax request for Sad quotes
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
	$.ajax(happyQuotes).done(function (bestQuotes) {
		console.log(bestQuotes);
	// create var containing results from Quotes
	// var quote
	var theQuote = bestQuotes.message
	
	// var author
	var theAuthor = bestQuotes.author
		
	// empty the results div
	$("#results").empty();
	// creat new div
	var newDiv = $("<div>")
	
	// apply the card and answerCard class to the new div
	newDiv.addClass("card answerCard");
	
	// create a new para for the quote
	var newPara = $("<p>")

	// apply quote text to the para
	newPara.text(theQuote)
	newPara.attr("class", "quotePara")
	
	// second para for author
	var newPara2 = $("<p>")
	// apply the author text to the second para
	newPara2.text(theAuthor)


	// append the new div to the results div
	$(newDiv).appendTo("#results");
	// append the paras to the new div
	newPara.appendTo(newDiv);
	newPara2.appendTo(newDiv);

	// remove the original buttons div
	replaceButtons()
	resetPage()

})}) 
