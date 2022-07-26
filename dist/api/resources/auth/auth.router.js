"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth.controller"));

var _strategy = require("../../../middleware/strategy");

var _sanitizer = require("../../../middleware/sanitizer");

var _validator = require("../../../middleware/validator");

var authRouter = _express["default"].Router();

exports.authRouter = authRouter;
authRouter.route('/register').post((0, _sanitizer.sanitize)(),
/* validateBody(schemas.registerSchema), */
_auth["default"].addUser);
authRouter.route('/user/getAllUserList').get((0, _sanitizer.sanitize)(), _strategy.jwtStrategy, _auth["default"].getAllUserList);
authRouter.route('/user/userdata').get((0, _sanitizer.sanitize)(), _auth["default"].getAllUserdata);
authRouter.route('/user/update').post((0, _sanitizer.sanitize)(), _strategy.jwtStrategy, _auth["default"].userUpdate);
authRouter.route('/user/delete').post((0, _sanitizer.sanitize)(), _strategy.jwtStrategy, _auth["default"].deleteUserList);
authRouter.route('/getUserByEmailId').get((0, _sanitizer.sanitize)(), _auth["default"].findUser);
authRouter.route('/rootLogin').post((0, _sanitizer.sanitize)(), (0, _validator.validateBody)(_validator.schemas.loginSchema), _strategy.localStrategy, _auth["default"].login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5yb3V0ZXIuanMiXSwibmFtZXMiOlsiYXV0aFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJhdXRoQ29udHJvbGxlciIsImFkZFVzZXIiLCJnZXQiLCJqd3RTdHJhdGVneSIsImdldEFsbFVzZXJMaXN0IiwiZ2V0QWxsVXNlcmRhdGEiLCJ1c2VyVXBkYXRlIiwiZGVsZXRlVXNlckxpc3QiLCJmaW5kVXNlciIsInNjaGVtYXMiLCJsb2dpblNjaGVtYSIsImxvY2FsU3RyYXRlZ3kiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsVUFBVSxHQUFHQyxvQkFBUUMsTUFBUixFQUFuQjs7O0FBQ1BGLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixXQUFqQixFQUE4QkMsSUFBOUIsQ0FBbUMsMEJBQW5DO0FBQThDO0FBQTRDQyxpQkFBZUMsT0FBekc7QUFDQU4sVUFBVSxDQUFDRyxLQUFYLENBQWlCLHNCQUFqQixFQUF5Q0ksR0FBekMsQ0FBNkMsMEJBQTdDLEVBQXlEQyxxQkFBekQsRUFBc0VILGlCQUFlSSxjQUFyRjtBQUNBVCxVQUFVLENBQUNHLEtBQVgsQ0FBaUIsZ0JBQWpCLEVBQW1DSSxHQUFuQyxDQUF1QywwQkFBdkMsRUFBbURGLGlCQUFlSyxjQUFsRTtBQUNBVixVQUFVLENBQUNHLEtBQVgsQ0FBaUIsY0FBakIsRUFBaUNDLElBQWpDLENBQXNDLDBCQUF0QyxFQUFrREkscUJBQWxELEVBQStESCxpQkFBZU0sVUFBOUU7QUFDQVgsVUFBVSxDQUFDRyxLQUFYLENBQWlCLGNBQWpCLEVBQWlDQyxJQUFqQyxDQUFzQywwQkFBdEMsRUFBa0RJLHFCQUFsRCxFQUErREgsaUJBQWVPLGNBQTlFO0FBQ0FaLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixtQkFBakIsRUFBc0NJLEdBQXRDLENBQTBDLDBCQUExQyxFQUFzREYsaUJBQWVRLFFBQXJFO0FBQ0FiLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixZQUFqQixFQUErQkMsSUFBL0IsQ0FBb0MsMEJBQXBDLEVBQStDLDZCQUFhVSxtQkFBUUMsV0FBckIsQ0FBL0MsRUFBaUZDLHVCQUFqRixFQUFnR1gsaUJBQWVZLEtBQS9HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYXV0aENvbnRyb2xsZXIgZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgbG9jYWxTdHJhdGVneSAsIGp3dFN0cmF0ZWd5fSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3N0cmF0ZWd5JztcbmltcG9ydCB7IHNhbml0aXplIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9zYW5pdGl6ZXInO1xuaW1wb3J0IHsgdmFsaWRhdGVCb2R5LCBzY2hlbWFzIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS92YWxpZGF0b3InO1xuXG5leHBvcnQgY29uc3QgYXV0aFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5hdXRoUm91dGVyLnJvdXRlKCcvcmVnaXN0ZXInKS5wb3N0KHNhbml0aXplKCksLyogdmFsaWRhdGVCb2R5KHNjaGVtYXMucmVnaXN0ZXJTY2hlbWEpLCAqLyBhdXRoQ29udHJvbGxlci5hZGRVc2VyKTtcbmF1dGhSb3V0ZXIucm91dGUoJy91c2VyL2dldEFsbFVzZXJMaXN0JykuZ2V0KHNhbml0aXplKCksIGp3dFN0cmF0ZWd5LCBhdXRoQ29udHJvbGxlci5nZXRBbGxVc2VyTGlzdCk7XG5hdXRoUm91dGVyLnJvdXRlKCcvdXNlci91c2VyZGF0YScpLmdldChzYW5pdGl6ZSgpLCBhdXRoQ29udHJvbGxlci5nZXRBbGxVc2VyZGF0YSk7XG5hdXRoUm91dGVyLnJvdXRlKCcvdXNlci91cGRhdGUnKS5wb3N0KHNhbml0aXplKCksIGp3dFN0cmF0ZWd5LCBhdXRoQ29udHJvbGxlci51c2VyVXBkYXRlKTtcbmF1dGhSb3V0ZXIucm91dGUoJy91c2VyL2RlbGV0ZScpLnBvc3Qoc2FuaXRpemUoKSwgand0U3RyYXRlZ3ksIGF1dGhDb250cm9sbGVyLmRlbGV0ZVVzZXJMaXN0KTtcbmF1dGhSb3V0ZXIucm91dGUoJy9nZXRVc2VyQnlFbWFpbElkJykuZ2V0KHNhbml0aXplKCksIGF1dGhDb250cm9sbGVyLmZpbmRVc2VyKTtcbmF1dGhSb3V0ZXIucm91dGUoJy9yb290TG9naW4nKS5wb3N0KHNhbml0aXplKCksdmFsaWRhdGVCb2R5KHNjaGVtYXMubG9naW5TY2hlbWEpLGxvY2FsU3RyYXRlZ3ksIGF1dGhDb250cm9sbGVyLmxvZ2luKTtcblxuXG4iXX0=