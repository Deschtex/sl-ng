(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.factory('Dialogue', ['$http', 'Cache', F]);
	};

	/**
	 * @ngdoc factory
	 * @module app.dialogues.dialogue
	 * @name Dialogue
	 */
	function F ($http, Cache) {
		var SYNOPSIS_MAX_LENGTH = 85;
		function getLastMessage (messages) {
			return messages[messages.length - 1];
		}
		return ({
			load: function () {
				return $http.get('data/dialogues.json', {
					cache: Cache.get('app.dialogues')
				});
			},
			getSynopsis: function (messages) {
				var message = getLastMessage(messages).text;
				var sub = message.substr(0, SYNOPSIS_MAX_LENGTH);
				return sub.replace('<br><br>', '<br>...<br><br>');
			},
			getTime: function (messages) {
				return getLastMessage(messages).timestamp;
			}
		});
	}

}(require('angular')));