const paginate = (followers) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  // array from: where does (_, index) come from..??
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
