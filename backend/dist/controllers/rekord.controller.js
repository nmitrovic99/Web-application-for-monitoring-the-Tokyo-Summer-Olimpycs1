"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RekordController = void 0;
const rekordZene_1 = __importDefault(require("../models/rekordZene"));
const rekordMuskarci_1 = __importDefault(require("../models/rekordMuskarci"));
class RekordController {
    constructor() {
        this.dohvatiSveRekordeZaMuskarce = (req, res) => {
            rekordMuskarci_1.default.find({}, (err, rekordi) => {
                if (err)
                    console.log(err);
                else
                    res.json(rekordi);
            });
        };
        this.dohvatiSveRekordeZaZene = (req, res) => {
            rekordZene_1.default.find({}, (err, rekordi) => {
                if (err)
                    console.log(err);
                else
                    res.json(rekordi);
            });
        };
    }
}
exports.RekordController = RekordController;
//# sourceMappingURL=rekord.controller.js.map