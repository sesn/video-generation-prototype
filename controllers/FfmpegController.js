const ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();
const path = require('path');
//Image Source path
const image_source_path = path.dirname(__dirname) + '/public/images/source/';
//Video Destination path
const video_dest_path = path.dirname(__dirname) + '/public/videos/';

var temp = new ffmpeg({ source: image_source_path + 'demo_2.jpg', nolog: true })
    //loop for 5 seconds
    .loop(5)
    //using 25fps
    .withFps(25)
    .complexFilter([
        { filter: "nullsrc", options: { size: "640x360" }, outputs: "background" },
        { filter: "overlay", options: "shortest=1:x='min(-(t)*20,0)'", inputs: 'background' },
    ])
    //save to file
    .saveToFile(video_dest_path + 'demo_2.mp4', (retcode, err) => {
        console.log('file is converted successfully');
    });