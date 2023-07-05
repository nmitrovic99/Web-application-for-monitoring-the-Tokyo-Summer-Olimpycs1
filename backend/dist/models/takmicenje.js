"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Takmicenje = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    vrsta: {
        type: String
    },
    pol: {
        type: String
    },
    datumPocetka: {
        type: String
    },
    datumKraja: {
        type: String
    },
    lokacija: {
        type: String
    },
    format: {
        type: String
    },
    brojPokusaja: {
        type: String
    },
    takmicari: {
        type: Array
    },
    delegati: {
        type: Array
    },
    zavrseno: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Takmicenje', Takmicenje, 'takmicenja');
//# sourceMappingURL=takmicenje.js.map