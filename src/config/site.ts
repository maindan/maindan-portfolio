export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfólio",
  description: "",
  navItems: [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Resumo",
      href: "/resumo",
    },
    {
      label: "Projetos",
      href: "/projetos",
    },
  ],
  navMenuItems: [
    { label: "Início", href: "/" },
    { label: "Resumo", href: "/resumo" },
    { label: "Projetos", href: "/projetos" },
  ],
  links: {
    github: "https://github.com/maindan",
    linkedin: "https://www.linkedin.com/in/danlimadev/",
  },
};
