import React from "react";
import Link from "gatsby-link";

const Nav = props => (
  <section className="bg-black hero">
    <div className="bg-black pt3 pb3 w-50-l w-70-m w-90 center">
      <Link to="/">
        <h1 className="pt2 f2-ns f3 fw5 white lh-title">
          Design Systems Digest
        </h1>
      </Link>
      <p className="white-60 f5 fw3 lh-title">{props.message}</p>
      <form
        className="pt3"
        action="https://buttondown.email/api/emails/embed-subscribe/jack.lorusso"
        method="post"
        target="popupwindow"
      >
        <input
          className="sign-up-form w-70-ns w-100 br--left-ns br2"
          type="email"
          name="email"
          placeholder="Your email"
          id="bd-email"
        />
        <input type="hidden" value="1" name="embed" />
        <input
          className="sign-up-button bg-blue white w4-ns w-30-ns w-100 hover-bg-dark-blue br--right-ns br2 mt0-ns mt3"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p className="white-30 measure f5-ns f6 fw3 lh-title">No spam. Ever.</p>
    </div>
  </section>
);

export default Nav;
