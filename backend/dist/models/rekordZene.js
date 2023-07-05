"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RekordZene = new Schema({
    godinaMesto: {
        type: String
    },
    disciplina: {
        type: String
    },
    takmicar: {
        type: String
    },
    nacionalnost: {
        type: String
    },
    rekord: {
        type: String
    }
});
exports.default = mongoose_1.default.model('RekordZene', RekordZene, 'rekordiZene');
//# sourceMappingURL=rekordZene.js.map