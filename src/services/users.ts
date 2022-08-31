const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = async () => {
  const allAuthors = await fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      return response.json();
    })
    .catch(error => console.error(`Fetch problem: ${error.message}`))

  return allAuthors
}

export default { getAll }