// apiService.js
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const fetchData = async (url) => {
  try {
    const response = await fetch(proxyUrl + url, {
      headers: {
        'Origin': 'https://myleague.surge.sh',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};
