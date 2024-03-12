function NavElement() {

    return(
        <li></li>
    )
}

export function NavBar() {
    return(
        <nav className="sticky top-0 h-full">
            <ul>
                <NavElement></NavElement>
            </ul>
        </nav>
    )
}