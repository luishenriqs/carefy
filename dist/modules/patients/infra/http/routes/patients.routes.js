"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PatientsController = _interopRequireDefault(require("../controllers/PatientsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const patientsRouter = (0, _express.Router)();
const patientsController = new _PatientsController.default();
patientsRouter.post('/', patientsController.create);
patientsRouter.get('/show', patientsController.show);
patientsRouter.get('/index', patientsController.index);
patientsRouter.patch('/edit', patientsController.edit);
patientsRouter.delete('/delete', patientsController.delete);
patientsRouter.get('/list', patientsController.list);
var _default = patientsRouter;
exports.default = _default;