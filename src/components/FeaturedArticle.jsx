import './style.css'
import './FeaturedArticle.css'

function FeaturedArticle(){
    return (

        <>
            <div class="flex-featured-header">
                <h2>Meet our featured storytellers and read their inspiring contributions.</h2>
            </div>
            <div class='flex-featured'>
                <div>
                    <img class="rounded-img" src="./assets/images/Manlalyog.jpg" width={"80%"}/>

                    <h3>Manlalayog: Long Haired Spirit</h3>
                    <p>Storyteller: Wilmer J. Pascual</p>
                </div>
                <div>
                <img class="rounded-img" src="./assets/images/Mantiyanak.jpg" width={"80%"}/>
                    <h3>Mantiyanak : The Pregnant Spirit</h3>
                    <p>Storyteller: Ivy S. Aguiflor</p>
                </div>
                <div>
                <img class="rounded-img" src="./assets/images/Tianak.jpg" width={"80%"}/>
                    <h3>Tiyanak: The Demon Baby</h3>
                    <p>Storyteller: Pollux M. Rey</p>
                </div>
            </div>
            <div class='flex-featured-form'>
                <div class="form-caption">
                    <p>Have a tale to tell? Submit your own folklore or legend and join our growing community</p>
                </div>
                <div>
                 
                        <p><u>Enter your email to subscribe.</u></p>
                        <input type="email" class="email"/>
                        <button class="btn-minimal">Submit</button>
                    
                </div>
            </div>

            
                <div class="flex-featured-header-bottom">
                    <h2>"Discover how Lagim's stories have influenced local schools and cultural organizations."</h2>
                </div>
            <div class='flex-featured-bottom'>
                <div class="flex-featured-left-margin">
                <h2>"Lagim has rekindled my love for our cultural stories. The rich detail and presentation are amazing!"</h2>
                <p>- Maria S.</p> 
                 </div>
                <div class="flex-featured-right-margin ">
                <h2>"A fantastic resource for anyone interested in Filipino folklore. I'm proud to be part of this community."</h2>
                <p>- Juan D.</p> 
                </div>
            </div>
        </>
    );

}


export default FeaturedArticle