export const queryGetProvincess = `
  query GetProvincess($first: Int = 20, $page: Int, $value: Mixed) {
    provinces(first: $first, page: $page, where: {column: COUNTRY_ID, value: $value}) {
      data {
        id
        name
        country_id
      }
    }
  }
`

export const queryGetOneProvince = `
  query GetOneProvince($id: ID!) {
    province(id: $id) {
      id
      country_id
      name
    }
  }
`
