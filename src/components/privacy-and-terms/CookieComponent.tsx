"use client";

import React from "react";
import Link from "next/link";
import "./privacyComponent.scss";

export default function CookieComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-light mb-3 text-center">Cookies Policy</h1>
          <p className="text-light">
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used. This Cookies Policy has been created with
            the help of the{" "}
            <a
              href="https://www.termsfeed.com/cookies-policy-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Policy Generator
            </a>
            .
          </p>
          <p className="text-light">
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that We store about You
            may be linked to the information stored in and obtained from
            Cookies. For further information on how We use, store and keep your
            personal data secure, see our Privacy Policy.
          </p>
          <p className="text-light">
            We do not store sensitive personal information, such as mailing
            addresses, account passwords, etc. in the Cookies We use.
          </p>
          <h2 className="text-light mt-4">Interpretation and Definitions</h2>
          <h3 className="text-light">Interpretation</h3>
          <p className="text-light">
            The words whose initial letters are capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h3 className="text-light">Definitions</h3>
          <p className="text-light">For the purposes of this Cookies Policy:</p>
          <ul className="text-light">
            <li>
              <strong>Company</strong> (referred to as either "the
              Company", "We", "Us" or "Our" in this
              Cookies Policy) refers to Jaiswal Digital, Bengaluru.
            </li>
            <li>
              <strong>Cookies</strong> means small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing details of your browsing history on that website among
              its many uses.
            </li>
            <li>
              <strong>Website</strong> refers to Jaiswal Digital, accessible
              from{" "}
              <Link
                href="https://jaiswaldigital.com/"
                target="_blank"
              >
                https://jaiswaldigital.com/
              </Link>
              .
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Website, or a company, or any legal entity on behalf of which such
              individual is accessing or using the Website, as applicable.
            </li>
          </ul>
          <h2 className="text-light mt-4">The use of the Cookies</h2>
          <h3 className="text-light">Type of Cookies We Use</h3>
          <p className="text-light">
            Cookies can be "Persistent" or "Session" Cookies.
            Persistent Cookies remain on your personal computer or mobile device
            when You go offline, while Session Cookies are deleted as soon as You
            close your web browser.
          </p>
          <p className="text-light">
            Where required by law, We will request your consent before using
            Cookies that are not strictly necessary. Strictly necessary Cookies
            are used to provide the Website and cannot be switched off in our
            systems.
          </p>
          <p className="text-light">
            We use both session and persistent Cookies for the purposes set out
            below:
          </p>
          <ul className="text-light">
            <li>
              <p>
                <strong>Necessary / Essential Cookies</strong>
              </p>
              <p>Type: Session Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </li>
            <li>
              <p>
                <strong>Functionality Cookies</strong>
              </p>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow Us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </li>
          </ul>
          <h3 className="text-light mt-4">Your Choices Regarding Cookies</h3>
          <p className="text-light">
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with the Website. You may
            use this option for preventing the use of Cookies at any time.
          </p>
          <p className="text-light">
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </p>
          <h3 className="text-light mt-4">Changes to this Cookies Policy</h3>
          <p className="text-light">
            We may update this Cookies Policy from time to time. The "Last
            updated" date at the top indicates when it was last revised.
          </p>
          <h3 className="text-light mt-4">Contact Us</h3>
          <p className="text-light">
            If you have any questions about this Cookies Policy, You can contact
            us:
          </p>
          <ul className="text-light">
            <li>
              <p>By email: rudra@jaiswaldigital.com</p>
            </li>
            <li>
              <p>
                By visiting this page on our website:{" "}
                <Link href="/contact">
                  https://jaiswaldigital.com/contact
                </Link>
              </p>
            </li>
            <li>
              <p>By phone: 9353042456</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

