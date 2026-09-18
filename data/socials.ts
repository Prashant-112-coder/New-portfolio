export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  displayValue: string;
  isPrimary?: boolean;
}

export const socialDetails: Record<string, SocialLink> = {
  github: {
    name: "GitHub",
    url: "https://github.com/Prashant-112-coder",
    iconName: "Github",
    displayValue: "Prashant-112-coder",
    isPrimary: true,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prashant-ikkalaki-2260722a1",
    iconName: "Linkedin",
    displayValue: "Prashant Ikkalaki",
    isPrimary: true,
  },
  email: {
    name: "Email",
    url: "mailto:Prashantikkalaki416@gmail.com",
    iconName: "Mail",
    displayValue: "Prashantikkalaki416@gmail.com",
    isPrimary: true,
  },
  portfolio: {
    name: "Legacy Portfolio",
    url: "https://prashant-112-coder.github.io/myportfolio/",
    iconName: "Globe",
    displayValue: "prashant-112-coder.github.io/myportfolio",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/prashantt_ikkalaki?igsh=Z2d6NWY0OHNndGlr",
    iconName: "Instagram",
    displayValue: "@prashantt_ikkalaki",
  },
};

export const socials = {
  github: socialDetails.github.url,
  linkedin: socialDetails.linkedin.url,
  email: "Prashantikkalaki416@gmail.com",
  portfolio: socialDetails.portfolio.url,
  instagram: socialDetails.instagram.url,
  resume: "https://prashant-112-coder.github.io/myportfolio/",
};

export const primarySocials = Object.values(socialDetails).filter((s) => s.isPrimary);
