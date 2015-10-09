'use strict';

var React = require('react');
var classes = require('classnames');

var Option = React.createClass({
	displayName: 'Option',

	propTypes: {
		children: React.PropTypes.any,
		className: React.PropTypes.string,
		optionGroup: React.PropTypes.shape({
			label: React.PropTypes.string.isRequired,
			options: React.PropTypes.array.isRequired
		}).isRequired, // object that is base for that option
		renderFunc: React.PropTypes.func // method passed to ReactSelect component to render label text
	},

	blockEvent: function blockEvent(event) {
		event.preventDefault();
		if (event.target.tagName !== 'A' || !('href' in event.target)) {
			return;
		}

		if (event.target.target) {
			window.open(event.target.href);
		} else {
			window.location.href = event.target.href;
		}
	},

	render: function render() {
		var obj = this.props.optionGroup;
		var renderedLabel = this.props.renderFunc(obj);
		return React.createElement(
			'div',
			{ className: classes(this.props.className, 'Select-optionGroup') },
			React.createElement(
				'div',
				{
					className: 'Select-optionGroup-label',
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				React.createElement(
					'strong',
					null,
					renderedLabel
				)
			),
			this.props.children
		);
	}
});

module.exports = Option;