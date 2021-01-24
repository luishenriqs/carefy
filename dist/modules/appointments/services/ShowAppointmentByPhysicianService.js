"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _PhysiciansRepository = _interopRequireDefault(require("../../../modules/physicians/infra/typeorm/repositories/PhysiciansRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowAppointmentByPhysicianService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('PhysiciansRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default, typeof _PhysiciansRepository.default === "undefined" ? Object : _PhysiciansRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ShowAppointmentByPhysicianService {
  constructor(appointmentsRepository, physiciansRepository) {
    this.appointmentsRepository = appointmentsRepository;
    this.physiciansRepository = physiciansRepository;
  }

  async execute(physician) {
    const findPhysician = await this.physiciansRepository.findByName(physician);
    let name = '';

    if (!findPhysician || findPhysician === []) {
      throw new _AppError.default('Physician was not found.');
    }

    name = findPhysician[0].name;

    if (!name) {
      throw new _AppError.default('Physician`s name was not found.');
    }

    const appointments = await this.appointmentsRepository.findByPhysician(name);

    if (!appointments) {
      throw new _AppError.default('There was an error, please try again.');
    }

    return appointments;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ShowAppointmentByPhysicianService;
exports.default = _default;