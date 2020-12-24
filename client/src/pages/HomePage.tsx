import Main from "../components/Main-view/Main-view";
import Search from '../components/search/Search';
import Categories from "../components/Categories-container/Categories-container";
import HowWorks from '../components/HowWorks/HowWorks'
 
require('dotenv').config();

const HomePage = () => {
    return ( 
        <div>
            <Main />
            <Search />
            <Categories />
            <HowWorks/>
        </div>
     );
}
 
export default HomePage;