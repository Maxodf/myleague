const proxyUrl = 'https://api.allorigins.win/get?url=';

export const fetchData = async (url) => {
  try {
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`${proxyUrl}${encodedUrl}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    if (response.ok) {
      const result = await response.json();
      // AllOrigins wraps the response data in a "contents" field
      return JSON.parse(result.contents);
    } else {
      throw new Error('Impossible de charger les données :', error);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};
