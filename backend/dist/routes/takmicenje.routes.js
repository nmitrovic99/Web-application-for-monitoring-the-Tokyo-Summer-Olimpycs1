"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const takmicenje_controller_1 = require("../controllers/takmicenje.controller");
const takmicenjeRouter = express_1.default.Router();
takmicenjeRouter.route('/dodajTakmicenje').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dodajTakmicenje(req, res));
takmicenjeRouter.route('/pronadjiSvaTakmicenjaDelegata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().pronadjiSvaTakmicenjaDelegata(req, res));
takmicenjeRouter.route('/brojTakmicenjaDelegata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().brojTakmicenjaDelegata(req, res));
takmicenjeRouter.route('/pronadjiTakmicenjeZaSportDisciplinu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().pronadjiTakmicenjeZaSportDisciplinu(req, res));
takmicenjeRouter.route('/zavrsenoTakmicenje').post((req, res) => new takmicenje_controller_1.TakmicenjeController().zavrsenoTakmicenje(req, res));
exports.default = takmicenjeRouter;
//# sourceMappingURL=takmicenje.routes.js.map