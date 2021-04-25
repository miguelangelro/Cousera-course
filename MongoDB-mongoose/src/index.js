const startConnection = require('./database')

const app= require('./app');

function init() {
    startConnection();
    app.listen(app.get('port'));
    console.log('Server on port', 3000);
};

init();