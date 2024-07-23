import './Navbar.scss';
import {Button}  from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi"; 
import { color, motion } from "framer-motion";

const Navbar = () =>{
  const [open, setOpen] = useState(false);

    return(
     <nav>
        <div className="left">
            <a href='/' className='logo'>
                <img src='/logo.png' alt=''/>
                <span>Estate</span>
            </a>

            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
            <a href=''>Agents</a>
        </div>
        <div className="right">
        <a href=''><Button variant='outlined'
        className='muibtn'
        sx={{
            color: 'rgb(156, 231, 6)',
            border: '1px solid rgb(156, 231, 6)',
            backgroundColor: 'white',
            '&:hover':{
            border: '1px solid rgb(156, 231, 6)',
            backgroundColor: 'white',
            color: 'rgb(156, 231, 6)'
        }}}
        >Sign in</Button></a>

        <a href='' ><Button variant="contained"
        className='muibtn'
        sx={{
          backgroundColor: 'rgb(156, 231, 6)', 
          '&:hover':{
          backgroundColor: 'rgb(156, 231, 6)'
          }}}> Sign up
            </Button></a>

        <div className="menuIcon"  >
        <IconButton  onClick={() => setOpen((pv) => !pv)} style={{ color: "rgb(156, 231, 6)", marginLeft: "50px"}}>
        <MenuIcon fontSize='large' />
        </IconButton>

        <div  style={{ marginRight: "90px", width: "10px", paddingTop: "2px"}}>
        <motion.div animate={open ? "open" : "closed"} className="relative " >
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%"}}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden "
          >
            <Option setOpen={setOpen}  text="Home" link="#pop"/>
            <Option setOpen={setOpen}  text="About" link="/pop"/>
            <Option setOpen={setOpen}  text="Contact" link="/pop"/>
            <Option setOpen={setOpen}  text="Agents" link="/pop"/>
            <Option setOpen={setOpen}  text="Sign in" link="/pop"/>
            <Option setOpen={setOpen}  text="Sign up" link="/pop"/>
            
          </motion.ul>
        </motion.div>
      </div>
        </div>

        </div>
     </nav>
    )
}

const Option = ({ text,  setOpen, link }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-custom-green text-slate-700  transition-colors cursor-pointer"
    >
      
      <span >{text}</span>
     
    </motion.li>
  );
};

export default Navbar;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};