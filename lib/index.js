'use strict';

module.exports = function(React) {
	return {
		TextInput: require('./components/TextInput')(React),
		Toast: require('./components/Toast')(React)
	};
};
