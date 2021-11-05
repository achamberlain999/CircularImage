import sharp from 'sharp';
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface(({
    input: process.stdin,
    output: process.stdout,
}))

rl.question("What image would you like to crop?\n", answer => makeCircle(answer));


const roundedCorners = Buffer.from(
    '<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
  );
  
const roundedCornerResizer =
sharp()
    .resize(200, 200)
    .composite([{
    input: roundedCorners,
    blend: 'dest-in'
    }])
    .png();
  


const makeCircle = (filePath) => {
    var loadImage = fs.readFileSync(filePath);
    const outputFile = createOutputFilePath(filePath);
    sharp(loadImage)
    .pipe(roundedCornerResizer)
    .toFile(outputFile);
    rl.close();

}

export const createOutputFilePath = (filePath) => {
    const splitFileName = filePath.split('/');
    const withExtension = splitFileName[splitFileName.length - 1];
    const withoutExtension = withExtension.split('.')[0];
    return 'src/' + withoutExtension + 'AsACircle.png';
}