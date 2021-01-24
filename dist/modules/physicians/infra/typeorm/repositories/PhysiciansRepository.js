"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Physician = _interopRequireDefault(require("../entities/Physician"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PhysiciansRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Physician.default);
  }
  /* ****************************[CREATE]************************************ */


  async create({
    name,
    medicalSpecialty
  }) {
    const physician = await this.ormRepository.create({
      name,
      medicalSpecialty
    });
    await this.ormRepository.save(physician);
    return physician;
  }
  /* ************************************************************************ */

  /* ******************************[SAVE]************************************ */


  async save(physician) {
    return this.ormRepository.save(physician);
  }
  /* ************************************************************************ */

  /* **************************[FIND BY NAME]******************************** */


  async findByName(name) {
    const findPhysician = await this.ormRepository.find({
      where: {
        name
      }
    });
    return findPhysician;
  }
  /* ************************************************************************ */

  /* **********************[FIND BY SPECIALTY]******************************* */


  async findBySpecialty(medicalSpecialty) {
    const findPhysician = await this.ormRepository.find({
      where: {
        medicalSpecialty
      }
    });
    return findPhysician;
  }
  /* ************************************************************************ */

  /* ***************************[FIND BY ID]********************************* */


  async findById(id) {
    const findPhysician = await this.ormRepository.find({
      where: {
        id
      }
    });
    return findPhysician;
  }
  /* ************************************************************************ */

  /* ****************************[FIND ALL]********************************** */


  async findAll() {
    const allPhysicians = await this.ormRepository.find();
    return allPhysicians;
  }
  /* ************************************************************************ */

  /* *****************************[DELETE]*********************************** */


  async delete(id) {
    const removedPhysician = await this.ormRepository.find({
      where: {
        id
      }
    });
    await this.ormRepository.remove(removedPhysician);
    return;
  }
  /* ************************************************************************ */


}

var _default = PhysiciansRepository;
exports.default = _default;