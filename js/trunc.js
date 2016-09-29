// Settings for script
$(document).ready(function() {
	$('.readmore').jTruncate({
		length: 150, /* The number of characters to display before hidden. */

		minTrail: 0, /* The minimum number of "extra" characters required to truncate. This line means to allows you to prevent shortening a section of text that is only a few characters longer than the specified length. */

		moreText: "Leia mais",
		lessText: "Voltar",
		ellipsisText: "...", //
	});
});