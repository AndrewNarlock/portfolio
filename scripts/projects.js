const postContainer = document.querySelector('.post-container');

//Loads posts from data.
window.addEventListener('load', () => {
    for(let i = 0; i < projectsData.length; i++) {
        let postLink = document.createElement('a');
        let newPost = document.createElement('div');
        let postImage = document.createElement('img');
        let postWordContainer = document.createElement('div');
        let postTitle = document.createElement('h3');
        let postDescription = document.createElement('p');
        postLink.classList.add('post-link');
        newPost.classList.add('post');
        postImage.classList.add('post-image');
        postWordContainer.classList.add('post-word-container');
        postTitle.classList.add('post-title');
        postDescription.classList.add('post-description');
        postLink.href = projectsData[i].page;
        postImage.src = projectsData[i].imagePath;
        postImage.setAttribute('loading', 'lazy');
        postImage.setAttribute('alt', `${projectsData[i].alt}`);
        postTitle.innerHTML = `${projectsData[i].name}`;
        postDescription.innerHTML = `${projectsData[i].description}`;
        newPost.appendChild(postImage);
        postWordContainer.appendChild(postTitle);
        postWordContainer.appendChild(postDescription);
        newPost.appendChild(postWordContainer);
        postLink.appendChild(newPost);
        postContainer.appendChild(postLink);
    };
});