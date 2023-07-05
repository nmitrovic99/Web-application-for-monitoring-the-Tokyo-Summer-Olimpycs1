"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Rezultat = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    brojKola: {
        type: Number
    },
    format: {
        type: String
    },
    takmicari: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('Rezultat', Rezultat, 'rezultati');
//# sourceMappingURL=rezultat1.js.map