"use strict";

var _tsyringe = require("tsyringe");

var _AppointmentsRepository = _interopRequireDefault(require("../../modules/appointments/infra/typeorm/repositories/AppointmentsRepository"));

var _PatientsRepository = _interopRequireDefault(require("../../modules/patients/infra/typeorm/repositories/PatientsRepository"));

var _PhysiciansRepository = _interopRequireDefault(require("../../modules/physicians/infra/typeorm/repositories/PhysiciansRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ARQUIVOS USADOS PARA INJEÇÕES DE DEPENDÊNCIAS */

/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */
_tsyringe.container.registerSingleton('AppointmentsRepository', _AppointmentsRepository.default);
/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */


_tsyringe.container.registerSingleton('PatientsRepository', _PatientsRepository.default);
/* O container.registerSingleton retorna uma instância do repositório que 
foi chamado; */


_tsyringe.container.registerSingleton('PhysiciansRepository', _PhysiciansRepository.default);