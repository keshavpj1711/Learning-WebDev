// before running this if you don't have inquirer and qr-image install 
// Do: npm install inquirer qr-image

import inquirer from 'inquirer';
import { image } from 'qr-image';
import { createWriteStream } from "fs";


function genQR(url) {
  var qr_png = image(url, {type: 'png'});
  qr_png.pipe(createWriteStream('gen_qr.png'));
}

function urlInput() {
  inquirer
    .prompt([
      {
        type: 'input', 
        name: 'url', 
        message: 'Enter URL to convert to QR Code: ',
      }
    ])
    .then((answers) => {
      // console.log('Your answers:', answers);
      genQR(answers['url']);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error('Prompt couldn\'t be rendered in the current environment');
      } else {
        console.error('Something else went wrong:', error);
      }
    });
}

inquirer
  .prompt([
    {
      type: 'list',
      name: 'QR',
      message: 'Pick an option:',
      choices: ['Generate QR Code', 'Exit'],
    },
  ])
  .then((answers) => {
    // console.log('Your answers:', answers);
    if (answers['QR'] === 'Generate QR Code') {
      urlInput();
    };
    return;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered in the current environment');
    } else {
      console.error('Something else went wrong:', error);
    }
  });
