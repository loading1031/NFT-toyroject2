//INTERNAL IMPORT
import Style from './Button.module.css'

interface ButtonProps {
    btnName: string;
    handleClick: () => void;
}
const Button = ({ btnName, handleClick }: ButtonProps) => {
    return (
        <div className={Style.box}>
            <button className={Style.button} onClick={() => handleClick}>
                {btnName}
            </button>
        </div>
    )
}

export default Button