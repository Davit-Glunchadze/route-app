import michael from "../photos/michael.jpg"

const HomePage = () => {
    return (
        <div className="home">
            <h1>Michael Jackson</h1>
            <img src={michael} alt="photo" />
        </div>
    )
}

export default HomePage