var generatedQuote = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

$(document).ready(function() {
    $("#request").on("click", function() { 
      $.getJSON(generatedQuote, function(data) {
        $("#get-quote").html(data.quoteText);
        $("#get-author").html(data.quoteAuthor);
      });
    });
});
