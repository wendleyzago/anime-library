import { useState, useEffect } from 'react'
import AnimeCard from '../components/AnimeCard'

import './AnimeStyleGrid.css'

const api = "https://kitsu.io/api/edge/"

const Home = () => {
  const [animeList, setAnimeList] = useState([])

  const getAnimes = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setAnimeList(data.data)
    
  }

  useEffect(() => {
    const url = `${api}anime?sort=ratingRank&page[limit]=20&page[offset]=0`

    getAnimes(url)
  }, [])
  
  return (
    <div className='container'>
      <h2 className="title">Melhores animes: </h2>
      <div className="anime-container">
        {animeList.length === 0 && <p>Carregando...</p>}
        {animeList && animeList.map((anime) => <AnimeCard key={anime.id} anime={anime}/>)}    
      </div>
    </div>
  )
}

export default Home