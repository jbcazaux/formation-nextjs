const posts = {
  fetch: async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    return await res.json()
  },
  fetchById: async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
  }
}

export default posts
