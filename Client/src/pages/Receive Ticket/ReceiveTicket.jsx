import './ReceiveTicket.module.css';
import classes from './ReceiveTicket.module.css';
import logo from '../../assets/logo.png';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
    Input,
    Collapse,
  } from "@material-tailwind/react";
  import {
    ChevronDownIcon,
    Bars2Icon,
  } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { ticketService } from '../../Services/ticketService';
import { useUserContext } from '../../Context/userContext';

// profile menu component
const profileMenuItems = [
  {
    label: "Mis tickets",
  },
  {
    label: "Historial de eventos",
  },
  {
    label: "Mis ordenes",
  },
  {
    label: "Eventos",
  },
  {
    label: "Sign Out",
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const navigate = useNavigate();
  const handleMenu = (label) => {
    if (label === "Sign Out") {
      closeMenu();
      navigate("/");
      
    }
    
    if (label === "Eventos") {
      closeMenu();
      navigate("/events");
    }

    if (label === "Mis tickets") {
      closeMenu();
      navigate("/mytickets");
    }

    if (label === "Historial de eventos") {
      closeMenu();
      navigate("/historyevents");
    }

    if (label === "Mis ordenes") {
      closeMenu();
      navigate("/myorders");
    }


  };

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
              onClick={() => handleMenu(label)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              <Typography
                as="span"
                variant="lg"
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
}
 
// nav list component
const navListItems = [
  {
    label: "Eventos",
  },
  {
    label: "Mis tickets",
  },
];
 

function NavList() {
  const navigate = useNavigate();
  
  const navListHandler = (label) => {
    if (label === "Eventos") {
      navigate("/events");
    } else if (label === "Mis tickets") {
      navigate("/mytickets");
    }
  };

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label}, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="lg"
          color="white"
          className="font-normal"
        >
          <MenuItem 
          onClick={() => navListHandler(label)}
          className="flex items-center gap-2 lg:rounded-full">
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function TransferTicket() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const [generateCode, setGenerateCode] = useState(false);
    const [ticketCode, setTicketCode] = useState("");
    const { user, token} = useUserContext();

    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate(-1);
    }

    const confirmTransferHandler = () => {
      ticketService.transferTicket({
        newUserOwnerCode: "",
        transferCode: ticketCode
      }, token)
      .then(response => {
        console.log('Ticket transferido con exito: ', response);
        navigate('/mytickets');
      })
      .catch(error => {
        console.log('Error al transferir ticket: ', error);
      })
    }

    const generateCodeHandler = () => {
        setGenerateCode(true);
    }

    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
      }, []);

    
        useEffect(() => {
            document.title = "Create Event";
        }, []);

        useEffect(() => {
          console.log(generateCode);
        }, [generateCode]);

    return (
        <div className={[classes["generalContainer"]]}>
        <header className={[classes["headerContainer"]]}>
        <Navbar  className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-dark-blue border-none">
        <div className={[classes["headerTypography"]]}>
        <img src={logo} alt="logo" className="hidden sm:inline-block h-12 w-12 mx-4" />
        <Typography
          as="a"
          href="#"
          className="mr-4 text-xl hidden sm:inline-block  cursor-pointer py-1.5 font-medium text-white"
          style={{ fontFamily: "PoppinsLight" } }
        >
          Guanaco Business
        </Typography>
        <Typography
          as="a"
          href="#"
          className="mr-4 text-xl sm:hidden inline-block  cursor-pointer py-1.5 font-medium text-white"
          style={{ fontFamily: "PoppinsLight" } }
        >
          Transferir ticket
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
        <div className={[classes["bodyContainer"]]}>
            <div className={[classes["formContainer"]]}>
      <div className={[classes["form"]]}>
      <div className={[classes["titleContainer"]]}>
                <h1 className={[classes["title1"]]}>
                Solicite el código de transferencia a la persona 
                a la que desea ceder la titularidad del/os ticket(s)
                </h1>
            </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="eventName" className={[classes["titleInputs"]]}>
              Codigo de transferencia
            </label>
            <Input
              id="eventName"
              type="text"
              color='white'
              value={ticketCode}
              onChange={ticket => setTicketCode(ticket.target.value)}
              placeholder="XXX-XXX-XXX"
            />
          </div>   
          <div className="flex space-x-4 justify-end Mobile-280:justify-center ">
            <Button 
            onClick={backButtonHandler}
            className='bg-black Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Cancelar
            </Button>
            <Button 
            onClick={confirmTransferHandler}
            className='bg-yellowCapas Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Recibir
            </Button>
          </div>
        </form>
      </div>
    </div>
        </div>
        </div>
    )
}
