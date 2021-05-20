/// Animations à l'apparition
/// ============================
const ratio = 0.3;

const options = {
	'root': null,
	'rootMargin': '0px',
	'threshold': ratio
};

const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.target.clientHeight > window.innerHeight || entry.intersectionRatio > ratio) {
			entry.target.classList.remove('gt_reveal');
			observer.unobserve(entry.target);
		}
	});
}

document.addEventListener('turbolinks:load', function() {
	const observer = new IntersectionObserver(handleIntersect, options);
	document.querySelectorAll('.gt_reveal').forEach(function (r) {
		observer.observe(r);
	});
});