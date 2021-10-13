document.addEventListener('DOMContentLoaded', () => {
    const sendButtons = document.querySelectorAll('.send');
    const messageInputs = document.querySelectorAll('.message');
    const replyButtons = document.querySelectorAll('.reply-comment');
    const repliesCollapser = document.querySelectorAll('.replies-collapser');

    const extractMessage = (currentElement) => {
        let postID;
        const message = currentElement.value;
        const messageCategory = currentElement.getAttribute('cat');
        if(messageCategory !== 'new') postID = currentElement.getAttribute('post-id');
        
        /*
            EXPLANATION of the following message object
            {
                messageCategory: "new" || "reply",
                message: "message to send",
                postID: "message the user is replying to, will be undefined if 'messageCategory is new'"
            }
        */

        const data = { messageCategory, message, postID};

        console.log("message: ", data);
        currentElement.value = "";
    }

    for(replyButton of replyButtons) {
        replyButton.addEventListener('click', function(){
            this.querySelector('.reply-input-container').classList.remove('hidden');
        });
    }

    for(input of messageInputs) {
        input.addEventListener('keypress', function(e){
            if (e.key === 'Enter') {
                extractMessage(this);
            }
        });
    }

    for(button of sendButtons) {
        button.addEventListener('click', function(){
            extractMessage(this.closest('div').querySelector('.message'));
        });
    }

    for(collapser of repliesCollapser) {
        collapser.addEventListener('click', function(e) {
            this.closest('.replies-collapser').closest('.comment-footer').nextElementSibling.classList.toggle('hidden');
            const icon = e.currentTarget.querySelector('.fas');
            if(icon.classList.contains('fa-angle-up')){
                icon.classList.remove('fa-angle-up');
                return icon.classList.add('fa-angle-down');
            }
    
            icon.classList.add('fa-angle-up');
            icon.classList.remove('fa-angle-down');
        });
    }

})