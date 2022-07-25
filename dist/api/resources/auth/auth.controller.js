"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../../../models");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _mailer = _interopRequireDefault(require("../../../mailer"));

var _config = _interopRequireDefault(require("../../../config"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _speakeasy = _interopRequireDefault(require("speakeasy"));

var _functions = require("./../../../functions");

var JWTSign = function JWTSign(user, date) {
  return _jsonwebtoken["default"].sign({
    iss: _config["default"].app.name,
    sub: user.id,
    iam: user.type,
    iat: date.getTime(),
    exp: new Date().setMinutes(date.getMinutes() + 30)
  }, _config["default"].app.secret);
};

function generateOtp() {
  var token = _speakeasy["default"].totp({
    secret: process.env.OTP_KEY,
    encoding: 'base32',
    step: 30 - Math.floor(new Date().getTime() / 1000.0 % 30)
  });

  return token;
}

function verifyOtp(token) {
  var expiry = _speakeasy["default"].totp.verify({
    secret: process.env.OTP_KEY,
    encoding: 'base32',
    token: token,
    step: 30 - Math.floor(new Date().getTime() / 1000.0 % 30),
    window: 0
  });

  return expiry;
}

var _default = {
  addUser: function addUser(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _req$body, firstName, lastName, phoneNo, email, address, password, role, verify, passwordHash, token, otp;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phoneNo = _req$body.phoneNo, email = _req$body.email, address = _req$body.address, password = _req$body.password, role = _req$body.role, verify = _req$body.verify;
              passwordHash = _bcryptNodejs["default"].hashSync(password);
              token = generateOtp();
              otp = verifyOtp(token);

              _models.db.user.findOne({
                where: {
                  email: email
                },
                paranoid: false
              }).then(function (find) {
                if (find) {
                  throw new RequestError('Email is already in use', 409);
                }

                return _models.db.user.create({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNo: phoneNo,
                  address: address,
                  password: passwordHash,
                  verify: verify,
                  role: role
                });
              }).then(function (user) {
                if (user) {
                  _mailer["default"].sendEmployeePassword(email, token);

                  return res.status(200).json({
                    success: true,
                    key: otp,
                    msg: "New Registration added and password has been sent to " + email + " ."
                  });
                } else res.status(500).json({
                  'success': false
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  findUser: function findUser(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _models.db.user.findOne({
                attributes: ["firstName", "lastName"],
                where: {
                  email: req.query.email
                },
                paranoid: false
              }).then(function (user) {
                if (user) {
                  return res.status(200).json({
                    success: true,
                    data: user
                  });
                } else res.status(500).json({
                  'success': false
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  getAllUserList: function getAllUserList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _models.db.user.findAll().then(function (user) {
                if (user) {
                  return res.status(200).json({
                    success: true,
                    data: user
                  });
                } else res.status(500).json({
                  'success': false
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  getAllUserdata: function getAllUserdata(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _models.db.user.findAll().then(function (user) {
                if (user) {
                  return res.status(200).json({
                    success: true,
                    data: user
                  });
                } else res.status(500).json({
                  'success': false
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  userUpdate: function userUpdate(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var _req$body2, id, firstName, lastName, email, address, password, role, verify, passwordHash;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _req$body2 = req.body, id = _req$body2.id, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, address = _req$body2.address, password = _req$body2.password, role = _req$body2.role, verify = _req$body2.verify;
              passwordHash = _bcryptNodejs["default"].hashSync(password);

              _models.db.user.findOne({
                where: {
                  email: email
                },
                paranoid: false
              }).then(function (user) {
                if (!user) {
                  throw new RequestError('User is not found', 409);
                }

                return _models.db.user.update({
                  firstName: firstName ? firstName : user.firstName,
                  lastName: lastName ? lastName : user.lastName,
                  password: password ? passwordHash : user.passwordHash,
                  address: address ? address : user.address,
                  role: role ? role : user.role,
                  verify: verify ? verify : user.verify
                }, {
                  where: {
                    id: id
                  }
                });
              }).then(function (user) {
                if (user) {
                  return res.status(200).json({
                    success: true,
                    msg: "User update successsfully"
                  });
                } else res.status(500).json({
                  'success': false
                });
              })["catch"](function (err) {
                console.log(err);
                next(err);
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  login: function login(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var date, token;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              date = new Date();
              token = JWTSign(req.user, date);
              res.cookie('XSRF-token', token, {
                expire: new Date().setMinutes(date.getMinutes() + 30),
                httpOnly: true,
                secure: _config["default"].app.secure
              });
              return _context6.abrupt("return", res.status(200).json({
                success: true,
                token: token,
                role: req.user.role
              }));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  deleteUserList: function deleteUserList(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _models.db.user.findOne({
                where: {
                  id: req.body.id
                }
              }).then(function (data) {
                if (data) {
                  return _models.db.user.destroy({
                    where: {
                      id: req.body.id
                    }
                  }).then(function (r) {
                    return [r, data];
                  });
                }

                throw new RequestError('User is not found', 409);
              }).then(function (re) {
                return res.status(200).json({
                  'status': "deleted userlist Seccessfully"
                });
              })["catch"](function (err) {
                next(err);
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkpXVFNpZ24iLCJ1c2VyIiwiZGF0ZSIsIkpXVCIsInNpZ24iLCJpc3MiLCJjb25maWciLCJhcHAiLCJuYW1lIiwic3ViIiwiaWQiLCJpYW0iLCJ0eXBlIiwiaWF0IiwiZ2V0VGltZSIsImV4cCIsIkRhdGUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY3JldCIsImdlbmVyYXRlT3RwIiwidG9rZW4iLCJzcGVha2Vhc3kiLCJ0b3RwIiwicHJvY2VzcyIsImVudiIsIk9UUF9LRVkiLCJlbmNvZGluZyIsInN0ZXAiLCJNYXRoIiwiZmxvb3IiLCJ2ZXJpZnlPdHAiLCJleHBpcnkiLCJ2ZXJpZnkiLCJ3aW5kb3ciLCJhZGRVc2VyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lTm8iLCJlbWFpbCIsImFkZHJlc3MiLCJwYXNzd29yZCIsInJvbGUiLCJwYXNzd29yZEhhc2giLCJiY3J5cHQiLCJoYXNoU3luYyIsIm90cCIsImRiIiwiZmluZE9uZSIsIndoZXJlIiwicGFyYW5vaWQiLCJ0aGVuIiwiZmluZCIsIlJlcXVlc3RFcnJvciIsImNyZWF0ZSIsIm1haWxlciIsInNlbmRFbXBsb3llZVBhc3N3b3JkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJrZXkiLCJtc2ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmluZFVzZXIiLCJhdHRyaWJ1dGVzIiwicXVlcnkiLCJkYXRhIiwiZ2V0QWxsVXNlckxpc3QiLCJmaW5kQWxsIiwiZ2V0QWxsVXNlcmRhdGEiLCJ1c2VyVXBkYXRlIiwidXBkYXRlIiwibG9naW4iLCJjb29raWUiLCJleHBpcmUiLCJodHRwT25seSIsInNlY3VyZSIsImRlbGV0ZVVzZXJMaXN0IiwiZGVzdHJveSIsInIiLCJyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUFnRDZDLElBQWhELENBQXFELFVBQUE4QixDQUFDO0FBQUEsMkJBQUksQ0FBQ0EsQ0FBRCxFQUFJYixJQUFKLENBQUo7QUFBQSxtQkFBdEQsQ0FBUDtBQUNIOztBQUNELHNCQUFNLElBQUlmLFlBQUosQ0FBaUIsbUJBQWpCLEVBQXNDLEdBQXRDLENBQU47QUFDSCxlQU5MLEVBT0tGLElBUEwsQ0FPVSxVQUFBK0IsRUFBRSxFQUFJO0FBQ1IsdUJBQU9qRCxHQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRSw0QkFBVTtBQUFaLGlCQUFyQixDQUFQO0FBQ0gsZUFUTCxXQVNhLFVBQUFJLEdBQUcsRUFBSTtBQUNaNUIsZ0JBQUFBLElBQUksQ0FBQzRCLEdBQUQsQ0FBSjtBQUNILGVBWEw7O0FBRGtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXJDO0FBeElVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5pbXBvcnQgSldUIGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgbWFpbGVyIGZyb20gJy4uLy4uLy4uL21haWxlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdC1ub2RlanMnO1xuaW1wb3J0IHNwZWFrZWFzeSBmcm9tICdzcGVha2Vhc3knO1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJy4vLi4vLi4vLi4vZnVuY3Rpb25zJ1xuXG52YXIgSldUU2lnbiA9IGZ1bmN0aW9uICh1c2VyLCBkYXRlKSB7XG4gICAgcmV0dXJuIEpXVC5zaWduKHtcbiAgICAgICAgaXNzOiBjb25maWcuYXBwLm5hbWUsXG4gICAgICAgIHN1YjogdXNlci5pZCxcbiAgICAgICAgaWFtIDogdXNlci50eXBlLFxuICAgICAgICBpYXQ6IGRhdGUuZ2V0VGltZSgpLFxuICAgICAgICBleHA6IG5ldyBEYXRlKCkuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIDMwKVxuICAgIH0sIGNvbmZpZy5hcHAuc2VjcmV0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPdHAoKSB7XG4gICAgbGV0IHRva2VuID0gc3BlYWtlYXN5LnRvdHAoe1xuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk9UUF9LRVksXG4gICAgICAgIGVuY29kaW5nOiAnYmFzZTMyJyxcbiAgICAgICAgc3RlcDogKDMwIC0gTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjAgJSAzMCkpKVxuICAgIH0pO1xuICAgIHJldHVybiB0b2tlbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5T3RwKHRva2VuKSB7XG4gICAgbGV0IGV4cGlyeSA9IHNwZWFrZWFzeS50b3RwLnZlcmlmeSh7XG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuT1RQX0tFWSxcbiAgICAgICAgZW5jb2Rpbmc6ICdiYXNlMzInLFxuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgIHN0ZXA6ICgzMCAtIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wICUgMzApKSksXG4gICAgICAgIHdpbmRvdzogMFxuICAgIH0pO1xuICAgIHJldHVybiBleHBpcnlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXN5bmMgYWRkVXNlcihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTm8sIGVtYWlsLCBhZGRyZXNzLCBwYXNzd29yZCwgcm9sZSwgdmVyaWZ5IH0gPSByZXEuYm9keTtcbiAgICAgICAgdmFyIHBhc3N3b3JkSGFzaCA9IGJjcnlwdC5oYXNoU3luYyhwYXNzd29yZCk7XG4gICAgICAgIHZhciB0b2tlbiA9IGdlbmVyYXRlT3RwKCk7XG4gICAgICAgIHZhciBvdHAgPSB2ZXJpZnlPdHAodG9rZW4pO1xuICAgICAgICBkYi51c2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbDogZW1haWwgfSwgcGFyYW5vaWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAudGhlbihmaW5kID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmluZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdFbWFpbCBpcyBhbHJlYWR5IGluIHVzZScsIDQwOSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVObzogcGhvbmVObyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCxcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5OiB2ZXJpZnksXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHJvbGVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbGVyLnNlbmRFbXBsb3llZVBhc3N3b3JkKGVtYWlsLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGtleTogb3RwLCBtc2c6IFwiTmV3IFJlZ2lzdHJhdGlvbiBhZGRlZCBhbmQgcGFzc3dvcmQgaGFzIGJlZW4gc2VudCB0byBcIiArIGVtYWlsICsgXCIgLlwiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgZmluZFVzZXIocmVxLHJlcyxuZXh0KXtcbiAgICAgICAgZGIudXNlci5maW5kT25lKHsgYXR0cmlidXRlczpbXCJmaXJzdE5hbWVcIixcImxhc3ROYW1lXCJdLCB3aGVyZTogeyBlbWFpbDogcmVxLnF1ZXJ5LmVtYWlsIH0sIHBhcmFub2lkOiBmYWxzZSB9KVxuICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTp1c2VyfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyAnc3VjY2Vzcyc6IGZhbHNlIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgIGFzeW5jIGdldEFsbFVzZXJMaXN0KHJlcSxyZXMsbmV4dCl7XG4gICAgICAgIGRiLnVzZXIuZmluZEFsbCgpXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOnVzZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ICdzdWNjZXNzJzogZmFsc2UgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICAgYXN5bmMgZ2V0QWxsVXNlcmRhdGEocmVxLHJlcyxuZXh0KXtcbiAgICAgICAgZGIudXNlci5maW5kQWxsKClcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6dXNlcn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiBmYWxzZSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAgYXN5bmMgdXNlclVwZGF0ZShyZXEscmVzLG5leHQpe1xuICAgICAgICBjb25zdCB7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgYWRkcmVzcywgcGFzc3dvcmQsIHJvbGUsIHZlcmlmeSB9ID0gcmVxLmJvZHk7XG4gICAgICAgIHZhciBwYXNzd29yZEhhc2ggPSBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQpO1xuICAgICAgICBkYi51c2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbDogZW1haWwgfSwgcGFyYW5vaWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFcnJvcignVXNlciBpcyBub3QgZm91bmQnLCA0MDkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGIudXNlci51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSA/IGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSA/IGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQgPyBwYXNzd29yZEhhc2g6IHVzZXIucGFzc3dvcmRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzID8gYWRkcmVzcyA6IHVzZXIuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogcm9sZSA/IHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5IDogdmVyaWZ5PyB2ZXJpZnk6IHVzZXIudmVyaWZ5XG4gICAgICAgICAgICAgICAgfSwgeyB3aGVyZTogeyBpZDogaWQgfSB9KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIlVzZXIgdXBkYXRlIHN1Y2Nlc3NzZnVsbHlcIn0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgJ3N1Y2Nlc3MnOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSBKV1RTaWduKHJlcS51c2VyLCBkYXRlKTtcbiAgICAgICAgcmVzLmNvb2tpZSgnWFNSRi10b2tlbicsICAgICB0b2tlbiwge1xuICAgICAgICAgICAgZXhwaXJlOiBuZXcgRGF0ZSgpLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyAzMCksXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSwgc2VjdXJlOiBjb25maWcuYXBwLnNlY3VyZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgLHRva2VuLHJvbGU6IHJlcS51c2VyLnJvbGV9KTtcbiAgICB9LFxuXG4gICAgIGFzeW5jIGRlbGV0ZVVzZXJMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGRiLnVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiByZXEuYm9keS5pZH0gfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi51c2VyLmRlc3Ryb3koeyB3aGVyZTogeyBpZDogcmVxLmJvZHkuaWQgfSB9KS50aGVuKHIgPT4gW3IsIGRhdGFdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKCdVc2VyIGlzIG5vdCBmb3VuZCcsIDQwOSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ3N0YXR1cyc6IFwiZGVsZXRlZCB1c2VybGlzdCBTZWNjZXNzZnVsbHlcIiB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dChlcnIpXG4gICAgICAgICAgICB9KVxuICAgIH0sXG59XG5cblxuXG5cbiJdfQ==