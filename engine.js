module.exports = function (app) {
    var path = require("path"),
        express = require('express'),
        pathView = '/',
        exphbs = require('express-handlebars');
    app.engine('.hbs', exphbs({
        defaultLayout: '../layout/main',
        extname: '.hbs',
        partialsDir: '/partials',
        helpers: {
            arr: function (arguments) {
                return arguments.split(',');
            },
            ternary: function (arg1, arg2) {
                return arg1 ? arg1 : arg2;
            },
            equals: function (arg1, arg2, options) {
                return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
            },
            log: function (something) {
                console.log(something);
            },
            times: function (n, block) {
                var accum = '';
                for (var i = 0; i < n; ++i) {
                    block.data.index = i;
                    block.data.first = i === 0;
                    block.data.last = i === (n - 1);
                    accum += block.fn(this);
                }
                return accum;
            },
            setVar: function (varName, varValue, options) {
                options.data.root[varName] = varValue;
            },
            concat: function () {
                var result = "";
                for (var i in arguments) {
                    result += (typeof arguments[i] === "string" ? arguments[i] : "") + "";
                }
                return result;
            },
            partial: function (name, args) {
                return name;
            }
        }
    }));


    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../atom-html'));
    app.use(express.static(path.join(__dirname, '../www/public')));
};


