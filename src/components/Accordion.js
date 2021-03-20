import React, { useState } from "react"
import FAQ from "./FAQ"

const Accordion = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "The is the first test",
      answer: "A labracadabrador.",
      open: false,
    },
    {
      question: "Second test is pretty cool",
      answer: "SECOND TESTWER YOU KNOW WHATS UP",
      open: false,
    },
    {
      question: "Third test is not bad",
      answer: "FOR THE THIRD TEST.",
      open: false,
    },
  ])

  // Toggle grabs the index of an faq that's been clicked on
  const toggleFAQ = index => {
    // maps through each faq
    setfaqs(
      faqs.map((faq, i) => {
        // if its equal to index clicked, toggle the open
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }

  return (
    <div className="faqs">
      {faqs.map((faq, i) => (
        <div>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        </div>
      ))}
    </div>
  )
}

export default Accordion
