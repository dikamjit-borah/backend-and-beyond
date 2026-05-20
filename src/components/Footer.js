import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = ({ showLegal = true }) => (
  <footer style={{ background: 'var(--cream-alt)', borderTop: '2px solid var(--ink)' }}>
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Brand */}
        <div className="mb-8 md:mb-0">
          <h2 className="font-boowie text-2xl mb-3" style={{ color: 'var(--ink)' }}>
            Backend<span style={{ color: 'var(--accent)', fontSize: '1.4em', lineHeight: 1 }}>&</span>Beyond
          </h2>
          <p className="font-barlow text-xs leading-relaxed max-w-xs mb-4" style={{ color: 'var(--text-sub)' }}>
            Creating exceptional digital experiences that capture attention and drive results.
          </p>
          <div className="flex space-x-3 mb-5">
            {[
              { href: "https://www.linkedin.com/company/backend-and-beyond", icon: <Linkedin size={14} />, label: "LinkedIn" },
              { href: "https://www.instagram.com/backendandbeyond/",          icon: <Instagram size={14} />, label: "Instagram" },
              { href: "https://x.com/backendandbeyond",                        icon: <Twitter size={14} />,   label: "Twitter / X" },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors duration-200"
                style={{ color: 'var(--text-sub)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="font-barlow text-xs" style={{ color: 'var(--text-sub)' }}>
            © {new Date().getFullYear()} backend&amp;beyond. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14 mt-2 md:mt-0">
          <div>
            <h5 className="font-barlow text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--ink)' }}>Navigation</h5>
            <ul className="space-y-2">
              {[['/#home','Home'],['/#services','Services'],['/#portfolio','Portfolio'],['/#about','About'],['/#contact','Contact']].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-barlow text-xs transition-colors duration-200"
                    style={{ color: 'var(--text-sub)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {showLegal && (
            <div>
              <h5 className="font-barlow text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--ink)' }}>Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-barlow text-xs transition-colors duration-200"
                    style={{ color: 'var(--text-sub)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
