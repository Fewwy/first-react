import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
        <Link to="/">
        Main page
        </Link>
        <Link to="/pokemontable">
        Pokemon Table
        </Link>
        </>
    )
}

export default Menu
