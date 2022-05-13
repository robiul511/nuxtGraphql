export const queryGetCategories = `
  query GetCategories($first: Int = 5, $page: Int = 1) {
    categories(first: $first, page: $page) {
      data {
        id
        name
        image
        level
      }
    }
  }
`

export const queryGetOneCategories = `
  query GetOneCategories($id: ID!) {
    category(id: $id) {
      id
      name
      image
      level
    }
  }
`
