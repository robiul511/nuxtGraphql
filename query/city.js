export const queryGetCities = `
  query GetCities($first: Int = 20, $page: Int, $value: Mixed) {
    cities(first: $first, page: $page, where: {column: PROVINCE_ID, value: $value}) {
      data {
        id
        name
        province_id
        country_id
      }
      paginatorInfo {
        count
        currentPage
        total
      }
    }
  }

`

export const queryGetOneCity = `
  query GetOneCity($id: ID!) {
    city(id: $id) {
      country_id
      id
      name
      province_id
    }
  }
`
