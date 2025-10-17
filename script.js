document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".post-actions");
  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    });
  });

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add New Post";
  addBtn.style.display = "block";
  addBtn.style.margin = "10px auto";
  document.body.prepend(addBtn);

  addBtn.addEventListener("click", () => {
    const feed = document.querySelector(".feed");
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
      <div class="post-header">
        <img src="https://via.placeholder.com/40" class="profile">
        <span class="username">new_user</span>
      </div>
      <img src="https://via.placeholder.com/400x300?text=New+Post" class="post-img">
      <div class="post-actions">❤️ 💬 📤</div>
      <p><strong>new_user</strong> new vibes 😎</p>
    `;
    feed.prepend(newPost);
  });
});
