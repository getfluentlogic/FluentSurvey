import { Question } from '../types/assessment';

export const quickQuestions: Question[] = [
  {
    id: 'q1',
    section: 'Quick Decision',
    question: 'Is this AI agent core to your competitive advantage?',
    options: [
      { value: 'build', text: 'Yes - This is what makes us different from competitors' },
      { value: 'buy', text: 'No - This is for operational efficiency' }
    ]
  },
  {
    id: 'q2', 
    section: 'Quick Decision',
    question: 'Do you have ML engineers and DevOps teams with AI experience?',
    options: [
      { value: 'build', text: 'Yes - We have experienced teams in both areas' },
      { value: 'buy', text: 'No - We lack one or both of these capabilities' }
    ]
  },
  {
    id: 'q3',
    section: 'Quick Decision', 
    question: 'Do mature solutions already exist for your use case?',
    options: [
      { value: 'buy', text: 'Yes - Multiple vendors offer what we need' },
      { value: 'build', text: 'No - Nothing really fits our requirements' }
    ]
  }
];

export const fullQuestions: Question[] = [
  // Section A: Use Case & Business Value
  {
    id: 'a1',
    section: 'Use Case & Business Value',
    question: 'Process Documentation - Can you document the exact manual process step-by-step?',
    options: [
      { value: 'a', text: 'Yes, we have clear, detailed documentation of every step' },
      { value: 'b', text: 'The process is somewhat documented but has ambiguous parts' },
      { value: 'c', text: 'The process is unique/complex and hard to document fully' }
    ]
  },
  {
    id: 'a2',
    section: 'Use Case & Business Value',
    question: 'Time Investment - How many hours per week does this process currently take across your organization?',
    options: [
      { value: 'a', text: 'Less than 10 hours per week' },
      { value: 'b', text: 'Between 10-40 hours per week' },
      { value: 'c', text: 'More than 40 hours per week' }
    ]
  },
  {
    id: 'a3',
    section: 'Use Case & Business Value',
    question: 'Error Impact - What happens when errors occur in this process?',
    options: [
      { value: 'a', text: 'Minor inconvenience, easily corrected' },
      { value: 'b', text: 'Significant impact but it\'s a standard process we share with others' },
      { value: 'c', text: 'Major impact and the process is unique to how we operate' }
    ]
  },
  {
    id: 'a4',
    section: 'Use Case & Business Value',
    question: 'Strategic Value - Beyond time savings, what value does automating this process provide?',
    options: [
      { value: 'a', text: 'Primarily operational efficiency and cost reduction' },
      { value: 'b', text: 'Mix of efficiency and some competitive advantage' },
      { value: 'c', text: 'This automation would be a key competitive differentiator' }
    ]
  },
  {
    id: 'a5',
    section: 'Use Case & Business Value',
    question: 'Workflow Uniqueness - How unique is your workflow compared to others in your industry?',
    options: [
      { value: 'a', text: 'We could name 5+ companies doing something very similar' },
      { value: 'b', text: 'It follows industry standards with some variations' },
      { value: 'c', text: 'Our workflow is genuinely unique to our organization' }
    ]
  },
  {
    id: 'a6',
    section: 'Use Case & Business Value',
    question: 'Solution Availability - What solutions currently exist in the market for your use case?',
    options: [
      { value: 'a', text: 'Many mature solutions from established vendors' },
      { value: 'b', text: 'A few options exist but they\'re limited or new' },
      { value: 'c', text: 'No existing solutions really address our needs' }
    ]
  },
  {
    id: 'a7',
    section: 'Use Case & Business Value',
    question: 'Memory & Personalization Value - How much would the agent improve if it could remember past interactions and learn patterns?',
    options: [
      { value: 'a', text: 'Less than 10% improvement - our process is mostly stateless' },
      { value: 'b', text: '10-25% improvement - some personalization would help' },
      { value: 'c', text: 'More than 25% improvement - memory/learning is critical to value' }
    ]
  },

  // Section B: Technical Requirements
  {
    id: 'b1',
    section: 'Technical Requirements',
    question: 'System Integrations - How many different systems must your AI agent connect with?',
    options: [
      { value: 'a', text: '1-3 systems with standard APIs' },
      { value: 'b', text: '4-8 systems with varying API quality' },
      { value: 'c', text: 'More than 8 systems or many proprietary/legacy systems' }
    ]
  },
  {
    id: 'b2',
    section: 'Technical Requirements',
    question: 'Integration Types - What types of systems need integration?',
    options: [
      { value: 'a', text: 'All standard platforms (Salesforce, HubSpot, Slack, etc.)' },
      { value: 'b', text: 'Mix of standard platforms and some custom systems' },
      { value: 'c', text: 'Mostly custom, proprietary, or legacy systems' }
    ]
  },
  {
    id: 'b3',
    section: 'Technical Requirements',
    question: 'Data Structure - What kind of data will the agent work with?',
    options: [
      { value: 'a', text: 'Mostly structured data (databases, spreadsheets, forms)' },
      { value: 'b', text: 'Mix of structured and unstructured data' },
      { value: 'c', text: 'Mostly unstructured or unique data formats' }
    ]
  },
  {
    id: 'b4',
    section: 'Technical Requirements',
    question: 'API Quality - How would you rate the APIs you need to integrate with?',
    options: [
      { value: 'a', text: 'Excellent - well-documented, reliable, versioned' },
      { value: 'b', text: 'Good - some documentation issues but generally stable' },
      { value: 'c', text: 'Poor - limited docs, frequent changes, or unreliable' }
    ]
  },
  {
    id: 'b5',
    section: 'Technical Requirements',
    question: 'Security & Compliance - What are your security and compliance requirements?',
    options: [
      { value: 'a', text: 'Standard requirements (SOC2, GDPR, basic security)' },
      { value: 'b', text: 'Elevated requirements (HIPAA, PCI, or similar)' },
      { value: 'c', text: 'Extreme or unique requirements (military, proprietary, etc.)' }
    ]
  },
  {
    id: 'b6',
    section: 'Technical Requirements',
    question: 'Accuracy Requirements - What accuracy level is acceptable for your use case?',
    options: [
      { value: 'a', text: '70-80% accuracy provides good value' },
      { value: 'b', text: 'Need 90%+ accuracy for business value' },
      { value: 'c', text: 'Mission critical - need 95%+ accuracy' }
    ]
  },
  {
    id: 'b7',
    section: 'Technical Requirements',
    question: 'Scale Requirements - How many users/transactions will your agent handle?',
    options: [
      { value: 'a', text: 'Less than 1,000 users or low transaction volume' },
      { value: 'b', text: '1,000-100,000 users or moderate volume' },
      { value: 'c', text: 'More than 100,000 users or very high volume' }
    ]
  },

  // Section C: Team & Resources
  {
    id: 'c1',
    section: 'Team & Resources',
    question: 'ML Engineering Expertise - What ML/AI engineering expertise do you have in-house?',
    options: [
      { value: 'a', text: 'No dedicated ML engineers' },
      { value: 'b', text: '1-2 ML engineers or contractors' },
      { value: 'c', text: 'Strong ML team with 3+ engineers' }
    ]
  },
  {
    id: 'c2',
    section: 'Team & Resources',
    question: 'DevOps Capability - What\'s your DevOps/infrastructure capability?',
    options: [
      { value: 'a', text: 'No dedicated DevOps team' },
      { value: 'b', text: 'Limited DevOps resources' },
      { value: 'c', text: 'Strong 24/7 DevOps team' }
    ]
  },
  {
    id: 'c3',
    section: 'Team & Resources',
    question: 'Security Expertise - What security expertise do you have for AI systems?',
    options: [
      { value: 'a', text: 'No dedicated security experts for AI' },
      { value: 'b', text: 'Some security knowledge but not AI-specific' },
      { value: 'c', text: 'Dedicated security team with AI experience' }
    ]
  },
  {
    id: 'c4',
    section: 'Team & Resources',
    question: 'Maintenance Preference - Who would ideally maintain this system long-term?',
    options: [
      { value: 'a', text: 'Prefer vendor to handle all maintenance' },
      { value: 'b', text: 'Shared responsibility between us and vendor' },
      { value: 'c', text: 'We want full control of maintenance' }
    ]
  },
  {
    id: 'c5',
    section: 'Team & Resources',
    question: 'Timeline Requirements - When do you need this agent operational?',
    options: [
      { value: 'a', text: 'Within 3 months' },
      { value: 'b', text: '3-6 months' },
      { value: 'c', text: '6+ months is acceptable' }
    ]
  },
  {
    id: 'c6',
    section: 'Team & Resources',
    question: 'Budget Range - What\'s your first-year budget for this initiative?',
    options: [
      { value: 'a', text: 'Less than $250,000' },
      { value: 'b', text: '$250,000 - $500,000' },
      { value: 'c', text: 'More than $500,000' }
    ]
  },
  {
    id: 'c7',
    section: 'Team & Resources',
    question: 'Team Culture - How does your team prefer to work with technology?',
    options: [
      { value: 'a', text: 'Prefer using proven tools and platforms' },
      { value: 'b', text: 'Open to either approach depending on the situation' },
      { value: 'c', text: 'Strong preference for building and controlling our stack' }
    ]
  },

  // Section D: Strategic Factors
  {
    id: 'd1',
    section: 'Strategic Factors',
    question: 'Strategic Importance - How critical is this agent to your competitive strategy?',
    options: [
      { value: 'a', text: 'It\'s an operational tool, not strategic' },
      { value: 'b', text: 'Somewhat important to our competitive position' },
      { value: 'c', text: 'This is core to our competitive advantage' }
    ]
  },
  {
    id: 'd2',
    section: 'Strategic Factors',
    question: 'Vendor Dependency - How do you feel about depending on an external vendor?',
    options: [
      { value: 'a', text: 'Comfortable with vendor dependency for non-core functions' },
      { value: 'b', text: 'Some concerns but manageable with the right vendor' },
      { value: 'c', text: 'Must avoid vendor lock-in at all costs' }
    ]
  },
  {
    id: 'd3',
    section: 'Strategic Factors',
    question: 'Change Frequency - How often will you need to update or modify the agent\'s behavior?',
    options: [
      { value: 'a', text: 'Quarterly updates are sufficient' },
      { value: 'b', text: 'Monthly updates expected' },
      { value: 'c', text: 'Weekly or more frequent changes needed' }
    ]
  },
  {
    id: 'd4',
    section: 'Strategic Factors',
    question: 'Failure Impact - What would happen if this project failed or was delayed?',
    options: [
      { value: 'a', text: 'Limited impact - we\'d continue with current process' },
      { value: 'b', text: 'Moderate impact - would affect our plans' },
      { value: 'c', text: 'Significant impact - would seriously harm our business' }
    ]
  },
  {
    id: 'd5',
    section: 'Strategic Factors',
    question: 'Intellectual Property - Is there proprietary IP or "secret sauce" in this process?',
    options: [
      { value: 'a', text: 'No special IP - it\'s a standard process' },
      { value: 'b', text: 'Some proprietary elements but not critical' },
      { value: 'c', text: 'Yes, this involves critical IP or trade secrets' }
    ]
  }
];
