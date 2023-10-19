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
