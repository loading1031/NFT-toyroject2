//INTERNAL IMPORT
import Style from '../styles/index.module.css'
import { HeroSection, Service, BigNFTSlider, Subscribe, Title } from '../components/components-index'

const Home = () => {
    return (
        <div className={Style.homePage}>
            <HeroSection />
            <Service />
            <BigNFTSlider />
            <Title 
                heading="Browse by category"
                paragraph='Explore the NFTs in the most featured categories'
            />
            <Subscribe />        
        </div>
    )
}

export default Home