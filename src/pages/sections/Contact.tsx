import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

type Notice = { type: "success" | "error"; message: string };

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

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
    setNotice(null);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.REACT_APP_SERVICE_ID,
        import.meta.env.REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.REACT_APP_USER_ID
      );
      setNotice({ type: "success", message: "Message sent successfully." });
      setData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      console.log(result.text);
    } catch (error: unknown) {
      const err = error as { text?: string };
      setNotice({
        type: "error",
        message: err?.text || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="my-16">
      <div className="relative mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Get In Touch
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      <div className="group relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text mb-2">Contact</h3>
            <p className="text-muted">
              Send me a message and I'll get back to you.
            </p>
          </div>

          {notice ? (
            <div
              role="status"
              className={
                notice.type === "success"
                  ? "mb-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 rounded-lg text-text font-medium"
                  : "mb-6 border-l-4 border-red-500 bg-gradient-to-r from-red-500/10 to-transparent px-4 py-3 rounded-lg text-text font-medium"
              }
            >
              {notice.message}
            </div>
          ) : null}

          <form onSubmit={handleContact} ref={form} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className={`block w-full rounded-md !bg-bg/60 border border-accent/70 px-3 py-2 !text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-600 ${
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

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className={`block w-full rounded-md !bg-bg/60 border border-accent/70 px-3 py-2 !text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-600 ${
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

              <div className="md:col-span-2 w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                  className={`block w-full rounded-md !bg-bg/60 border border-accent/70 px-3 py-2 !text-text focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.subject ? "ring-2 ring-red-500" : ""
                  }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  required
                >
                  <option value="">Select a subject</option>
                  {subject.map((s) => (
                    <option key={s.value} value={s.value}>
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

              <div className="md:col-span-2 w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  rows={6}
                  className={`block w-full rounded-md !bg-bg/60 border border-accent/70 px-3 py-2 !text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.message ? "ring-2 ring-red-500" : ""
                  }`}
                  placeholder="Write your message here"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-60 text-white rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 focus-visible:outline-none"
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
                ) : (
                  <i className="pi pi-send text-sm group-hover/btn:translate-x-0.5 transition-transform" />
                )}
                <span className="font-medium">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
