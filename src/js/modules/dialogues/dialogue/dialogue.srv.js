(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.factory('Dialogue', F);
	};

	/**
	 * @ngdoc factory
	 * @module app.dialogues.dialogue
	 * @name Dialogue
	 */
	function F () {
		var SYNOPSIS_MAX_LENGTH = 85;
		function getLastMessage (messages) {
			return messages[messages.length - 1];
		}
		return ({
			/**
			 * Constructs and returns a synopsis based 
			 * on the full text of the message.
			 * @param  {Array} messages List of messages
			 * @return {String} Constructed synopsis
			 */
			getSynopsis: function (messages) {
				var message = getLastMessage(messages).text;
				var sub = message.substr(0, SYNOPSIS_MAX_LENGTH);
				return sub.replace('<br><br>', '<br>...<br><br>');
			},
			/**
			 * Returns the timestamp of the last message.
			 * @param  {Array} messages List of messages
			 * @return {Number} Last message's timestamp
			 */
			getTime: function (messages) {
				return getLastMessage(messages).timestamp;
			}
		});
	}

}(require('angular')));