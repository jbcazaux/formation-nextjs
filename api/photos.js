const photos = {
  fetch: async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    return await res.json()
  },
  fetchById: async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return await res.json()
  }
}

export default photos
