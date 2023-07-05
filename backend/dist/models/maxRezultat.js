"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MaxRezultat = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    format: {
        type: String
    },
    pol: {
        type: String
    },
    imePrezime: {
        type: String
    },
    rez: {
        type: String
    },
    pozicija: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('MaxRezultat', MaxRezultat, 'maxRezultati');
//# sourceMappingURL=maxRezultat.js.map