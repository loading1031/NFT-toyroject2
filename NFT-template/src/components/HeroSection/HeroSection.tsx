import { Img } from 'react-image'

//INTERNAL IMPORT
import Style from './HeroSection.module.css'
import { Button } from '../components-index'
import images from '../../img'

const HeroSection = () => {
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>Discover, collect, and sell NFTs 🎆</h1>
                    <p>
                        Discover the most outstanding NFTs in all topic
                        your NFTs and sell tehm
                    </p>
                    <Button btnName='Start your search' handleClick={() => { }} />
                </div>
                <div className={Style.heroSection_box_right}>
                    <Img src={images.hero} alt="Hero section" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;