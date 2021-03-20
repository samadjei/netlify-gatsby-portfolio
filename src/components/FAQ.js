import React from "react"
import { FiArrowUp } from "react-icons/fi"
function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
        <FiArrowUp className="arrow" />
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  )
}

export default FAQ
