(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.dialogues.dialogue').controller(
			'DialogueCtrl', ['$scope', 'Dialogue', 'EventBus', 'EventList', F]
		);
	};

	/**
	 * @ngdoc controller
	 * @module app.dialogues
	 * @name DialogueCtrl
	 */
	function F ($scope, Dialogue, EventBus, EventList) {
		/**
		 * Gets the dialogue synopsis from the model.
		 * @param  {Object} dialogue
		 * @return {String}
		 */
		$scope.getSynopsis = function (dialogue) {
			return Dialogue.getSynopsis(dialogue.messages);
		};
		/**
		 * Gets the dialogue time from the model. 
		 * @param  {Object} dialogue
		 * @return {String}
		 */
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

}(window.angular));