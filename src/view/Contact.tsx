import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const subject = [
    { name: "Job Offer", value: "offer" },
    { name: "Consult", value: "consult" },
    { name: "Collaboration", value: "collaboration" },
    { name: "Other", value: "other" },
  ];

  const handleContact = (evt: any) => {
      evt.preventDefault();

      console.log(data);
  }

  return (
    <section id="contact">
      <Card title="Contact">
        <form onSubmit={handleContact}>
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-6">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-user" />
                <InputText
                  type="text"
                  className="p-inputtext-sm p-d-block p-mb-2"
                  id="firstname"
                  name="firstname"
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                />
                <label htmlFor="firstname">Name</label>
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
                  onChange={(e) => setData({...data, email: e.target.value})}
                />
                <label htmlFor="lastname">Email</label>
              </span>
            </div>
            <div className="p-col-12">
              <span className="p-float-label">
                <Dropdown
                  value={data.subject}
                  options={subject}
                  onChange={(e) => setData({...data, subject: e.target.value})}
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
                  onChange={(e) => setData({...data, message: e.target.value})}
                  rows={5}
                  cols={30}
                  autoResize
                />
              </span>
            </div>
          </div>
          <Button label="Submit"/>
        </form>
      </Card>
    </section>
  );
}

export default Contact;
