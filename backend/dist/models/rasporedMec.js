"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RasporedMec = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
        type: String
    },
    lokacija: {
        type: String
    },
    faza: {
        type: String
    },
    takmicarskiPar: {
        type: Number
    },
    teren: {
        type: String
    },
    datumVreme: {
        type: String
    }
});
exports.default = mongoose_1.default.model('RasporedMec', RasporedMec, 'rasporediMecevi');
//# sourceMappingURL=rasporedMec.js.map