"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EditByIdService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class EditByIdService {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute({
    id,
    physician,
    patient,
    day,
    month,
    start,
    end
  }) {
    const apointment = await this.appointmentRepository.findById(id);

    if (!apointment) {
      throw new _AppError.default('Appointment not found!');
    }

    apointment[0].physician = physician;
    apointment[0].patient = patient;
    apointment[0].day = day;
    apointment[0].month = month;
    apointment[0].start = start;
    apointment[0].end = end;
    await this.appointmentRepository.save(apointment[0]);
    return apointment[0];
  }

}) || _class) || _class) || _class) || _class);
var _default = EditByIdService;
exports.default = _default;