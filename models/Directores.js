const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({

    "ID_Director": Number,
    "Nombre": String,
    "Biografía": String,
    "Filmografía": {
      "Películas": [
        {
          "Título": String,
          "Año": Number,
        }
      ],
      "Series": [
        {
          "Título": String,
          "Año": Number,
        }
      ]
    }
  });

module.exports = mongoose.model('Directores', DirectorSchema, 'Directores');