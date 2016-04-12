var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap'),
    Button = ReactBootstrap.Button,
    ButtonInput = ReactBootstrap.ButtonInput,
    Modal = ReactBootstrap.Modal;

var Croppie = require('croppie');
var UploadButton = require('./upload-button').UploadButton;


var ProfileImage = React.createClass({
    render: function() {
        require("./../css/profile_image.css");
        return(
            <div className="pic">
                <div>
                    <img alt="会员头像" src={this.props.src} />
                </div>
                <div>
                    <a href="#" onClick={this.props.onClick}> 更换头像</a>
                </div>
            </div>
        )
    }
})

var ProfileImageCroppie = React.createClass({

    readFile: function() {
        var self = this;
        input = this.refs.myInput.refs.fileInput;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                self.uploadCrop.bind({
                    url: e.target.result
                });
            }
            reader.readAsDataURL(input.files[0]);
            this.setState({disableSave: false})
        } else {
            alert("目前暂不支持您使用的浏览器上传文件");
        }
    },

    saveFile: function() {

    },

    getInitialState: function() {
        return {
            disableSave: true
        }
    },

    componentDidMount: function() {
        this.uploadCrop = new Croppie(this.refs.croppie, {
            viewport: {
                width: 160,
                height: 160,
                type: 'square' //default 'square'
            },
            boundary: {
                width: 300,
                height: 300
            }
        });
        console.log(this.uploadCrop);
    },
    render: function() {
        return (
            <div >
                <div>
                    <div ref="croppie" />
                </div>
                <div>
                    <span>
                        <Button onClick={this.props.onClick} style={{marginLeft:" 35%", marginRight:5}}>取 消</Button>
                    </span>

                    <span>
                        <Button type="submit" ref="saveButton" bsStyle="primary" style={{marginRight:5}}
                                disabled={this.state.disableSave}>保 存</Button>
                    </span>

                    <span >
                        <UploadButton ref="myInput" accept="image/*" onChange={this.readFile}/>
                    </span>

                </div>
            </div>
        )
    }
})

var ProfileImageBox = React.createClass({
    getInitialState() {
        return {showModal: false};
    },
    close() {
        this.setState({showModal: false});
    },
    open() {
        this.setState({showModal: true});
    },
    render() {
        return (
            <div style={{height:160}}>
                <ProfileImage src="/images/default.jpg" onClick={this.open} />
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>修改头像</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProfileImageCroppie onClick={this.close}/>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

module.exports.ProfileImageBox = ProfileImageBox