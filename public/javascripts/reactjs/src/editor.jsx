var React = require('react');
var ReactDOM = require('react-dom');
var CKEDITOR = require('ckeditor');
var ReactBootstrap = require('react-bootstrap'),
    Button = ReactBootstrap.Button,
    SplitButton = ReactBootstrap.SplitButton,
    MenuItem = ReactBootstrap.MenuItem;

var ArticleTypeSelector = React.createClass({
    getInitialState: function() {
        return {
            value : '请选择'
        }
    },

    changeValue: function(e, eventKey) {
        this.setState({value: eventKey})
    },

    render: function() {
        var items = this.props.items.map(function(item, i) {
            return(
                <MenuItem key={i} eventKey={item}> {item} </MenuItem>
            )
        }.bind(this));
        return(
            <SplitButton title={this.state.value} id={this.props.id} onSelect={this.changeValue}>
                {items}
                <input type="hidden" name="articleType" value={this.state.value}/>
            </SplitButton>
        );
    }

});

var ArticleTitleRow = React.createClass({
    style : {
        textStyle : { display : 'inline-block', fontWeight: 'bold', marginRight: 20 },
        fieldStyle : { display: 'inline-block', width: '60%', marginLeft: 20}
    },

    render: function() {
        return (
            <div>
                <span style={this.style.textStyle}>文章标题: </span>
                <ArticleTypeSelector id="article_selector" items={['原创','翻译','转载']}/>
                <input type="text" name="title" className="form-control" style={this.style.fieldStyle}/>
            </div>
        );
    }
});

var Editor = React.createClass({
    componentDidMount: function() {
        CKEDITOR.replace( 'editor', {
            customConfig: '/javascripts/ckeditor/custom-ckeditor-config.js'
        });
    },

    render: function() {
        return (
            <div>
                <textarea name={this.props.name} id="editor" ></textarea>
            </div>
        );
    }
});

var EditorForm = React.createClass({
    render: function() {
        return (
            <form method="post">
                <ArticleTitleRow/>
                <div style={{margin: "20px 0px"}}>
                    <Editor name="editor"/>
                </div>
                <div className="text-center" style={{marginBottom: 30}}>
                    <Button bsStyle="primary" type="submit">保 存</Button>
                    <span style={{margin: "0px 10px"}}/>
                    <Button bsStyle="primary" type="submit">发 布</Button>
                </div>
            </form>
        )
    }
});

module.exports.renderEditorForm = function(id) {
    ReactDOM.render(
        <EditorForm />,
        document.getElementById(id)
    )
}
