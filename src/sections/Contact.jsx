import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_uxguzvb",
        "template_dl8jv9n",
        {
          from_name: form.name,
          to_name: "Ali nameer",
          from_email: form.email,
          to_email: "alinamer2113@gmail.com",
          message: form.message,
        },
        "qiJg-FGTUCTbp2no2"
      );

      setLoading(false);
      alert("Thank you. Your message has been sent.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="c-space my-20 "  id="contact">
          {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="../assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-white-600 text-lg mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Sara Ali"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="saraali@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, i'm  intersted in ... "
              />
            </label>

            <button type="submit" className="field-btn disabled:={loading}">
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//service_uxguzvb
//template_kdtx1b9
//qiJg-FGTUCTbp2no2
