var React = require('react');
var ReactDOM = require('react-dom');
var ErrorMessageBox = require('./component/message-box').ErrorMessageBox;
var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    ButtonInput = ReactBootstrap.ButtonInput,
    Glyphicon = ReactBootstrap.Glyphicon;


var LoginForm = React.createClass({
    formStyle : {
        padding: '45px 35px',
        width: '360px',
        border: '1px solid #757e91'
    },

    render : function() {
        var self = this;
        var properties = {
            username: self.props.username || null,
            password: self.props.password || null,
            rememberMe: self.props.rememberMe == 'true' ? true : false
        }

        return (
                <form id="form" method="post" action="/login" style={this.formStyle}>
                    <Input name="username" type="text" placeholder="用户名" defaultValue={properties.username}
                           feedbackIcon={<Glyphicon glyph="user" />} hasFeedback />

                    <Input name="password" type="password" placeholder="密 码" defaultValue={properties.password}
                           feedbackIcon={<Glyphicon glyph="lock" />} hasFeedback />

                    <span className="checkbox">
                      <label style={{color: '#777'}}>
                          <input type="checkbox" name="rememberMe" value="true" defaultChecked={properties.rememberMe} />
                          记住用户名
                      </label>
                      <label className="pull-right" >
                          <a href="/forget" style={{color: '#777'}}>忘记密码</a>
                      </label>
                    </span>

                    <div className="text-center"  style={{marginTop: '30px'}}>
                        <Button type="submit" bsStyle="primary"><Glyphicon glyph="log-in" /> 登 录</Button>
                        <span className="pull-right" >
                            <a href="/signup" style={{lineHeight: '42px'}}>注册</a>
                        </span>
                    </div>
                </form>
        )
    }
});

var LoginBox = React.createClass({
    render: function() {
        return (
            <div className="container ">
                <div className="row">
                    <h2>跑跑测评</h2>
                </div>
                <div className="row" style={{width:"360px"}}>
                    <ErrorMessageBox errors={this.props.errorMsgs} />
                </div>
                <div className="row">
                    <LoginForm {...this.props}/>
                </div>
            </div>
        )
    }
});

module.exports.renderLoginBox = function(id, username, password, rememberMe, errorMsgs) {
    ReactDOM.render(

        <LoginBox username={username} password={password} rememberMe={rememberMe} errorMsgs={errorMsgs}/>,
        document.getElementById(id)
    )
}


