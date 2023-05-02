import PublicHeader from "./PublicHeader"
import PublicFooter from "./PublicFooter"

const PublicAbout = () => {    

    return (
        <section className='public'>
        <PublicHeader />        
        <main className='public__main'>
            <h1 className='public__mainTitle'>About</h1>
            <div className='public__aboutContent' >
                <p>Welcome all, you&apos;ve reached OrthoObserver in a very early state somehow and I&apos;m flattered you&apos;ve found this page. OrthoObserver was meant to be a social media platform infused with the spirit of the Orthodox Christian Church. Rather than vain chirping from anyone bored with a smartphone the aim of the platform is to help Christians refocus on higher spiritual pursuits through the words of the saints, mutual prayer, and God willing interactions with real clergy members of the Orthodox Church.</p>

                <p>Though I come from a technology background (mainly tech support and some field installtion work) this is my first attempt at fullstack application development in some years. The motivation to take on this project came from a few sources. Primarly I wanted to endeavor in something that I truly believed in and being a Christian it made sense to me to try to do something to glorify God. The other motivational source was the reduction in force my previous employer decided to undergo during the Silicon Valley bank crash in mid March in this year 2023. It was a bit jarring to lose my job suddenly at the end of a busy day but I stay thankful for all the many things that are going right in my life and with the development of this application!</p>

                <p>This application was built using primarily the following:
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>React.js</li>
                        <li>Mongoose</li>
                    </ul>
                </p>
            </div>
        </main>     
        
        <PublicFooter />
      </section>   
    )
}

export default PublicAbout