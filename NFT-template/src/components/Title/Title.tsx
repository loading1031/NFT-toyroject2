
//INTERNAL IMPORT
import Style from './Title.module.css'

interface TitleProps {
    heading: string
    paragraph: string
}
const Title = ({ heading, paragraph }: TitleProps) => {
    return (
        <div className={Style.title}>
            <div className={Style.title_box}>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Title