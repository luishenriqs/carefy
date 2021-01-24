"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreatePatientService = _interopRequireDefault(require("../../../services/CreatePatientService"));

var _ShowPatientService = _interopRequireDefault(require("../../../services/ShowPatientService"));

var _IndexPatientService = _interopRequireDefault(require("../../../services/IndexPatientService"));

var _EditPatientService = _interopRequireDefault(require("../../../services/EditPatientService"));

var _DeletePatientService = _interopRequireDefault(require("../../../services/DeletePatientService"));

var _ListAppointmentsByPatientService = _interopRequireDefault(require("../../../services/ListAppointmentsByPatientService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PatientsController {
  /* ************************[CREATE PATIENT]******************************** */
  async create(request, response) {
    const {
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone
    } = request.body;

    const createPatient = _tsyringe.container.resolve(_CreatePatientService.default);

    const patient = await createPatient.execute({
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone
    });
    return response.json(patient);
  }
  /* ************************************************************************ */

  /*  *************************[SHOW PATIENT]******************************** */


  async show(request, response) {
    const {
      name
    } = request.query;

    const showPatient = _tsyringe.container.resolve(_ShowPatientService.default);

    const patients = await showPatient.execute(name);
    return response.json(patients);
  }
  /* ************************************************************************ */

  /*  ************************[INDEX PATIENT]******************************** */


  async index(request, response) {
    const indexPatient = _tsyringe.container.resolve(_IndexPatientService.default);

    const patients = await indexPatient.execute();
    return response.json(patients);
  }
  /* ************************************************************************ */

  /*  ************************[EDIT PATIENT]******************************** */


  async edit(request, response) {
    const {
      oldName,
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone
    } = request.body;

    const editPatient = _tsyringe.container.resolve(_EditPatientService.default);

    const patient = await editPatient.execute({
      oldName,
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone
    });
    return response.json(patient);
  }
  /* ************************************************************************ */

  /*  ************************[DELETE PATIENT]******************************* */


  async delete(request, response) {
    const {
      id
    } = request.query;

    const deletePatient = _tsyringe.container.resolve(_DeletePatientService.default);

    await deletePatient.execute(id);
    return response.status(200).json();
  }
  /* ************************************************************************ */

  /* ********************[LIST PATIENT APPOINTMENTS]************************* */


  async list(request, response) {
    const {
      name
    } = request.query;

    const listAppointment = _tsyringe.container.resolve(_ListAppointmentsByPatientService.default);

    const appointment = await listAppointment.execute(name);
    return response.json(appointment);
  }
  /* ************************************************************************ */


}

exports.default = PatientsController;