import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import "../style/Terms.css"; // External CSS

const Terms = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <div className="terms-page">
        <div className="terms-card">
          <h1>Terms of Agreement</h1>

          <ol>
            <li>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Website Name
              accessible at Website URL.
            </li>
            <li>
              By using our Website, you accepted these terms and conditions in
              full. If you disagree with these terms and conditions or any part
              of these terms and conditions, you must not use our Website.
            </li>
            <li>
              Intellectual Property Rights Unless otherwise stated, we or our
              licensors own the intellectual property rights in the website and
              material on the website. Subject to the license below, all these
              intellectual property rights are reserved.
            </li>
            <li>
              License to use website You may view, download for caching purposes
              only, and print pages from the website for your own personal use,
              subject to the restrictions set out below and elsewhere in these
              terms and conditions.
            </li>
          </ol>

          <div className="agree-section">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="agree">Yes, I agree</label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;