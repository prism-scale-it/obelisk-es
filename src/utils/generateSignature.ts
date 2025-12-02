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
      <!-- START SIGNATURE -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="600"
        style="
          font-family: Arial, Helvetica, sans-serif;
          color: #061944;
          line-height: 1.3;
          border-collapse: collapse;
          background-color: #ffffff;
        "
        bgcolor="#ffffff"
      >
        <tr>
          <td style="padding: 20px 20px 12px 20px; vertical-align: top">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <!-- Logo -->
                <td
                  style="vertical-align: top; width: 235px"
                >
                  <img
                    src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/logo-fill.png"
                    alt="Obelisk Logo"
                    style="
                      width: 235px;
                      height: auto;
                      display: block;
                    "
                  />
                </td>

                <!-- Info -->
                <td style="vertical-align: top; width: auto; text-align: right">
                  <div style="display: inline-block; text-align: left">
                  <!-- Name -->
                  <p
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
                    style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      font-weight: 400;
                      color: #000000;
                      line-height: 1.3;
                    "
                  >
                    ${data.position}
                  </p>

                  <!-- Divider -->
                  <hr
                    style="
                      border: none;
                      border-top: 1px solid #000000;
                      margin: 0 0 8px 0;
                      width: 263px;
                    "
                  />

                  <!-- Contact -->
                  <p style="margin: 0 0 6px 0; font-size: 17px; white-space: nowrap; line-height: 1.3">
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
                      margin: 0 0 12px 0;
                      font-size: 17px;
                      white-space: nowrap;
                      line-height: 1.3;
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
                          href="https://www.facebook.com/ObeliskConsulting"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/new-assets/facebook.svg"
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
          background-color: #ffffff;
          border-collapse: collapse;
        "
        bgcolor="#ffffff"
      >
        <tr>
          <td style="padding: 0 20px 20px 20px">
            <p
              style="
                margin: 0;
                padding: 12px 0 0 0;
                font-size: 10px;
                line-height: 1.4;
                color: #666666;
                border-top: 1px solid #e0e0e0;
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

export const generateEmailSignatureDark = (data: SignatureData): string => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  return `<!-- Dark background -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="width: 600px; background-color: #1a1a1a"
  bgcolor="#1a1a1a"
>
  <tr>
    <td style="padding: 0; text-align: left" bgcolor="#1a1a1a">
      <!-- START SIGNATURE -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="600"
        style="
          font-family: Arial, Helvetica, sans-serif;
          color: #e5e5e5;
          line-height: 1.3;
          border-collapse: collapse;
          background-color: #1a1a1a;
        "
        bgcolor="#1a1a1a"
      >
        <tr>
          <td style="padding: 20px 20px 12px 20px; vertical-align: top">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <!-- Logo -->
                <td
                  style="vertical-align: top; width: 235px"
                >
                  <img
                    src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/logo-fill.png"
                    alt="Obelisk Logo"
                    style="
                      width: 235px;
                      height: auto;
                      display: block;
                    "
                  />
                </td>

                <!-- Info -->
                <td style="vertical-align: top; width: auto; text-align: right">
                  <div style="display: inline-block; text-align: left">
                  <!-- Name -->
                  <p
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
                    style="
                      margin: 0 0 8px 0;
                      font-size: 18px;
                      font-weight: 400;
                      color: #e5e5e5;
                      line-height: 1.3;
                    "
                  >
                    ${data.position}
                  </p>

                  <!-- Divider -->
                  <hr
                    style="
                      border: none;
                      border-top: 1px solid #e5e5e5;
                      margin: 0 0 8px 0;
                      width: 263px;
                    "
                  />

                  <!-- Contact -->
                  <p style="margin: 0 0 6px 0; font-size: 17px; white-space: nowrap; line-height: 1.3">
                    <a
                      href="mailto:${data.email}"
                      style="color: #e5e5e5; text-decoration: none"
                      >${data.email}</a
                    >
                    &nbsp;|&nbsp;
                    <a
                      href="tel:${countryCodeData?.dialCode}${data.phoneNumber}"
                      style="color: #e5e5e5; text-decoration: none"
                      >${fullPhoneNumber}</a
                    >
                  </p>

                  <p
                    style="
                      margin: 0 0 12px 0;
                      font-size: 17px;
                      white-space: nowrap;
                      line-height: 1.3;
                    "
                  >
                    <a
                      href="https://maps.app.goo.gl/p5wjb2cD8tkoABTV9"
                      style="color: #e5e5e5; text-decoration: none"
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
                          href="https://www.facebook.com/ObeliskConsulting"
                          target="_blank"
                        >
                          <img
                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/new-assets/facebook.svg"
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
          background-color: #1a1a1a;
          border-collapse: collapse;
        "
        bgcolor="#1a1a1a"
      >
        <tr>
          <td style="padding: 0 20px 20px 20px">
            <p
              style="
                margin: 0;
                padding: 12px 0 0 0;
                font-size: 10px;
                line-height: 1.4;
                color: #a1a1a1;
                border-top: 1px solid #404040;
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
