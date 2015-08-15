'use strict';

var slugify = require('http-slug');

module.exports = function(React) {
	return React.createClass({
		propTypes: {
			name: React.PropTypes.string,
			label: React.PropTypes.string.isRequired,
			checked: React.PropTypes.bool,
			disabled: React.PropTypes.bool,
			readOnly: React.PropTypes.bool,
			message: React.PropTypes.string,
			errorText: React.PropTypes.array,
			onChange: React.PropTypes.func
		},
		getInitialState: function getInitialState() {
			return {
				focused: false
			};
		},
		render: function render() {
			var className = 'Checkbox';
			if (this.state.focused) {
				className += ' focused';
			}
			if (this.props.errorText) {
				className += ' invalid';
			}
			if (this.props.disabled) {
				className += ' disabled';
			}
			if (this.props.readOnly) {
				className += ' readonly';
			}
			if (this.props.checked) {
				className += ' checked';
			}
			var name = this.state.name;
			if (!name) {
				name = slugify(this.props.label);
			}
			var message;
			if (this.props.errorText) {
				message = <span className="message">{this.props.errorText[0]}</span>;
			} else if (this.props.message) {
				message = <span className="message">{this.props.message}</span>;
			}
			return (
				<div className={className}>
					<input type="checkbox" name={name} id={name} checked={this.props.checked} disabled={this.props.disabled} readOnly={this.props.readOnly} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} ref="input" />
					<label htmlFor={name}>
						<span className="checkboxBox"></span>
						<i className="fa fa-check"></i>
						{this.props.label}
					</label>
					{message}
				</div>
			);
		},
		onChange: function onChange(event) {
			var newValue = event.target.checked;
			if (this.props.onChange) {
				this.props.onChange(newValue);
			}
		},
		onFocus: function onFocus(event) {
			this.setState({focused: true});
		},
		onBlur: function onBlur(event) {
			this.setState({focused: false});
		},
		focus: function() {
			this.refs.input.getDOMNode().focus();
			this.refs.input.getDOMNode().value = '';
			this.refs.input.getDOMNode().value = this.props.value;
		}
	});
};
