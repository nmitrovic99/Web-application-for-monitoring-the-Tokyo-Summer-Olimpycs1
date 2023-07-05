"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Raspored = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
        type: String
    },
    datumVreme: {
        type: String
    },
    lokacija: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Raspored', Raspored, 'rasporedi');
//# sourceMappingURL=raspored.js.map