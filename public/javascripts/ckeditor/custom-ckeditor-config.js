CKEDITOR.editorConfig = function( config ) {
    config.language = 'zh-cn';
    config.uiColor = '#ffffff';
    config.filebrowserUploadUrl = '/articles/upload';
/*
    config.filebrowserBrowseUrl = '/browse';
    config.filebrowserWindowWidth = '640';
    config.filebrowserWindowHeight = '480';
*/
    config.extraPlugins = 'smiley';
    config.height = 450;
    config.width = '100%';
};
