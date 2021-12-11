import React from "react";
import { Socials } from "../../components/socials";
import "./contact.scss";

export const Contact = () => {
  return (
    <section className="right-section not-home-page">
      <div className="wrapper contact">
      <p class="contact-me">
        Email me at{" "}
        <a href="mailto:hello@vitorpt.com">
          hello<span>@</span>vitorpt.com
        </a>{" "}
      </p>
      <Socials />
      </div>
    </section>
  );
};
