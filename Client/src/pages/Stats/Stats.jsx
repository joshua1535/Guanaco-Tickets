import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import {
  Carousel,
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import logo from "../../assets/logo.png";
import imgtemplate from "../../assets/loginimg.png";
import classes from "./Stats.module.css";
import {
    ChevronDownIcon,
    Bars2Icon,
    ArrowLeftIcon
} from "@heroicons/react/24/outline";


const profileMenuItems = [
    {
      label: "Mis tickets",
    },
    {
      label: "Historial de eventos",
    },
    {
      label: "Transferir ticket",
    },
    {
      label: "Eventos",
    },
    {
      label: "Sign Out",
    },
  ];
  
  const navListItems = [
    {
      label: "Eventos",
    },
    {
      label: "Mis tickets",
    },
  ];
  
  function NavList() {
      return (
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              <NavListMenu />
              {navListItems.map(({ label }, key) => (
                  <Typography
                      key={label}
                      as="a"
                      href="#"
                      color="white"
                      className="font-normal"
                  >
                      <MenuItem className="flex items-center gap-2 lg:rounded-full">
                          {label}
                      </MenuItem>
                  </Typography>
              ))}
          </ul>
      );
  }
  
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
  
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Typography
                  as="span"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  
  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const triggers = {
      onMouseEnter: () => setIsMenuOpen(true),
      onMouseLeave: () => setIsMenuOpen(false),
    };
  
    return (
      <Typography
        {...triggers}
        as="a"
        href="#"
        color="white"
        className="font-normal"
      >
      </Typography>
    );
  }

  const data = [
    { value: 50, label: 'Enero', color: 'border-red-500' },
    { value: 70, label: 'Febrero', color: 'border-blue-500' },
    { value: 30, label: 'Marzo', color: 'border-green-500' },
    { value: 90, label: 'Abril', color: 'border-yellow-500' },
    { value: 40, label: 'Mayo', color: 'border-purple-500' },
];

const maxValue = Math.max(...data.map(item => item.value));
const chartHeight = 340; // height of the chart in pixels

const BarChart = () => (
    <div className="w-full h-full flex justify-around items-end">
        {data.map((item, index) => (
            <div
                key={index}
                className={`w-1/6 flex flex-col items-center`}
            >
                <div
                    className={`w-full border-2 ${item.color} flex justify-center items-center`}
                    style={{height: `${(item.value/maxValue)*chartHeight}px`}}
                >
                    <p 
                    style={{ fontFamily: "Poppins" }}
                    className="text-white">{item.value}</p>
                </div>
                <p 
                style={{ fontFamily: "Poppins" }}
                 className="text-center text-Orange mt-2">{item.label}</p>
            </div>
        ))}
    </div>
);

const YAxis = () => {
    const values = Array.from({length: 6}, (_, i) => i * (maxValue / 5));
    return (
        <div className="h-full flex flex-col justify-between items-start mr-2" style={{height: `${chartHeight}px`}}>
            {values.reverse().map((val, index) => (
                <div key={index}>
                    <p                     
                    className="text-Orange ms-2" 
                    style={{ fontFamily: "Poppins" }}
                    >{val}</p>
                </div>
            ))}
        </div>
    );
};



function StatsPage() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);

  return (
    <>
        <header className={[classes["headerContainer"]]}>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-dark-blue border-none">
      <div className={[classes["headerTypography"]]}>
        <img src={logo} alt="logo" className="h-12 w-12 mx-4" />
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white"
        >
          Guanaco Business
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
      </header>

      <div className="h-full w-full bg-darkless-blue">
            <div className="flex justify-between darkless-blue">
                <button 
                style={{ fontFamily: "Poppins" }}
                className=" 
                PC-1280*720:text-2xl 
                text-left
                w-1/3 bg-orange-600 text-dark-blue   py-2 px-6"
                >Ventas Tiers</button>
                <button
                style={{ fontFamily: "Poppins" }}
                className="
                PC-1280*720:text-2xl 
                text-left
                w-1/3 bg-dark-blue text-Orange py-2 px-6">Individual Grupo</button>
                <button
                style={{ fontFamily: "Poppins" }}
                className="
                PC-1280*720:text-2xl 
                text-left
                w-1/3 bg-dark-blue text-Orange py-2 px-6">Hora/Tickets</button>
            </div>

            <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-1/2 h-full">
                    <div className=" mt-2 h-full flex">
                        <YAxis />
                        <div className="h-full mt-2 w-full flex flex-col justify-end">
                            <BarChart />
                            <div className="h-10"></div>
                        </div>
                    </div>
                </div>

                <div className="sm:w-2/3 flex justify-center">
                <div className="sm:w-2/3 rounded-2xl my-5 bg-dark-blue px-20 text-center  p-4 darkless-blue">
                    <h2 
                    style={{ fontFamily: "Poppins" }} 
                    className="text-center text-Orange text-2xl font-bold mb-2">Tickets vendidos</h2>
                    <p 
                    style={{ fontFamily: "PoppinsSemiBold" }} 
                    className="text-center text-white pe-10 text-2xl mb-4">250,452 de 300,000 disponibles</p>

                    <h2 
                    style={{ fontFamily: "Poppins" }} 
                    className="text-center text-Orange text-2xl font-bold mb-2">Ventas totales</h2>
                    <p 
                    style={{ fontFamily: "PoppinsSemiBold" }} 
                    className=" text-white text-2xl mb-4">$1,550,452</p>

                    <h2 
                    style={{ fontFamily: "Poppins" }} 
                    className="text-center text-Orange text-2xl font-bold mb-2">Tickets canjeados</h2>
                    <p 
                    style={{ fontFamily: "PoppinsSemiBold" }} 
                    className=" text-white text-2xl mb-4">249,452 de 250,452 vendidos</p>
                </div>

                </div>

            </div>
        </div>
    </>
  );
  
}

export default StatsPage;
