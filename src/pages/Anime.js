import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { 
  IoIosPodium, 
  IoIosTrendingUp, 
  IoMdPlayCircle,
  IoIosPaper
} from 'react-icons/io'

import AnimeCard from "../components/AnimeCard"

import "./Anime.css"

const api = "https://kitsu.io/api/edge/"



const Anime = () => {

  const {id} = useParams()
  const [anime, setAnime] = useState(null)

  const getAnime = async (url) => {
  
    const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)

    setAnime(data.data)

    console.log(data.data)
  }


  useEffect(() => {
    const animeURL = `${api}anime/${id}`
    
    getAnime(animeURL)

  }, [])

  return (
    <div className="anime-page">
     {anime && (
      <div>
         <AnimeCard anime={anime} showLink={false}/>

         <div className="info-style">
            <h3><IoIosPodium />Rank de popularidade: </h3>
            <p>{anime.attributes.popularityRank}</p>
         </div>

         <div className="info-style">
            <h3><IoIosTrendingUp />Classificação média: </h3>
            <p>{anime.attributes.averageRating}</p>
         </div>

         <div className="info-style">
            <h3><IoMdPlayCircle />Quantidade de episódios: </h3>
            <p>{anime.attributes.episodeCount}</p>
         </div>

         <div className="info-description">
            <h3><IoIosPaper />Descrição: </h3>
            <p>{anime.attributes.description}</p>
         </div>
      </div>
     )}
    </div>
  )
}

export default Anime