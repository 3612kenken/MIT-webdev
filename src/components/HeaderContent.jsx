import './style.css'
import './HeaderContent.css'
function HeaderContent(){
    return (
        <>
        <div class='flex-contents'>
            <div class="flex-contents-left-margin">
                <h2>Goal</h2>
                <p>Lagim aims to preserve and share the rich oral traditions of Filipino folklore, bringing ancient myths and legends to a modern audience.</p>

            </div>

            <div class="flex-contents-right-margin">
            <h2>Background</h2>
            <p>Inspired by the storytelling traditions of the Philippines, Lagim is dedicated to celebrating and documenting the diverse tapestry of Filipino myths and legends.</p>
            </div>

        </div>
            <div class="flex-contents-center">
                <h2>Categories</h2>
            </div>
          <div class='flex-contents'>
            <button class="button button-round btn-round-light">Myths</button>
            <button class="button button-round btn-round">Legends</button>
            <button class="button button-round btn-round">Folk Tales</button>
        </div>
        </>

    );
    
}

export default HeaderContent