"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Mec = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    format: {
        type: String
    },
    imePrezimeTakmicara1: {
        type: String
    },
    imePrezimeTakmicara2: {
        type: String
    },
    nosilac1: {
        type: Number
    },
    nosilac2: {
        type: Number
    },
    pol: {
        type: String
    },
    faza: {
        type: String
    },
    takmicarskiPar: {
        type: Number
    },
    rez: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Mec', Mec, 'mecevi');
//# sourceMappingURL=mec.js.map