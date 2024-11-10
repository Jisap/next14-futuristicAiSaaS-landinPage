import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>sphereal.ai</div>
          <nav>
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>{item.name}</a>
            ))}
          </nav>
        </div>
        <div>
          <div>
            {socialLinks.map((link) => (
              <div key={link.name}>
                <FontAwesomeIcon icon={link.icon} className="size-4" />
              </div>
            ))}
          </div>
          <p>&copy; Frontend Tribe, All rights reserved,</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
