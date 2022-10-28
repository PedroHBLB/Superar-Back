import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { RecoverPasswordService } from "../services/RecoverPasswordService";

class RecoverPasswordController {
  async handle(request: Request, response: Response) {
    const { email } = request.body;
    const recoverPasswordService = new RecoverPasswordService();

    try {
      const colaborador = await recoverPasswordService.execute({ email });
      let transporter = nodemailer.createTransport({
        name: "smtp.office365.com",
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SP_USER, // generated ethereal user
          pass: process.env.SP_PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"SUPERAR PARA INOVAR" <${process.env.SP_USER}>`,
        to: email,
        subject: "Redefinição da sua senha Superar Para Inovar",
        priority: "high",
        html: `
            <!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta charset="utf-8"> <!-- utf-8 works for most cases -->
          <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
          <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->

          <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet">

          <!-- CSS Reset : BEGIN -->
          <style>

          /* What it does: Remove spaces around the email design added by some email clients. */
          /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
          html,
      body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background: #f1f1f1;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
      margin: 0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. */
      table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
      -ms-interpolation-mode:bicubic;
      }

      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
      text-decoration: none;
      }

      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],  /* iOS */
      .unstyle-auto-detected-links *,
      .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
      display: none !important;
      opacity: 0.01 !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
      color: inherit !important;
      }

      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
      display: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */

      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
      u ~ div .email-container {
          min-width: 320px !important;
      }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
      u ~ div .email-container {
          min-width: 375px !important;
      }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
      u ~ div .email-container {
          min-width: 414px !important;
      }
      }

      </style>

      <!-- CSS Reset : END -->

      <!-- Progressive Enhancements : BEGIN -->
      <style>

        .primary{
      background: #17bebb;
      }
      .bg_white{
      background: #ffffff;
      }
      .bg_light{
      background: #f7fafa;
      }
      .bg_black{
      background: #000000;
      }
      .bg_dark{
      background: rgba(0,0,0,.8);
      }
      .email-section{
      padding:2.5em;
      }

      /*BUTTON*/
      .btn{
      padding: 10px 15px;
      display: inline-block;
      }
      .btn.btn-primary{
      border-radius: 5px;
      background: #E35205;
      color: #ffffff;
      font-familu: 'Trebuchet MS'
      }
      .btn.btn-white{
      border-radius: 5px;
      background: #ffffff;
      color: #000000;
      }
      .btn.btn-white-outline{
      border-radius: 5px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      }
      .btn.btn-black-outline{
      border-radius: 0px;
      background: transparent;
      border: 2px solid #000;
      color: #000;
      font-weight: 700;
      }
      .btn-custom{
      color: rgba(0,0,0,.3);
      text-decoration: underline;
      }

      h1,h2,h3,h4,h5,h6{
      font-family: 'Poppins', sans-serif;
      color: #fffff;
      margin-top: 0;
      font-weight: 400;
      }

      body{
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(1,1,1,.4);
      }

      table{
      }
      /*LOGO*/

      .logo h1{
      margin: 0;
      }
      .logo h1 a{
      color: #651D32;
      font-size: 24px;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      }

      /*HERO*/
      .hero{
      position: relative;
      z-index: 0;
      }

      .hero .text{
      color: rgba(0,0,0,.3);
      }
      .hero .text h2{
      color: #000;
      font-size: 34px;
      margin-bottom: 0;
      font-weight: 200;
      line-height: 1.4;
      }
      .hero .text h3{
      font-size: 24px;
      font-weight: 300;
      color: #fffff;
      }
      .hero .text h2 span{
      font-weight: 600;
      color: #000;
      }

      .text-author{
      border: 1px solid rgba(0,0,0,.05);
      max-width: 50%;
      margin: 0 auto;
      padding: 2em;
      background-color: #651D32;
      }
      .text-author img{
      padding-bottom: 20px;
      }
      .text-author h3{
      margin-bottom: 0;
      }
      ul.social{
      padding: 0;
      }
      ul.social li{
      display: inline-block;
      margin-right: 10px;
      }

      </style>

      </head>

      <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
      <center style="width: 100%; background-color: #f1f1f1;">
      <div style="max-width: 600px; margin: 0 auto;" class="email-container">
        <!-- BEGIN BODY -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
          <tr>
            <td valign="top" class="bg_white" style="padding: 1em 2.5em 1em 2.5em;background-color: #651D32">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td class="logo" style="text-align: center;">
                    <img src="https://static.wixstatic.com/media/a04754_ae492f92043d473d89fba314c59f9c7c~mv2.png/v1/fill/w_156,h_102,al_c,q_85,usm_0.66_1.00_0.01/Superar_Inovar_SPI_Logo_2021-04.png" alt="" style="width: 150px; max-width: 600px; height: auto; margin: auto; display: block;">
                  </td>
                </tr>
              </table>
            </td>
          </tr><!-- end tr -->
          <tr>
            <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 0 2.5em; text-align: center; padding-bottom: 3em;">
                    <div class="text">
                      <h2>Redefinição de senha</h2>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center;">
                    <div class="text-author">
                      <img src="https://www.spi-integradora.com.br/wp-content/uploads/SPI-Integradora-Retina-1.png" alt="" style="width: 150px; max-width: 600px; height: auto; margin: auto; display: block;">
                      <h3 class="name" style="color:white">Esqueceu a senha?</h3>
                      <span class="position" style="color:#DEDEDE">Tudo bem, isso acontece! Clique no botão abaixo para redefinir sua senha.</span>
                       <p><a href='http://192.168.10.80:3000/recover?s_token=${colaborador.newPassword.secret_key}&token=${colaborador.token}' class="btn btn-primary">REDEFINIR SUA SENHA</a></p>
                     </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr><!-- end tr -->
        <!-- 1 Column Text + Button : END -->
        </table>

      </div>
      </center>
      </body>
      </html>`,
      });
      return response.status(200).json("Email enviado com sucesso");
    } catch (error) {
      return response
        .status(404)
        .json({ error: "Not possible to send an email" });
    }
  }
}

export { RecoverPasswordController };
