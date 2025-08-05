import MovieCard from "../components/MovieCard"


function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2024"},
        {id: 2, title: "Hello Kitty", release_date: "2025"},
        {id: 3, title: "Joshua the Giant", release_date: "2026"}
    ]


    return (
        <MovieCard movie={{title: "Tim's Films", release_date: "2024"}} />
    )
}

export default Home