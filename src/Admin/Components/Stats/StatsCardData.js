import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import { db } from "../../../firebaseConfig";
import { useState, useEffect } from "react";
import {
  query,
  getDocs,
  collection,
  where, deleteDoc,
  addDoc,
  setDoc, doc
} from "firebase/firestore";


export const StatsData = [
  {
    fig:'150',
    heading:'Posts',
    icon:<AiIcons.AiFillEye/>
  },
  {
    fig:'100',
    heading:'New Posts',
    icon:<GiIcons.GiClick/>
  },
  {
    fig:'100',
    heading:'Visits',
    icon:<AiIcons.AiOutlineStock/>
  },
  {
    fig:'10',
    heading:'Logins',
    icon:<AiIcons.AiOutlineLogin/>
  },
 
];