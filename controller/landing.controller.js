const config = require('../config').router();
const Commons = require('../services/commons.services');
const home = config.home;

const bonseo = config.bonseo;
const bonseoPages = config.bonseo.pages;

const iberojet = config.iberojet;

const cp = config.cp;

const lmg = config.lmg;

const vostok = config.vostok

const pyf = config.pyf;


module.exports = function (app) {

    app.get(home.path, function (req, res) {
        res.render(home.view, Commons.join({
            layout: home.layout
        }));
    });
    app.get(bonseo.path, function (req, res) {
        res.render(bonseo.view, Commons.join({
            layout: bonseo.layout
        }));
    });
    app.get(bonseoPages.diy.path, function (req, res) {
        res.render(bonseoPages.diy.view, Commons.join({
            layout: bonseo.layout
        }));
    });
    app.get(bonseoPages.services.path, function (req, res) {
        res.render(bonseo.services.view, Commons.join({
            layout: bonseo.layout
        }));
    });
    app.get(bonseoPages.courses.path, function (req, res) {
        res.render(bonseoPages.courses.view, Commons.join({
            layout: bonseo.layout
        }));
    });

    app.get(cp.path, function (req, res) {
        res.render(cp.view, Commons.join({layout: cp.layout}));
    });

    app.get(lmg.path, function (req, res) {
        res.render(lmg.view, Commons.join({layout: lmg.layout}));
    });

    app.get(vostok.path, function (req, res) {
        res.render(vostok.view, Commons.join({layout: vostok.layout}));
    });

    app.get(iberojet.path, function (req, res) {
        res.render(iberojet.view, Commons.join({layout: iberojet.layout}));
    });

    app.get(pyf.path, function (req, res) {
        res.render(pyf.view, Commons.join({layout: pyf.layout}));
    });
};
