const commentHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');
  const comment = document.querySelector('.comment-input').value.trim();

  if (comment && id) {
    const response = await fetch(`/api/posts/comment/${id}`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json()
    console.log(result)

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentHandler);
