
(function(window, document, undefined) {

	var notes_ref = $('<div>').attr('id', 'notes');

	$('#window').addClass('js').after(notes_ref);

	$('#window section footer').hide();

	$('#window nav a').click(function(e) {

		var link = $(this),
			href = link.attr('href'),
			target = $(href),
			notes_clone = target.find('footer').clone(),
			notes_heading = $('<h2>').text(link.find('span').text() + ' Notes');

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

			if ('replaceState' in history) {
				history.replaceState('', '', href);
				e.preventDefault();
			}

		}

	});

	var hash = window.location.hash;
	if (hash.match(/^#[a-z]+$/)) {
		$('#window nav a[href="' + hash + '"]').click();
	} else {
		$('#window nav a[href="#tls"]').click();
	}

	var https_checkbox = $('<input>').attr('id', 'https_mode').attr('type', 'checkbox'),
		https_label = $('<label>').attr('for', 'https_mode').text('HTTPS Mode'),
		https_wrapper = $('<p>').addClass('https_mode');

	function https_mode() {
		$('#window').toggleClass('https', this.checked).toggleClass('http', !this.checked);
	}

	if ($('#window').hasClass('https')) {
		https_checkbox.attr('checked', 'checked');
	}

	https_wrapper.append(https_checkbox, https_label);
	https_checkbox.change(https_mode).change();

	$('p#intro').after(https_wrapper);

})(window, document);




(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-309730-11', 'auto');
ga('send', 'pageview');
