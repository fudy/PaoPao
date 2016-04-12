var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/upload_btn.css');

var UploadButton = React.createClass({

    render: function() {
        return (
            <span className="btn btn-default btn-file">
                上 传 <input type="file" ref="fileInput" {...this.props}/>
            </span>
        );
    }
});

module.exports.UploadButton = UploadButton;