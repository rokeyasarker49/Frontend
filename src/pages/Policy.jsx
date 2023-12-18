import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy Policy

             At Second Hand Product Selling Ecommerce App, we are committed to ensuring the privacy and security of our users personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit or use our website.</p>
          <p>Information Collection and Use

             When you visit Second Hand Product Selling  Ecommerce App, we may collect certain personally identifiable information that you voluntarily provide, such as your name, email address, shipping address, and payment information. We use this information to facilitate transactions, improve our services, and communicate with you regarding your account and purchases.</p>
          <p>Data Security

             We prioritize the security of your information and employ industry-standard measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          <p>Cookies and Tracking Technologies

             We may use cookies and similar tracking technologies to enhance your experience on our website. These tools help us analyze trends, administer the website, track users movements, and gather demographic information. You can control the use of cookies through your browser settings, but please note that disabling cookies may affect certain functionalities of the site.</p>
          <p>Third-Party Links

             Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          <p>Privacy of Children

             Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove that information from our systems.</p>
          <p>Changes to This Privacy Policy

             We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this Privacy Policy periodically for any updates.</p>

          <p>Contact Us

             If you have any questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact us.

             By using Second Hand Product Selling Ecommerce App, you agree to the terms outlined in this Privacy Policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;