"use client";
import React from "react";
import { ThemeSwitch } from "../components/theme-switch";
import { Switch } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import { cfg_navbar } from "../config/cfg_navbar";
import { Logo, DiscordIcon } from "../components/icons";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center "
              href="/"
            ></NextLink>
          </NavbarBrand>
        </NavbarContent>
    
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2"></NavbarItem>

          <NavbarItem className="hidden md:flex"></NavbarItem>
          <ThemeSwitch />
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
