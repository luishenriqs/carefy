"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateAppointmentService = _interopRequireDefault(require("../../../services/CreateAppointmentService"));

var _ShowAppointmentByPhysicianService = _interopRequireDefault(require("../../../services/ShowAppointmentByPhysicianService"));

var _ShowAppointmentByPatientService = _interopRequireDefault(require("../../../services/ShowAppointmentByPatientService"));

var _ShowAppointmentByIdService = _interopRequireDefault(require("../../../services/ShowAppointmentByIdService"));

var _IndexAppointmentService = _interopRequireDefault(require("../../../services/IndexAppointmentService"));

var _EditByIdService = _interopRequireDefault(require("../../../services/EditByIdService"));

var _DeleteAppointmentService = _interopRequireDefault(require("../../../services/DeleteAppointmentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppointmentsController {
  /*  ***********************[CREATE PATIENT]******************************** */
  async create(request, response) {
    const {
      physician,
      patient,
      day,
      month,
      start,
      end
    } = request.body;

    const createAppointment = _tsyringe.container.resolve(_CreateAppointmentService.default);

    const appointment = await createAppointment.execute({
      physician,
      patient,
      day,
      month,
      start,
      end
    });
    return response.json(appointment);
  }
  /* ************************************************************************ */

  /*  *****************[SHOW APPOINTMENTS BY PHYSICIAN]********************** */


  async showByPhysician(request, response) {
    const {
      physician
    } = request.query;

    const showAppointments = _tsyringe.container.resolve(_ShowAppointmentByPhysicianService.default);

    const appointments = await showAppointments.execute(physician);
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /*  ******************[SHOW APPOINTMENTS BY PATIENT]*********************** */


  async showByPatient(request, response) {
    const {
      patient
    } = request.query;

    const showAppointments = _tsyringe.container.resolve(_ShowAppointmentByPatientService.default);

    const appointments = await showAppointments.execute(patient);
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /*  ********************[SHOW APPOINTMENTS BY ID]************************** */


  async showById(request, response) {
    const {
      id
    } = request.query;

    const showAppointments = _tsyringe.container.resolve(_ShowAppointmentByIdService.default);

    const appointments = await showAppointments.execute(id);
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /*  *********************[INDEX APPOINTMENTS]****************************** */


  async index(request, response) {
    const indexAppointment = _tsyringe.container.resolve(_IndexAppointmentService.default);

    const appointments = await indexAppointment.execute();
    return response.json(appointments);
  }
  /* ************************************************************************ */

  /* **********************[EDIT APPOINTMENTS]******************************* */


  async edit(request, response) {
    const {
      id,
      physician,
      patient,
      day,
      month,
      start,
      end
    } = request.body;

    const editAppointment = _tsyringe.container.resolve(_EditByIdService.default);

    const appointment = await editAppointment.execute({
      id,
      physician,
      patient,
      day,
      month,
      start,
      end
    });
    return response.json(appointment);
  }
  /* ************************************************************************ */

  /* **********************[DELETE APPOINTMENTS]***************************** */


  async delete(request, response) {
    const {
      id
    } = request.query;

    const deleteAppointment = _tsyringe.container.resolve(_DeleteAppointmentService.default);

    await deleteAppointment.execute(id);
    return response.status(200).json();
  }
  /* ************************************************************************ */


}

exports.default = AppointmentsController;