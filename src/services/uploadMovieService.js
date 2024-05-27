const apiUrl = import.meta.env.VITE_API_URL;

const uploadMovie = async (file, title) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title);

  const response = await fetch(`${apiUrl}/movies`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload movie');
  }

  return response.json();
};

export default uploadMovie;
