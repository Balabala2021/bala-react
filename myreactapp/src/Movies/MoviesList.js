import React from "react"
import { useState } from "react";
import AddMovies from "./AddMovies";



export default function MoviesList() {


        const [movies,setMovies] = useState(
          [
            {id:"1",movieName:"Leo",poster:"https://i.pinimg.com/originals/46/37/db/4637dbeccdf457d9086f4e19e3737863.jpg"},
            {id:"2",movieName:"Rathnam",poster:"https://static.moviecrow.com/gallery/20240108/224283-Rathanam.jpeg"},
            {id:"3",movieName:"Thuniuv",poster:"https://static.moviecrow.com/gallery/20230104/210540-Thunivu%20Stills%20Ajith%20Kumar.jpg"},
          ]
          );


        return (
             
          <div>
            <AddMovies movies={movies} setMovies={setMovies}/>
            <div className="movie-container">

                   {
                    // console.log(movies)
                    movies.map(movie=><div className="movie-card">
                    <img src={movie.poster}/>
                    <div>
                    <h4>{movie.movieName}</h4>
    
                       </div>
                  </div>)

                    
                  }
            </div>
 
          </div>
        )
      }
