export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cleva HQ",
  description: " A Global UI/UX Design Agency.",
  navItems: [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  dummyFounders: [
    {
      name: "Chukwuma Stanley Chika",
      img: "/article-1.svg",
      title: "Crafting Exceptional User Experience for your product",
      piece:
        "A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.",
      profilePic: "/stanley.svg",
    },
    {
      name: "Ruth Onokala",
      img: "/art-2.svg",
      title: "Digital Banking in Africa as we know",
      piece:
        "A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.",
      profilePic: "/babe.svg",
    },
    {
      name: "Orji Emmanuel Uche",
      img: "/art-3.svg",
      title: "Top 10 eCommerce Web Design Trends",
      piece:
        "A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.",
      profilePic: "/cofounder.svg",
    },
  ],
};
