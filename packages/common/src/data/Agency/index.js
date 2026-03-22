import Denny from '../../assets/image/agency/client/denny.png';

const data = {
  menuItems: [
    {
      label: 'What I Do',
      path: '#whatIDoSection',
      offset: '80',
    },
    {
      label: 'Services',
      path: '#servicesSection',
      offset: '80',
    },
    {
      label: 'Use Cases',
      path: '#useCasesSection',
      offset: '80',
    },
    {
      label: 'Why Me',
      path: '#whySection',
      offset: '80',
    },
    {
      label: 'Contact',
      path: '#contactSection',
      offset: '80',
    },
  ],
  whatIDo: [
    {
      id: 1,
      icon: 'flaticon-ruler',
      title: 'Diagnose your processes and tech stack',
      description:
        'Like a mini consulting engagement — I map your current workflows, identify friction points, and surface where automation will have the highest ROI.',
    },
    {
      id: 2,
      icon: 'flaticon-flask',
      title: 'Design an OpenClaw strategy',
      description:
        "Decide where agents fit, what they're allowed to do, how they're governed — ownership, consolidation, and economics baked in from day one.",
    },
    {
      id: 3,
      icon: 'flaticon-pencil-case',
      title: 'Implement OpenClaw agents',
      description:
        'End-to-end setup: runtime, skills, integrations (CRM, Slack, email, helpdesk), and guardrails so agents run safely 24/7.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Iterate with real data',
      description:
        "Measure impact, refine workflows, and hand over clear documentation — so your team owns and understands what's running in production.",
    },
  ],
  services: [
    {
      id: 1,
      tag: 'STRATEGY',
      title: 'OpenClaw Readiness & Strategy Workshop',
      duration: '1–2 week engagement',
      description:
        'Map key workflows, identify automation opportunities, and decide exactly where OpenClaw fits your business.',
      deliverable:
        'A clear roadmap with 3–5 high-ROI agent use cases and a recommended architecture (data, channels, tools).',
    },
    {
      id: 2,
      tag: 'IMPLEMENTATION',
      title: 'End-to-End OpenClaw Implementation',
      duration: 'Project-based',
      description:
        'Technical setup of the OpenClaw runtime, skills, and connections to your CRM, helpdesk, Slack, email, and more.',
      deliverable:
        'One or more production agents — lead capture, support triage, internal ops — with testing, guardrails, handover, and team training.',
    },
    {
      id: 3,
      tag: 'ONGOING',
      title: 'Ongoing Optimization & Co-Piloting',
      duration: 'Monthly retainer',
      description:
        'Monthly refinement of prompts, workflows, and metrics as your business evolves. Optionally operate as your fractional head of AI automation.',
      deliverable:
        'OpenClaw agents that stay aligned with business goals — not just running, but improving month over month.',
    },
  ],
  useCases: [
    {
      id: 1,
      title: '24/7 Lead Capture & Qualification',
      description:
        'Agents watch your web, WhatsApp, and email channels — capture leads, score them, push to CRM, and trigger personalised follow-ups without a human in the loop.',
    },
    {
      id: 2,
      title: 'First-Line Customer Support',
      description:
        'Answers common questions, creates tickets, and escalates complex issues with full conversation context — so your support team only touches the hard stuff.',
    },
    {
      id: 3,
      title: 'Internal Ops Assistant',
      description:
        'Watches Slack channels, spots anomalies, suggests fixes, and routes issues to the right person — keeping your team in flow instead of firefighting.',
    },
  ],
  whyUs: [
    {
      id: 1,
      title: 'Boutique, not agency factory',
      description:
        'You work directly with me — not a rotating bench of juniors. Every engagement gets my full attention from strategy through deployment.',
    },
    {
      id: 2,
      title: 'Strategy first, then automation',
      description:
        'I start from business value and process design, then choose tools and models. Automation without strategy is just expensive noise.',
    },
    {
      id: 3,
      title: 'Open, ownable stack',
      description:
        "Wherever possible, your data, prompts, and workflows live in your repo and infrastructure — not locked inside another SaaS subscription.",
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Tom Vogel',
      designation: 'Cloud Architect',
      comment:
        'Gonzalo is a brilliant technologist and a wonderful human being. While we only worked together for a year, he had already made an enormous impact to our Big Data and Analytics reference architecture, pushing our A/B testing and event handling abilities to the bleeding edge. Additionally, he drove serious cultural improvements, with his humble, mission-driven, egoless approach to work.',
      avatar_url: Denny,
    },
  ],
};
export default data;
