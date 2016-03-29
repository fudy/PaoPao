var React = require('react');
var ReactDOM = require('react-dom');
var ErrorMessageBox = require('./message-box').ErrorMessageBox;
var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    ButtonInput = ReactBootstrap.ButtonInput,
    Glyphicon = ReactBootstrap.Glyphicon;

var ResetPasswordForm = React.createClass({
    formStyle : {
        padding: '45px 35px',
        width: '360px',
        border: '1px solid #757e91'
    },
    render: function() {
        var self = this;
        var properties = {
            password: self.props.password || null,
            repassword: self.props.repassword || null
        }
        return (
            <form id="form" role="form" method="post" action="/users/reset_password" style={this.formStyle}>
                <Input name="password" type="password" placeholder="密码(6-40位数字、英文、特殊符号)"
                       defaultValue={properties.password} feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />

                <Input name="repassword" type="password" placeholder="确认密码"
                       defaultValue={properties.repassword} feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />

                <Button type="submit" bsStyle="primary" style={{marginLeft:"35%"}} ><Glyphicon glyph="log-in" />&nbsp; 重置密码
                </Button>
            </form>
        )
    }
});

var ResetPasswordBox = React.createClass({
    render: function() {
        return (
            <div className="container ">
                <div className="jumbotron" >
                    <div className="row">
                        <h3>重置密码</h3>
                    </div>
                    <div className="row" style={{width:"360px"}}>
                        <ErrorMessageBox errors={this.props.errorMsgs} />
                    </div>
                    <div className="row">
                        <ResetPasswordForm password={this.props.password} repassword={this.props.repassword} />
                    </div>
                </div>
            </div>
        )
    }
})

module.exports.renderResetPasswordBox = function(id, password, repassword, errorMsgs ) {
    ReactDOM.render(
        <ResetPasswordBox password={password} repassword={repassword} errorMsgs={errorMsgs} />,
        document.getElementById(id)
    )
}