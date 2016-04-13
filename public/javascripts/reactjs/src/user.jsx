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
        <UserMenu items={[
        {href: "?page=0", title: "我的发帖", active: true},
        {href: "?page=1", title: "我的回帖"},
        {href: "?page=2", title: "我的投票"},
        {href: "?page=3", title: "我的收藏"},
        {href: "?page=4", title: "我要发帖"}
        ]}/>,
        document.getElementById(id)
    )
}