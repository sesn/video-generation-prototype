const fs = require('fs');
const path = require('path');
const parent_path = path.dirname(__dirname);
const json_path = path.join(parent_path+'/public/json/');

exports.prototype_send_data = (req, res) => {
    fs.readFile(path.join(json_path+'prototype.json'), 'utf8', (err, data) => {
        res.setHeader('Content-Type','application/json');
        if(err) {
            return res.sendFile({'error': true});
        }
        return res.send(data);
    });
}