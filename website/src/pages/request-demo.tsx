import React from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./contact.module.css";
import message from "../util/message";

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  firstName: React.createRef<HTMLInputElement>(),
  lastName: React.createRef<HTMLInputElement>(),
  engineerCount: React.createRef<HTMLInputElement>(),
};

function RequestDemo() {
  return (
    <Layout>
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Request a demo.</div>
              <div className={common.subtitle}>
                <br />
                We'd love to show you around.
              </div>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.form}>
              <input ref={form.company} placeholder="Company" />
              <input ref={form.email} placeholder="Work email address" />
              <input ref={form.firstName} placeholder="First name" />
              <input ref={form.lastName} placeholder="Last name" />
              <input ref={form.engineerCount} placeholder="Number of engineers" className={styles.span2} />
              <button
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}>
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function sendMessage() {
  message(
    `New Demo Request!\nName: ${form.firstName.current.value} ${form.lastName.current.value}\nEmail: ${form.email.current.value}\nCompany: ${form.company.current.value}\nNumber of Engineers: ${form.engineerCount.current.value}`
  );
}

export default RequestDemo;
