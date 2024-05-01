import React, { useState } from 'react';
import './faq.css';
const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);
  const faqs = [
    { id: 1, question: 'Who should apply for a Master of Public Health Program?', answer: 'The Master of Public Health program is designed for professionals who wish to transform their careers into a qualified public health specialist.' },
    { id: 2, question: 'What will be the better option after an MPH?', answer: 'You will be eligible to take up a Ph.D. in Public Health that will earn you lucrative career opportunities in the field of public health.' },
    { id: 3, question: 'What is the duration of MPH program?', answer: 'The duration of our MPH program is two years.' },
    { id: 4, question: 'Is University of Central Nicaragua Recognized?', answer: 'UCN is an IAU – UNESCO listed university and Authorised by CNU, Member of the The Council for Higher Education Accreditation (CHEA) International Quality Group (CIQG). Final degree will be awarded from UCN is valid around the Globe.' },
    { id: 5, question: 'Are there any flexible payment plans for the students?', answer: 'Yes, of course. Our student counselors will guide you about the payment plans available for each intake.' },


  ];
  const handleQuestionClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };
  return (
    <secion id='faq'>
    <div className="faq text-center mt-5 mb-3">
        <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <div className="question mt-5" onClick={() => handleQuestionClick(faq.id)}>
            <h3 className="arrow">{faq.question} <br/> {expandedId === faq.id ?'⬆️':'⬇️'}</h3>
          
          {expandedId === faq.id && <p className="answer">{faq.answer}</p>}
          </div>
          </div>
      ))}
    </div>
    </secion>
  );
};

export default FAQ;
