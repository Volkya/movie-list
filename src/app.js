const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MysqlStore = require('express-mysql-session');
const bodyParser = require('body-parser');
const router = express.Router();

const { database } = require('./keys');

// Init
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
    // helpers: require('')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Global variables

// Routes
app.use('/', require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/movies'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
