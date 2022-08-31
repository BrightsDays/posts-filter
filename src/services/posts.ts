const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

const getAll = async () => {
  const allPosts = await fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      return response.json();
    })
    .catch(error => console.error(`Fetch problem: ${error.message}`))

  return allPosts
}

export default { getAll }