//INTERNAL IMPORT
import Style from '../styles/index.module.css'
import { HeroSection } from '../components/components-index'

const Home = () => {
    return (
        <div className={Style.homePage}>
            <HeroSection />
        </div>
    )
}

export default Home