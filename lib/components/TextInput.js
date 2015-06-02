'use strict';

var slugify = require('http-slug');

module.exports = function(React) {
	return React.createClass({
		propTypes: {
			name: React.PropTypes.string,
			label: React.PropTypes.string.isRequired,
			value: React.PropTypes.string,
			placeholder: React.PropTypes.string,
			multiline: React.PropTypes.bool,
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
			var className = 'Input InputText';
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
			var name = this.state.name;
			if (!name) {
				name = slugify(this.props.label);
			}
			if (this.props.errorText) {
				var message = <span className="message">{this.props.errorText[0]}</span>;
			} else if (this.props.message) {
				var message = <span className="message">{this.props.message}</span>
			} else {
				var message = null;
			}
			var input;
			if (this.props.multiline) {
				input = <textarea name={name} id={name} value={this.props.value} placeholder={this.props.placeholder} disabled={this.props.disabled} readOnly={this.props.readOnly} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} ref="input" />;
			} else {
				input = <input type="text" name={name} id={name} value={this.props.value} placeholder={this.props.placeholder} disabled={this.props.disabled} readOnly={this.props.readOnly} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} ref="input" />;
			}
			return (
				<div className={className}>
					<label htmlFor={name}>{this.props.label}</label>
					{input}
					<div className="hiddenDiv" ref="hiddenDiv"></div>
					{message}
				</div>
			);
		},
		componentDidMount: function() {
			this.componentDidUpdate();
		},
		componentDidUpdate: function() {
			if (this.props.multiline) {
				var hiddenDiv = this.refs.hiddenDiv.getDOMNode();
				var input = this.refs.input.getDOMNode();
				hiddenDiv.innerHTML = this.props.value+'5'; // add character in case last line is empty
				input.style.height = (hiddenDiv.offsetHeight) + 'px';
			}
		},
		onChange: function onChange(event) {
			var newValue = event.target.value;
			if (this.props.onChange) {
				this.props.onChange(newValue);
			}
		},
		onFocus: function onFocus(event) {
			this.setState({focused: true});
		},
		onBlur: function onBlur(event) {
			this.setState({focused: false});
			if (this.props.onChange) {
				this.props.onChange(this.refs.input.getDOMNode().value);
			}
		},
		focus: function() {
			this.refs.input.getDOMNode().focus();
			this.refs.input.getDOMNode().value = '';
			this.refs.input.getDOMNode().value = this.props.value;
		}
	});
};
