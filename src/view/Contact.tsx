import { useState, useRef } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const toast = useRef(null);

  const showInfo = (item?: string) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: item || "Message sent successfully",
      life: 4000,
    });
  };
  const showError = (item: string) => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: item || "An error occurred",
      life: 3500,
    });
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const subject = [
    { name: "Job Offer", value: "Job_Offer" },
    { name: "Consult", value: "Consulting_Gig" },
    { name: "Collaboration", value: "Collaboration_Effort" },
    { name: "Other", value: "New_Idea" },
  ];

  const handleContact = (evt: any) => {
    evt.preventDefault();
    setLoading(true);
    const { name, email, subject, message } = data;
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            showInfo();
            setData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setLoading(false);
          },
          (error) => {
            showError(error.text);
            setLoading(false);
          }
        );
    } else {
      showError("Please fill all the fields");
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <section id="contact">
      <Card title="Contact">
        <form onSubmit={handleContact} ref={form}>
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-6">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-user" />
                <InputText
                  type="text"
                  className="p-inputtext-sm p-d-block p-mb-2"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label htmlFor="name">Name</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-envelope" />
                <InputText
                  type="email"
                  className="p-inputtext-sm p-d-block p-mb-2"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  autoComplete="name"
                />
                <label htmlFor="lastname">Email</label>
              </span>
            </div>
            <div className="p-col-12">
              <span className="p-float-label">
                <Dropdown
                  value={data.subject}
                  options={subject}
                  name="subject"
                  id="subject"
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                  optionLabel="name"
                />
                <label htmlFor="subject">Subject</label>
              </span>
            </div>
            <div className="p-col-12">
              <span>
                {/* <label htmlFor="message">Message</label> */}
                <InputTextarea
                  placeholder="Message"
                  value={data.message}
                  id="message"
                  name="message"
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  rows={5}
                  cols={30}
                  autoResize
                />
              </span>
            </div>
          </div>
          <Button
            label="Submit"
            iconPos="right"
            loading={loading}
            className="p-button-raised p-button-sm p-button-info"
          />
        </form>
      </Card>
      <Toast ref={toast} position="top-right" />
    </section>
  );
}

export default Contact;
