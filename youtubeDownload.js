const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const fs = require('fs')
let router = express.Router();
router.get('/', function (req, res, next) {
    console.log('rputer calld')
    let url = "https://www.youtube.com/watch?v=6Z7tW64jpTM";
    ytdl(url).pipe(fs.createWriteStream('Youtubevideo.mp4'));
    res.end();
})
app.use(router);
app.listen(3001, () => {
    console.log('app listingin on 3001')
})