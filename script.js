document.querySelector('.comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = event.target[0].value;
    if (comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<p><strong>User:</strong> ${comment}</p>`;
        document.querySelector('.comments').appendChild(commentDiv);
        event.target[0].value = '';

        // Display alert after posting the comment
        alert("Your comment has been posted!");
    }
});
