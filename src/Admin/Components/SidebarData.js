import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/events',
    icon: <BsIcons.BsFillFilePostFill />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Visit Website',
    path: '#',
    icon: <BsIcons.BsArrowUpRight />,
    cName: 'nav-text'
  },
  // {
  //   title:'Log Out',
  //   path:'/',
  //   icon:<AiIcons.AiOutlineLogin />,
  //   cName:'nav-text'
  // }
];