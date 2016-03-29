var React = require('react');
var ReactDOM = require('react-dom');
var CaptchaInput = require('./captcha').CaptchaInput;
var ErrorMessageBox = require('./message-box').ErrorMessageBox;
var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    Glyphicon = ReactBootstrap.Glyphicon;

var ForgetForm = React.createClass({
    formStyle : {
        padding: '45px 35px',
        width: '360px',
        border: '1px solid #757e91'
    },
    render : function() {
        var self = this;
        var properties = {
            email: self.props.email || null,
        }
        return (
            <form id="form" role="form" method="post" action="/users/forget" style={this.formStyle}>
                <Input name="email" type="text" placeholder="邮箱"
                       defaultValue={properties.email} feedbackIcon={<Glyphicon glyph="envelope" />} hasFeedback />
                <CaptchaInput name="captcha"/>
                <Button type="submit" bsStyle="primary" style={{marginLeft:"30%"}} ><Glyphicon glyph="log-in" /> 发送邮件</Button>
            </form>
        )
    }
});

var ForgetBox = React.createClass({
    render: function() {
        return (
            <div className="container ">
                <div className="row">
                    <h2>取回密码</h2>
                </div>
                <div className="row" style={{width:"360px"}}>
                    <ErrorMessageBox errors={this.props.errorMsgs} />
                </div>
                <div className="row">
                    <ForgetForm {...this.props}/>
                </div>
            </div>
        )
    }
});

module.exports.renderForgetBox = function(id, email, errorMsgs ) {
    ReactDOM.render(
        <ForgetBox email={email} errorMsgs={errorMsgs} />,
        document.getElementById(id)
    )
}