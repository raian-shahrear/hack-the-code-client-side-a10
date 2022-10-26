import { list } from 'postcss';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  
};

export default SideBar;