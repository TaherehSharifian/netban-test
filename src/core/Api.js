export const fetchData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/72e7e252-2f2b-462c-8e60-30a8a0cac801');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };