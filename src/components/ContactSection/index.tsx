"use client";
import { ChangeEvent, useState } from "react";
import Button from "../Button";
import styles from "./ContactSection.module.scss";
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/utils";

interface FormProps{
  [key: string]: unknown;
  name: string;
  subject: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    console.warn("Here");
    emailjs
      .send(
        SERVICE_ID, // Replace with your EmailJS service ID
        TEMPLATE_ID, // Replace with your EmailJS template ID
        formData as Record<string, unknown>,
        PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFormData({ name: "", subject: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send email.");
        }
      );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          LET'S CONNECT{" "}
          <div className={styles.lightText}>
            Say hello at <span>raghav.rajaraman@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.inputField}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={styles.inputField}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={styles.inputField}>
          <label>Subject</label>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={styles.inputField}>
          <label>Message</label>
          <input
            name="message"
            type="textarea"
            className={styles.textbox}
            value={formData.message}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <Button title={"SUBMIT"} onClick={()=>submitForm} />
      </div>
    </div>
  );
};

export default ContactSection;
