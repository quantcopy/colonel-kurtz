var React = require('react');
var Ink   = require('react-ink');

var Button = React.createClass({

  getDefaultProps() {
    return {
      inkColor : null,
      tagName  : 'button'
    }
  },

  render() {
    var { children, inkColor, tagName, ...attrs } = this.props;

    return (
      React.createElement(tagName, attrs, [
        <Ink key="__ink" color={ inkColor } />,
        children
      ])
    );
  }
});

module.exports = Button;
