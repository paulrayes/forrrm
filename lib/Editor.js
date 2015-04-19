'use strict';

var slugify = require('http-slug');

var fs = require('fs');
var cheatSheetMarkdown = fs.readFileSync(__dirname + '/editorCheatSheet.md', 'utf8');
//var cheatSheetHtml = md.render(cheatSheetMarkdown);

module.exports = function(tollan) {
	var React = tollan.React;
	return React.createClass({
		propTypes: {
			name: React.PropTypes.string,
			label: React.PropTypes.string.isRequired,
			value: React.PropTypes.string,
			placeholder: React.PropTypes.string,
			disabled: React.PropTypes.bool,
			readOnly: React.PropTypes.bool,
			message: React.PropTypes.string,
			errorText: React.PropTypes.array,
			onChange: React.PropTypes.func
		},
		getInitialState: function getInitialState() {
			return {
				focused: false,
				fullscreen: false,
				cheatsheet: false,
				md: undefined,
				cheatSheetHtml: ''
			};
		},
		onCloseClick: function onCloseClick(e) {
			e.preventDefault();
			this.setState({
				fullscreen: !this.state.fullscreen
			});
		},
		onCheatsheetClick: function onCheatsheetClick(e) {
			e.preventDefault();
			this.setState({
				cheatsheet: !this.state.cheatsheet
			});
		},
		componentDidMount: function componentDidMount() {
			tollan.loadBundle('remarkable').then(() => {
				var Remarkable = require('remarkable');
				var md = new Remarkable('full');
				this.setState({
					md: md,
					cheatSheetHtml: md.render(cheatSheetMarkdown)
				});
			});
		},
		render: function render() {
			var className = 'Input Editor';
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
			if (this.state.cheatsheet) {
				className += ' Editor--Cheatsheet';
			}
			if (this.state.fullscreen) {
				className += ' Editor--Fullscreen';
			} else {
				className += ' Editor--Closed';
			}
			var name = slugify(this.props.label);
			if (this.props.errorText) {
				var message = <span className="message">{this.props.errorText[0]}</span>;
			} else if (this.props.message) {
				var message = <span className="message">{this.props.message}</span>
			} else {
				var message = null;
			}
			if (typeof this.state.md !== 'undefined') {
				var html = this.state.md.render(this.props.value);
			} else {
				var html = 'Loading...';
			}
			return (
				<div className={className}>
					<label htmlFor={name}>{this.props.label}</label>
					<div className="Editor-Menu">
						<button onClick={this.onCloseClick}>Close</button>
						<button onClick={this.onCheatsheetClick}>Cheatsheet</button>
					</div>
					<div className="Editor-Container">
						<textarea name={name} id={name} value={this.props.value} placeholder={this.props.placeholder} disabled={this.props.disabled} readOnly={this.props.readOnly} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} ref="input" />
						<div className="Editor-Preview" onClick={this.setFocus} dangerouslySetInnerHTML={{__html: html}}></div>
						<div className="Editor-CheatSheet" dangerouslySetInnerHTML={{__html: this.state.cheatSheetHtml}}></div>
					</div>
					{message}
				</div>
			);
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
		},
		focus: function() {
			this.refs.input.getDOMNode().focus();
			this.refs.input.getDOMNode().value = '';
			this.refs.input.getDOMNode().value = this.props.value;
		},
		setFocus: function setFocus() {
			if (this.state.fullscreen !== true) {
				this.setState({focused: true, fullscreen: true});
			}
		},
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			if (prevState.focused === false && this.state.focused === true) {
				this.focus();
			}
		}
	});
};
