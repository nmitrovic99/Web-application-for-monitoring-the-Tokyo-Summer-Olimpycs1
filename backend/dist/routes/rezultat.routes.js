"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rezultat_controller_1 = require("../controllers/rezultat.controller");
const rezultatRouter = express_1.default.Router();
rezultatRouter.route('/pronadjiRezultateZaSportDisciplinu').post((req, res) => new rezultat_controller_1.RezultatController().pronadjiRezultateZaSportDisciplinu(req, res));
rezultatRouter.route('/dodajRezultat').post((req, res) => new rezultat_controller_1.RezultatController().dodajRezultat(req, res));
rezultatRouter.route('/pronadjiNajveceRezultate').post((req, res) => new rezultat_controller_1.RezultatController().pronadjiNajveceRezultate(req, res));
rezultatRouter.route('/pronadjiMaxRezultat').post((req, res) => new rezultat_controller_1.RezultatController().pronadjiMaxRezultat(req, res));
rezultatRouter.route('/dodajMaxRezultat').post((req, res) => new rezultat_controller_1.RezultatController().dodajMaxRezultat(req, res));
rezultatRouter.route('/dohvatiRezultatePoPoziciji').post((req, res) => new rezultat_controller_1.RezultatController().dohvatiRezultatePoPoziciji(req, res));
rezultatRouter.route('/inkrementirajPoziciju').post((req, res) => new rezultat_controller_1.RezultatController().inkrementirajPoziciju(req, res));
rezultatRouter.route('/pronadjiAzuriranePozicije').post((req, res) => new rezultat_controller_1.RezultatController().pronadjiAzuriranePozicije(req, res));
exports.default = rezultatRouter;
//# sourceMappingURL=rezultat.routes.js.map