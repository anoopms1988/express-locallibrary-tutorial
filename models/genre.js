var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema=Schema({
    name: {type: String,
            min:100,
            max:100,
         required: true},
})

GenreSchema
.virtual('url')
.get(function () {
  return this.name;
});

module.exports = mongoose.model('Genre', GenreSchema);
