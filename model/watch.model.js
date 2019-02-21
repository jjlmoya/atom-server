const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WatchSchema = new Schema({
    case: {
        material: [],
        coating: [], //IP,
        coatingColor: [],
        rotateBezel: {type: Boolean, default: false},
        crown: {
            type: {type: String},
            size: {type: Number},
            protection: {type: Boolean, default: false}
        },
        back: {
            isTransparent: {type: Boolean, default: false},
            type: {type: String}
        }
    },
    cronograph: {
        has: {type: Boolean, default: false},
        maxTime: {type: Number}, //minutes
        quickReset: {type: Boolean, default: false}
    },
    dial: {
        size: {
            diameter: {type: Number},
            depth: {type: Number},
            height: {type: Number},
            width: {type: Number}
        },
        hardener: {type: Boolean, default: false},
        material: [String],
        color: [String]
    },
    ecommerce: {
        image: {data: Buffer, contentType: String},
        title: {type: String, required: true},
        description: {type: String, required: true},
        article: {type: String},
        price: 0,
        discount: {type: Number},
        slug: {type: String, required: true, lowercase: true},
        stock: 0
    },
    extra: {
        hasSolarPower: {type: Boolean, default: false},
        isSmartWatch: {type: Boolean, default: false},
        hasShockProtection: {type: Boolean, default: false},
        hasSpecialPackage: {type: Boolean, default: false},
        hasAltimeter: {type: Boolean, default: false},
        hasAlarm: {type: Boolean, default: false},
        hasCompass: {type: Boolean, default: false},
        hasWorldTime: {type: Boolean, default: false},
        hasTimer: {type: Boolean, default: false},
        tachymeter: {type: Boolean, default: false},
        hasMoonPhases: {type: Boolean, default: false}
    },
    generic: {
        gender: {type: String, required: true, lowercase: true, default: 'u'}, //W/M/U
        brand: {type: String, required: true}, //VOSTOK
        series: {type: String, required: false},
        code: {type: String, required: true}
    },
    glass: {
        material: [],
        curvature: {type: Boolean},
        antiReflective: {type: Boolean}
    },
    illumination: {
        has: {type: Boolean, default: false},
        type: []
    },
    mechanism: {
        type: {type: String, required: true}, //Mecánico, Automático, Quark, AutoQuark
        caliber: {type: String, required: true}, //nombre especifico
    },
    properties: {
        batteryTime: {type: Number},
        weight: {type: Number},
        madeIn: {type: String},
        warranty: {type: Number}
    },
    resistance: {
        shock: {type: Boolean, default: false},
        water: {
            has: {type: Boolean, default: false},
            meters: {type: Number},
            pressure: {type: Number}
        },
        magnetism: {type: Boolean, default: false}
    },

    time: {
        display: [String], //digital-analogic
        numbers: [String], //roman, arabes, empty, index
        hourFormat: [Number], //12, 24, o 12 y 24
        watchHands: [String], //s, m, h
        calendar: [String] //d, wd, m, y
    },
    wristband: {
        material: [String], //piel, silicona
        closure: {type: String, required: true}, //boton, hebilla
        color: [String],
        size: [Number]
    }
});

module.exports = mongoose.model('Watch', WatchSchema);
