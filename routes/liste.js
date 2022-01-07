var express = require('express');
var router = express.Router();
var path = require('path');
var ms = require('mediaserver');

// Liste la vue des titres
router.get('/', function (req, res, next) {
    let tabMusiques = ['The MusicalBox', 'Epitaph', 'Extreme Ways'];

    res.render('liste', {
        title: 'MusicalBox',
        tabMusiques: tabMusiques
    });
});

// Joue le morceau
router.get('/:titre', function (req, res, next) {
    var chanson = path.join(__dirname, '../raw', req.params.titre);
    ms.pipe(req, res, chanson + '.mp3');
});

module.exports = router;