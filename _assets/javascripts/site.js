var cursorTimeout, cursorStates, cursorStatesIndex;

$(function() {
	console.log("Let's do this!");

	cursorStates = [
		"n-resize",
		"ne-resize",
		"e-resize",
		"se-resize",
		"s-resize",
		"sw-resize",
		"w-resize",
		"nw-resize"
	];
	cursorStatesIndex = 0;
	$('.header__logo').hover(function() {
		cursorTimeout = setInterval(function() {
			$('.header__logo').css('cursor', cursorStates[cursorStatesIndex]);
			//console.log(cursorStates[cursorStatesIndex]);
			cursorStatesIndex++;
			if (cursorStatesIndex >= cursorStates.length) cursorStatesIndex = 0;
		}, 60);
	}, function() {
		$('.header__logo').css('cursor', 'auto');
		clearInterval(cursorTimeout);
	})


});