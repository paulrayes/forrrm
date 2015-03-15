'use strict';

module.exports = function(React) {
	return React.createClass({
		propTypes: {
			toastClass: React.PropTypes.string,
			text: React.PropTypes.string,
			onHide: React.PropTypes.func
		},
		getInitialState: function() {
			return {
				visible: true,
				timer: null
			};
		},
		onMouseOver: function() {
			if (this.state.visible) {
				clearTimeout(this.state.timer);
			}
		},
		onMouseLeave: function() {
			this.setState({
				timer: setTimeout(this.onTimer, 1000)
			});
		},
		onTimer: function() {
			if (this.props.onHide) {
				this.props.onHide();
			}
			this.setState({visible: false});
		},
		componentWillUnmount: function() {
			clearTimeout(this.state.timer);
		},
		componentWillReceiveProps: function(nextProps) {
			clearTimeout(this.state.timer);
			if (nextProps.visible) {
				this.setState({
					visible: true,
					timer: setTimeout(this.onTimer, 5000)
				});
			} else {
				this.setState({
					visible: false
				});
			}
		},
		render: function() {
			var className = '';
			if (this.props.text) {
				className = 'Toast';
				if (this.props.toastClass === 'error') {
					className += '-' + this.props.toastClass;
				}
				if (this.state.visible) {
					className += ' Toast-visible';
				}
			}
			return <div className={className} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>{this.props.text}</div>;
		}
	});
};
