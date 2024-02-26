import './Banner.css';
import axios from 'axios'
import React, { useEffect } from 'react'
import axios from '../api/axios';
import requests from '../api/request';

const Banner = () => {

  useEffect(() => {

  }, [])

  const fetchData = () => {
    const response = axios.get(requests.fetchNowPlaying);
  }
  
  return (
    <div>Banner</div>
  )
}

export default Banner