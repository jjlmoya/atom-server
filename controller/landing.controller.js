const config = require('../config').router();
const Commons = require('../services/commons.services');

const home = config.home;
const bonseo = config.bonseo;
const bonseoPages = config.bonseo.pages;
const iberojet = config.iberojet;
const cp = config.cp;
const lmg = config.lmg;
const vostok = config.vostok;
const pyf = config.pyf;


module.exports = function (app) {

    app.get(home.path, function (req, res) {
        res.render(home.view, Commons.join(home));
    });
    app.get(bonseo.path, function (req, res) {
        res.render(bonseo.view, Commons.join(bonseo));
    });
    app.get(bonseoPages.diy.path, function (req, res) {
        res.render(bonseoPages.diy.view, Commons.join(bonseo));
    });
    app.get(bonseoPages.services.path, function (req, res) {
        res.render(bonseo.services.view, Commons.join(bonseo));
    });
    app.get(bonseoPages.courses.path, function (req, res) {
        res.render(bonseoPages.courses.view, Commons.join(bonseo));
    });

    app.get(cp.path, function (req, res) {
        res.render(cp.view, Commons.join(cp));
    });

    app.get(lmg.path, function (req, res) {
        res.render(lmg.view, Commons.join(lmg));
    });

    app.get(vostok.path, function (req, res) {
        res.render(vostok.view, Commons.join(vostok));
    });

    app.get(iberojet.path, function (req, res) {
        res.render(iberojet.view, Commons.join(iberojet));
    });

    app.get(pyf.path, function (req, res) {
        res.render(pyf.view, Commons.join(pyf));
    });
};
