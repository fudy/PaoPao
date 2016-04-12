var React = require('react');
var ReactDOM = require('react-dom');
var ProfileImageBox = require('./component/profile-image-box').ProfileImageBox
var LeftMenu = require('./component/left-menu.jsx').LeftMenu;
var UserMenu = require('./component/user-menu.jsx').UserMenu;

module.exports.renderLeftMenu = function (id) {
    ReactDOM.render(
        <LeftMenu items={[
                    {href: "#", title: "基本信息"},
                    {href: "#", title: "系统消息"},
                    {href: "#", title: "密码修改"},
                    {href: "#", title: "邮箱修改"}
                    ]}/>,
        document.getElementById(id)
    )
}


module.exports.renderProfileImageBox = function (id) {
    ReactDOM.render(
        <ProfileImageBox />,
        document.getElementById(id)
    )
}

module.exports.renderUserMenu = function(id) {
    ReactDOM.render(
        <UserMenu />,
        document.getElementById(id)
    )
}