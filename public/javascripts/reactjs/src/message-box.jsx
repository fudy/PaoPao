var React = require('react');
var ReactDOM = require('react-dom');

var ErrorMessageBox = React.createClass({
    componentStyle: {
        width:"100%",
        fontSize: "14px"
    },
    render: function() {
        var errs = this.props.errors
        var errElements = null;
        console.log(errs)
        if (errs && errs.length > 0) {
            errElements = errs.map(function (err, i) {
                return <div key={i} className="glyphicon glyphicon-remove-sign gi-x">{err}</div>
            });
            return(
                <div className="alert alert-danger" style={this.componentStyle}>
                    {errElements}
                </div>
            )
        } else {
            return null
        }

    }

});

module.exports.ErrorMessageBox = ErrorMessageBox