(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.messages.message').controller(
			'MessageCtrl', ['$scope', F]
		);
	};

	/**
	 * @ngdoc controller
	 * @module app.messages
	 * @name MessageCtrl
	 */
	function F ($scope) {
		$scope.getSelectedClass = function (message) {
			return $scope.isSelected(message) && 'is-selected';
		};
		$scope.getTypeClass = function (message) {
			return 'message--' + message.type;
		};
		return ({ // exposed API
			select: function (message) {
				$scope.$parent.selectedMessage = message;
			},
			setCopyButtonSettings: function (settings) {
				$scope.$parent.copySettings = settings;
			}
		});
	}

}(require('angular')));