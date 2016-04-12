var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem

LeftMenu = React.createClass({

    render: function() {
        const title = (
            <h3 style={{textAlign: "center"}}>我的资料</h3>
        );

        var items = this.props.items.map(function (item, i) {
            return (
                <ListGroupItem key={i} href={item.href}>
                    <div style={{textAlign: "center"}}>
                        {item.title}
                    </div>
                </ListGroupItem>
            )
        });

        return(
            <Panel header={title}>
                <ListGroup fill>
                    {items}
                </ListGroup>
            </Panel>
        )
    }
})

module.exports.LeftMenu = LeftMenu;