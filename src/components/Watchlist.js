import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      window.localStorage.removeItem(watchlist)
      localStorage.clear()
      navigate("/");
      
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
             <button onClick={handleLogout}>Logout</button>
          <h2 className="no-movies">No movies in your list! Add some!</h2>
          </>
        )}
      </div>
    </div>
  );
};
