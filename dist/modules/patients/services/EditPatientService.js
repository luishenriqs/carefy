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

let EditPatientService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('PatientsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IPatientsRepository.default === "undefined" ? Object : _IPatientsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class EditPatientService {
  constructor(patientsRepository) {
    this.patientsRepository = patientsRepository;
  }

  async execute({
    oldName,
    name,
    codeArea1,
    preferredPhone,
    codeArea2,
    secondaryPhone
  }) {
    const patient = await this.patientsRepository.findByName(oldName);

    if (!patient) {
      throw new _AppError.default('Patient not found!');
    }

    patient[0].name = name;
    patient[0].codeArea1 = codeArea1;
    patient[0].preferredPhone = preferredPhone;
    patient[0].codeArea2 = codeArea2;
    patient[0].secondaryPhone = secondaryPhone;
    await this.patientsRepository.save(patient[0]);
    return patient[0];
  }

}) || _class) || _class) || _class) || _class);
var _default = EditPatientService;
exports.default = _default;