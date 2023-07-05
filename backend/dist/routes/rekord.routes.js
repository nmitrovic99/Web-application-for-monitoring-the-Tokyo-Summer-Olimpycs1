"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rekord_controller_1 = require("../controllers/rekord.controller");
const rekordRouter = express_1.default.Router();
rekordRouter.route('/dohvatiSveRekordeZaMuskarce').get((req, res) => new rekord_controller_1.RekordController().dohvatiSveRekordeZaMuskarce(req, res));
rekordRouter.route('/dohvatiSveRekordeZaZene').get((req, res) => new rekord_controller_1.RekordController().dohvatiSveRekordeZaZene(req, res));
exports.default = rekordRouter;
//# sourceMappingURL=rekord.routes.js.map