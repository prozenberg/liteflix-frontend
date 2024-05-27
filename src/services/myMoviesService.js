const apiUrl = import.meta.env.VITE_API_URL;

const fetchMyMovies = async () => {
  const response = await fetch(`${apiUrl}/movies`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export default fetchMyMovies;
