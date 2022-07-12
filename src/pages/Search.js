import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import AnimeCard from "../components/AnimeCard"
import "./AnimeStyleGrid.css"

const api = "https://kitsu.io/api/edge/"

const Search = () => {
  const [animes, setAnimes] = useState([])
  const [searchParams] = useSearchParams()

  const query = searchParams.get("q")
  
  const getSearchedAnimes = async (url) => {

    const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)

    setAnimes(data.data)
  }

  useEffect(() => {
    const searchAnime = `${api}anime?filter[text]=${query}`

    getSearchedAnimes(searchAnime)

  },[query])

  return (
    <div className="container">
      <h2 className="title">
        Resultado para: 
        <span className="query-text"> {query}</span> 
      </h2>

      <div className="anime-container">
        {animes.length === 0 && <p className="result">Nenhum resultado encontrado...</p>}
        {animes && animes.map((anime) => <AnimeCard key={anime.id} anime={anime}/>)}
      </div>
    </div>
  )
}

export default Search