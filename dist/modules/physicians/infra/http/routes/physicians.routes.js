"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PhysiciansController = _interopRequireDefault(require("../controllers/PhysiciansController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const physiciansRouter = (0, _express.Router)();
const physiciansController = new _PhysiciansController.default();
physiciansRouter.post('/', physiciansController.create);
physiciansRouter.get('/index', physiciansController.index);
physiciansRouter.get('/showbyname', physiciansController.showByName);
physiciansRouter.get('/showbyspecialty', physiciansController.showBySpecialty);
physiciansRouter.patch('/edit', physiciansController.edit);
physiciansRouter.delete('/delete', physiciansController.delete);
physiciansRouter.get('/list', physiciansController.list);
var _default = physiciansRouter;
exports.default = _default;