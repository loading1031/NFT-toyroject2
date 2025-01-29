import { Img } from 'react-image'
import { BsCircleFill } from 'react-icons/bs'

//INTERNAL IMPORT
import Style from './Category.module.css'
import images from '../../img'

const Category = () => {
    const categoryArray = [1, 2, 3, 4, 5];
    return (
        <div className={Style.category}>
            {categoryArray.map((el, i) => (
                <div className={Style.category_box} key={i + 1}>
                    <Img 
                        src={images.creatorbackground1} 
                        className={Style.category_box_img}
                        alt='Background image'
                    />
                    
                    <div className={Style.category_box_title}>
                        <span>
                            <BsCircleFill />
                        </span>
                        <div className={Style.category_box_title_info}>
                            <h4>Entertainment</h4>
                            <small>1995 NFTs</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category