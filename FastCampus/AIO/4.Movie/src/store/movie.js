import { Store } from "../core/core.js";

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
  pageMax: 1,
  loading: false,
  message: 'Search for the movie title!',
  movie: {}
})
export default store

export const searchMovies = async function(page){
  store.state.loading = true;
  store.state.page = page;
  if(page === 1){
    store.state.movies = [];
    store.state.message = '';
  }
  try{
    // const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
    const res = await fetch('/api/movie',{method:'POST', body: JSON.stringify({title:store.state.searchText, page:page})})
    const { Search, totalResults, Response, Error } = await res.json()
    if( Response === 'True'){
      store.state.movies = [ ...store.state.movies, ...Search]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    }
    else{
      store.state.message = Error
      store.state.pageMax = 1;
    }
  }
  catch(error){
    console.log(error);
  }
  finally{
    store.state.loading = false;
  }
}

export const getMovieDetails = async function(id){
  try{
    // const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
    const res = await fetch('/api/movie',{
      body: JSON.stringify({
        method:"POST",
        id: id
      })
    })
    store.state.movie = await res.json()
  }
  catch(error){
    console.log('getMovieDetails error',error);
  }
}
