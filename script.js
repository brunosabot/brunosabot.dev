const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { createCanvas, loadImage } = require("canvas");

const round = (value, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};

const intToHex = (h) => {
  if (h === null) {
    return "00";
  }

  if (h === 0 || Number.isNaN(h)) {
    return "00";
  }
  h = Math.max(0, h);
  h = Math.min(h, 255);
  h = round(h);

  return (
    "0123456789ABCDEF".charAt((h - (h % 16)) / 16) +
    "0123456789ABCDEF".charAt(h % 16)
  );
};

const RGBToHex = (r, g, b) => "#" + intToHex(r) + intToHex(g) + intToHex(b);

const POSTS_PATH = path.join(process.cwd(), "posts");
fs.readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
  .forEach((path) => {
    const source = fs.readFileSync(POSTS_PATH + "/" + path);
    const post = matter(source);
    const image = post.data.originalImage;

    const canvas = createCanvas(1, 1);
    const context = canvas.getContext("2d");
    loadImage(image).then((img) => {
      context.drawImage(img, 0, 0, 1, 1);
      const color = context.getImageData(0, 0, 1, 1).data;
      const hexColor = RGBToHex(color[0], color[1], color[2]);
      const newSource = source
        .toString()
        .replace(/color: "#[0-9A-F]{6}"/, 'color: "' + hexColor + '"');
      fs.writeFileSync(POSTS_PATH + "/" + path, newSource);
    });
  });
