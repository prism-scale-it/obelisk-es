import React from "react";
import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";

interface SignaturePreviewProps {
  data: SignatureData;
  isDarkMode?: boolean;
}

export const SignaturePreview: React.FC<SignaturePreviewProps> = ({
  data,
  isDarkMode = false,
}) => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  const bgColor = isDarkMode ? "#1a1a1a" : "#ffffff";
  const textColor = isDarkMode ? "#e5e5e5" : "#000000";
  const dividerColor = isDarkMode ? "#e5e5e5" : "#000000";
  const disclaimerTextColor = isDarkMode ? "#a1a1a1" : "#666666";
  const disclaimerBorderColor = isDarkMode ? "#404040" : "#e0e0e0";

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{ width: "600px", backgroundColor: bgColor }}
      >
        <tbody>
          <tr>
            <td style={{ padding: 0, textAlign: "left" }}>
              <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: textColor,
                  lineHeight: 1.3,
                  borderCollapse: "collapse",
                  backgroundColor: bgColor,
                  width: "600px",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "20px 20px 12px 20px",
                        verticalAlign: "top",
                      }}
                    >
                      <table
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ width: "100%" }}
                      >
                        <tbody>
                          <tr>
                            {/* Logo */}
                            <td
                              style={{
                                verticalAlign: "top",
                                width: "235px",
                              }}
                            >
                              <img
                                src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/logo-fill.png"
                                alt="Obelisk Logo"
                                style={{
                                  width: "235px",
                                  height: "auto",
                                  display: "block",
                                }}
                              />
                            </td>

                            {/* Info */}
                            <td
                              style={{
                                verticalAlign: "top",
                                width: "auto",
                                textAlign: "right",
                              }}
                            >
                              <div
                                style={{
                                  display: "inline-block",
                                  textAlign: "left",
                                }}
                              >
                                {/* Name */}
                                <p
                                  style={{
                                    margin: "0 0 4px 0",
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    color: "#e35336",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {fullName || "Your Name"}
                                </p>

                                {/* Title */}
                                <p
                                  style={{
                                    margin: "0 0 8px 0",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    color: textColor,
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {data.position || "Position"}
                                </p>

                                {/* Divider */}
                                <hr
                                  style={{
                                    border: "none",
                                    borderTop: `1px solid ${dividerColor}`,
                                    margin: "0 0 8px 0",
                                    width: "263px",
                                  }}
                                />

                                {/* Contact */}
                                <p
                                  style={{
                                    margin: "0 0 6px 0",
                                    fontSize: "17px",
                                    whiteSpace: "nowrap",
                                    lineHeight: 1.3,
                                  }}
                                >
                                  <a
                                    href={`mailto:${data.email}`}
                                    style={{
                                      color: textColor,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {data.email || "email@obelisk.au"}
                                  </a>
                                  &nbsp;|&nbsp;
                                  <a
                                    href={`tel:${countryCodeData?.dialCode}${data.phoneNumber}`}
                                    style={{
                                      color: textColor,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {fullPhoneNumber || "+61 XXX XXX XXX"}
                                  </a>
                                </p>

                                <p
                                  style={{
                                    margin: "0 0 12px 0",
                                    fontSize: "17px",
                                    whiteSpace: "nowrap",
                                    lineHeight: 1.3,
                                  }}
                                >
                                  <a
                                    href="https://maps.app.goo.gl/p5wjb2cD8tkoABTV9"
                                    style={{
                                      color: textColor,
                                      textDecoration: "none",
                                    }}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {data.address || "Address"}
                                  </a>
                                </p>

                                {/* Social Icons */}
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{ margin: 0 }}
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a
                                          href={`mailto:${data.email}`}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/email.png"
                                            alt="Email"
                                            width="34"
                                            height="34"
                                          />
                                        </a>
                                      </td>
                                      <td style={{ paddingLeft: "8px" }}>
                                        <a
                                          href="https://obelisk-consulting.com/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/website+(2).png"
                                            alt="Website"
                                            width="34"
                                            height="34"
                                          />
                                        </a>
                                      </td>
                                      <td style={{ paddingLeft: "8px" }}>
                                        <a
                                          href="https://www.linkedin.com/company/obeliskconsulting/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/linkedin.png"
                                            alt="LinkedIn"
                                            width="34"
                                            height="34"
                                          />
                                        </a>
                                      </td>
                                      <td style={{ paddingLeft: "8px" }}>
                                        <a
                                          href="https://www.instagram.com/___obelisk___/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <img
                                            src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/insta.png"
                                            alt="Instagram"
                                            width="34"
                                            height="34"
                                          />
                                        </a>
                                      </td>
                                      <td style={{ paddingLeft: "8px" }}>
                                        <a
                                          href="https://www.facebook.com/share/1TJoc5JkVF/?mibextid=wwXIfr"
                                          target="_blank"
                                          rel="noreferrer"
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
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* DISCLAIMER */}
              <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                  fontFamily: "Aptos, Arial, Helvetica, sans-serif",
                  backgroundColor: bgColor,
                  borderCollapse: "collapse",
                  width: "600px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0 20px 20px 20px" }}>
                      <p
                        style={{
                          margin: 0,
                          padding: "12px 0 0 0",
                          fontSize: "11px",
                          lineHeight: 1.4,
                          color: disclaimerTextColor,
                          borderTop: `1px solid ${disclaimerBorderColor}`,
                          textAlign: "justify",
                        }}
                      >
                        <strong>Disclaimer:</strong> This e-mail, including any
                        attachment(s) hereto, is intended only for the
                        individual or entity to whom it is addressed. It may
                        contain proprietary, confidential or privileged
                        information or attorney work product belonging to
                        Obelisk or its affiliates. If you are not the intended
                        recipient of this e-mail, or if you have otherwise
                        received this e-mail in error, please immediately notify
                        the sender via return e-mail and permanently delete the
                        original mail, any print outs and any copies, including
                        any attachments. All e-mails sent from or to Obelisk may
                        be subject to our monitoring and recording procedures.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
