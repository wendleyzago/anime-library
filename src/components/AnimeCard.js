import { Link } from 'react-router-dom'
import { FaTrophy } from 'react-icons/fa'

const AnimeCard = ({anime, showLink = true}) => {
  return (
    <div className='anime_card'>
       <img src={anime.attributes.posterImage.medium} alt={anime.attributes.titles.en_jp} />
       <h2>{anime.attributes.titles.en_jp}</h2>
       <p>
            <FaTrophy />
            {anime.attributes.ratingRank}º Lugar no ranking de classificação
       </p>
       {showLink && <Link to={`/anime/${anime.id}`}>Detalhes</Link>}
    </div>
  )
}

export default AnimeCard 

