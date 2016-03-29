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

var CaptchaInput = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" name={this.props.name} className="form-control" placeholder="验证码" />
                    </div>
                    <div className="col-sm-6">
                        <Captcha src="/users/captcha"/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports.Captcha = Captcha
module.exports.CaptchaInput = CaptchaInput