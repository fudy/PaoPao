var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/user_menu.css');

UserMenu = React.createClass({

    render: function() {
        var activeStyle = {color:"#005",textDecoration:"none", borderBottom: "3px solid green"}
        var items = this.props.items.map(function (item, i) {
            if (item.active == true) {
                return (
                    <li key={i}><a href={item.href} style={activeStyle}>{item.title}</a></li>
                )
            } else {
                return(
                    <li key={i}><a href={item.href}>{item.title}</a></li>
                )
            }

        })
        return(
            <div className="menu">
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
})

module.exports.UserMenu = UserMenu;


