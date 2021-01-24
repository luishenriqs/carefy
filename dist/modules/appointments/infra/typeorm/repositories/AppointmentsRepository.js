"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Appointment = _interopRequireDefault(require("../entities/Appointment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppointmentsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Appointment.default);
  }
  /* *****************************[CREATE]*********************************** */


  async create({
    physician,
    patient,
    day,
    month,
    start,
    end
  }) {
    const appointment = await this.ormRepository.create({
      physician,
      patient,
      day,
      month,
      start,
      end
    });
    await this.ormRepository.save(appointment);
    return appointment;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */


  async save(appointment) {
    return this.ormRepository.save(appointment);
  }
  /* ************************************************************************ */

  /* ************************[FIND BY PATIENT]***************************** */


  async findByPatient(patient) {
    const foundAppointment = await this.ormRepository.find({
      where: {
        patient
      }
    });
    return foundAppointment;
  }
  /* ********************************************************************** */

  /* **********************[FIND BY PHYSICIAN]***************************** */


  async findByPhysician(physician) {
    const foundAppointment = await this.ormRepository.find({
      where: {
        physician
      }
    });
    return foundAppointment;
  }
  /* ************************************************************************ */

  /* ***************************[FIND BY DAY]******************************** */


  async findById(id) {
    const foundAppointment = await this.ormRepository.find({
      where: {
        id
      }
    });
    return foundAppointment;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */


  async findAll() {
    const allAppointments = await this.ormRepository.find();
    return allAppointments;
  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */


  async delete(id) {
    const removedAppointment = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (removedAppointment) await this.ormRepository.remove(removedAppointment);
    return;
  }
  /* ************************************************************************ */


}

var _default = AppointmentsRepository;
exports.default = _default;