"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const raspored_controller_1 = require("../controllers/raspored.controller");
const rasporedRouter = express_1.default.Router();
rasporedRouter.route('/dodajSatnicu').post((req, res) => new raspored_controller_1.RasporedController().dodajSatnicu(req, res));
rasporedRouter.route('/dohvatiSveSatniceZaLokaciju').post((req, res) => new raspored_controller_1.RasporedController().dohvatiSveSatniceZaLokaciju(req, res));
rasporedRouter.route('/dohvatiSatnicuZaSportDisciplinuPol').post((req, res) => new raspored_controller_1.RasporedController().dohvatiSatnicuZaSportDisciplinuPol(req, res));
rasporedRouter.route('/dodajRasporedMeca').post((req, res) => new raspored_controller_1.RasporedController().dodajRasporedMeca(req, res));
rasporedRouter.route('/dohvatiRasporedMecaZaFazu').post((req, res) => new raspored_controller_1.RasporedController().dohvatiRasporedMecaZaFazu(req, res));
rasporedRouter.route('/dohvatiRasporedMecaZaTeren').post((req, res) => new raspored_controller_1.RasporedController().dohvatiRasporedMecaZaTeren(req, res));
exports.default = rasporedRouter;
//# sourceMappingURL=raspored.routes.js.map