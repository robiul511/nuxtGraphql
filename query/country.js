export const queryGetCountries = `
  query GetCountries($first: Int = 5, $page: Int) {
    countries(first: $first, page: $page) {
      data {
        id
        name
      }
    }
  }
`

export const queryGetOneCountry = `
  query GetOneCountry($id: ID!) {
    country(id: $id) {
      id
      name
    }
  }
`
