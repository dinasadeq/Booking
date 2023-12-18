import Featured from "../../components/Featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import List from "../list/List";
import SearchItem from "../../components/SearchItem/SearchItem";
import propertyList from "../../components/propertyList/propertyList";


const Home = () => {
    return (
      <div>
       <Navbar />
       <Header />
          <div className=" homeContainer">

            <Featured/>
              <h1 className="homeTitle"> Browse by property type</h1>

              <propertyList/>
              <h1 className="homeTitle"> Home guests Love </h1>
              <FeaturedProperties/>
              <MailList/>
              <Footer/>
              <List/>
              <SearchItem/>
          </div>
      </div>
    );
  };
  export default Home;