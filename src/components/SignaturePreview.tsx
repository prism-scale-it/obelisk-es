import React from "react";
import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";

interface SignaturePreviewProps {
  data: SignatureData;
}

export const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const fullName = data.middleName
    ? `${data.firstName} ${data.middleName} ${data.lastName}`
    : `${data.firstName} ${data.lastName}`;

  const countryCodeData = COUNTRY_CODES.find(
    (c) => c.code === data.countryCode
  );
  const fullPhoneNumber = `${countryCodeData?.dialCode} ${data.phoneNumber}`;

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{ width: "600px", backgroundColor: "#ffffff" }}
      >
        <tbody>
          <tr>
            <td style={{ padding: 0, textAlign: "left" }}>
              <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#061944",
                  lineHeight: 1.4,
                  borderCollapse: "collapse",
                  backgroundColor: "#ffffff",
                  width: "600px",
                  minHeight: "200px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "20px", verticalAlign: "top" }}>
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
                                paddingRight: "30px",
                                verticalAlign: "top",
                                width: "229px",
                              }}
                            >
                              <img
                                src="https://prismscales3.s3.ap-southeast-1.amazonaws.com/Obelisk/email-signature/logo-fill.png"
                                alt="Obelisk Logo"
                                style={{
                                  minWidth: "235px",
                                  height: "auto",
                                  display: "block",
                                  width: "100%",
                                }}
                              />
                            </td>

                            {/* Info */}
                            <td style={{ verticalAlign: "top" }}>
                              {/* Name */}
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "28px",
                                  fontWeight: 700,
                                  color: "#e35336",
                                }}
                              >
                                {fullName || "Your Name"}
                              </p>

                              {/* Title */}
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "18px",
                                  fontWeight: 400,
                                  color: "#000000",
                                }}
                              >
                                {data.position || "Position"}
                              </p>

                              {/* Divider */}
                              <hr
                                style={{
                                  border: "none",
                                  borderTop: "1px solid #000000",
                                  margin: "8px 0",
                                  width: "263px",
                                }}
                              />

                              {/* Contact */}
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "17px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <a
                                  href={`mailto:${data.email}`}
                                  style={{
                                    color: "#000000",
                                    textDecoration: "none",
                                  }}
                                >
                                  {data.email || "email@obelisk.au"}
                                </a>
                                &nbsp;|&nbsp;
                                <a
                                  href={`tel:${countryCodeData?.dialCode}${data.phoneNumber}`}
                                  style={{
                                    color: "#000000",
                                    textDecoration: "none",
                                  }}
                                >
                                  {fullPhoneNumber || "+61 XXX XXX XXX"}
                                </a>
                              </p>

                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "17px",
                                  whiteSpace: "nowrap",
                                  lineHeight: 2,
                                }}
                              >
                                <a
                                  href="https://maps.app.goo.gl/p5wjb2cD8tkoABTV9"
                                  style={{
                                    color: "#000000",
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
                                style={{ marginTop: "12px" }}
                              >
                                <tbody>
                                  <tr>
                                    <td>
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
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
