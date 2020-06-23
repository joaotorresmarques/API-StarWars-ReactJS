import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { doGet, getIdFormUrl } from '../../helpers/ApiHelper'
const Home = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    doGet('/people').then(response => setPeople(response.results));
  }, [])
  if (!people || !people.length) {
    return <h1>Loading...</h1>
  }
  const peopleList = people.map(p => {
    const id = getIdFormUrl(p.url);

  return(
  <Link to={`/detail/${id}`}><li key={p.url}>{p.name}</li></Link>
  )
})
  return (
    <>
      <h1>{peopleList}</h1>
    </>)
}

export default Home;