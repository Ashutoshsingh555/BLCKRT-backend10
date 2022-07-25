"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var api_key = process.env.FACTOR_Key;

var sendBySms = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(phone, otp) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(phone, otp + "gf");
            return _context.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(phone + " ", "&from=BLCKRT&templatename=Buluckart_Otp_Tamplate&var1=").concat(phone, "&var2=").concat(otp)).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendBySms(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var sendMsgBySms = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(clients, alerttext, message) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(clients, "&from=BLCKRT&templatename=Clients_Notification&var1=").concat(alerttext, "&var2=").concat(message)).then(function (res) {
              console.log(res + "ggfg");
            }).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sendMsgBySms(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}(); //order placing


var orderconfirmmsg = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(isd, custPhone) {
    var msg;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            msg = "Dear Customer,Your order has been processed.Will be delivered as per scheduled time.You can track the status in the Buluckart App.\nRegards,Buluckart";
            return _context3.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(custPhone, "&from=BLCKRT&templatename=Order+Received+Template&var1=").concat(isd, "&var2=+916309301143")).then(function (res) {
              console.log(res + "ggfg");
            }).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function orderconfirmmsg(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}(); //order deliverd


var senddeliverdMsg = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, custno) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(custno, "&from=BLCKRT&templatename=Order+delivered&var1=buluckart")).then(function (res) {
              console.log(res + "ggfg");
            }).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function senddeliverdMsg(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}(); //out for delivering


var outfordelivery = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, custno, runner) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(custno, "&from=BLCKRT&templatename=Order+Out+for+Delivery&var1=").concat(id, "&var2=Mr./Mrs").concat(runner)).then(function (res) {
              console.log(res + "ggfg");
            }).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function outfordelivery(_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}(); //order cancelation


var ordercancelation = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, custno) {
    var msgsc;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            msgsc = "cancelled. We hope to see you soon again soon.\nRegards,Buluckart";
            return _context6.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=".concat(api_key, "&to=").concat(custno, "&from=BLCKRT&templatename=Order+Cancelled&var1= ")).then(function (res) {
              console.log(res + "ggfg");
            }).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ordercancelation(_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}(); //order shiping


