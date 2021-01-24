"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _appointments = _interopRequireDefault(require("../../../../modules/appointments/infra/http/routes/appointments.routes"));

var _patients = _interopRequireDefault(require("../../../../modules/patients/infra/http/routes/patients.routes"));

var _physicians = _interopRequireDefault(require("../../../../modules/physicians/infra/http/routes/physicians.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/appointments', _appointments.default);
routes.use('/patients', _patients.default);
routes.use('/physicians', _physicians.default);
var _default = routes;
exports.default = _default;