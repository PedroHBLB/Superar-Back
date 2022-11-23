"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPasswordController = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var RecoverPasswordService_1 = require("../services/RecoverPasswordService");
var RecoverPasswordController = /** @class */ (function () {
    function RecoverPasswordController() {
    }
    RecoverPasswordController.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, recoverPasswordService, colaborador, transporter, info, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = request.body.email;
                        recoverPasswordService = new RecoverPasswordService_1.RecoverPasswordService();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, recoverPasswordService.execute({ email: email })];
                    case 2:
                        colaborador = _a.sent();
                        transporter = nodemailer_1.default.createTransport({
                            name: "smtp.office365.com",
                            host: "smtp.office365.com",
                            port: 587,
                            secure: false,
                            auth: {
                                user: process.env.SP_USER,
                                pass: process.env.SP_PASSWORD, // generated ethereal password
                            },
                        });
                        return [4 /*yield*/, transporter.sendMail({
                                from: "\"SUPERAR PARA INOVAR\" <" + process.env.SP_USER + ">",
                                to: email,
                                subject: "Redefinição da sua senha Superar Para Inovar",
                                priority: "high",
                                html: "\n            <!DOCTYPE html>\n      <html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n      <head>\n          <meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\n          <meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\n          <meta name=\"x-apple-disable-message-reformatting\">  <!-- Disable auto-scale in iOS 10 Mail entirely -->\n\n          <link href=\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700\" rel=\"stylesheet\">\n\n          <!-- CSS Reset : BEGIN -->\n          <style>\n\n          /* What it does: Remove spaces around the email design added by some email clients. */\n          /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\n          html,\n      body {\n      margin: 0 auto !important;\n      padding: 0 !important;\n      height: 100% !important;\n      width: 100% !important;\n      background: #f1f1f1;\n      }\n\n      /* What it does: Stops email clients resizing small text. */\n      * {\n      -ms-text-size-adjust: 100%;\n      -webkit-text-size-adjust: 100%;\n      }\n\n      /* What it does: Centers email on Android 4.4 */\n      div[style*=\"margin: 16px 0\"] {\n      margin: 0 !important;\n      }\n\n      /* What it does: Stops Outlook from adding extra spacing to tables. */\n      table,\n      td {\n      mso-table-lspace: 0pt !important;\n      mso-table-rspace: 0pt !important;\n      }\n\n      /* What it does: Fixes webkit padding issue. */\n      table {\n      border-spacing: 0 !important;\n      border-collapse: collapse !important;\n      table-layout: fixed !important;\n      margin: 0 auto !important;\n      }\n\n      /* What it does: Uses a better rendering method when resizing images in IE. */\n      img {\n      -ms-interpolation-mode:bicubic;\n      }\n\n      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */\n      a {\n      text-decoration: none;\n      }\n\n      /* What it does: A work-around for email clients meddling in triggered links. */\n      *[x-apple-data-detectors],  /* iOS */\n      .unstyle-auto-detected-links *,\n      .aBn {\n      border-bottom: 0 !important;\n      cursor: default !important;\n      color: inherit !important;\n      text-decoration: none !important;\n      font-size: inherit !important;\n      font-family: inherit !important;\n      font-weight: inherit !important;\n      line-height: inherit !important;\n      }\n\n      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */\n      .a6S {\n      display: none !important;\n      opacity: 0.01 !important;\n      }\n\n      /* What it does: Prevents Gmail from changing the text color in conversation threads. */\n      .im {\n      color: inherit !important;\n      }\n\n      /* If the above doesn't work, add a .g-img class to any image in question. */\n      img.g-img + div {\n      display: none !important;\n      }\n\n      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\n      /* Create one of these media queries for each additional viewport size you'd like to fix */\n\n      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */\n      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {\n      u ~ div .email-container {\n          min-width: 320px !important;\n      }\n      }\n      /* iPhone 6, 6S, 7, 8, and X */\n      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {\n      u ~ div .email-container {\n          min-width: 375px !important;\n      }\n      }\n      /* iPhone 6+, 7+, and 8+ */\n      @media only screen and (min-device-width: 414px) {\n      u ~ div .email-container {\n          min-width: 414px !important;\n      }\n      }\n\n      </style>\n\n      <!-- CSS Reset : END -->\n\n      <!-- Progressive Enhancements : BEGIN -->\n      <style>\n\n        .primary{\n      background: #17bebb;\n      }\n      .bg_white{\n      background: #ffffff;\n      }\n      .bg_light{\n      background: #f7fafa;\n      }\n      .bg_black{\n      background: #000000;\n      }\n      .bg_dark{\n      background: rgba(0,0,0,.8);\n      }\n      .email-section{\n      padding:2.5em;\n      }\n\n      /*BUTTON*/\n      .btn{\n      padding: 10px 15px;\n      display: inline-block;\n      }\n      .btn.btn-primary{\n      border-radius: 5px;\n      background: #E35205;\n      color: #ffffff;\n      font-familu: 'Trebuchet MS'\n      }\n      .btn.btn-white{\n      border-radius: 5px;\n      background: #ffffff;\n      color: #000000;\n      }\n      .btn.btn-white-outline{\n      border-radius: 5px;\n      background: transparent;\n      border: 1px solid #fff;\n      color: #fff;\n      }\n      .btn.btn-black-outline{\n      border-radius: 0px;\n      background: transparent;\n      border: 2px solid #000;\n      color: #000;\n      font-weight: 700;\n      }\n      .btn-custom{\n      color: rgba(0,0,0,.3);\n      text-decoration: underline;\n      }\n\n      h1,h2,h3,h4,h5,h6{\n      font-family: 'Poppins', sans-serif;\n      color: #fffff;\n      margin-top: 0;\n      font-weight: 400;\n      }\n\n      body{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n      font-size: 15px;\n      line-height: 1.8;\n      color: rgba(1,1,1,.4);\n      }\n\n      table{\n      }\n      /*LOGO*/\n\n      .logo h1{\n      margin: 0;\n      }\n      .logo h1 a{\n      color: #651D32;\n      font-size: 24px;\n      font-weight: 700;\n      font-family: 'Poppins', sans-serif;\n      }\n\n      /*HERO*/\n      .hero{\n      position: relative;\n      z-index: 0;\n      }\n\n      .hero .text{\n      color: rgba(0,0,0,.3);\n      }\n      .hero .text h2{\n      color: #000;\n      font-size: 34px;\n      margin-bottom: 0;\n      font-weight: 200;\n      line-height: 1.4;\n      }\n      .hero .text h3{\n      font-size: 24px;\n      font-weight: 300;\n      color: #fffff;\n      }\n      .hero .text h2 span{\n      font-weight: 600;\n      color: #000;\n      }\n\n      .text-author{\n      border: 1px solid rgba(0,0,0,.05);\n      max-width: 50%;\n      margin: 0 auto;\n      padding: 2em;\n      background-color: #651D32;\n      }\n      .text-author img{\n      padding-bottom: 20px;\n      }\n      .text-author h3{\n      margin-bottom: 0;\n      }\n      ul.social{\n      padding: 0;\n      }\n      ul.social li{\n      display: inline-block;\n      margin-right: 10px;\n      }\n\n      </style>\n\n      </head>\n\n      <body width=\"100%\" style=\"margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;\">\n      <center style=\"width: 100%; background-color: #f1f1f1;\">\n      <div style=\"max-width: 600px; margin: 0 auto;\" class=\"email-container\">\n        <!-- BEGIN BODY -->\n        <table align=\"center\" role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\" style=\"margin: auto;\">\n          <tr>\n            <td valign=\"top\" class=\"bg_white\" style=\"padding: 1em 2.5em 1em 2.5em;background-color: #651D32\">\n              <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                <tr>\n                  <td class=\"logo\" style=\"text-align: center;\">\n                    <img src=\"https://static.wixstatic.com/media/a04754_ae492f92043d473d89fba314c59f9c7c~mv2.png/v1/fill/w_156,h_102,al_c,q_85,usm_0.66_1.00_0.01/Superar_Inovar_SPI_Logo_2021-04.png\" alt=\"\" style=\"width: 150px; max-width: 600px; height: auto; margin: auto; display: block;\">\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr><!-- end tr -->\n          <tr>\n            <td valign=\"middle\" class=\"hero bg_white\" style=\"padding: 2em 0 4em 0;\">\n              <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                <tr>\n                  <td style=\"padding: 0 2.5em; text-align: center; padding-bottom: 3em;\">\n                    <div class=\"text\">\n                      <h2>Redefini\u00E7\u00E3o de senha</h2>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"text-align: center;\">\n                    <div class=\"text-author\">\n                      <img src=\"https://www.spi-integradora.com.br/wp-content/uploads/SPI-Integradora-Retina-1.png\" alt=\"\" style=\"width: 150px; max-width: 600px; height: auto; margin: auto; display: block;\">\n                      <h3 class=\"name\" style=\"color:white\">Esqueceu a senha?</h3>\n                      <span class=\"position\" style=\"color:#DEDEDE\">Tudo bem, isso acontece! Clique no bot\u00E3o abaixo para redefinir sua senha.</span>\n                       <p><a href='http://192.168.11.105:3000/recover?s_token=" + colaborador.newPassword.secret_key + "&token=" + colaborador.token + "' class=\"btn btn-primary\">REDEFINIR SUA SENHA</a></p>\n                     </div>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr><!-- end tr -->\n        <!-- 1 Column Text + Button : END -->\n        </table>\n\n      </div>\n      </center>\n      </body>\n      </html>",
                            })];
                    case 3:
                        info = _a.sent();
                        return [2 /*return*/, response.status(200).json("Email enviado com sucesso")];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, response
                                .status(404)
                                .json({ error: "Not possible to send an email" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return RecoverPasswordController;
}());
exports.RecoverPasswordController = RecoverPasswordController;
