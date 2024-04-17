import { button } from './Button.css'

const Button = ({ onClick, children, variant }: {
    onClick?: () => void
    children: string
    variant?: 'secondary' | 'tertiary';
}) => {
    return (
        <button className={button({ variant })} onClick={onClick}>{children}</button>
    )
}

export default Button