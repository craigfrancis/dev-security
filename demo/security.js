
(function(window, document, undefined) {

	var notes_ref = $('<div>').attr('id', 'notes');

	$('#window').addClass('js').after(notes_ref);

	$('#window section footer').hide();

	$('#window nav a').click(function() {

		var link = $(this),
			target = $(link.attr('href')),
			notes_clone = target.find('footer').clone(),
			notes_heading = $('<h2>').text(link.text() + ' Notes');

		if (target.length == 1) {

			$('#window nav li.focus').removeClass('focus');
			link.closest('li').addClass('focus');

			$('#window section').hide();
			target.show();

			notes_ref.empty();
			if (notes_clone.length > 0) {
				notes_clone.show();
				notes_ref.empty().append(notes_heading, notes_clone);
			}

		}

	});

	var hash = window.location.hash;
	if (hash.match(/^#[a-z]+$/)) {
		$('#window nav a[href="' + hash + '"]').click();
	} else {
		$('#window nav a[href="#tls"]').click();
	}

})(window, document);
