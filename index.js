var convertapi = require('convertapi')('gLQHua4mXnVywMam');

convertapi.convert('pdf', {
    File: './lion.jpg'
}, 'jpg').then(function(result) {
    result.saveFiles('./');
}); 