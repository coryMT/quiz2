// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now //DONE
//  - use js and html to create at least one custom accordion (by yourself, no copy paste) //DONE
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point //DONE
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button //DONE
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!) //DONE

(function($) {
	$('.links li a').click(function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log('this is a message for you!!!');
})(jQuery);

$('ol > li').each(function(index) {
	$(this).css('color', 'red');
	$(this).text('This item in the list is number ' + index + '.' );
});

function buttonClicked(id) {
	var x = document.getElementById(id);

	for(var i = 0; i < 4; i++){
		if(i == id){
			x.className = 'appear';
		}
		else {
			document.getElementById(i).className = 'invisibleForNow';
		}
	}

}

$(document).ready(function() {
	$('.exitButton').click(function() {
		$('body').fadeOut(600, function() {
			$('body').text('Goodbye!');
			$('body').show();
		});
	});
});

$(document).ready(function() {
	$('.clickForQuiz').click(function() {
		$('#quiz').slideDown(4000);
	});
});
