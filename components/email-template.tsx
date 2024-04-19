import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  area: string;
  career: string;
  contents: string;
  major?: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  area,
  career,
  contents,
  email,
  major,
  phone,
}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      <li>이름 : {name}</li>
      <li>이메일 : {email}</li>
      <li>지원 분야 : {area}</li>
      <li>전공 : {major ? major : "학부졸업"}</li>
      <li>경력 : {career}</li>
      <li>연락처 : {phone}</li>
    </ul>
    <hr />
    <br />
    <p>{contents}</p>
    <br />
    <hr />
    <p>답장을 누르시면 이메일을 보낼 수 있습니다.</p>
  </div>
);

export default EmailTemplate;
