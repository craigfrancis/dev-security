
(function(window, document, undefined) {

	var notes_ref = $('<div>');
	notes_ref.attr('id', 'notes');

	$('#window').addClass('js').after(notes_ref);

	$('#window section footer').hide();

	$('#window nav a').click(function() {

		var link = $(this),
			target_wrapper = $(link.attr('href')),
			target_notes = target_wrapper.find('footer').clone(),
			notes_heading = $('<h2 />').text(link.text() + ' Notes');

		if (target_wrapper.length == 1) {

			$('#window nav li.focus').removeClass('focus');

			link.closest('li').addClass('focus');

			$('#window section').hide();
			target_wrapper.show();

			notes_ref.empty();
			if (target_notes.length > 0) {
				target_notes.show();
				notes_ref.empty().append(notes_heading, target_notes);
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
