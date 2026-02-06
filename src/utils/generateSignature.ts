import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";

export const generateEmailSignature = (data: SignatureData): string => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode,
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>Unmanned Signature</title>

    <style type="text/css">
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        outline: none;
        text-decoration: none;
        display: block;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        background: #ffffff;
      }

      /* keep your classes — only added fallbacks */
      .text-dark {
        color: #023560;
      }

      .border-line {
        border-bottom: 1px solid #023560;
      }

      .font-body {
        font-family: Arial, Helvetica, sans-serif !important;
        font-size: 10px;
        line-height: 17px;
        letter-spacing: -0.3px;
        font-weight: 400 !important;
      }

      /* Mobile Responsive Styles */
      @media only screen and (max-width: 600px) {
        .logo-img {
          height: 100px !important;
          width: auto !important;
        }
        .text-logo-img {
          height: 14px !important;
          width: auto !important;
        }
        .name-text {
          font-size: 16px !important;
        }
        .title-text {
          font-size: 13px !important;
          line-height: 16px !important;
        }
        .contact-text {
          font-size: 11px !important;
        }
        .address-text {
          font-size: 9px !important;
          line-height: 12px !important;
        }
        .social-icon-linkedin {
          height: 20px !important;
          width: auto !important;
        }
        .social-icon-website {
          height: 16px !important;
          width: auto !important;
        }
        .main-padding {
          padding: 10px !important;
        }
        .logo-cell-padding {
          padding-right: 10px !important;
        }
      }
    </style>

    <!-- Custom fonts removed -->

    <!-- Outlook fallback -->
    <!--[if mso]>
      <style>
        * {
          font-family: Helvetica, sans-serif !important;
        }
      </style>
    <![endif]-->
  </head>

  <body style="margin: 0; padding: 0">
    <!--[if mso]>
<table role="presentation" width="800" border="0" cellspacing="0" cellpadding="0"><tr><td>
<![endif]-->

    <table
      role="presentation"
      border="0"
      cellspacing="0"
      cellpadding="0"
      width="100%"
      style="max-width: 800px; width: 100%; font-family: Helvetica, sans-serif"
    >
      <tr>
        <td style="padding: 20px" class="main-padding">
          <table
            role="presentation"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="100%"
          >
            <tr>
              <!-- Left Logo -->
              <td
                valign="middle"
                width="1%"
                class="logo-cell-padding"
                style="
                  padding-right: 20px;
                  white-space: nowrap;
                  vertical-align: middle;
                "
              >
                <img
                  src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/unmanned-es/unmanned-logo.png"
                  alt="Unmanned X Logo"
                  height="200"
                  class="logo-img"
                />
              </td>

              <!-- Right Content -->
              <td valign="middle" style="vertical-align: middle">
                <table
                  role="presentation"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="100%"
                >
                  <!-- Text Logo -->
                  <tr>
                    <td style="padding-bottom: 14px">
                      <img
                        src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/unmanned-es/unmanned-text.png"
                        alt="UNMANNED"
                        height="18"
                        class="text-logo-img"
                      />
                    </td>
                  </tr>

                  <!-- Name (Goldman + Arial fallback) -->
                  <tr>
                    <td
                      class="name-text"
                      style="
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 24px;
                        font-weight: 700;
                        color: #db5226;
                        text-transform: uppercase;
                      "
                    >
                      ${fullName}
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td
                      class="title-text"
                      style="
                        font-family:
                          Arial, Helvetica, sans-serif;
                        font-size: 16px;
                        line-height: 20px;
                        color: #023560;
                        padding-bottom: 12px;
                      "
                    >
                      ${data.position}
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding-bottom: 8px">
                      <table role="presentation" width="100%">
                        <tr>
                          <td
                            style="
                              border-bottom: 1px solid #023560;
                              font-size: 1px;
                              line-height: 1px;
                            "
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Contact -->
                  <tr>
                    <td
                      class="contact-text"
                      style="
                        font-family:
                          Arial, Helvetica, sans-serif;
                        font-size: 16px;
                        color: #023560;
                        padding-bottom: 8px;
                        white-space: nowrap;
                      "
                    >
                      <a
                        href="mailto:${data.email}"
                        style="color: #023560; text-decoration: none"
                        >${data.email}</a
                      >
                      &nbsp;|&nbsp;
                      <a
                        href="tel:${countryCodeData?.dialCode}${data.phoneNumber}"
                        style="color: #023560; text-decoration: none"
                        >${fullPhoneNumber}</a
                      >
                    </td>
                  </tr>

                  <!-- Address -->
                  <tr>
                    <td
                      class="address-text"
                      style="
                        font-family:
                          Arial, Helvetica, sans-serif;
                        font-size: 12px;
                        color: #023560;
                        line-height: 16px;
                        padding-bottom: 8px;
                      "
                    >
                      ${data.address}
                    </td>
                  </tr>

                  <!-- Social -->
                  <tr>
                    <td style="padding-bottom: 14px">
                      <table
                        role="presentation"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td
                            style="
                              padding-right: 12px;
                              vertical-align: middle;
                              line-height: 0;
                              font-size: 0;
                            "
                          >
                            <a
                              href="https://www.linkedin.com/company/unmannd-autonomy/"
                            >
                              <img
                                src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/unmanned-es/linkedin.png"
                                height="24"
                                class="social-icon-linkedin"
                                style="display: block; height: 32px; border: 0"
                              />
                            </a>
                          </td>

                          <td
                            style="
                              vertical-align: middle;
                              line-height: 0;
                              font-size: 0;
                            "
                          >
                            <a href="https://www.unmannd.com">
                              <img
                                src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/unmanned-es/website.png"
                                height="24"
                                class="social-icon-website"
                                style="display: block; height: 32px; border: 0"
                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Confidentiality Notice (Full Width) -->
            <tr>
              <td
                colspan="2"
                style="
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 10px;
                  line-height: 14px;
                  color: #888888;
                "
              >
                Confidentiality Notice: This email and any attachments are
                intended solely for the use of the individual or entity to whom
                they are addressed. They may contain confidential or legally
                privileged information. If you are not the intended recipient,
                please notify the sender immediately, and delete this email and
                any attachments from your system. Any unauthorized review, use,
                disclosure, copying, or distribution of this communication is
                strictly prohibited.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!--[if mso]>
</td></tr></table>
<![endif]-->
  </body>
</html>`;
};
