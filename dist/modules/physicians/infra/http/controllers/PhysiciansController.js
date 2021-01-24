"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreatePhysicianService = _interopRequireDefault(require("../../../services/CreatePhysicianService"));

var _ShowPhysicianByNameService = _interopRequireDefault(require("../../../services/ShowPhysicianByNameService"));

var _ShowPhysicianBySpecialtyService = _interopRequireDefault(require("../../../services/ShowPhysicianBySpecialtyService"));

var _IndexPhysicianService = _interopRequireDefault(require("../../../services/IndexPhysicianService"));

var _EditPhysicianService = _interopRequireDefault(require("../../../services/EditPhysicianService"));

var _DeletePhysicianService = _interopRequireDefault(require("../../../services/DeletePhysicianService"));

var _ListAppointmentsByPhysicianService = _interopRequireDefault(require("../../../services/ListAppointmentsByPhysicianService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PhysiciansController {
  /* ***********************[CREATE PHYSICIAN]******************************* */
  async create(request, response) {
    const {
      name,
      medicalSpecialty
    } = request.body;

    const createPhysician = _tsyringe.container.resolve(_CreatePhysicianService.default);

    const physician = await createPhysician.execute({
      name,
      medicalSpecialty
    });
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[INDEX PHYSICIAN]******************************* */


  async index(request, response) {
    const indexPhysician = _tsyringe.container.resolve(_IndexPhysicianService.default);

    const physician = await indexPhysician.execute();
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* *********************[SHOW PHYSICIAN BY NAME]*************************** */


  async showByName(request, response) {
    const {
      name
    } = request.query;

    const showPhysician = _tsyringe.container.resolve(_ShowPhysicianByNameService.default);

    const physician = await showPhysician.execute(name);
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* *******************[SHOW PHYSICIAN BY SPECIALTY]************************ */


  async showBySpecialty(request, response) {
    const {
      medicalSpecialty
    } = request.query;

    const showPhysician = _tsyringe.container.resolve(_ShowPhysicianBySpecialtyService.default);

    const physician = await showPhysician.execute(medicalSpecialty);
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[EDIT PHYSICIAN]******************************** */


  async edit(request, response) {
    const {
      oldName,
      name,
      medicalSpecialty
    } = request.body;

    const editPhysician = _tsyringe.container.resolve(_EditPhysicianService.default);

    const physician = await editPhysician.execute({
      oldName,
      name,
      medicalSpecialty
    });
    return response.json(physician);
  }
  /* ************************************************************************ */

  /* ************************[DELETE PHYSICIAN]****************************** */


  async delete(request, response) {
    const {
      id
    } = request.query;

    const deletePhysician = _tsyringe.container.resolve(_DeletePhysicianService.default);

    await deletePhysician.execute(id);
    return response.status(200).json();
  }
  /* ************************************************************************ */

  /* ****************[LIST APPOINTMENTS BY PHYSICIAN]************************ */


  async list(request, response) {
    const {
      name
    } = request.query;

    const listAppointment = _tsyringe.container.resolve(_ListAppointmentsByPhysicianService.default);

    const appointment = await listAppointment.execute(name);
    return response.json(appointment);
  }
  /* ************************************************************************ */


}

exports.default = PhysiciansController;