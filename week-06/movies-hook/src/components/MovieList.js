import React, { useState, useEffect } from 'react'
import axios from 'axios'
const key = 'fae89ce6616cd4e865bdfb392495d453'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  // const [searchTerm, setSearchTerm] = useState('')
  const [colorList, setColorList] = useState([])
  const [myStuff, setMyStuff] = useState({})

  saveColor = () => {
    setColorList(oldList => oldList.concat({}))
  }

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${currentPage}`
    axios.get(URL).then(resp => {
      console.log({ resp })
      setMovies(resp.data.results)
    })
  }, [currentPage, {}])

  return (
    <>
      <h1>Now Showing</h1>
      <button onClick={() => setCurrentPage(oldPage => oldPage + 1)}>
        next page
      </button>
      {movies.map(movie => {
        return <section key={movie.id}>{movie.title}</section>
      })}
    </>
  )
}