var ordershiping = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(custno) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _axios["default"].get("https://2factor.in/API/R1/?module=TRANS_SMS&apikey=0f208537-cc49-11ec-9c12-0200cd936042&to=".concat(custno, "&from=BLCKRT&templatename=shiping+tamplate&var1= ")).then(function (res) {}).then(function (res) {
              console.log("statusCode: ".concat(res));
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function ordershiping(_x15) {
    return _ref7.apply(this, arguments);
  };
}();

module.exports = {
  sendBySms: sendBySms,
  sendMsgBySms: sendMsgBySms,
  orderconfirmmsg: orderconfirmmsg,
  outfordelivery: outfordelivery,
  ordercancelation: ordercancelation,
  ordershiping: ordershiping,
  senddeliverdMsg: senddeliverdMsg
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8yZmFjdG9yU21zU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhcGlfa2V5IiwicHJvY2VzcyIsImVudiIsIkZBQ1RPUl9LZXkiLCJzZW5kQnlTbXMiLCJwaG9uZSIsIm90cCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJlcnJvciIsInNlbmRNc2dCeVNtcyIsImNsaWVudHMiLCJhbGVydHRleHQiLCJtZXNzYWdlIiwib3JkZXJjb25maXJtbXNnIiwiaXNkIiwiY3VzdFBob25lIiwibXNnIiwic2VuZGRlbGl2ZXJkTXNnIiwiaWQiLCJjdXN0bm8iLCJvdXRmb3JkZWxpdmVyeSIsInJ1bm5lciIsIm9yZGVyY2FuY2VsYXRpb24iLCJtc2dzYyIsIm9yZGVyc2hpcGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0MsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBMUI7O0FBR0QsSUFBTUMsU0FBUztBQUFBLDJGQUFHLGlCQUFNQyxLQUFOLEVBQWFDLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUFrQkMsR0FBRyxHQUFDLElBQXRCO0FBRGMsNkNBRVhHLGtCQUFNQyxHQUFOLDhEQUFnRVYsT0FBaEUsaUJBQThFSyxLQUFLLEdBQUUsR0FBckYsbUVBQWlKQSxLQUFqSixtQkFBK0pDLEdBQS9KLEdBQ0ZLLElBREUsQ0FDRyxVQUFBQyxHQUFHLEVBQUk7QUFDVEwsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLHVCQUEyQkksR0FBM0I7QUFDQUwsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDSCxhQUpFLFdBS0ksVUFBQUMsS0FBSyxFQUFJO0FBQ1pOLGNBQUFBLE9BQU8sQ0FBQ00sS0FBUixDQUFjQSxLQUFkO0FBQ0gsYUFQRSxDQUZXOztBQUFBO0FBQUE7QUFB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R0FBSDs7QUFBQSxrQkFBaEJjLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QixDLENBa0JEOzs7QUFDQyxJQUFNRSxZQUFZO0FBQUEsNEZBQUcsa0JBQU1MLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNaZixrQkFBTUMsR0FBTixzR0FBd0djLE1BQXhHLHdEQUFtS2IsSUFBbkssQ0FBd0ssVUFBQUMsR0FBRyxFQUFHLENBRXJMLENBRk8sRUFHTEQsSUFISyxDQUdBLFVBQUFDLEdBQUcsRUFBSTtBQUNUTCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsdUJBQTJCSSxHQUEzQjtBQUNBTCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWjtBQUNILGFBTkssV0FPQyxVQUFBQyxLQUFLLEVBQUk7QUFDWk4sY0FBQUEsT0FBTyxDQUFDTSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxhQVRLLENBRFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWmdCLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBZURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFnQjtBQUNaM0IsRUFBQUEsU0FBUyxFQUFUQSxTQURZO0FBRVpVLEVBQUFBLFlBQVksRUFBWkEsWUFGWTtBQUdaSSxFQUFBQSxlQUFlLEVBQWZBLGVBSFk7QUFJWk8sRUFBQUEsY0FBYyxFQUFkQSxjQUpZO0FBS1pFLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBTFk7QUFNWkUsRUFBQUEsWUFBWSxFQUFaQSxZQU5ZO0FBT1pQLEVBQUFBLGVBQWUsRUFBZkE7QUFQWSxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tXCJheGlvc1wiXHJcbiB2YXIgYXBpX2tleSA9IHByb2Nlc3MuZW52LkZBQ1RPUl9LZXk7XHJcblxyXG5cclxuY29uc3Qgc2VuZEJ5U21zID0gYXN5bmMocGhvbmUsIG90cCk9PntcclxuICAgIGNvbnNvbGUubG9nKHBob25lLG90cCtcImdmXCIpXHJcbnJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vMmZhY3Rvci5pbi9BUEkvUjEvP21vZHVsZT1UUkFOU19TTVMmYXBpa2V5PSR7YXBpX2tleX0mdG89JHtwaG9uZSArXCIgXCJ9JmZyb209QkxDS1JUJnRlbXBsYXRlbmFtZT1CdWx1Y2thcnRfT3RwX1RhbXBsYXRlJnZhcjE9JHtwaG9uZX0mdmFyMj0ke290cH1gKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzQ29kZTogJHtyZXN9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiB9XHJcblxyXG5jb25zdCBzZW5kTXNnQnlTbXMgPSBhc3luYyhjbGllbnRzLCBhbGVydHRleHQsbWVzc2FnZSk9PntcclxuICAgXHJcbiAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly8yZmFjdG9yLmluL0FQSS9SMS8/bW9kdWxlPVRSQU5TX1NNUyZhcGlrZXk9JHthcGlfa2V5fSZ0bz0ke2NsaWVudHN9JmZyb209QkxDS1JUJnRlbXBsYXRlbmFtZT1DbGllbnRzX05vdGlmaWNhdGlvbiZ2YXIxPSR7YWxlcnR0ZXh0fSZ2YXIyPSR7bWVzc2FnZX1gKS50aGVuKHJlcyA9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzK1wiZ2dmZ1wiKVxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXNDb2RlOiAke3Jlc31gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG4gICAgICAgIFxyXG4gICAgLy9vcmRlciBwbGFjaW5nXHJcbiAgICBcclxuY29uc3Qgb3JkZXJjb25maXJtbXNnID0gYXN5bmMoaXNkLCBjdXN0UGhvbmUsKT0+e1xyXG4gICAgXHJcbiAgIGxldCBtc2c9YERlYXIgQ3VzdG9tZXIsWW91ciBvcmRlciBoYXMgYmVlbiBwcm9jZXNzZWQuV2lsbCBiZSBkZWxpdmVyZWQgYXMgcGVyIHNjaGVkdWxlZCB0aW1lLllvdSBjYW4gdHJhY2sgdGhlIHN0YXR1cyBpbiB0aGUgQnVsdWNrYXJ0IEFwcC5cclxuUmVnYXJkcyxCdWx1Y2thcnRgXHJcbiAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly8yZmFjdG9yLmluL0FQSS9SMS8/bW9kdWxlPVRSQU5TX1NNUyZhcGlrZXk9JHthcGlfa2V5fSZ0bz0ke2N1c3RQaG9uZX0mZnJvbT1CTENLUlQmdGVtcGxhdGVuYW1lPU9yZGVyK1JlY2VpdmVkK1RlbXBsYXRlJnZhcjE9JHtpc2R9JnZhcjI9KzkxNjMwOTMwMTE0M2ApLnRoZW4ocmVzID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMrXCJnZ2ZnXCIpXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1c0NvZGU6ICR7cmVzfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgXHJcbiAgICAgXHJcbn1cclxuLy9vcmRlciBkZWxpdmVyZFxyXG5jb25zdCBzZW5kZGVsaXZlcmRNc2cgPSBhc3luYyhpZCwgY3VzdG5vLCk9PntcclxuICBcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vMmZhY3Rvci5pbi9BUEkvUjEvP21vZHVsZT1UUkFOU19TTVMmYXBpa2V5PSR7YXBpX2tleX0mdG89JHtjdXN0bm99JmZyb209QkxDS1JUJnRlbXBsYXRlbmFtZT1PcmRlcitkZWxpdmVyZWQmdmFyMT1idWx1Y2thcnRgKS50aGVuKHJlcyA9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzK1wiZ2dmZ1wiKVxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXNDb2RlOiAke3Jlc31gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gIFxyXG4gICAgIFxyXG59XHJcblxyXG4vL291dCBmb3IgZGVsaXZlcmluZ1xyXG4gY29uc3Qgb3V0Zm9yZGVsaXZlcnkgPSBhc3luYyhpZCwgY3VzdG5vLHJ1bm5lciApPT57XHJcbiByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovLzJmYWN0b3IuaW4vQVBJL1IxLz9tb2R1bGU9VFJBTlNfU01TJmFwaWtleT0ke2FwaV9rZXl9JnRvPSR7Y3VzdG5vfSZmcm9tPUJMQ0tSVCZ0ZW1wbGF0ZW5hbWU9T3JkZXIrT3V0K2ZvcitEZWxpdmVyeSZ2YXIxPSR7aWR9JnZhcjI9TXIuL01ycyR7cnVubmVyfWApLnRoZW4ocmVzID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMrXCJnZ2ZnXCIpXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1c0NvZGU6ICR7cmVzfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgXHJcbiAgICAgXHJcbn1cclxuXHJcblxyXG4vL29yZGVyIGNhbmNlbGF0aW9uXHJcbiBjb25zdCBvcmRlcmNhbmNlbGF0aW9uID0gYXN5bmMoaWQsIGN1c3RubyApPT57XHJcbiAgICAgbGV0IG1zZ3NjPSBgY2FuY2VsbGVkLiBXZSBob3BlIHRvIHNlZSB5b3Ugc29vbiBhZ2FpbiBzb29uLlxyXG5SZWdhcmRzLEJ1bHVja2FydGBcclxuIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vMmZhY3Rvci5pbi9BUEkvUjEvP21vZHVsZT1UUkFOU19TTVMmYXBpa2V5PSR7YXBpX2tleX0mdG89JHtjdXN0bm99JmZyb209QkxDS1JUJnRlbXBsYXRlbmFtZT1PcmRlcitDYW5jZWxsZWQmdmFyMT0gYCkudGhlbihyZXMgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcytcImdnZmdcIilcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzQ29kZTogJHtyZXN9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICBcclxuICAgICBcclxufVxyXG5cclxuLy9vcmRlciBzaGlwaW5nXHJcbiBjb25zdCBvcmRlcnNoaXBpbmcgPSBhc3luYyhjdXN0bm8pPT57XHJcbiAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vMmZhY3Rvci5pbi9BUEkvUjEvP21vZHVsZT1UUkFOU19TTVMmYXBpa2V5PTBmMjA4NTM3LWNjNDktMTFlYy05YzEyLTAyMDBjZDkzNjA0MiZ0bz0ke2N1c3Rub30mZnJvbT1CTENLUlQmdGVtcGxhdGVuYW1lPXNoaXBpbmcrdGFtcGxhdGUmdmFyMT0gYCkudGhlbihyZXMgPT57XHJcbiAgICAgXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1c0NvZGU6ICR7cmVzfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgXHJcbiAgICAgXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPXtcclxuICAgIHNlbmRCeVNtcyxcclxuICAgIHNlbmRNc2dCeVNtcyxcclxuICAgIG9yZGVyY29uZmlybW1zZyxcclxuICAgIG91dGZvcmRlbGl2ZXJ5LFxyXG4gICAgb3JkZXJjYW5jZWxhdGlvbixcclxuICAgIG9yZGVyc2hpcGluZyxcclxuICAgIHNlbmRkZWxpdmVyZE1zZ1xyXG4gIFxyXG59Il19