document.addEventListener("DOMContentLoaded", function () {
    // Event delegation: Listen for click events on a parent element (feed)
    const feed = document.querySelector('.feed');
    feed.addEventListener("click", function (event) {
        const likeButton = event.target.closest(".postLike");
        if (likeButton) {
            const heartPath = likeButton.querySelector(".heartPath");
            likeButton.classList.toggle("liked");
        }
    });
});

// Variables to keep track of the current page and whether there are more posts to load
let page = 1;
let loading = false;

// Function to load more posts
function loadMorePosts() {
    if (loading) return;
    loading = true;

    // Simulate an AJAX request to get more posts
    // Replace this with your actual API call
    setTimeout(function () {
        const newPosts = getMorePostsFromAPI(page);
        if (newPosts.length > 0) {
            const postContainer = document.querySelector('.feed');
            newPosts.forEach((post) => {
                postContainer.appendChild(post);
            });
            page++;
        }
        loading = false;
    }, 1000); // Simulating an API request with a delay
}

// Function to get more posts from your API
function getMorePostsFromAPI(page) {
    // Replace this with your actual API request
    // You can use Fetch or another method to get more posts from the server
    // Return the new posts as an array of HTML elements

    // Here, I'm creating example elements for demonstration
    const newPosts = [];

    for (let i = 1; i <= 5; i++) {
        const post = document.createElement('div');
        post.className = 'feed-item';

        // Create the profile section
        const profileFeed = document.createElement('div');
        profileFeed.className = 'profileFeed';

        // Profile name
        const profileName = document.createElement('div');
        profileName.className = 'profileName';
        profileName.textContent = 'Profile Name';

        // Profile button with a link
        const profileButton = document.createElement('div');
        profileButton.className = 'profileButton';

        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';

        const profileImage = document.createElement('img');
        profileImage.src = 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg';
        profileLink.appendChild(profileImage);
        profileButton.appendChild(profileLink);

        // Append the profile elements to the profile section
        profileFeed.appendChild(profileName);
        profileFeed.appendChild(profileButton);

        // Add the profile section and post image to the post element
        post.appendChild(profileFeed);

        // Post image
        const postImage = document.createElement('img');
        postImage.src = 'https://staticg.sportskeeda.com/editor/2022/10/1ee6d-16658333013660-1920.jpg';
        postImage.alt = "User X's photo";

        // Append the post image to the post element
        post.appendChild(postImage);

        // Like icon
        const likeIcon = document.createElement('div');
        likeIcon.className = 'postLike';
        const heartPath = document.createElement('div');
        heartPath.className = 'heartPath';
        heartPath.innerHTML = `<svg class="heartIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="heartPath" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
        </svg>`;
        likeIcon.setAttribute('role', 'button');
        likeIcon.appendChild(heartPath);

        // Comment icon
        const commentIcon = document.createElement('div');
        commentIcon.className = 'postComment';
        commentIcon.innerHTML = `<svg class="commentIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path class="commentPath" d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"></path>
        </svg>`;

        // Share icon
        const shareIcon = document.createElement('div');
        shareIcon.className = 'postShare';
        shareIcon.innerHTML = `<svg class="shareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <line x1="22" x2="9.218" y1="3" y2="10.083"></line>
            <polygon points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"></polygon>
        </svg>`;

        // Create the post interaction section
        const postInteraction = document.createElement('div');
        postInteraction.className = 'postInteraction';
        const postAck = document.createElement('div');
        postAck.className = 'postAck';
        const postAckIcons = document.createElement('div');
        postAckIcons.className = 'postAckIcons';

        postAckIcons.appendChild(likeIcon);
        postAckIcons.appendChild(commentIcon);
        postAckIcons.appendChild(shareIcon);
        postAck.appendChild(postAckIcons);
        postInteraction.appendChild(postAck);

        // Add the post interaction section to the post element
        post.appendChild(postInteraction);

        // Add the post element to the array
        newPosts.push(post);
    }

    return newPosts;
}

// Event listener to detect when the user has scrolled to the bottom
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMorePosts();
    }
});

// Initial load of posts
loadMorePosts();
