var React = require('react');
var ReactDOM = require('react-dom');
var Captcha = require('./captcha').Captcha;
var CaptchaInput = require('./captcha').CaptchaInput;
var ErrorMessageBox = require('./message-box').ErrorMessageBox;
var UserProtocal = require('./protocal').UserProtocal;

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    ButtonInput = ReactBootstrap.ButtonInput,
    Glyphicon = ReactBootstrap.Glyphicon;

var SignupBox = React.createClass({
   render: function() {
       return(
           <div className="container ">
               <div className="row">
                   <h2>跑跑测评</h2>
               </div>
               <div className="row" style={{width:"360px"}}>
                   <ErrorMessageBox errors={this.props.errorMsgs} />
               </div>
               <div className="row">
                   <SignupForm {...this.props}/>
               </div>
           </div>
       )
   }
})
var SignupForm = React.createClass({

    formStyle : {
        padding: '45px 35px',
        width: '360px',
        border: '1px solid #757e91'
    },

    render: function() {
        var self = this;
        var properties = {
            username: self.props.username || null,
            email: self.props.email || null,
            password: self.props.password || null,
            repassword: self.props.repassword || null,
            captcha: self.props.captcha || null,
            rememberMe: self.props.rememberMe == 'true' ? true : false
        }
        return(
            <form id="form" role="form" className="pp-form" method="post" style={this.formStyle}>
                <Input name="username" type="text" placeholder="用户名(6-40位中英文、数字、下划线)"
                       defaultValue={properties.username} feedbackIcon={<Glyphicon glyph="user" />} hasFeedback />

                <Input name="email" type="text" placeholder="邮箱"
                       defaultValue={properties.email} feedbackIcon={<Glyphicon glyph="envelope" />} hasFeedback />

                <Input name="password" type="password" placeholder="密码(6-40位数字、英文、特殊符号)"
                       defaultValue={properties.password} feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />

                <Input name="repassword" type="password" placeholder="确认密码"
                       defaultValue={properties.repassword} feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />

                <CaptchaInput name="captcha"/>

                <Input id="agreement" type="checkbox" style={{float:"left"}} wrapperClassName="col-xs-12" />
                <span style={{marginLeft:"15px"}}>我同意跑跑测评<UserProtocal /></span>

                <div className="form-group" style={{marginTop:"20px"}}>
                    <a href="/users/login" className="pull-right" style={{lineHeight: "42px"}}>登录</a>
                    <Button type="submit" bsStyle="primary" style={{marginLeft:"40%"}} disabled><Glyphicon glyph="log-in" /> 注 册</Button>
                </div>
            </form>
        )

    }
})

module.exports.renderSignupBox = function(id, username, email, password, repassword, errorMsgs ) {
    ReactDOM.render(
        <SignupBox username={username} email={email} password={password} repassword={repassword} errorMsgs={errorMsgs} />,
        document.getElementById(id)
    )
}
