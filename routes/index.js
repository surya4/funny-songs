var express = require('express');
var router = express.Router();
const Translate = require('@google-cloud/translate');
const projectId = 'xyzz';

// Instantiates a client
const translateClient = Translate({
  projectId: projectId
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const text = 'Hello, world!';
  // The target language
  const target = 'ru';

  // Translates some text into Russian
  translateClient.translate(text, target)
    .then((results) => {
      const translation = results[0];

      console.log(`Text: ${text}`);
      console.log(`Translation: ${translation}`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
    res.render('index');
});

module.exports = router;
