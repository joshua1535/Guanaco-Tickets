import React, { useState, useEffect } from 'react';
import './MyEvents.module.css';
import logo from '../../assets/logo.png';
import classes from './MyEvents.module.css';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Tickets = [
    {
      id: 1,
      name: "Mario Bros Películasadasdasdasdsadassdasdadasds",
      date: "2023-06-05",
      time: "12:00",
      location: "VIP",
      price: "100",
      img: "https://es.web.img3.acsta.net/img/33/23/3323b2b747cf67abb82016922a56fe7c.jpg",
      canjeado: false,
    },
    {
      id: 2,
      name: "Pink Floyd",
      date: "2023-06-02",
      time: "18:00",
      location: "General",
      price: "100",
      img: "https://i0.wp.com/mixturapop.com/wp-content/uploads/2019/06/camacu%C3%A1.jpg?fit=700%2C390&ssl=1",
      canjeado: true,
    },
    {
        id: 3,
        name: "Fas vs Dragon, Fecha 15",
        date: "2023-06-02",
        time: "12:00",
        location: "Platea",
        price: "100",
        img: "https://futbolcentroamerica.com/__export/1667069866944/sites/futbolcentroamerica/img/2022/10/28/fas-dragon.jpg_242310155.jpg",
        canjeado: true,
        },
    {
        id: 4,
        name: "Doctor Extraño 2",
        date: "2023-06-02",
        time: "12:00",
        location: "Asiento H11",
        price: "100",
        img: "https://sm.ign.com/ign_es/movie/d/doctor-str/doctor-strange-in-the-multiverse-of-madness_4pjr.jpg",
        canjeado: true,
        },
    {
        id: 5,
        name: "Ballet Nacional",
        date: "2023-06-02",
        time: "12:00",
        location: "2da planta",
        price: "100",
        img: "https://www.cultura.gob.sv/wp-content/uploads/2022/02/Ballet-naciola-105.png",
        canjeado: true,
        },
    {
        id: 6,
        name: "Rapidos y Furiosos 50",
        date: "2023-06-05",
        time: "14:00",
        location: "VIP",
        price: "100",
        img: "https://scontent.fsal1-1.fna.fbcdn.net/v/t1.6435-9/83985608_2698845866837972_8598443248630890496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z2DnxlcifAQAX_cvnU1&_nc_ht=scontent.fsal1-1.fna&oh=00_AfDC6kkN8jI_wPcv_qgM1kCqubpKI_tZh-YSsTLuGVG93Q&oe=64A4A88E",
        canjeado: false,

    },
    
    // ...rest of the tickets
  ];



const MyEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeButton, setActiveButton] = useState(1);

  const [showDetails, setShowDetails] = useState(false);


  const navigate = useNavigate();
  const handleButtonClick = () => {
    setShowDetails(true);
  };

  const handleButtonClick2 = () => {
    setShowDetails(false);
  };
  

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleBuyButton = () => {
    navigate("/mytickets");
  };


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
        <Header/>
      <div className="flex  flex-col sm:flex-col h-screen ">
        <div className='
        PC-1920*1080:text-5xl
        PC-1600*900:text-5xl
        PC-1366*768:text-4xl
        PC-1280*720:text-3xl 
        PC-800*600:text-3xl
        PC-640*480:text-2.5xl
        Mobile-390*844:text-3xl
        Mobile-280:text-2xl
         text-center text-white text-2.5xl'>
            <h1
            style={{ fontFamily: "Poppins", fontStyle:"italic" }}>
                Mis Eventos
            </h1>
        </div>
      <div className="flex justify-between darkless-blue">
                <button 
                style={{ fontFamily: "Poppins" }}
                className=" 
                PC-1920*1080:text-2.5xl
                PC-1600*900:text-2.5xl
                PC-1366*768:text-2xl
                PC-1280*720:text-2xl 
                Mobile-390*844:text-xs
                Mobile-280:text-xs
                text-center
                w-1/2 bg-orange-600 text-dark-blue   py-2 px-6"
                >Asistidos</button>
                <button
                style={{ fontFamily: "Poppins" }}
                className="
                PC-1920*1080:text-2.5xl
                PC-1600*900:text-2.5xl
                PC-1366*768:text-2xl
                PC-1280*720:text-2xl 
                Mobile-390*844:text-xs 
                Mobile-280:text-xs                
                text-center
                w-1/2 bg-dark-blue text-white py-2 px-6">Proximamente</button>
            </div>

      <div className=" h-max  p-4">

        
          <div className={[classes["cardContainer"]]}>
            {Tickets.map((ticket, index) => (
              <div className=" space-y mt-10 bg-white p-4 rounded-lg m-2 sm_mt-10 sm:m-0" key={index}>
                <img 
                src={ticket.img} alt="Imagen de evento"
                className={[classes["cardImg"]]}/>
                <div className={[classes["textCardContainer"]]}>
                 <p className="font-bold text-black PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                Fecha: </p>
                <p className="text-yellow-800 m-1 PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                {ticket.date}
              </p>
              </div>
              
            <div className={[classes["textCardContainer"]]}>
            <Typography className="font-bold text-black PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                Hora:
              </Typography>
              <Typography className="text-yellow-800 m-1 PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                {ticket.time}
              </Typography>
            </div>
            <div className={[classes["textCardContainer"]]}>
            <Typography className="font-bold text-black PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                Evento:
              </Typography>
              <Typography className="text-yellow-800 m-1 PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text break-words
                hover:break-all w-36 h-5 overflow-auto">
                {ticket.name}
              </Typography>
            </div>
            <div className={[classes["textCardContainer"]]}>
            <Typography className="font-bold text-black PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                Ubicación:
              </Typography>
              <Typography className="text-yellow-800 m-1 PC-1920*1080:text-xl PC-1600*900:text-xl PC-1366*768:text-lg PC-1280*720:text-sm
                PC-1024*768:text-sm PC-768*1024:text-sm PC-360*640:text-sm PC-375*812:text-sm PC-414*896:text-sm PC-320*568:text-sm font-text
                break-words hover:break-all overflow-auto
                ">
                {ticket.location}
              </Typography>
            </div>           
              </div>
            ))}                       
          </div>
        </div>
      </div>      
    </>    
  );
};

export default MyEvents;
