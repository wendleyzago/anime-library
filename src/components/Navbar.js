import { BiSearchAlt2 } from "react-icons/bi"
import { Link, useNavigate} from "react-router-dom"
import { useState } from 'react'

import "./Navbar.css"

const Navbar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search){
            alert("Preencha o campo!")
            
        } 

        navigate(`/search?q=${search}`)
        setSearch("")
    }


    
  return (
    <nav id="navbar">
        <h2>
        <Link to="/">Anime Library</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Busque um anime" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />

            <button type="submit"><BiSearchAlt2 /></button>
        </form>
    </nav>
  )
}

export default Navbar