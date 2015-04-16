'use strict';

module.exports = function(React) {
	return {
		TextInput: require('./components/TextInput')(React),
		Checkbox: require('./components/Checkbox')(React),
		Toast: require('./components/Toast')(React),
		TagList: require('./components/TagList')(React)
	};
};
