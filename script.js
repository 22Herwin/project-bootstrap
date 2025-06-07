// Search functionality
document.querySelector('.search-input').addEventListener('keyup', function (e) {
	if (e.key === 'Enter') {
		alert('Searching for: ' + this.value);
		// Here you would typically trigger your search functionality
	}
});

// Details toggle functionality
function toggleDetails(button) {
	// Find the related album-details div
	const detailsDiv = button.nextElementSibling;

	// Close any other open details first
	document.querySelectorAll('.album-details.show').forEach((item) => {
		if (item !== detailsDiv) {
			item.classList.remove('show');
		}
	});

	// Toggle the show class on the clicked element
	detailsDiv.classList.toggle('show');
}

// Close details when clicking outside
document.addEventListener('click', function (event) {
	// If the click is not on a details button or details content
	if (
		!event.target.closest('.btn-detail') &&
		!event.target.closest('.album-details')
	) {
		// Hide all detail panels
		document.querySelectorAll('.album-details').forEach((details) => {
			details.classList.remove('show');
		});
	}
});
