import { 
  Code, 
  Paintbrush, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  BarChart3 
} from 'lucide-react';

export const siteContent = {
  company: {
    name: "OwoadeLabs",
    tagline: "Building design-led, technology-driven solutions.",
    description: "We are a premier digital agency focused on delivering high-quality web applications, bespoke software solutions, and cutting-edge digital experiences.",
    email: "owoadelabs@gmail.com",
    address: "4/5 Orisa sanya Street, Oniru, Lagos",
    socials: {
      twitter: "https://twitter.com/owoadelabs",
      linkedin: "https://linkedin.com/company/owoadelabs",
      github: "https://github.com/owoadelabs"
    }
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Policy", href: "/policy" },
  ],
  projects: [
    { name: "Rowland's Portfolio", link: "https://rojthegoat.com", description: "Creative Development" },
    { name: "Lagos meet's editorials", link: "https://lagos-meet.com", description: "Creative Development, Payment Integration" },
    { name: "Seabreeze", link: "https://challenge.theseabreezebook.com/", description: "Backend Development, Web Development, Payment Integration" },
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like Next.js and React. We focus on performance, SEO, and scalability.",
      icon: Globe,
      features: ["SPA & PWA Development", "Optimized Performance", "SEO Best Practices"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "User-centric design that looks stunning and functions seamlessly. We craft interfaces that engage and convert users.",
      icon: Paintbrush,
      features: ["Wireframing & Prototyping", "Design Systems", "User Research"]
    },
    {
      id: "backend",
      title: "Backend Solutions",
      description: "Robust server-side architectures, API development, and database management to power your digital products.",
      icon: Cpu,
      features: ["API Development", "Database Architecture", "Cloud Integration"]
    },
    {
      id: "analytics",
      title: "Analytics & Strategy",
      description: "Data-driven insights to help you make informed decisions. We integrate analytics tools to track your product's performance.",
      icon: BarChart3,
      features: ["Custom Dashboards", "User Tracking", "Growth Strategy"]
    }
  ],
  about: {
    mission: "To bridge the gap between complex technology and intuitive user experiences.",
    vision: "To be the leading partner for ambitious brands looking to redefine their digital presence.",
    story: "Founded with a passion for code and design, OwoadeLabs has grown from a small consultancy to a full-service digital agency. We believe in the power of collaboration and the impact of thoughtful engineering.",
    stats: [
      { label: "Projects Delivered", value: "10+" },
      { label: "Happy Clients", value: "5+" },
      { label: "Years Experience", value: "2+" },
    ]
  },
  policies: {
    privacy: {
      title: "Privacy Policy",
      content: "At OwoadeLabs, we prioritize your privacy. We do not sell your personal data. We collect only what is necessary to improve our services and communicate with you effectively. This includes basic usage analytics and contact information you voluntarily provide."
    },
    terms: {
      title: "Terms of Service",
      content: "By using our services, you agree to our terms. All code and designs provided are intellectual property of OwoadeLabs until final payment is settled. We guarantee our work for a warranty period of 30 days post-launch."
    },
    refund: {
      title: "Refund Policy",
      content: "We strive to ensure your satisfaction with our services. If you are not completely satisfied with our work, please contact us within 14 days of project delivery. We will work with you to resolve any issues. Refunds are considered on a case-by-case basis depending on the scope of work completed and expenses incurred."
    }
  },
  testimonials: [
    {
      name: "S",
      role: "CEO, TechFlow",
      text: "OwoadeLabs transformed our outdated website into a lead-generating machine. The attention to detail was impeccable."
    },
    {
      name: "Sarah Williams",
      role: "Director, CreativeArts",
      text: "Their team understood our vision perfectly. The design is not just beautiful, it's functional and easy to manage."
    }
  ]
};
