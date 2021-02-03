import React from 'react'

function Header() {
    return (
        <div className="header box-shadow">
            <nav className="nav">
                <h1 className="title"><a href="/">Plantopedia</a></h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/plants">My Plants</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
