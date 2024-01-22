const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/redSocialAngular')
mongoose.connect('mongodb+srv://dw65restore:Wxg7w9eV3nOepnMT@clusterapp.odlu48y.mongodb.net/foodm?retryWrites=true&w=majority')
.then(ok => console.log('db conectada'))
.catch(err => console.log(err));


