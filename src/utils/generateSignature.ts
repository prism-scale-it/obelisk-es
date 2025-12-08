import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";

export const generateEmailSignature = (
  data: SignatureData,
  isDarkMode: boolean = false
): string => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  // Theme colors
  const bgColor = isDarkMode ? "#1a1a1a" : "#ffffff";
  const textColor = isDarkMode ? "#e5e5e5" : "#000000";
  const dividerColor = isDarkMode ? "#e5e5e5" : "#000000";
  const disclaimerTextColor = isDarkMode ? "#a1a1a1" : "#666666";
  const disclaimerBorderColor = isDarkMode ? "#404040" : "#e0e0e0";
  const logoSrc =
    "https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/new-assets/logo-fill.png";

  return `<!-- ${isDarkMode ? "Dark" : "White"} background -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  /* Mobile responsive styles */
  @media only screen and (max-width: 600px) {
    .signature-table { width: 100% !important; max-width: 600px !important; }
    .signature-content { padding: 15px !important; }
    .logo-cell { display: block !important; width: 100% !important; text-align: center !important; padding-bottom: 15px !important; }
    .info-cell { display: block !important; width: 100% !important; text-align: center !important; }
    .logo-img { width: 180px !important; max-width: 80% !important; }
    .info-wrapper { text-align: center !important; }
    .name-text { font-size: 24px !important; }
    .title-text { font-size: 16px !important; }
    .contact-text { font-size: 15px !important; white-space: normal !important; }
    .divider { width: 100% !important; max-width: 250px !important; margin-left: auto !important; margin-right: auto !important; }
    .disclaimer-text { font-size: 9px !important; }
  }
  
  /* Dark mode logo inversion */
  @media (prefers-color-scheme: dark) {
    img.logo-img { 
      filter: invert(1) brightness(1.2) !important;
      -webkit-filter: invert(1) brightness(1.2) !important;
    }
  }
</style>
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  class="signature-table"
  style="width: 600px; max-width: 100%; background-color: ${bgColor}"
  bgcolor="${bgColor}"
>
  <tr>
    <td style="padding: 0; text-align: left" bgcolor="${bgColor}">
      <!-- START SIGNATURE -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="600"
        class="signature-table"
        style="
          font-family: Arial, Helvetica, sans-serif;
          color: ${textColor};
          line-height: 1.3;
          border-collapse: collapse;
          background-color: ${bgColor};
          max-width: 100%;
        "
        bgcolor="${bgColor}"
      >
        <tr>
          <td class="signature-content" style="padding: 20px 20px 12px 20px; vertical-align: top">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 100%;">
              <tr>
                <!-- Logo -->
                <td
                  class="logo-cell"
                  style="vertical-align: top; width: 235px; padding-right: 15px;"
                >
                  <!--[if !mso]><!-->
                  <img
                    class="logo-img"
                    src="${logoSrc}"
                    alt="Obelisk Logo"
                    width="235"
                    border="0"
                    style="
                      width: 235px;
                      height: auto;
                      display: block;
                      max-width: 100%;
                      border: none;
                    "
                  />
                  <!--<![endif]-->
                  <!--[if mso]>
                  <img
                    src="${logoSrc}"
                    alt="Obelisk Logo"
                    width="235"
                    border="0"
                    style="width: 235px; height: auto; display: block; border: none;"
                  />
                  <![endif]-->
                </td>

                <!-- Info -->
                <td class="info-cell" style="vertical-align: top; width: auto;">
                  <div class="info-wrapper" style="text-align: left">
                  <!-- Name -->
                  <p
                    class="name-text"
                    style="
                      margin: 0 0 4px 0;
                      font-size: 28px;
                      font-weight: 700;
                      color: #e35336;
                      line-height: 1.2;
                    "
                  >
                    ${fullName}
                  </p>

                  <!-- Title -->
                  <p
                    class="title-text"
                    style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      font-weight: 400;
                      color: ${textColor};
                      line-height: 1.3;
                    "
                  >
                    ${data.position}
                  </p>

                  <!-- Divider -->
                  <hr
                    class="divider"
                    style="
                      border: none;
                      border-top: 1px solid ${dividerColor};
                      margin: 0 0 8px 0;
                      width: 263px;
                    "
                  />

                  <!-- Contact -->
                  <p class="contact-text" style="margin: 0 0 6px 0; font-size: 17px; white-space: nowrap; line-height: 1.3">
                    <a
                      href="mailto:${data.email}"
                      style="color: ${textColor}; text-decoration: none"
                      >${data.email}</a
                    >
                    &nbsp;|&nbsp;
                    <a
                      href="tel:${countryCodeData?.dialCode}${data.phoneNumber}"
                      style="color: ${textColor}; text-decoration: none"
                      >${fullPhoneNumber}</a
                    >
                  </p>

                  <p
                    class="contact-text"
                    style="
                      margin: 0 0 12px 0;
                      font-size: 17px;
                      white-space: nowrap;
                      line-height: 1.3;
                    "
                  >
                    <a
                      href="https://maps.app.goo.gl/p5wjb2cD8tkoABTV9"
                      style="color: ${textColor}; text-decoration: none"
                      target="_blank"
                      >${data.address}</a
                    >
                  </p>

                  <!-- Social Icons -->
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="margin: 0"
                  >
                    <tr>
                      <td>
                        <a href="mailto:${data.email}" target="_blank">
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/email.png"
                            alt="Email"
                            width="34"
                            height="34"
                          />
                        </a>
                      </td>
                      <td style="padding-left: 8px">
                        <a
                          href="https://obelisk-consulting.com/"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/website+(2).png"
                            alt="Website"
                            width="34"
                            height="34"
                          />
                        </a>
                      </td>
                      <td style="padding-left: 8px">
                        <a
                          href="https://www.linkedin.com/company/obeliskconsulting/"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/linkedin.png"
                            alt="LinkedIn"
                            width="34"
                            height="34"
                          />
                        </a>
                      </td>
                      <td style="padding-left: 8px">
                        <a
                          href="https://www.instagram.com/bimwithobelisk/"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/insta.png"
                            alt="Instagram"
                            width="34"
                            height="34"
                          />
                        </a>
                      </td>
                      <td style="padding-left: 8px">
                        <a
                          href="https://www.facebook.com/bimwithobelisk/"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/new-assets/fb.png"
                            alt="Facebook"
                            width="34"
                            height="34"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- END SIGNATURE -->
      
      <!-- DISCLAIMER -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="600"
        style="
          font-family: Aptos, Arial, Helvetica, sans-serif;
          background-color: ${bgColor};
          border-collapse: collapse;
        "
        bgcolor="${bgColor}"
      >
        <tr>
          <td style="padding: 0 20px 20px 20px">
            <p
              class="disclaimer-text"
              style="
                margin: 0;
                padding: 12px 0 0 0;
                font-size: 10px;
                line-height: 1.4;
                color: ${disclaimerTextColor};
                border-top: 1px solid ${disclaimerBorderColor};
                text-align: justify;
              "
            >
              <strong>Disclaimer:</strong> This e-mail, including any attachment(s) hereto, is intended only for the individual or entity to whom it is addressed. It may contain proprietary, confidential or privileged information or attorney work product belonging to Obelisk or its affiliates. If you are not the intended recipient of this e-mail, or if you have otherwise received this e-mail in error, please immediately notify the sender via return e-mail and permanently delete the original mail, any print outs and any copies, including any attachments. All e-mails sent from or to Obelisk may be subject to our monitoring and recording procedures.
            </p>
          </td>
        </tr>
      </table>
      <!-- END DISCLAIMER -->
    </td>
  </tr>
</table>`;
};
