// Select Elements
const blogForm = document.querySelector('#blog-form');
const postsContainer = document.querySelector('#posts-container');

// Load data marka bogga la furo
document.addEventListener("DOMContentLoaded", loadPosts);
blogForm.addEventListener('submit', addPost);

function addPost(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const image = document.querySelector('#post-image').value;
    const content = document.querySelector('#post-content').value;

    const post = {
        id: Date.now(),
        title: title,
        image: image || "https://via.placeholder.com/150", // Sawir default ah haddii la dhaafo
        content: content
    };

    addPostToDOM(post);
    savePostToLocalStorage(post);

    blogForm.reset(); // Wax kasta tirtir markuu form-ka submiito
}

function addPostToDOM(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "blog-post";
    postDiv.dataset.id = post.id;

    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.image}" alt="blog-image">
        <p>${post.content}</p>
        <div class="post-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    postsContainer.prepend(postDiv); // Post-ka ugu dambeeya xaga sare ha yimaado

    // Events-ka badhamada
    postDiv.querySelector(".delete-btn").addEventListener("click", () => deletePost(post.id, postDiv));
    postDiv.querySelector(".edit-btn").addEventListener("click", () => editPost(post.id, postDiv));
}

function savePostToLocalStorage(post) {
    const posts = getPostsFromStorage();
    posts.push(post);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
}

function getPostsFromStorage() {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

function loadPosts() {
    const posts = getPostsFromStorage();
    posts.forEach(post => addPostToDOM(post));
}

function deletePost(id, element) {
    let posts = getPostsFromStorage();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    element.remove();
}

function editPost(id, element) {
    const posts = getPostsFromStorage();
    const post = posts.find(p => p.id === id);

    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);

    if (newTitle && newContent) {
        post.title = newTitle;
        post.content = newContent;
        localStorage.setItem("blogPosts", JSON.stringify(posts));
        
        // Update DOM
        element.querySelector("h3").textContent = newTitle;
        element.querySelector("p").textContent = newContent;
    }
}