"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Patient = _interopRequireDefault(require("../entities/Patient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PatientsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Patient.default);
  }
  /* *****************************[CREATE]*********************************** */


  async create({
    name,
    codeArea1,
    preferredPhone,
    codeArea2,
    secondaryPhone
  }) {
    const patient = this.ormRepository.create({
      name,
      codeArea1,
      preferredPhone,
      codeArea2,
      secondaryPhone
    });
    await this.ormRepository.save(patient);
    return patient;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */


  async save(patient) {
    return this.ormRepository.save(patient);
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */


  async findByName(name) {
    const foundPatient = await this.ormRepository.find({
      where: {
        name
      }
    });
    return foundPatient;
  }
  /* ************************************************************************ */

  /* ***************************[FIND BY ID]********************************* */


  async findById(id) {
    const foundPatient = await this.ormRepository.find({
      where: {
        id
      }
    });
    return foundPatient;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */


  async findAll() {
    const allPatients = await this.ormRepository.find();
    return allPatients;
  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */


  async delete(id) {
    const removedPatient = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (removedPatient) await this.ormRepository.remove(removedPatient);
    return;
  }
  /* ************************************************************************ */


}

var _default = PatientsRepository;
exports.default = _default;