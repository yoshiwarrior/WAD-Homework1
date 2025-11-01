fetch("https://raw.githubusercontent.com/yoshiwarrior/WAD-Homework1/refs/heads/main/posts.json").then(async (res) => {
    const json = await res.json();
    console.log(json);
    json.sort(
        (a, b) => new Date(a.createdAt).getTime - new Date(b.createdAt).getTime
    ).forEach((postJson) => {
        createPost(postJson);
    });
});

const createPost = ({ authorName, content, imageUrl, createdAt }) => {
    const feed = document.getElementsByTagName("main")[0];

    const container = document.createElement("div");
    container.className = "post";

    const avatarContainer = document.createElement("div");
    const avatarImage = document.createElement("img");
    avatarImage.src = "assets/img/user-avatar.png";
    avatarImage.width = 32;
    avatarImage.height = 32;

    const postAuthorSpan = document.createElement("span");
    postAuthorSpan.innerText = authorName;

    const postedDateSpan = document.createElement("span");
    const createdAtString = new Date(createdAt).toLocaleDateString();
    postedDateSpan.innerText = createdAtString;

    const postContentImage = document.createElement("img");
    if (imageUrl) {
        postContentImage.src = imageUrl;
    }

    const postContentParagraph = document.createElement("p");
    postContentParagraph.innerText = content;

    const likeImage = document.createElement("img");
    likeImage.src = "assets/img/facebook-like.png";
    likeImage.width = 32;
    likeImage.height = 32;

    container.appendChild(avatarContainer);
    avatarContainer.appendChild(avatarImage);
    avatarContainer.appendChild(postAuthorSpan);
    avatarContainer.appendChild(postedDateSpan);
    if (imageUrl) {
        container.appendChild(postContentImage);
    }
    container.appendChild(postContentParagraph);
    container.appendChild(likeImage);

    // add post to feed
    feed.appendChild(container);
};