"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./database/conn.js":
/*!**************************!*\
  !*** ./database/conn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n        if (connection.readyState == 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUdoQyxNQUFNQyxZQUFZLEdBQUcsVUFBVztJQUM1QixJQUFJO1FBQ0EsTUFBTyxFQUFFQyxVQUFVLEdBQUUsR0FBRyxNQUFNRix1REFBZ0IsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztRQUVyRSxJQUFHSixVQUFVLENBQUNLLFVBQVUsSUFBSSxDQUFDLEVBQUM7WUFDMUIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQy9CO0tBQ0osQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDYixPQUFPRixPQUFPLENBQUNHLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7S0FDL0I7Q0FDSjtBQUVELGlFQUFlVCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vZGF0YWJhc2UvY29ubi5qcz9lYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG5jb25zdCBjb25uZWN0TW9uZ28gPSBhc3luYyAoKSA9PntcbiAgICB0cnkge1xuICAgICAgICBjb25zdCAgeyBjb25uZWN0aW9uIH0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTClcblxuICAgICAgICBpZihjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSl7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ287Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/conn.js\n");

/***/ }),

/***/ "(api)/./model/schema.js":
/*!*************************!*\
  !*** ./model/schema.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: String,\n    email: String,\n    password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9zY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBR2pELE1BQU1HLFVBQVUsR0FBRyxJQUFJSCw0Q0FBTSxDQUFDO0lBQzFCSSxRQUFRLEVBQUVDLE1BQU07SUFDaEJDLEtBQUssRUFBRUQsTUFBTTtJQUNiRSxRQUFRLEVBQUVGLE1BQU07Q0FFbkIsQ0FBQztBQUVGLE1BQU1HLEtBQUssR0FBR04saURBQVcsSUFBSUQsK0NBQUssQ0FBQyxNQUFNLEVBQUVFLFVBQVUsQ0FBQztBQUV0RCxpRUFBZUssS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGFwcC8uL21vZGVsL3NjaGVtYS5qcz9hNjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgcGFzc3dvcmQ6IFN0cmluZywgXG4gXG59KVxuXG5jb25zdCBVc2VycyA9IG1vZGVscy51c2VyIHx8IG1vZGVsKFwidXNlclwiLCB1c2VyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJ1c2VyU2NoZW1hIiwidXNlcm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwiVXNlcnMiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/schema.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../database/conn */ \"(api)/./database/conn.js\");\n/* harmony import */ var _model_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/schema */ \"(api)/./model/schema.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        //Google provider\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                (0,_database_conn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().catch((error)=>{\n                    error: \"Connection Failed..!\";\n                });\n                //Check user existance of credentials\n                const result = await _model_schema__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    throw new Error(\"No User found with email,Please Sign up...!\");\n                }\n                //compare()\n                const CheckPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_6__.compare)(credentials.password, result.password);\n                //Incorrect password\n                if (!CheckPassword || result.email !== credentials.email) {\n                    throw new Error(\"Username or Password does not match\");\n                }\n                return result;\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDc0I7QUFDQTtBQUNXO0FBQ2pCO0FBQ1I7QUFDVDtBQUVoQyxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0Qk8sU0FBUyxFQUFFO1FBQ1QsaUJBQWlCO1FBQ2pCTixpRUFBYyxDQUFDO1lBQ2JPLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7U0FDeEMsQ0FBQztRQUNGWCxpRUFBYyxDQUFDO1lBQ2JNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7WUFDL0JGLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGFBQWE7U0FDeEMsQ0FBQztRQUNGWixzRUFBbUIsQ0FBQztZQUNsQmEsSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTUMsU0FBUyxFQUFDQyxXQUFXLEVBQUVDLEdBQUcsRUFBRTtnQkFDaENmLDBEQUFZLEVBQUUsQ0FBQ2dCLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO29CQUFFQSxLQUFLLEVBQUUsc0JBQXNCO2lCQUFFLENBQUM7Z0JBRWhFLHFDQUFxQztnQkFDckMsTUFBTUMsTUFBTSxHQUFHLE1BQU1qQiw2REFBYSxDQUFDO29CQUFFbUIsS0FBSyxFQUFFTixXQUFXLENBQUNNLEtBQUs7aUJBQUUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDRixNQUFNLEVBQUU7b0JBQ1gsTUFBTSxJQUFJRyxLQUFLLENBQUMsNkNBQTZDLENBQUM7aUJBQy9EO2dCQUNELFdBQVc7Z0JBQ2IsTUFBTUMsYUFBYSxHQUFHLE1BQU1wQiwrQ0FBTyxDQUFDWSxXQUFXLENBQUNTLFFBQVEsRUFBRUwsTUFBTSxDQUFDSyxRQUFRLENBQUM7Z0JBRTFFLG9CQUFvQjtnQkFDcEIsSUFBRyxDQUFDRCxhQUFhLElBQUlKLE1BQU0sQ0FBQ0UsS0FBSyxLQUFLTixXQUFXLENBQUNNLEtBQUssRUFBRTtvQkFDdkQsTUFBTSxJQUFJQyxLQUFLLENBQUMscUNBQXFDLENBQUM7aUJBQ3ZEO2dCQUVELE9BQU9ILE1BQU0sQ0FBQzthQUViO1NBQ0YsQ0FBQztLQUNIO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhhcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9jb25uJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL21vZGVsL3NjaGVtYSdcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy9Hb29nbGUgcHJvdmlkZXJcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXG4gICAgfSksXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29ubmVjdE1vbmdvKCkuY2F0Y2goZXJyb3IgPT4geyBlcnJvcjogXCJDb25uZWN0aW9uIEZhaWxlZC4uIVwiIH0pXG5cbiAgICAgICAgLy9DaGVjayB1c2VyIGV4aXN0YW5jZSBvZiBjcmVkZW50aWFsc1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBmb3VuZCB3aXRoIGVtYWlsLFBsZWFzZSBTaWduIHVwLi4uIVwiKVxuICAgICAgICB9XG4gICAgICAgIC8vY29tcGFyZSgpXG4gICAgICBjb25zdCBDaGVja1Bhc3N3b3JkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgcmVzdWx0LnBhc3N3b3JkKVxuXG4gICAgICAvL0luY29ycmVjdCBwYXNzd29yZFxuICAgICAgaWYoIUNoZWNrUGFzc3dvcmQgfHwgcmVzdWx0LmVtYWlsICE9PSBjcmVkZW50aWFscy5lbWFpbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSBvciBQYXNzd29yZCBkb2VzIG5vdCBtYXRjaFwiKVxuICAgICAgfVxuICAgICBcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgIH1cbiAgICB9KVxuICBdXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdE1vbmdvIiwiVXNlcnMiLCJjb21wYXJlIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJjYXRjaCIsImVycm9yIiwicmVzdWx0IiwiZmluZE9uZSIsImVtYWlsIiwiRXJyb3IiLCJDaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();