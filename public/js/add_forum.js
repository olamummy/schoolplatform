document.addEventListener("DOMContentLoaded",function(){
    const tags = document.querySelectorAll('.tag');
    const select_field = document.querySelectorAll('.form-select')[0];
    const subtitle = document.querySelectorAll('.max-selection span')[0];
    const error = document.querySelectorAll('.max-selection span')[1];
    const error_message = document.querySelectorAll('.selection-error')[0];
    const button = document.querySelectorAll('.modal-primary-button')[0];
    const input_tag1 = document.querySelectorAll('.tag1')[0];
    const input_tag2 = document.querySelectorAll('.tag2')[0];
    const modal_container = document.querySelectorAll('.modal-container')[0];
    const select_cat_label = document.querySelectorAll('.select-category')[0];
    const select_cat_icon = document.querySelectorAll('.select-category-icon')[0];
    const tag1_label = document.querySelectorAll('.tag-1-label')[0];
    const tag2_label = document.querySelectorAll('.tag-2-label')[0];

    const max_allowed_items = +select_field.getAttribute('max-items');

    let selected_items = [];
    subtitle.innerText = max_allowed_items;
    error.innerText = max_allowed_items;
    let selection_counter = 0;
    
    button.addEventListener('click', () => {
        if(!selection_counter) return
        else if(selection_counter <= max_allowed_items){
            input_tag1.setAttribute('value', selected_items[0]);
            input_tag2.setAttribute('value', selected_items[1]);
            select_cat_label.classList.add('tag-1-label');
            select_cat_icon.classList.add('tag-1-label');
            tag1_label.innerText = selected_items[0];
            tag2_label.innerText = selected_items[1];
            tag1_label.classList.add('modal-active');
            tag2_label.classList.add('modal-active');
            select_field.classList.add('form-selected');
            modal_container.classList.remove('modal-active');
        }

        error_message.removeAttribute('hidden');
    });

    select_field.addEventListener('click', () => {
        modal_container.classList.add('modal-active');
    });
    
    for (let i in tags){
        tags[i].addEventListener('click', elem => {
            if(elem.target.classList.contains('tag-selected')) {
                selected_items = [...selected_items.filter(item => item != elem.target.innerText)];
                elem.target.classList.remove('tag-selected');
                return selection_counter !==0 && selection_counter--;
            }
            
            selected_items.push(elem.target.innerText);
            elem.target.classList.add('tag-selected');
            selection_counter++;
        }, false);
    }
});