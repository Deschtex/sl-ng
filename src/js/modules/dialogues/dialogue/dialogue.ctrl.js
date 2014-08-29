(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.controller('DialogueCtrl', [
			'$scope', 'Dialogue', 'EventBus', 'EventList', F
		]);
	};

	/**
	 * @ngdoc controller
	 * @module app.dialogues.dialogue
	 * @name DialogueCtrl
	 */
	function F ($scope, Dialogue, EventBus, EventList) {
		$scope.getSynopsis = function (dialogue) {
			return Dialogue.getSynopsis(dialogue.messages);
		};
		$scope.getTime = function (dialogue) {
			return Dialogue.getTime(dialogue.messages);
		};
		return ({ // exposed API
			/**
			 * Publishes the selected dialogue.
			 * @param {Object} dialogue
			 */
			publishSelected: function (dialogue) {
				EventBus.publish(EventList.DIALOGUE_SELECTED, dialogue);
			},
			/**
			 * Sets the selected dialogue on the parent scope.
			 * @param {Object} dialogue
			 */
			select: function (dialogue) {
				$scope.$parent.selectedDialogue = dialogue;
			}
		});
	}

}(require('angular')));