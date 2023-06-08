import './ModifyEvent.module.css';
import classes from './ModifyEvent.module.css';
import logo from '../../assets/logo.png';
import imgtemplate from '../../assets/loginimg.png';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
    Card,
    IconButton,
    Chip,
    Input,
    Select,
    Option,
  } from "@material-tailwind/react";
  import {
    ChevronDownIcon,
    Bars2Icon,
  } from "@heroicons/react/24/outline";

  const categoryOptions = [
    "Cine",
    "Teatro",
    "Deportes",
    "Música",
    // Añade más categorías según tus necesidades
  ];

// profile menu component
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
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label}, key) => (
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

export default function ModifyEvent() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const [duration, setDuration] = useState("");
    const [participant, setParticipant] = useState("");
    const [participants, setParticipants] = useState([]);
    const [sponsor, setSponsor] = useState("");
    const [sponsors, setSponsors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [modifyTier, setModifyTier] = useState(false);
    const [AddTiers, setAddTiers] = useState(false);


    const [locations, setLocations] = useState([
      { name: "Localidad 1", price: 100 },
      { name: "Localidad 2", price: 200 },
      { name: "Localidad 3", price: 300 },
      { name: "Localidad 4", price: 100 },
      { name: "Localidad 5", price: 200 },
      { name: "Localidad 6", price: 300 },
      { name: "Localidad 7", price: 100 },
      { name: "Localidad 8", price: 200 },
      { name: "Localidad 9", price: 300 },
    ]);


    const handleButtonClick = () => {
      setModifyTier(true);
    };

    const handleButtonClick2 = () => {
      setModifyTier(false);
    };

    const handleAddSponsor = () => {
        // Agregar el sponsor al array de sponsors
        setSponsors((prevSponsors) => [...prevSponsors, sponsor]);
        // Limpiar el input de sponsors
        setSponsor("");
        };

    const handleSponsorChange = (e) => {
        setSponsor(e.target.value);
        };

    const handleSponsorInputChange = (e) => {
        setSponsor(e.target.value);
        };

    const handleDeleteSponsor = (index) => {
        // Eliminar el sponsor del array de sponsors
        setSponsors((prevSponsors) =>
        prevSponsors.filter((_, i) => i !== index)
        );
        };
    
  
    const handleAddParticipant = () => {
      // Agregar el participante al array de participantes
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
      // Limpiar el input de participantes
      setParticipant("");
    };
  
    const handleParticipantChange = (e) => {
      setParticipant(e.target.value);
    };
  
    const handleParticipantInputChange = (e) => {
      setParticipant(e.target.value);
    };
  
    const handleDeleteParticipant = (index) => {
      // Eliminar el participante del array de participantes
      setParticipants((prevParticipants) =>
        prevParticipants.filter((_, i) => i !== index)
      );
    };

    const handleDurationChange = (e) => {
      // Verificar que el valor ingresado sea un número
      const value = e.target.value.replace(/\D/, "");
      setDuration(value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        };

    const handleCategoryInputChange = (e) => {
        setSelectedCategory(e.target.value);
        };
    
    const handleUpdateLocation = (index, key, value) => {
      // Actualizar el valor de la propiedad del objeto
      setLocations((prevLocations) =>
        prevLocations.map((location, i) => {
          if (i === index) {
            return {
              ...location,
              [key]: value,
            };
          }
          return location;
        })
      );
    };

    const handleAddLocationButtonClick = () => {
      setAddTiers(true);
    };

    const handleAddLocationButtonClick2 = () => {
      setAddTiers(false);
    };

    const handleAddLocation = () => {
      // Agregar una nueva localidad al array de localidades
      setLocations((prevLocations) => [
        ...prevLocations,
        { name: "", price: "" },
      ]);
    };


    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
      }, []);

    
        useEffect(() => {
            document.title = "Create Event";
        }, []);

    return (
        <div className={[classes["generalContainer"]]}>
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
      <div className={[classes["buttonchangeView"]]}>
      <button
      onClick={handleButtonClick2} 
      className={`PC-1920*1080:w-full PC-1920*1080:h-12 PC-1920*1080:text-2xl  PC-1920*1080:py-1 rounded 
      PC-1600*900:w-full PC-1600*900:h-12 PC-1600*900:text-2xl  PC-1600*900:py-1
      PC-1366*768:w-full PC-1366*768:h-12 PC-1366*768:text-xl  PC-1366*768:py-1
      PC-1280*720:w-full PC-1280*720:h-12 PC-1280*720:text-xl  PC-1280*720:py-1
      PC-1024*768:w-full PC-1024*768:h-12 PC-1024*768:text-lg  PC-1024*768:py-1
      PC-800*600:w-full PC-800*600:h-12 PC-800*600:text-base  PC-800*600:py-1
      PC-640*480:w-full PC-640*480:h-12 PC-640*480:text-base  PC-640*480:py-1
      Mobile-390*844:w-full Mobile-390*844:h-12 Mobile-390*844:text-sm  Mobile-390*844:py-1
      Mobile-280:w-full Mobile-280:h-12 Mobile-280:text-sm  Mobile-280:py-1
      ${modifyTier === false ? 'bg-Orange text-blue-900' : 'bg-dark-blue text-white hover:bg-orange-600'}`}
      style={{ fontFamily: "Poppins" }}
      >MODIFICAR EVENTO</button>
      <button 
      onClick={handleButtonClick}
      className={`PC-1920*1080:w-full PC-1920*1080:h-12 PC-1920*1080:text-2xl  PC-1920*1080:py-1 rounded
      PC-1600*900:w-full PC-1600*900:h-12 PC-1600*900:text-2xl  PC-1600*900:py-1
      PC-1366*768:w-full PC-1366*768:h-12 PC-1366*768:text-xl  PC-1366*768:py-1
      PC-1280*720:w-full PC-1280*720:h-12 PC-1280*720:text-xl  PC-1280*720:py-1
      PC-1024*768:w-full PC-1024*768:h-12 PC-1024*768:text-lg  PC-1024*768:py-1
      PC-800*600:w-full PC-800*600:h-12 PC-800*600:text-base  PC-800*600:py-1
      PC-640*480:w-full PC-640*480:h-12 PC-640*480:text-base  PC-640*480:py-1
      Mobile-390*844:w-full Mobile-390*844:h-12 Mobile-390*844:text-sm  Mobile-390*844:py-1
      Mobile-280:w-full Mobile-280:h-12 Mobile-280:text-sm  Mobile-280:py-1
      ${modifyTier === true ? 'bg-Orange text-blue-900 ' : 'bg-dark-blue text-white hover:bg-orange-600'}
        text-blue-900 `}
      style={{ fontFamily: "Poppins" }}
        >MODIFICAR LOCALIDADES</button>
      </div>
    {modifyTier ? (
      <div className={classes["modifytierContainer"]}>
        <div className={classes["buttonContainer"]}>
       <Button
         className="bg-yellowCapas Mobile-280:text-xs"
         onClick={handleAddLocationButtonClick}
       >
         Agregar localidad
       </Button>
     </div>
     <div className={classes["tierContainer"]}>
      <div className={classes["formTierContainer"]}>
          {locations.map((location, index) => (
            <div key={index} className={classes["formTier"]}>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor={`locationName${index}`}
                    className={classes["titleInputs"]}
                  >
                    Nombre de la localidad:
                  </label>
                  <Input
                    id={`locationName${index}`}
                    type="text"
                    color="white"
                    placeholder="Ingrese el nombre de la localidad"
                    defaultValue={location.name}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={`locationPrice${index}`}
                    className={classes["titleInputs"]}
                  >
                    Precio
                  </label>
                  <Input
                    id={`locationPrice${index}`}
                    type="number"
                    color="white"
                    placeholder="Precio de la localidad"
                    defaultValue={location.price}
                  />
                </div>
                <div className="flex space-x-4 justify-end Mobile-280:justify-center">
                  <Button className="bg-yellowCapas Mobile-280:text-ButtonCarouselMobile-390*844"
                  onClick={() => handleUpdateLocation(index)}
                  >
                    Actualizar
                  </Button>
                </div>
              </form>
            </div>
          ))}
        </div>
        </div>   
        </div>
    ) : (
      <div className={[classes["bodyContainer"]]}>
            <div className={[classes["formContainer"]]}>
      <div className={[classes["form"]]}>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="eventName" className={[classes["titleInputs"]]}>
              Nombre del evento
            </label>
            <Input
              id="eventName"
              type="text"
              color='white'
              placeholder="Ingrese el nombre del evento"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="participant" className={[classes["titleInputs"]]}>
              Participantes
            </label>
            <div className="flex space-x-2 Mobile-280:grid Mobile-280:grid-rows-2">
              <Input
                id="participant"
                type="text"
                color='white'
                value={participant}
                onChange={handleParticipantInputChange}
                placeholder="Ingrese el nombre del participante"
              />
              <Button className='m-auto Mobile-280:mt-2 Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844 Mobile-390*844:w-28 
              Mobile-390*844:text-ButtonCarouselMobile-390*844 '
                color="blue"
                onClick={handleAddParticipant}
              >
                Agregar
              </Button>
            </div>
            {participants.length > 0 && (
              <div className="mt-2">
                <label htmlFor="participants" className={[classes["titleInputs"]]}>
                  Lista de participantes
                </label>
                <Input
                  id="participants"
                  type="text"
                  value={participants.join(", ")}
                  disabled
                />
                <ul className="mt-2 space-y-1">
                  {participants.map((participant, index) => (
                    <li key={index} className="flex items-center">
                      <span className='text-white'> - {participant}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteParticipant(index)}
                        className="ml-2 text-red-600"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={[classes["container3Inputs"]]}>
            <div>
              <label htmlFor="category" className={[classes["titleInputs"]]}>
                Categoría
                
              </label>
                <Select className='text-white'>
                    <Option>Cine</Option>
                    <Option>Concierto</Option>
                    <Option>Obras de teatro</Option>
                    <Option>Deportes</Option>
                </Select>
            </div>
            <div>
              <label htmlFor="time" className={[classes["titleInputs"]]}>
                Hora
              </label>
              <Input
                id="time"
                type="time"
                color='white'
                placeholder="Seleccione la hora"
              />
            </div>
            <div>
            <label htmlFor="duration" className={[classes["titleInputs"]]}>
              Duración (segundos)
            </label>
            <Input
              id="duration"
              type="text"
              color='white'
              value={duration}
              onChange={handleDurationChange}
              placeholder="Ingrese la duración"
            />
          </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="sponsor" className={[classes["titleInputs"]]}>
              Patrocinadores
            </label>
            <div className="flex space-x-2 Mobile-280:grid Mobile-280:grid-rows-2" >
              <Input
                id="sponsor"
                type="text"
                color='white'
                value={sponsor}
                onChange={handleSponsorInputChange}
                placeholder="Ingrese el nombre del patrocinador"
              />
              <Button className='m-auto Mobile-280:mt-2 Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844 Mobile-390*844:w-28
              Mobile-390*844:text-ButtonCarouselMobile-390*844'
                color="blue"
                onClick={handleAddSponsor}
              >
                Agregar
              </Button>
            </div>
            {sponsors.length > 0 && (
              <div className="mt-2">
                <label htmlFor="sponsors" className={[classes["titleInputs"]]}>
                  Lista de patrocinadores
                </label>
                <Input
                  id="sponsors"
                  type="text"
                  color='white'
                  value={sponsors.join(", ")}
                  disabled
                />
                <ul className="mt-2 space-y-1">
                  {sponsors.map((sponsor, index) => (
                    <li key={index} className="flex items-center">
                      <span className='text-white'> -{sponsor}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteSponsor(index)}
                        className="ml-2 text-red-600"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className={[classes["titleInputs"]]}>
              Fecha
            </label>
            <Input
              id="date"
              type="date"
              color='white'
              placeholder="Seleccione la fecha"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="eventPhoto" className={[classes["titleInputs"]]}>
              Foto del evento
            </label>
            <Input
              id="eventPhoto"
              type="file"
              color='white'
              placeholder="Seleccione una foto"
            />
          </div>
          <div className="flex space-x-4 justify-end Mobile-280:justify-center ">
            <Button className='bg-black Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Cancelar
            </Button>
            <Button className='bg-yellowCapas Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div> 
    )}
    </div>   
    )
}


