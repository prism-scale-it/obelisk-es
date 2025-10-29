import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";

export const generateEmailSignature = (data: SignatureData): string => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  return `<!-- White background -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="width: 600px; background-color: #ffffff"
  bgcolor="#ffffff"
>
  <tr>
    <td style="padding: 0; text-align: left" bgcolor="#ffffff">
      <!-- START SIGNATURE - Select from here -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="600"
        height="200"
        style="
          font-family: Arial, Helvetica, sans-serif;
          color: #061944;
          line-height: 1.4;
          border-collapse: collapse;
          background-color: #ffffff;
        "
        bgcolor="#ffffff"
      >
        <tr>
          <td style="padding: 20px; vertical-align: top">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <!-- Logo -->
                <td
                  style="padding-right: 30px; vertical-align: top; width: 229px"
                >
                  <img
                    src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/logo-fill.png"
                    alt="Obelisk Logo"
                    style="
                      min-width: 235px;
                      height: auto;
                      display: block;
                      width: 100%;
                    "
                  />
                </td>

                <!-- Info -->
                <td style="vertical-align: top">
                  <!-- Name -->
                  <p
                    style="
                      margin: 0;
                      font-size: 28px;
                      font-weight: 700;
                      color: #e35336;
                    "
                  >
                    ${fullName}
                  </p>

                  <!-- Title -->
                  <p
                    style="
                      margin: 0;
                      font-size: 18px;
                      font-weight: 400;
                      color: #000000;
                    "
                  >
                    ${data.position}
                  </p>

                  <!-- Divider -->
                  <hr
                    style="
                      border: none;
                      border-top: 1px solid #000000;
                      margin: 8px 0;
                      width: 263px;
                    "
                  />

                  <!-- Contact -->
                  <p style="margin: 0; font-size: 17px; white-space: nowrap">
                    <a
                      href="mailto:${data.email}"
                      style="color: #000000; text-decoration: none"
                      >${data.email}</a
                    >
                    &nbsp;|&nbsp;
                    <a
                      href="tel:${countryCodeData?.dialCode}${data.phoneNumber}"
                      style="color: #000000; text-decoration: none"
                      >${fullPhoneNumber}</a
                    >
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 17px;
                      white-space: nowrap;
                      line-height: 2;
                    "
                  >
                    <a
                      href="https://maps.app.goo.gl/p5wjb2cD8tkoABTV9"
                      style="color: #000000; text-decoration: none"
                      target="_blank"
                      >${data.address}</a
                    >
                  </p>

                  <!-- Social Icons -->
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="margin-top: 12px"
                  >
                    <tr>
                      <td>
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
                          href="https://www.instagram.com/___obelisk___/"
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
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- END SIGNATURE -->
    </td>
  </tr>
</table>`;
};
