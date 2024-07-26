import SearchBar from "../components/searchbar/SearchBar";
import "./homePage.scss";

const HomePage = () =>{
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="text-5xl font-bold">
                Find Real Estate & Get Your Dream Place
                </h1>
                

                <p>
                Browse through our extensive catalog of properties, meticulously curated to match your unique preferences. From cozy apartments to spacious family homes, we have a wide range of options to suit your lifestyle.
                </p>

                <SearchBar/>

                <div className="boxes">
                    <div className="box">
                        <h1 >16+</h1>
                        <h2>Years of Experience</h2>
                    </div>

                    <div className="box">
                        <h1 >200</h1>
                        <h2>Award gain</h2>
                    </div>

                    <div className="box">
                        <h1 >200+</h1>
                        <h2>Property ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src='./bg.png' alt="" />
            </div>
        </div>
    )   
}

export default HomePage;