'use strict';

module.exports = function(React) {
	var slugify = require('http-slug');
	var insignia, horsey;
	// insignia doesn't work in Node so catch that hackily
	try {
		insignia = require('insignia');
		horsey = require('horsey');
	} catch (e) {
		if (e.message !== 'document is not defined') {
			throw e;
		}
	}
	return React.createClass({
		propTypes: {
			name: React.PropTypes.string,
			label: React.PropTypes.string.isRequired,
			//value: React.PropTypes.string,
			//placeholder: React.PropTypes.string,
			disabled: React.PropTypes.bool,
			readOnly: React.PropTypes.bool,
			message: React.PropTypes.string,
			errorText: React.PropTypes.array,
			onChange: React.PropTypes.func,
			tags: React.PropTypes.array,
			selected: React.PropTypes.array
		},
		getInitialState: function getInitialState() {
			return {
				focused: false
			};
		},
		componentDidMount: function componentDidMount() {
			//console.log(this.refs.input.getDOMNode());
			insignia(this.refs.input.getDOMNode(), {
				delimiter: ',',
				deletion: true,
				validate: this.validateInsignia
			});
			var suggestions = [];
			this.props.tags.forEach(tag => {
				suggestions.push({
					value: tag.slug,
					text: tag.name
				});
			});
			horsey(this.refs.input.getDOMNode(), {
				suggestions: suggestions
			});
		},
		validateInsignia: function validateInsignia(value, tags) {
			if (tags.indexOf(value) !== -1) {
				// Duplicate tag
				return false;
			}
			var tagSlugs = [];
			this.props.tags.forEach(tag => {
				tagSlugs.push(tag.slug);
			});
			if (tagSlugs.indexOf(value) === -1) {
				// Tag is not a real one
				return false;
			}
			//console.log(value);
			//console.log(this.props.tags);
			return true;
		},
		componentWillUnmount: function componentWillUnmount() {
			insignia(this.refs.input.getDOMNode()).destroy();
			horsey(this.refs.input.getDOMNode()).destroy();
		},
		shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
			if (nextState.focused && this.state.focused) {
				return false;
			}
			return true;
		},
		render: function render() {
			var className = 'Input TagList';
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
			var message;
			if (this.props.errorText) {
				message = <span className="message">{this.props.errorText[0]}</span>;
			} else if (this.props.message) {
				message = <span className="message">{this.props.message}</span>;
			}

			var tagsString;
			if (typeof this.props.selected === 'undefined') {
				tagsString = '';
			} else {
				tagsString = this.props.selected.join(',');
			}

			return (
				<div className={className}>
					<label htmlFor={name}>{this.props.label}</label>
					<div><input type="text" name={name} id={name} defaultValue={tagsString} disabled={this.props.disabled} readOnly={this.props.readOnly} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} ref="input" /></div>
					{message}
				</div>
			);
		},
		onChange: function onChange(event) {
			var newValue = insignia(this.refs.input.getDOMNode()).tags();//event.target.value;
			//console.log(newValue);
			if (this.props.onChange) {
				this.props.onChange(newValue);
			}
		},
		onFocus: function onFocus(event) {
			this.setState({focused: true});
		},
		onBlur: function onBlur(event) {
			this.setState({focused: false});
			var newValue = insignia(this.refs.input.getDOMNode()).tags();//event.target.value;
			if (this.props.onChange) {
				this.props.onChange(newValue);
			}
		},
		focus: function() {
			this.refs.input.getDOMNode().focus();
			this.refs.input.getDOMNode().value = '';
			this.refs.input.getDOMNode().value = this.props.value;
		}
	});
};
