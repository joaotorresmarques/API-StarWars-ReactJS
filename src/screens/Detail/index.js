import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { doGet} from '../../helpers/ApiHelper'

const Home = () =>{
  const [person, setPerson] = useState([]);
  const {id} = useParams();

  useEffect(() =>{
    doGet(`/people/${id}`).then(setPerson)
  },[id])

  if(!person) {
    return <h1>Loading...</h1>
  }

  return <h1 key={person.url}>{person.name}</h1>
}

export default Home;