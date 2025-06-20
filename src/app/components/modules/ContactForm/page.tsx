import {
  FIRST_COLOR,
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  THIRD_COLOR,
} from "@/app/utils/page";
import styled from "styled-components";
import Title from "../../common/Title/page";
import Button from "../../common/Button/page";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

interface EmailBodyProps {
  [key: string]: unknown;
  name: string;
  subject: string;
  emailId: string;
  message: string;
}

const ContactForm = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const formBodyRef = useRef<HTMLFormElement>(null);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

  const [emailBody, setEmailBody] = useState<EmailBodyProps>({
    name: "",
    subject: "",
    emailId: "",
    message: "",
  });

  const titleIsInView = useInView(titleRef, { once: true });
  const formIsInView = useInView(formRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (showToastMessage) {
      const timer = setTimeout(() => {
        setShowToastMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToastMessage]);

  useEffect(() => {
    if (titleIsInView) {
      mainControls.start("visible");
    }

    if (formIsInView) {
      mainControls.start("visible");
    }
  }, [titleIsInView, formIsInView]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      emailBody.name &&
      emailBody.emailId &&
      emailBody.subject &&
      emailBody.message
    ) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formBodyRef.current!, PUBLIC_KEY)
        .then(
          () => {
            setShowToastMessage(true);
            setToastMessage("Sent Successfully!");
            setEmailBody({ name: "", subject: "", emailId: "", message: "" });
          },
          (error) => {
            alert(error.text);
            setEmailBody({ name: "", subject: "", emailId: "", message: "" });
          }
        );
    } else {
      setToastMessage("Fill all the fields!");
      setShowToastMessage(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailBody({ ...emailBody, [name]: value });
  };
  return (
    <>
      <Wrapper name="contactForm">
        <Container>
          <motion.div
            ref={titleRef}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={mainControls}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Title title={"Contact Me"} isSecondary={true} />
          </motion.div>

          <Form
            ref={formRef}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={mainControls}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FormBody ref={formBodyRef} onSubmit={sendMessage}>
              <Column>
                <Label>Name</Label>
                <InputField
                  name="name"
                  value={emailBody.name}
                  onChange={(e) => handleChange(e)}
                />
              </Column>
              <Column>
                <Label>E-mail Id</Label>
                <InputField
                  type="email"
                  name="emailId"
                  value={emailBody.emailId}
                  onChange={(e) => handleChange(e)}
                />
              </Column>
              <Column>
                <Label>Subject</Label>
                <InputField
                  name="subject"
                  value={emailBody.subject}
                  onChange={(e) => handleChange(e)}
                />
              </Column>
              <Column>
                <Label>Message</Label>
                <TextBox
                  name="message"
                  value={emailBody.message}
                  onChange={(e) => handleChange(e)}
                />
              </Column>
              <SubmitButton>
                <Button title={"Submit"} isSecondary={true} />
              </SubmitButton>
            </FormBody>
          </Form>
        </Container>
      </Wrapper>
      {showToastMessage && <ToastMessage toastMessage={toastMessage} />}
    </>
  );
};

const ToastMessage = ({ toastMessage }: any) => {
  return <ToastMessageWrapper>{toastMessage}</ToastMessageWrapper>;
};

const ToastMessageWrapper = styled.div`
  position: fixed;
  right: 0px;
  top: 150px;
  width: 200px;
  height: 50px;
  background: #000;
  border: 2px solid #fff;
  border-radius: 5px 0px 0px 5px;
  border-right: none;

  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ContactForm;

const Wrapper = styled(Element)`
  margin-top: 50px;
  height: 90%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, ${FIRST_COLOR}, #000, ${THIRD_COLOR});
`;

const Container = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled(motion.div)`
  width: 40%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.div`
  color: #fff;
  font-size: 14px;
`;

const InputField = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
`;
const TextBox = styled.input`
  padding: 5px;
  height: 90px;
  border-radius: 5px;
`;

const FormBody = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;

  background: rgba(255, 255, 255, 0.1); /* translucent white */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  min-width: 150px;
  max-width: 200px;

  border-radius: 5px;
  border: none;
`;
