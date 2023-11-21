import React, { useState, useEffect } from "react";
import {
  Carousel,
  Navbar,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Select,
  Option,
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Tooltip,
} from "@material-tailwind/react";
import logo from "../../assets/logo.png";
import imgtemplate from "../../assets/loginimg.png";
import classes from "./AdminUsers.module.css";
import {
    ChevronDownIcon,
    Bars2Icon,
    ArrowLeftIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { userService } from "../../Services/userService";
import { permitService } from "../../Services/permitService";
import { useUserContext } from "../../Context/userContext";



const TABS = [
  {
    label: "Todos",
    value: "todos",
    
  },
  {
    label: "Clientes",
    value: "clientes",
  },
  {
    label: "Empleados",
    value: "empleados",
  },
];
 
const TABLE_HEAD = ["Usuario", "Roles", "Estado", "Registrado desde", ""];
 

function UserTable({users,navigate}) {


  const handleEdit = (code) => {
    const userCode = code;
    navigate(`/admin-users/permits-user/${userCode}`);

  };

  const TABLE_ROWS = users.map((user) => ({
    code: user.code,
    profilePicture: user.profilePicture,
    email: user.email,
    active: user.active,
    dateAdded: user.dateAdded,
  }));

  return (
    
    <Card className="flex justify-start w-full rounded-none bg-transparent shadow-none font-text">
      <CardBody className="overflow-auto px-0">
        
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr >
              <th className="p-4 border-y border-blue-gray-100 sticky left-0 Mobile-390*844:w-6 Mobile-280:w-2 PC-640*480:w-14 bg-blue-gray-200 ">
                <Typography
                  color="blue-gray"
                  className="text-base Mobile-390*844:text-sm Mobile-280:text-xs"
                >
                  {TABLE_HEAD[0]}
                </Typography>
              </th>
              {TABLE_HEAD.slice(1).map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-200 p-4 text-left">
                  <Typography
                    color="blue-gray"
                    className="text-base Mobile-390*844:text-sm Mobile-280:text-xs"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({code, profilePicture, email, active, dateAdded}) => {


              const isLast = TABLE_ROWS[TABLE_ROWS.length - 1].email === email;
              //Si es el primer elemento de la tabla que sea sticky
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 ";
              const firstElement = isLast ? "p-4 sticky left-0 Mobile-390*844:w-6 Mobile-280:w-4 PC-640*480:w-14 bg-blueCapas Mobile-280:p-0" 
              :"p-4 border-b border-blue-gray-50 sticky left-0 Mobile-390*844:w-6 Mobile-280:w-4 PC-640*480:w-14 bg-blueCapas Mobile-280:p-0"
              
              const { token } = useUserContext();
              const [permits, setPermits] = useState([]);

              useEffect(() => {
                if(token){
                  permitService.getPermitsByUser(code, token)
                      .then((data) => {
                        setPermits(data)        
                          console.log('Los permisos de usuarios obtenidas:', data);
                      })
                      .catch((error) => {
                          console.error('Hubo un error al obtener los permisos:', error);
                      });
                  }
              }, [code,token]); 

              return (
                <tr key={email}>
                  <td className={firstElement}>
                    <div className="flex items-center gap-3 Mobile-390*844:gap-0 Mobile-280:gap-0 break-words ">
                      <Avatar src={profilePicture} alt={email} size="md" className="Mobile-390*844:hidden Mobile-280:hidden" />
                      <div className="flex flex-col">
                        <Typography className="text-white text-base Mobile-390*844:text-xs Mobile-280:text-xs PC-640*480:text-sm">
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  {
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      {permits.map((permits) => (
                        <p key={permits} className="bg-blue-gray-100 text-black rounded-full px-3 py-2 text-xs">
                          {permits.name}
                        </p>
                      ))}
                    </div>
                  </td>
                      }
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="gradient"
                        size="sm"
                        value={active === true ? "Habilitado" : "Deshabilitado"}
                        color={active === true ? "green" : "blue-gray"}
                        className="static"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="white" className="font-normal">
                      {dateAdded}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton  variant="text" className="text-yellowCapas">
                        <PencilIcon onClick={() =>handleEdit(code)}  className="h-6 w-6" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="white" className="font-normal">
          Pagina 1
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="white" size="sm">
            Anterior
          </Button>
          <Button variant="outlined" color="white" size="sm">
            Siguiente
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

//profile menu component
const profileMenuItems = [
  {
    label: "Administrar usuarios",
  },
  {
    label: "Sign Out",
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const navigate = useNavigate();

  const handleMenuClick = (label) => {
  if (label === "Administrar usuarios") {
      navigate('/admin-users');
  } else if (label === "Sign Out") {
      navigate('/');
  }
  };
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-auto"
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
              onClick={ () => handleMenuClick(label)}
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
export default function AdminUsers() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const [searchValue, setSearchValue] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [userList, setUserList] = useState([]);

    const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); // inicio de la pagina
  const [size, setSize] = useState(5); // número de usuarios por página
  const { user, token } = useUserContext(); // obteniendo token de contexto de usuario

  console.log('El token del usuario es:', token);

    const navigate = useNavigate();

    useEffect(() => {
      if(token){
        userService.getAllUsers(page, size, token)
            .then((data) => {
              setUsers(data.content)        
                console.log('Los usuarios obtenidos:', data.content);
            })
            .catch((error) => {
                console.error('Hubo un error al obtener los usuarios:', error);
            });
        }
    }, [ page, size,token]); 


  /*
      useEffect(() => {
        if(token){
          userService.getAllUsersByPermit('9585336e-1449-4d5d-97f5-c2581e365169',page, size, token)
              .then((data) => {
                setUsers( data.content)        
                  console.log('Los usuarios clientes obtenidas:', data.content);
              })
              .catch((error) => {
                  console.error('Hubo un error al obtener los clientes:', error);
              });
          }
      }, ['9585336e-1449-4d5d-97f5-c2581e365169', page, size,token]); 

    */
  

   const editPermitClick = () => {
      navigate('/admin-users/permits-user');
    }


  
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);
  
    useEffect(() => {
      document.title = "Admin Users";
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
          
          <ProfileMenu />
          </div>
        </Navbar>
        </header>
      <div className={[classes["bodyContainer"]]}>
        <div className={[classes["titleContainer"]]}>
          <Typography variant="h1" className={[classes["title"]]}>
            Administrar usuarios
          </Typography>
        </div>
        <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent Mobile-390*844:my-4 Mobile-280:my-4 ">
        <div className="flex items-center justify-between gap-4  PC-1920*1080:flex-row PC-1600*900:flex-row PC PC-800*600:flex-col 
        PC-640*480:flex-col Mobile-390*844:flex-col Mobile-280:flex-col bg-transparent">
          <Tabs value="all" className="w-full md:w-max bg-blue-gray-200 rounded-lg">
            <TabsHeader className="bg-transparent">
              {TABS.map(({ label, value }) => (
                <Tab 
                  key={value} 
                  value={value} 
                  className="Mobile-390*844:text-md Mobile-280:text-xs PC-640*480:text-md PC-800*600:text-md"
                  onClick={() => handleTabClick(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
          <UserTable users={users} navigate={navigate} />
         {/*  <div className={classes["usersInEventContainer"]}>
            {users.map((user) => (
                <div key={user.email} className={classes["userInEvent"]}>
                <Avatar
                    src={user.avatar}
                    alt={user.name}
                    className="w-auto h-auto "
                />
                <div className={[classes["emailContainer"]]}>
                <p>{user.email}</p>
                <div className={[classes["buttonContainer"]]}>
                <button 
                onClick={editPermitClick}
                className={[classes["editPermitsButton"]]}>
                Editar permisos
                </button>

                </div>
              </div>
                </div>
            ))}
          </div> */}
    </div>
    </div>
  );
}