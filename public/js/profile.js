document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('.profile-form');
    const profileEdit = document.querySelector(".profile-edit");
    const profileContainer = document.querySelector('.profile-container');
    const profileEditContainer = document.querySelector('.profile-edit-container');

    const formToJSON = elements => [].reduce.call(elements, (data, element) => {
        data[element.name] = element.value;
        return data;
    }, {});

    profileEdit.addEventListener('click', function() {
        if(profileEditContainer.classList.contains('hidden')){
            this.classList.add('fa-times');
            this.classList.remove('fa-pencil-alt');
            profileContainer.classList.add('hidden');
            return profileEditContainer.classList.remove('hidden');
        }

        this.classList.remove('fa-times');
        this.classList.add('fa-pencil-alt');
        profileContainer.classList.remove('hidden');
        profileEditContainer.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = formToJSON(form.elements);
        // submit profile data via ajax here
        console.log(data);
    });
});