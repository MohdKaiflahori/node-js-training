const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
let router = express.Router();

router.get(
  "/",
  function (req, res, next) {
    console.log("rputer calld");
    fs.mkdirSync("assests/videos", { recursive: true });
    let url = [
      "https://www.youtube.com/watch?v=6Z7tW64jpTM",
      "https://www.youtube.com/watch?v=6Z7tW64jpTM",
      "https://www.youtube.com/watch?v=6Z7tW64jpTM",
      "https://www.youtube.com/watch?v=6Z7tW64jpTM",
      "https://www.youtube.com/watch?v=6Z7tW64jpTM",
    ];
    Promise.all(url).then((response) => {
      response.map((v, index) =>
        ytdl(url[index]).pipe(
          fs.createWriteStream(
            `/home/hs/Desktop/node-training/assests/videos/${
              index + 1
            }Youtubevideo.mp4`
          )
        )
      );
    });

    setTimeout(() => {
      const read = url.map((val, index) =>
        fs.readFileSync(
          `/home/hs/Desktop/node-training/assests/videos/${
            index + 1
          }Youtubevideo.mp4`,
          "base64url"
        )
      );
    }, 10000);

    const details = url.map((val, index) =>
      fs.statSync(
        `/home/hs/Desktop/node-training/assests/videos/${
          index + 1
        }Youtubevideo.mp4`
      )
    );
    const fileValues = url.map((val, index) => ({
      __filename: path.basename(
        `/home/hs/Desktop/node-training/assests/videos/${
          index + 1
        }Youtubevideo.mp4`
      ),
      fileSize: details[index].size / (1024 * 1024),
      file_mime_type: mime.getType(
        `/home/hs/Desktop/node-training/assests/videos/${
          index + 1
        }Youtubevideo.mp4`
      ),
      file_extension: path.extname(
        `/home/hs/Desktop/node-training/assests/videos/${
          index + 1
        }Youtubevideo.mp4`
      ),
      file_created_date: details[index].birthtime,
    }));
    console.table(fileValues);
    // console.log('details :', details);
    // console.table('filesize :', filesize);

    res.end();
  },
  app.use(router)
);
app.listen(3002, () => {
  console.log("app listingin on 3002");
});
