"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mec_controller_1 = require("../controllers/mec.controller");
const mecRouter = express_1.default.Router();
mecRouter.route('/dodajMec').post((req, res) => new mec_controller_1.MecController().dodajMec(req, res));
mecRouter.route('/dohvatiSveMeceve').post((req, res) => new mec_controller_1.MecController().dohvatiSveMeceve(req, res));
mecRouter.route('/dodajRezultatMeca').post((req, res) => new mec_controller_1.MecController().dodajRezultatMeca(req, res));
mecRouter.route('/dohvatiMecZaFazu').post((req, res) => new mec_controller_1.MecController().dohvatiMecZaFazu(req, res));
exports.default = mecRouter;
//# sourceMappingURL=mec.routes.js.map