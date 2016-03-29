var React = require('react');
var ReactDOM = require('react-dom');
var ErrorMessageBox = require('./message-box').ErrorMessageBox;
var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    ButtonInput = ReactBootstrap.ButtonInput,
    Glyphicon = ReactBootstrap.Glyphicon;

var EmailValidationForm = React.createClass({

    render: function() {
        var self = this;
        var properties = {
            email: self.props.email || null,
        }
        return (
            <form id="form" role="form" method="post" action="/users/validate_email">
                <input type="hidden" name="email" value={properties.email} />
                <Input name="code" type="text" placeholder="验证码"
                       feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />
                <Button type="submit" bsStyle="primary" style={{marginLeft:"35%"}} ><Glyphicon glyph="log-in" />&nbsp; 验 证
                </Button>
            </form>
        )
    }
});


var EmailValidationBox = React.createClass({
    boxStyle: {
        width: "420px",
        marginTop:"80px",
        paddingTop: "20px",
        border: "1px solid #aaa",
        backgroundColor: "#eceef1"
    },
    render: function() {
        return(
            <div className="container" style={this.boxStyle}>
                <div className="alert alert-success">
                    验证码已经发送到指定邮箱，请打开邮箱，<br/>复制验证码，粘贴到文本框中！
                </div>
                <div className="jumbotron" style={{border: "1px solid #aaa"}}>
                    <div className="row" >
                        <ErrorMessageBox errors={this.props.errorMsgs} />
                    </div>
                    <div className="row">
                        <EmailValidationForm email={this.props.email}/>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports.renderEmailValidationBox = function(id, email, errorMsgs ) {
    ReactDOM.render(
        <EmailValidationBox email={email} errorMsgs={errorMsgs} />,
        document.getElementById(id)
    )
}
