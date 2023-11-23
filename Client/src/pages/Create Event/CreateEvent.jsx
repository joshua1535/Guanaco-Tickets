import './CreateEvent.module.css';
import classes from './CreateEvent.module.css';
import logo from '../../assets/logo.png';
import imgtemplate from '../../assets/loginimg.jpg';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    Carousel,
    Navbar,
    MobileNav,
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
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useUserContext } from '../../Context/userContext';
import { eventService } from '../../Services/eventService';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';


  const categoryOptions = [
    "Cine",
    "Teatro",
    "Deportes",
    "Música",
    // Añade más categorías según tus necesidades
  ];

   
    

export default function CreateEvent() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const [duration, setDuration] = useState("");
    const [participant, setParticipant] = useState("");
    const [participants, setParticipants] = useState([]);
    const [sponsor, setSponsor] = useState("");
    const [sponsors, setSponsors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { user, token} = useUserContext();
    const [eventName, setEventName] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [image, setImage] = useState("https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");


    const handleContinueClick2 = () => {
      eventService.saveEvent({
          title: eventName,
          involvedPeople: participants.join(", "),
          image: image,  // Reemplaza esto con el valor del campo "Foto del evento"
          date: date,  // Reemplaza esto con el valor del campo "Fecha"
          time: time,  // Reemplaza esto con el valor del campo "Hora"
          duration: parseInt(duration),
          sponsors: sponsors.join(", "),
          categoryCode: category // Reemplaza esto con el valor del campo "Categoría"
      }, token)
          .then(response => {
              console.log('Evento creado con éxito:', response);
              // Guarda el código del evento en el almacenamiento local
              const eventCode = response.code;
              navigate(`/admin-event/addtiers/${eventCode}`);
              // aquí puedes hacer cualquier otra cosa que necesites después de crear el evento
          })
          .catch(error => {
              console.error('Hubo un error al crear el evento:', error);
              // aquí puedes manejar el error, por ejemplo mostrando un mensaje al usuario
          });
  };
  


    /*
    eventService.saveEvent({
      title: 'Nuevo Evento', 
      involvedPeople: 'Persona 1, Persona 2',
      image: 'URL de la imagen',
      date: '2023-06-01', 
      time: '18:00', 
      duration: 120, 
      sponsors: 'Sponsor 1, Sponsor 2', 
      categoryCode: 'CI'
  }, token)
      .then(response => {
          console.log('Evento creado con éxito:', response);
          // aquí puedes hacer cualquier otra cosa que necesites después de crear el evento
      })
      .catch(error => {
          console.error('Hubo un error al crear el evento:', error);
          // aquí puedes manejar el error, por ejemplo mostrando un mensaje al usuario
      });
      */  


    const navigate = useNavigate();

    const handleCancelClick2 = () => {
      navigate('/admin-event');
    }

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
    
    const handleContinueClick = () => {
       /*  // Verificar que el evento tenga al menos un participante
        if (participants.length === 0) {
        alert("El evento debe tener al menos un participante");
        return;
        }
        // Verificar que el evento tenga al menos un sponsor
        if (sponsors.length === 0) {
        alert("El evento debe tener al menos un sponsor");
        return;
        }
        // Verificar que el evento tenga una duración
        if (duration === "") {
        alert("El evento debe tener una duración");
        return;
        } */
        // Verificar que el evento tenga una categoría
       /*  if (selectedCategory === "") {
        alert("El evento debe tener una categoría");
        return;
        }
        // Guardar el evento en el estado global
        dispatch({
        type: "SET_EVENT",
        payload: {
            duration,
            participants,
            sponsors,
            category: selectedCategory,
        },
        }); */
        // Redireccionar a la página de confirmación
        navigate("/admin-event/addtiers");
    };

    const handleCancelClick = () => {
        navigate(-1);
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
        <Header/>
        <div className={[classes["bodyContainer"]]}>
            <div className={[classes["titleContainer"]]}>
                <h1 className={[classes["title1"]]}>Crear</h1>
                <h1 className={[classes["title2"]]}>evento</h1>
            </div>
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
              color='yellow'
              className='text-black bg-white '
              value={eventName}
              onChange={event => setEventName(event.target.value)}
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
                color='yellow'
                className='text-black bg-white '
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
                <Select 
                color='yellow'
                className='text-black bg-white '
                onChange={value => setCategory(value)}
                >
                    <Option value="CI" >Cine</Option>
                    <Option value="MU"> Musica</Option>
                    <Option value="OB">Obras de teatro</Option>
                    <Option value="DE">Deportes</Option>
                </Select>
            </div>
            <div>
              <label htmlFor="time" className={[classes["titleInputs"]]}>
                Hora
              </label>
              <Input
                id="time"
                type="time"
                color='yellow'
              className='text-black bg-white '
                value={time}
                onChange={event => setTime(event.target.value)}
                placeholder="Seleccione la hora"
              />
            </div>
            <div>
            <label htmlFor="duration" className={[classes["titleInputs"]]}>
              Duración (Hora)
            </label>
            <Input
              id="duration"
              type="text"
              color='yellow'
              className='text-black bg-white '
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
                color='yellow'
              className='text-black bg-white '
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
                  color='black'
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
              color='yellow'
              className='text-black bg-white '
              value={date}
              onChange={event => setDate(event.target.value)}
              placeholder="Seleccione la fecha"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="eventPhoto" className={[classes["titleInputs"]]}>
              Foto del evento (opcional)
            </label>
            <Input
              id="eventPhoto"
              type="text"
              color='yellow'
              className='text-black bg-white '
              placeholder="Ingrese URL de la foto"
              onChange={event => setImage(event.target.value)}
            />
          </div>
          <div className="flex space-x-4 justify-end Mobile-280:justify-center ">
            <Button onClick={ handleCancelClick2} className='bg-black Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Cancelar
            </Button>
            <Button
            onClick={handleContinueClick2}
            className='bg-yellowCapas Mobile-280:w-24 Mobile-280:text-ButtonCarouselMobile-390*844'>
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
        </div>
          <Footer />
        </div>

    )
}

