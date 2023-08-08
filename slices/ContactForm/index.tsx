import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

// interface ContactFormProps {
//   name: string;
//   email: string;
//   message: string;
//   errors?: {
//     name: string;
//     email: string;
//     message: string;
//   }
// }

const ContactForm = ({ slice }: ContactFormProps) => {
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: "",
    },
  });

  const validateForm = () => {
    let errors = {
      name: "",
      email: "",
      message: "",
    };
    let formIsValid = true;

    if (!form.name) {
      formIsValid = false;
      errors["name"] = "*Vul uw naam in.";
    }
    if (form.name) {
      if (!form.name.match(/^[a-zA-Z0-9_ ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Gebruik alleen letters.";
      }
    }
    if (!form.email) {
      formIsValid = false;
      errors["email"] = "*Vul uw e-mailadres in.";
    }
    if (form.email) {
      //regular expression for email validation
      let pattern = new RegExp(
        /^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(form.email)) {
        formIsValid = false;
        errors["email"] = "*Vul een geldig e-mailadres in.";
      }
    }
    if (!form.message) {
      formIsValid = false;
      errors["message"] = "*Vul uw bericht in.";
    }

    setForm((prevForm) => ({
      ...prevForm,
      errors: errors,
    }));
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormLoading(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setFormLoading(false);
          setFormSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
            errors: {
              name: "",
              email: "",
              message: "",
            },
          });
        } else {
          console.log("Failed to submit the form.");
        }
      } catch (err) {
        console.error("Error submitting the form:", err);
        setFormLoading(false);
      }
    }
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
              placeholder="Naam"
              value={form.name}
              onChange={handleChange}
            />
            <div className="errorMsg">{form.errors.name}</div>

            <input
              className="mt-2 bg-slate-100 p-1"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <div className="errorMsg">{form.errors.email}</div>

            <textarea
              name="message"
              className="mt-2 resize-none bg-slate-100 p-1 "
              rows={4}
              placeholder="Bericht"
              value={form.message}
              onChange={handleChange}
            />
            <div className="errorMsg">{form.errors.message}</div>

            <div className="flex justify-end">
              {formLoading ? (
                <button
                  type="button"
                  className="m-2 bg-[#183540] px-4 py-1 text-white"
                  disabled={formLoading}
                >
                  Verzenden...
                </button>
              ) : (
                <button
                  type="submit"
                  className="m-2 bg-[#183540] px-4 py-1 text-white"
                >
                  Stuur email
                </button>
              )}
            </div>
            <div>
              {formSuccess && (
                <div className="flex flex-col items-center justify-center pt-8">
                  <span>Dank voor uw bericht!</span>
                  <span>Ik neem zo snel mogelijk contact met u op.</span>
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
