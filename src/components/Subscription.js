import React from "react"

const Subscription = () => {
  return (
    <div className="email container">
      <div className="email__inner">
        <h2>Join my monthly newsletter</h2>
        <p className="email__description">
          I email once a month to keep you updated with my latest thoughts.
        </p>
        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
        <form
          action="https://app.convertkit.com/forms/2395508/subscriptions"
          method="post"
          // data-sv-form="2395508"
          // data-uid="e05743f6a5"
          // data-format="inline"
          // data-version="5"
          // data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
          // min-width="400 500 600 700 800"
        >
          <div data-style="clean">
            <ul data-element="errors" data-group="alert"></ul>
            <div
              className="email__flex"
              data-element="fields"
              data-stacked="false"
            >
              <div className='email__line'>
                <input
                  className="email__input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  required=""
                  type="email"
                />
              </div>
              <button
                data-element="submit"
                className="btn btn--desktop btn--email"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscription
