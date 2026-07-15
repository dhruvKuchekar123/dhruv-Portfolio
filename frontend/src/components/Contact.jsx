import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Github, Linkedin, Mail, Send, ArrowUpRight, Loader2, Check, AlertCircle } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { CONTACT_IDS } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.state === "loading") return;
    setStatus({ state: "loading", message: "" });
    try {
      const { data } = await axios.post(`${API}/contact`, form, {
        headers: { "Content-Type": "application/json" },
        timeout: 20000,
      });
      if (data?.email_sent) {
        setStatus({
          state: "success",
          message: "Message delivered — I'll reply within 1–2 days.",
        });
      } else {
        setStatus({
          state: "success",
          message:
            data?.message ||
            "Message saved. If you don't hear back, ping me directly on email.",
        });
      }
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      setStatus({
        state: "error",
        message:
          typeof detail === "string"
            ? detail
            : "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] text-neutral-100 placeholder:text-neutral-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-emerald-500/20";

  return (
    <section id="contact" data-testid={CONTACT_IDS.root} className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 bottom-0 h-[380px] w-[520px] rounded-full bg-emerald-500/[0.08] blur-[130px]"
      />
      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="eyebrow">06 / Contact</p>
            <h2 className="h-display mt-3 text-balance text-4xl font-semibold text-neutral-50 sm:text-5xl">
              Let&apos;s build
              <br />
              <span className="h-serif text-emerald-400">something useful</span>.
            </h2>
            <p className="mt-6 max-w-md text-neutral-400">
              I&apos;m open to full-stack, AI-automation, and product-focused roles — and to selective freelance work. The fastest way to reach me is through the form, or directly:
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid={CONTACT_IDS.emailLink}
                className="glass glass-hover flex items-center justify-between rounded-2xl p-4"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Email
                    </p>
                    <p className="text-sm text-neutral-100">{PROFILE.email}</p>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-neutral-500" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT_IDS.githubLink}
                className="glass glass-hover flex items-center justify-between rounded-2xl p-4"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Github className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      GitHub
                    </p>
                    <p className="text-sm text-neutral-100">/dhruvKuchekar123</p>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-neutral-500" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid={CONTACT_IDS.linkedinLink}
                className="glass glass-hover flex items-center justify-between rounded-2xl p-4"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      LinkedIn
                    </p>
                    <p className="text-sm text-neutral-100">/dhruv-kuchekar</p>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              data-testid={CONTACT_IDS.form}
              className="glass rounded-3xl p-6 md:p-8"
              noValidate
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
                  Send a message
                </p>
                <span className="mono text-[10px] text-neutral-500">/ form.v1</span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mono mb-2 block text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    data-testid={CONTACT_IDS.name}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mono mb-2 block text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    data-testid={CONTACT_IDS.email}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mono mb-2 block text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  Subject
                </span>
                <input
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  data-testid={CONTACT_IDS.subject}
                  className={inputCls}
                  placeholder="What's this about?"
                />
              </label>

              <label className="mt-4 block">
                <span className="mono mb-2 block text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  Message
                </span>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={update("message")}
                  data-testid={CONTACT_IDS.message}
                  className={`${inputCls} resize-y`}
                  placeholder="Tell me about the role, project, or idea…"
                />
              </label>

              {/* honeypot — hidden from real users */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={update("website")}
                data-testid={CONTACT_IDS.honeypot}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="mono text-[11px] text-neutral-500">
                  Typically respond within 1–2 days.
                </p>
                <button
                  type="submit"
                  data-testid={CONTACT_IDS.submit}
                  disabled={status.state === "loading"}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.state === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {status.state === "success" && (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    data-testid={CONTACT_IDS.successBanner}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.08] p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                    <p className="text-sm text-emerald-100">{status.message}</p>
                  </motion.div>
                )}
                {status.state === "error" && (
                  <motion.div
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    data-testid={CONTACT_IDS.errorBanner}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/[0.08] p-4"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                      strokeWidth={2.5}
                    />
                    <p className="text-sm text-rose-100">{status.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
