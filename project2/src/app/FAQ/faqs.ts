export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
export const faqs:FAQ[] = [
  {
    id: 1,
    question: "What documents are required to buy a property?",
    answer: "You typically need ID proof, address proof, PAN card, income proof, and bank statements for loan approval."
  },
  {
    id: 2,
    question: "How do I know if a property is legally verified?",
    answer: "Check for clear title, approved building plan, and verify documents like sale deed, encumbrance certificate, and property tax receipts."
  },
  {
    id: 3,
    question: "Do you provide home loan assistance?",
    answer: "Yes, we help connect you with trusted banks and financial institutions for easy home loan processing."
  },
  {
    id: 4,
    question: "What are the additional costs apart from property price?",
    answer: "Additional costs include registration charges, stamp duty, maintenance fees, and brokerage (if applicable)."
  },
  {
    id: 5,
    question: "Can I schedule a site visit before buying?",
    answer: "Yes, you can schedule a site visit anytime. Our team will assist you with property tours."
  },
  {
    id: 6,
    question: "Do you deal in rental properties as well?",
    answer: "Yes, we offer both rental and purchase options for residential and commercial properties."
  }
];

export default faqs;