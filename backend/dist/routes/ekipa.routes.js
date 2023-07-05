"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ekipa_controller_1 = require("../controllers/ekipa.controller");
const ekipaRouter = express_1.default.Router();
ekipaRouter.route('/dodajEkipu').post((req, res) => new ekipa_controller_1.EkipaController().dodajEkipu(req, res));
ekipaRouter.route('/dohvatiEkipeZaTakmicenje').post((req, res) => new ekipa_controller_1.EkipaController().dohvatiEkipeZaTakmicenje(req, res));
exports.default = ekipaRouter;
//# sourceMappingURL=ekipa.routes.js.map