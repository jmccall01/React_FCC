function Header() {
    return(
        <header>
            <nav className="whole-nav">
                <img src="react-logo.png" class="image"/>
                <ul className="nav-items"> 
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
    <div>
        <ul class="u_list">
            <h1 class="h1-title">Fun Facts about React</h1>
            <li class="list">Was first released in 2013</li>
            <li class="list">Was ariginally created by Jordan Walke</li>
            <li class="list">Has well over 100K stars on Github</li>
            <li class="list">Is maintained by Facebook</li>
            <li class="list">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

function Footer() {
    return(
    <footer>
        <small>©JMcCall 2023. All rights reserved</small>
    </footer>
    )
}

function Page() {
    return(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

ReactDOM.render(
    <Page /> ,document.getElementById("root")
    )
