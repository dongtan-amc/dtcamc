import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  area: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  area,
  email,
  phone,
}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      <li>이름 : {name}</li>
      <li>이메일 : {email}</li>
      <li>지원 분야 : {area}</li>
      <li>연락처 : {phone}</li>
    </ul>
    <br />
    <br />
    <hr />
    <p>답장을 누르시면 이메일을 보낼 수 있습니다.</p>
  </div>
);

export default EmailTemplate;
