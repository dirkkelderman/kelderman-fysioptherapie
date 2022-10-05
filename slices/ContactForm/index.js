import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const ContactForm = ({ slice }) => {
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(setFormLoading(false), setFormSuccess(true))
      .catch((err) => console.log(err));

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <PrismicRichText field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div className="flex justify-center pt-5">
          <form
            className="flex w-full flex-col text-black lg:w-2/3"
            onSubmit={handleSubmit}
          >
            <input
              className="mt-2 bg-slate-100 p-1"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="mt-2 bg-slate-100 p-1"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="mt-2 resize-none bg-slate-100 p-1 "
              rows={4}
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              {formLoading ? (
                <button
                  type="button"
                  className="m-2 bg-[#183540] px-4 py-1 text-white"
                  disabled
                >
                  Sending...
                </button>
              ) : (
                <button
                  type="submit"
                  className="m-2 bg-[#183540] px-4 py-1 text-white"
                >
                  Email me
                </button>
              )}
            </div>
            <div>
              {formSuccess && (
                <div className="flex flex-col items-center justify-center pt-8">
                  <span>Thanks for your message!</span>
                  <span>I will get back to you as soon as possible.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Bounded>
  );
};

export default ContactForm;
