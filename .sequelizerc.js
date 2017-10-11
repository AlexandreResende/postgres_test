
const path = require('path');

module.exports = {

    'config': path.resolve('./config', 'config.json'),
    'migrations-path': path.resolve('./api/migrations'),
    'models-path': path.resolve('./api/models')

}