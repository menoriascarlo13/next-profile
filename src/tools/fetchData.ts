const fetchData = async (url: string) => {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Error fetching data');
  });
};

export default fetchData;
