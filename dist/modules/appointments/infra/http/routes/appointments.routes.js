"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AppointmentsController = _interopRequireDefault(require("../controllers/AppointmentsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentsRouter = (0, _express.Router)();
const appointmentsController = new _AppointmentsController.default();
appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/showbyphysician', appointmentsController.showByPhysician);
appointmentsRouter.get('/showbypatient', appointmentsController.showByPatient);
appointmentsRouter.get('/showbyid', appointmentsController.showById);
appointmentsRouter.get('/index', appointmentsController.index);
appointmentsRouter.patch('/edit', appointmentsController.edit);
appointmentsRouter.delete('/delete', appointmentsController.delete);
var _default = appointmentsRouter;
exports.default = _default;