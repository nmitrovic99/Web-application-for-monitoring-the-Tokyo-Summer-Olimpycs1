"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Korisnik = new Schema({
    korisnicko_ime: {
        type: String,
        required: 'korisnicko ime ne moze biti prazno'
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    nacionalnost: {
        type: String
    },
    mail: {
        type: String
    },
    tip: {
        type: String
    },
    odobren: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'korisnici');
//# sourceMappingURL=korisnik.js.map