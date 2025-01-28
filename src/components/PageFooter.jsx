import './style.css'
import './PageFooter.css'

function PageFooter(){

    return (
        <>
             <div class='flex-footer'>
                <div class="left">
                        <h2>Project: Lagim</h2>
                </div>
             
                    <div class="mid">
                        <h2>Quick Links</h2>
                        <p>About</p>
                        <p>Categories</p>
                        <p>Blog</p>
                    </div>
                    <div class="mid">
                        <h2>Social</h2>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div class="right">
                    <h2>News Letter Sign-up</h2>
                    <p>Stay updated to our latest stories and news</p>

                    <input type='email' class='email' />
                    <button class='btn-minimal' >Submit</button>
                    </div>

             </div>
             <div class='flex-credits'>
              
                    <p>© 2024 Project: Lagim. All rights reserved.</p>
            
                     
             </div>
        </>

    );
}

export default PageFooter