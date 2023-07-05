"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportista_controller_1 = require("../controllers/sportista.controller");
const sportistaRouter = express_1.default.Router();
sportistaRouter.route('/traziSportiste').post((req, res) => new sportista_controller_1.SportistaController().traziSportiste(req, res));
sportistaRouter.route('/traziSveSportiste').get((req, res) => new sportista_controller_1.SportistaController().traziSveSportiste(req, res));
sportistaRouter.route('/dodajIndividualnogSportistu').post((req, res) => new sportista_controller_1.SportistaController().dodajIndividualnogSportistu(req, res));
sportistaRouter.route('/dohvatiSveSportistePoImenu').post((req, res) => new sportista_controller_1.SportistaController().dohvatiSveSportistePoImenu(req, res));
sportistaRouter.route('/dodajDisciplinu').post((req, res) => new sportista_controller_1.SportistaController().dodajDisciplinu(req, res));
sportistaRouter.route('/dohvatiSveSportisteZaZemljuSportDisciplinu').post((req, res) => new sportista_controller_1.SportistaController().dohvatiSveSportisteZaZemljuSportDisciplinu(req, res));
sportistaRouter.route('/dohvatiSveSportisteZaSportDisciplinuPol').post((req, res) => new sportista_controller_1.SportistaController().dohvatiSveSportisteZaSportDisciplinuPol(req, res));
sportistaRouter.route('/dohvatiZemljuZaSportistu').post((req, res) => new sportista_controller_1.SportistaController().dohvatiZemljuZaSportistu(req, res));
sportistaRouter.route('/osvojioMedalju').post((req, res) => new sportista_controller_1.SportistaController().osvojioMedalju(req, res));
sportistaRouter.route('/dohvatiSveSportisteZaZemlju').post((req, res) => new sportista_controller_1.SportistaController().dohvatiSveSportisteZaZemlju(req, res));
sportistaRouter.route('/dohvatiSveSportisteZaZemljuSport').post((req, res) => new sportista_controller_1.SportistaController().dohvatiSveSportisteZaZemljuSport(req, res));
sportistaRouter.route('/izbrisiSportistu').post((req, res) => new sportista_controller_1.SportistaController().izbrisiSportistu(req, res));
exports.default = sportistaRouter;
//# sourceMappingURL=sportista.routes.js.map