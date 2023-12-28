"use client";

import { useState } from "react";

// local imports
import heroImage from "../public/assets/hero-image.svg";
import logo from "../public/assets/logo.svg";
import cartIcon from "../public/assets/cart-icon.svg";
import searchIcon from "../public/assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../utils/data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import "./hero.css";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="h-screen relative flex flex-col items-center div1">
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
        <Image src={logo} alt="hello" width={100} height={100} className="h-auto w-auto" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">{`Services`}</NavLink>
          <NavLink to="proucts">{`Shop`}</NavLink>
          <NavLink to="reference">{`Reference`}</NavLink>
          <NavLink to="care">{`Care`}</NavLink>
        </ul>
        <Image
          src={cartIcon}
          alt="cart-icon"
          width={100}
          height={100}
          className="hidden md:block cursor-pointer h-10 w-10"
        />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
          <ul className="pt-[60px] flex flex-col gap-8">
            <NavLink to="services" mobileMenu>{`Services`}</NavLink>
            <NavLink to="proucts" mobileMenu>{`Shop`}</NavLink>
            <NavLink to="reference" mobileMenu>{`Reference`}</NavLink>
            <NavLink to="care" mobileMenu>{`Care`}</NavLink>
          </ul>
          <Image
          src={cartIcon}
          alt="cart-icon"
          width={100}
          height={100}
          className="w-auto h-auto mt-8 mx-auto cursor-pointer"
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
