import PublicHeader from "./PublicHeader"
import PublicFooter from "./PublicFooter"

const PublicAbout = () => {    

    return (
        <section className='public'>
        <main className='public__main'>
            <h2 className='public__mainTitle'>About</h2>
            <div className='public__mainContent' >
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
                <p>What Is Boilerplate?
Boilerplate language is standardized text that can be used repeatedly in similar documents without major changes.

Boilerplate language is used for efficiency and to increase standardization in the structure, language, and content of written or digital documents. In contract law, boilerplate language is used to ensure that all the necessary legal details are documented.

KEY TAKEAWAYS
Boilerplate language is the standardized text that can be found in many documents such as contracts.
These passages of text are often part of a template that is personalized as needed.
The term is also used to describe sections of code that can be reused in various software programs or web pages.
Boilerplates are time and money-savers, but can also favor only one party in the case of contracts.
How Boilerplates Work
Boilerplate can be any text that is reused repeatedly without substantial changes to the original. Boilerplates are commonly used online and in written documents by a variety of entities including corporations, legal firms, and medical facilities.

Users can make slight changes to the language or certain portions of the text to tailor a document for different uses. For instance, a media release contains boilerplate language at the bottom, which is usually information about the company or product and may be updated for different situations before being disseminated to the public.

The term is also used by software writers to refer to coding that is created and reused over and over again. In this case, the IT specialist only has to rework some of the code to fit into the current need, without making major changes to the original structure.
1

Boilerplate can be described as the standard text portion of a template. It provides the user with a basic structure that can be altered to suit different needs.

History of Boilerplate
In the 19th century, a boilerplate was a steel slab used as a template in the construction of steam boilers. This term for standardization was adopted by editors to describe the often trite and unoriginal work that some writers submitted for publication.
2

The legal profession began using the term boilerplate as early as the mid-1950s when an article in the Bedford Gazette criticized boilerplate language as fine print designed to bury the unpleasant details of an agreement.

Businesses today use boilerplate clauses in contracts, purchase agreements, and other formal documents. Boilerplate clauses are designed not only to save time but to protect businesses from making errors or legal mistakes in documents.

The wording of these passages is generally not up for negotiation with customers, who will often sign boilerplate documents without actually reading or understanding them. This type of boilerplate, written by a party with superior bargaining power and presented to a weaker party, is often called an adhesion contract in the legal profession. Courts may set aside provisions of such contracts if they find them coercive or unfair.</p>
            </div>
        </main>     
        
      </section>   
    )
}

export default PublicAbout