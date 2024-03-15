import type { NavbarProps } from "@nextui-org/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeIcon } from "./social";

const menuItems = ["Home", "Submit a map", "Promote your map", "Find a map"];

export default function NavbarHome(props: NavbarProps) {
  return (
    <Navbar
      {...props}
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-4 rounded-full border-small border-default-200/20 bg-background/60 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 px-6"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />

        {/* Items */}
        <NavbarItem className="hidden md:flex">
          <Link className="text-default-500" href="#" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Submit a map
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="#" size="sm">
            Promote your map
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Find a map
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-default-500" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
