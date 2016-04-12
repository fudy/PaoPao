var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/user_menu.css');
//TODO
UserMenu = React.createClass({
    render: function() {
        return(
            <div className="menu">
                <ul>
                    <li>
                        <a href="#" style={{color:"#005",textDecoration:"none", borderBottom: "3px solid green"}}>
                            我的发帖
                        </a>
                    </li>
                    <li><a href="#">我的回帖</a></li>
                    <li><a href="#">我的投票</a></li>
                    <li><a href="#">我的收藏</a></li>
                    <li><a href="/articles/article">我要发帖</a></li>
                </ul>
            </div>
        )
    }
})

module.exports.UserMenu = UserMenu;


