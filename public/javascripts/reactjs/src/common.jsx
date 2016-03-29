var React = require('react');
var ReactDOM = require('react-dom');

var Captcha = React.createClass({
	captchaStyle : {
		cursor: 'pointer',
		height: '35px',
		width: '100px'
	},

	getInitialState: function() {
    	return { src: this.props.src };
  	},

	changeCaptcha: function(e) {
		var captchaRefreshUrl = this.props.src + '?_=' + new Date().getMilliseconds();
		this.setState({src: captchaRefreshUrl});
	},
	
	render: function() {
		return (
			<img src={this.state.src} alt="正在获取验证码..." style={this.captchaStyle} onClick={this.changeCaptcha}/>
		);
	}
});

module.exports.renderCaptcha = function(id, src) {
	ReactDOM.render(
	  <Captcha src={src}/> ,
	  document.getElementById(id)
	);
}

