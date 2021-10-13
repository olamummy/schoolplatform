document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelectorAll(".burger-icon")[0];
    const menu = document.querySelectorAll(".burger-menu")[0];
    const filters = document.querySelectorAll('.filter');
    const read_chats = document.querySelectorAll('.read');
    const unread_chats = document.querySelectorAll('.unread');
    const delete_chat_button = document.querySelectorAll('.delete-chat')[0];
    const delete_chat_overlay = document.querySelectorAll('.modal-container')[0];
    const confirm_chat_delete = document.querySelector("#confirm-chat-delete");

    for(filter of filters){
        filter.addEventListener('click', function(){
            const active_filter = document.querySelectorAll('.active-filter')[0];
            active_filter.classList.remove('active-filter');
            this.classList.add('active-filter');

            if(this.getAttribute('value') === null){
                for(chat of read_chats) chat.classList.remove('chat-hidden');
                for(chat of unread_chats) chat.classList.remove('chat-hidden');
            } else if(this.getAttribute('value') == 1) {
                for(chat of read_chats) chat.classList.remove('chat-hidden');
                for(chat of unread_chats) chat.classList.add('chat-hidden');
            } else {
                for(chat of read_chats) chat.classList.add('chat-hidden');
                for(chat of unread_chats) chat.classList.remove('chat-hidden');
            }
        }, false);
    }

    const toggle = () => {
        menu.classList.toggle('menu-active');
    }
    
    const handleModal = ({ hide }) => {
        if(!hide) return delete_chat_overlay.classList.add('delete-chat-modal-visible');

        delete_chat_overlay.classList.remove('delete-chat-modal-visible')
    }

    delete_chat_button.addEventListener('click', handleModal, false);
    delete_chat_overlay.addEventListener('click', () => handleModal({ hide: true }), false);
    confirm_chat_delete.addEventListener('click', () => {
        console.log("deleting...");
        handleModal({ hide: true })}, false);
    
    burger.addEventListener("click", toggle, false);
});