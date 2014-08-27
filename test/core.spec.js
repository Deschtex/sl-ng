describe('app.core module', function () {

	beforeEach(module('app.core'));

	describe('filters/datetime.js', function () {

		var datetimeFilter; // filter reference
		var weekdays = [
			's\xf6ndag', 'm\xe5ndag', 'tisdag', 'onsdag',
			'torsdag', 'fredag', 'l\xf6rdag'
		];

		beforeEach(inject(function ($filter) {
			datetimeFilter = $filter('datetime');
		}));

		it('should be defined', function () {
			expect(datetimeFilter).not.to.equal(null);
		});

		it('should format and return a long datetime', function () {
			var formatted = datetimeFilter(1401494977880, 'long');
			expect(formatted).to.equal('31 May 2014 02:09');
		});

		it('should format and return a short, dynamic datetime', function () {
			var pad = function (n) { // zero-padding
				return ('0' + n).slice(-2);
			};
			var date = new Date();
			expect(datetimeFilter(1401494977880, 'short')).to.equal('2014-05-31');
			expect(weekdays).to.contain(datetimeFilter((new Date()).setDate(date.getDate() - 2), 'short')); // test week
			expect(datetimeFilter((new Date()).setDate(date.getDate() - 1), 'short')).to.equal('igår'); // test yesterday
			expect(datetimeFilter(date.getTime(), 'short')).to.equal(
				pad(date.getHours()) + ':' + pad(date.getMinutes())
			); // test today
		});

		it('should work in views/templates', inject(function ($interpolate) {
			var exp = $interpolate('{{timestamp | datetime: "long"}}');
			var formatted = exp({ timestamp: 1401494977880 });
			expect(formatted).to.equal('31 May 2014 02:09');
		}));

	});

	describe('services/cache.js', function () {
		it('should be defined', inject(function (Cache) {
			expect(Cache).not.to.equal(null);
		}));
	});

	describe('services/eventlist.js', function () {
		it('should be defined', inject(function (EventList) {
			expect(EventList).not.to.equal(null);
		}));
	});

	describe('services/eventbus.js', function () {
		it('should be defined', inject(function (EventBus) {
			expect(EventBus).not.to.equal(null);
		}));

	});

});