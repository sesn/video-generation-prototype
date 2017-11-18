const ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();
const path = require('path');
const image_source_path = path.dirname(__dirname) + '/public/images/source/'; //Image Source path
const video_dest_path = path.dirname(__dirname) + '/public/videos/'; //Video Destination path
const font_file_path = path.dirname(__dirname) + '/public/fonts/'; //Font Directory path
const current_font_path = path.join(font_file_path) + 'Impact.ttf'; //Current Font path

var temp = new ffmpeg({ source: image_source_path + 'demo_1.jpg', nolog: true })
    //loop for 5 seconds
    .loop(5)
    //using 25fps
    .withFps(25)
    .complexFilter([
        { filter: "nullsrc", options: { size: "640x360" }, outputs: "background" },
        { filter: "overlay", options: "shortest=1:x='min(-(t)*20,0)'", inputs: 'background', outputs: 'textattached' },
        {
            filter: "drawtext",
            options: {
                fontfile: current_font_path,
                text: 'This is a text',
                fontsize: 20,
                fontcolor: 'white',
                x: 100,
                y: 100,
            },
            inputs: 'textattached',
        }
    ])
    //save to file
    .saveToFile(video_dest_path + 'demo_1.mp4', (retcode, err) => {
        console.log('file is converted successfully');
    });