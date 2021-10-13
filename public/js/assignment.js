document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.container');
    const detailContainer = document.querySelector('.assignment-detail-container');
    const assignments = document.querySelectorAll('.assignment-item');
    const returnButton = document.querySelector('#return');
    
    for (let assignment of assignments) {
        assignment.addEventListener('click', (e) => {
            const author = e.currentTarget.getAttribute('author-name');
            const addedOn = e.currentTarget.getAttribute('time-added');
            const authorPicURL = assignment.querySelector(".assignment-author-picture").getAttribute('src');
            const tag = assignment.querySelector(".assignment-tag").textContent;
            const title = assignment.querySelector(".assignment-item-title").textContent;
            const body = assignment.querySelector(".assignment-body").textContent;

            detailContainer.querySelector('.assignment-detail-title').textContent = title;
            detailContainer.querySelector('.post-author-picture').setAttribute('src', authorPicURL);
            detailContainer.querySelector('.post-author').textContent = author;
            detailContainer.querySelector('.post-timestamp').textContent = addedOn;
            detailContainer.querySelector('.post-body').textContent = body;
            detailContainer.querySelector('.post-primary-button').textContent = tag;

            container.classList.add('hidden');
            detailContainer.classList.remove('hidden');
        });
    }
    
    returnButton.addEventListener('click', () => {
        container.classList.remove('hidden');
        detailContainer.classList.add('hidden');
    })
});