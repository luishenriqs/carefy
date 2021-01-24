"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IPatientsRepository = _interopRequireDefault(require("../repositories/IPatientsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Esse service é injetável.
Ele recebe a injeção de dependência do repositório 'PatientsRepository'; */
let IndexPatientService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('PatientsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IPatientsRepository.default === "undefined" ? Object : _IPatientsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class IndexPatientService {
  constructor(patientsRepository) {
    this.patientsRepository = patientsRepository;
  }

  async execute() {
    const patients = await this.patientsRepository.findAll();

    if (!patients) {
      throw new _AppError.default('There was an error, please try again.');
    }

    return patients;
  }

}) || _class) || _class) || _class) || _class);
var _default = IndexPatientService;
exports.default = _default;