import { Mail, Phone, Link2, MapPin, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactLinks = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: "luongtuankiet1801@gmail.com",
    href: "mailto:luongtuankiet1801@gmail.com",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10 border-[#f97316]/20",
  },
  {
    id: "contact-phone",
    icon: Phone,
    label: "Phone",
    value: "08888 19044",
    href: "tel:+84888819044",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: "contact-linkedin",
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/kietluong18",
    href: "https://linkedin.com/in/kietluong18",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    id: "contact-location",
    icon: MapPin,
    label: "Location",
    value: "Thu Duc, HCMC, Vietnam",
    href: null,
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <footer id="contact" className="py-28 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        {/* CTA block */}
        <div
          className="text-center mb-20 reveal"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="section-label">04 — Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Open to backend &amp; cloud roles
          </h2>
          <p className="text-[#52525b] max-w-md mx-auto text-sm leading-relaxed mb-8">
            Open to backend &amp; cloud roles, internships, and collaborative
            projects. The fastest way to reach me is email.
          </p>
          <a
            href="mailto:luongtuankiet1801@gmail.com"
            className="btn-primary inline-flex"
            id="footer-email-cta"
          >
            <Mail size={16} />
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Contact grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 reveal-stagger"
          ref={gridRef}
        >
          {contactLinks.map(
            ({ id, icon: Icon, label, value, href, color, bg }) => {
              const Wrapper = href ? "a" : "div";
              const wrapperProps = href
                ? { href, target: "_blank", rel: "noopener noreferrer", id }
                : {};

              return (
                <Wrapper
                  key={id}
                  {...wrapperProps}
                  className={`rounded-xl border p-5 ${bg} flex flex-col gap-3 ${
                    href ? "card-hover cursor-pointer group" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className={color} />
                    {href && (
                      <ArrowUpRight
                        size={13}
                        className="text-[#3f3f46] group-hover:text-[#a1a1aa] transition-colors"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-[#3f3f46] font-mono uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className={`text-sm font-medium ${color} break-all`}>
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            },
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#27272a]">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-bold text-[#f97316]">
              &lt;
            </span>
            <span className="font-mono text-xs font-bold text-[#fafafa]">
              David
            </span>
            <span className="font-mono text-xs font-bold text-[#f97316]">
              /&gt;
            </span>
          </div>

          <p className="font-mono text-xs text-[#3f3f46]">
            © {year} Luong Tuan Kiet
          </p>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#3f3f46]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}
