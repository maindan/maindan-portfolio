import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { Diamond } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const location = useLocation();

  return (
    <HeroUINavbar className="" maxWidth="md" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full bg-transparent"
        justify="start"
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Diamond
              className="transform transition-transform duration-300 ease-in-out hover:rotate-45"
              size={20}
            />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    isActive && "text-primary font-semibold",
                  )}
                  color={isActive ? "primary" : "foreground"}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link> */}
          {/* {location.pathname !== "/" && <ThemeSwitch />} */}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* {location.pathname !== "/" && <ThemeSwitch />} */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="scrollbar-hide">
        <div className="mx-4 mt-4 flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href === "/" && location.pathname === "/");

            return (
              <NavbarMenuItem key={item.href}>
                <Link
                  className={clsx(
                    "py-2 px-3 rounded-lg transition-colors w-full",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-default-100",
                  )}
                  color={isActive ? "primary" : "foreground"}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
