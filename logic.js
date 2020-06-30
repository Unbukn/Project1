$(document).ready(function () {
	console.log("App Started")

		// on page load check local storage for name
		var usersName = localStorage.getItem("name")
		// if name equals null/blank
		if (usersName !== null) {
			// remove the name card from the nameCard id
			$("#nameCard").remove();
			console.log("there is a name already")
			// new paragraph 
			var namePara = $("<p>")
			// give the name para text
			namePara.text("Welcome to Temperature, " + usersName + "!");
			// append it to the DOM
			namePara.appendTo("#nameCont");
			
		}// prompt the user to enter their name
		else {
			// remove buttons to use the application
			$("#questionCard").empty()
			$("#nameSubmitButton").on("click", function (event) {
				event.preventDefault()
				// get the value of the content in the name input box
				var usersName = $("#nameBox").val()

				// if the name is bank do nothing
				if (usersName !== "") {
					// remove the name card from the nameCard id
					$("#nameCard").remove();
					// save the name value to local storage
					localStorage.setItem("name", usersName)
					// console.log("Name " + usersName + " saved to local storage")
					// new paragraph
					var namePara = $("<p>")
					// give the name para text
					namePara.text("Welcome to Temperature, " + usersName + ".");
					// append it to the DOM
					namePara.appendTo("#nameCont");
					// reset the page
					location.reload()
				}else {
					// new paragraph
					var namePara = $("<p>")
					// give the name para text
					namePara.text(usersName + "That's not a name. . .");
					// append it to the DOM
					namePara.appendTo("#nameCont");
				}
		
			});

		}

		$(".carousel-cell").on("click", function (event) {
			event.preventDefault()
			$("#nameCont").empty();
			console.log(this)
			// get the text of the button selected
			buttonValue = $(this).text();
			console.log(buttonValue)
		// if the button text is not sure
		if (buttonValue == "Not sure") {
		var getRandomeQuote = {
			"async": true,
			"crossDomain": true,
			"url": "https://timshim-quotes-v1.p.rapidapi.com/quotes",
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "timshim-quotes-v1.p.rapidapi.com",
				"x-rapidapi-key": "d82c676afemsh7edaf163ce44088p1641dajsn681616f67751"
			}}
			// ajax request for random quote
			$.ajax(getRandomeQuote).done(function (ranQuote) {
				// create var containing results from Quotes
				// var quote
				var theQuote = ranQuote.quoteText
				// console.log(theQuote)
				// Create var for the author of the quote
				var theAuthor = ranQuote.author
					
				// empty the results div
				$("#results").empty();
				// creat new div
				var newDiv = $("<div>")
				
				// apply the card and answerCard class to the new div
				newDiv.addClass("card answerCard");
				
				// create a new para for the quote
				var newPara = $("<h3>")

				// apply quote text to the para
				newPara.text('"' + theQuote +'"')
				newPara.attr("class", "quotePara")
				
				// second para for author
				var newPara2 = $("<p>")
				// apply the author text to the second para
				newPara2.text(" - " + theAuthor)
				newPara2.attr("class", "quoteAuth")

				// append the new div to the results div
				$(newDiv).appendTo("#results");
				// append the paras to the new div
				newPara.appendTo(newDiv);
				newPara2.appendTo(newDiv);
				// remove the original buttons div
				replaceButtons()
				// reset the page to the original state

				resetPage()
			})
		}else {
			// if the button value was not "not sure"
			// query for quote based on the selected button value
			var quoteQuery = {
				"async": true,
				"crossDomain": true,
				"url": "https://qvoca-bestquotes-v1.p.rapidapi.com/quote?message="+ buttonValue,
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
					"x-rapidapi-key": "d82c676afemsh7edaf163ce44088p1641dajsn681616f67751"
				}
			}
			$.ajax(quoteQuery).done(function (theQuoteObject) {
				console.log(theQuoteObject)
				// produce the quote based on button pressed
				produceQuote(theQuoteObject)
				// remove the original buttons div
				replaceButtons()
				// reset the page
				resetPage()
			
			})
			
		}

		});

		// *********************** F U N C T I O N S ****************** B E L O W ******************************************************
		// function for producing great and not great quotes
		function produceQuote(theQuoteObject) {
				var theQuote = theQuoteObject.message

				// var author
				var theAuthor = theQuoteObject.author
					
				// empty the results div
				$("#results").empty();
				// creat new div
				var newDiv = $("<div>")
				
				// apply the card and answerCard class to the new div
				newDiv.addClass("card answerCard");
				
				// create a new para for the quote
				var newPara = $("<h3>")
			
				// apply quote text to the para
				newPara.text('"' + theQuote +'"')
				newPara.attr("class", "quotePara")
				
				// second para for author
				var newPara2 = $("<p>")
				// apply the author text to the second para
				newPara2.text(" - " + theAuthor)
				newPara2.attr("class", "quoteAuth")
			
			
				// append the new div to the results div
				$(newDiv).appendTo("#results");
				// append the paras to the new div
				newPara.appendTo(newDiv);
				newPara2.appendTo(newDiv);
		}


		// function to be called at each "how are you feeling" button event listener
		function replaceButtons() {
		// replace header in the card with reset text
		$("#headerQuestion").text("Click 'reset' for more quotes!")
		// empty the question div of all buttons
		$("#questionButtons").empty()
		
		// // COPY BUTTON UNDER CONSTRUCTION!!!!!
		// // var to create a new a element for copy button
		// var newCopyButton = $("<a>")
		// // add attributes: class "button", id "resetButton", text "Reset"
		// newCopyButton.attr("class", "button")
		// newCopyButton.attr("id", "copyButton")
		// newCopyButton.text("Copy Quote")
		// // append to the question div
		// $(newCopyButton).appendTo("#questionButtons");

		// var to create a new a element for reset button
		var resetDiv = $("<a>")
		// add attributes: class "button", id "resetButton", text "Reset"
		resetDiv.attr("class", "button")
		resetDiv.attr("id", "resetButton")
		resetDiv.text("Reset")
		// append to the question div
		$(resetDiv).appendTo("#questionButtons");

		// copyQuote() not finished!
		}

		// event listener to copy the quote to be shared

		function copyQuote() {
		// get the value of the quote
			$("#copyButton").on("click", function (event) {
				/* Get the text field */
				var copyText = document.getElementsByClassName("quotePara")

				/* Select the text field */
				copyText.select();
				copyText.setSelectionRange(0, 99999); /*For mobile devices*/

				/* Copy the text inside the text field */
				document.execCommand("copy");
				alert("this is an alert because you clicked copy")
		  });

		}

		// event listener for button to reset the page
		function resetPage() {
		$("#resetButton").on("click", function (event) {
			event.preventDefault()
		// reload the page
		// console.log("reset button clicked")
			location.reload()
		});
		}
});