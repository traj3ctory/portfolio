import emailjs from "@emailjs/browser";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { FormEvent, useRef, useState } from "react";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const toast = useRef<Toast | null>(null);

  const showInfo = (item?: string) => {
    toast.current?.show({
      severity: "info",
      summary: "Success",
      detail: item || "Message sent successfully",
      life: 4000,
    });
  };
  const showError = (item: string) => {
    toast.current?.show({
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const subject = [
    { name: "Job Offer", value: "Job_Offer" },
    { name: "Consult", value: "Consulting_Gig" },
    { name: "Collaboration", value: "Collaboration_Effort" },
    { name: "Other", value: "New_Idea" },
  ];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2)
      e.name = "Please enter your name (min 2 chars)";
    // simple email regex
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email))
      e.email = "Please enter a valid email";
    if (!data.subject) e.subject = "Please select a subject";
    if (!data.message || data.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContact = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!form.current) return;
    if (!validate()) return;
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.REACT_APP_SERVICE_ID,
        import.meta.env.REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.REACT_APP_USER_ID
      );
      showInfo();
      setData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      console.log(result.text);
    } catch (error: unknown) {
      const err = error as { text?: string };
      showError(err?.text || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-4 mb-6">
      <Card title="Contact">
        <form onSubmit={handleContact} ref={form} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full px-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className={`block w-full rounded-md bg-white/5 border border-gray-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your full name"
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="w-full px-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className={`block w-full rounded-md bg-white/5 border border-gray-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="md:col-span-2 w-full px-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                className={`block w-full rounded-md bg-white/5 border border-gray-700 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.subject ? "ring-2 ring-red-500" : ""
                }`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                required
              >
                <option value="">Select a subject</option>
                {subject.map((s) => (
                  <option key={s.value} value={s.value} className="text-black">
                    {s.name}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="md:col-span-2 w-full px-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                rows={6}
                className={`block w-full rounded-md bg-white/5 border border-gray-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.message ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Write your message here"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 px-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white rounded-md"
            >
              {loading ? (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : null}
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
        </form>
      </Card>
      <Toast ref={toast} position="top-right" />
    </section>
  );
}

export default Contact;
