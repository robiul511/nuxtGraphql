
export const starlink = `
  query XXXXX($limit: Int = 5) {
    launches(limit: $limit) {
      id
      is_tentative
    }
  }
`;

const array = ['created_at', 'id', 'name', 'url']

export const getAsiamartPlatform = `
  query GetPlatform ($url: String ) {
    asiamartPlatform(url: $url) {
      created_at
      id
      name
      updated_at
      url
    }
  }
`  // sukses

export const getAsiamartPlatformProducts = `
  query GetAsiamartPlatformProducts ($platform_id: Int!, $first: Int = 20, $page: Int) {
    asiamartPlatformProducts(platform_id: $platform_id, first: $first, page: $page) {
      data {
        id
        name
      }
      paginatorInfo {
        total
      }
    }
  }
` // sukses

export const getAsiamartPlatformOneProduct = `
  query GetAsiamartPlatformOneProduct ($id: ID!, $platform_id: Int!) {
    asiamartPlatformProduct(id: $id, platform_id: $platform_id) {
      id
      name
    }
  }
` // sukses

export const queryAsiamartPlatformProductOptions = `
  query AsiamartPlatformProductOptions($first: Int = 20, $page: Int, $product_id: Int!) {
    asiamartPlatformProductOptions(product_id: $product_id, first: $first, page: $page) {
      data {
        id
        name
        product_id
        values {
          id
          image
          name
          product_option_id
        }
      }
      paginatorInfo {
        count
        currentPage
        total
      }
    }
  }
`

export const queryAsiamartPlatformProductVariations = `
  query AsiamartPlatformProductVariations($first: Int = 20, $page: Int, $product_id: Int!) {
    asiamartPlatformProductVariations(product_id: $product_id, first: $first, page: $page) {
      data {
        id
        attributes
        image_url
        price
      }
      paginatorInfo {
        count
        currentPage
        total
      }
    }
  }
`

export const queryAsiamartPlatformProductVariation = `
  query AsiamartPlatformProductVariation($id: ID!) {
    asiamartPlatformProductVariation(id: $id) {
      attributes
      id
      image_url
      price
      product_id
      quantity
      sku
    }
  }

`

// query function 
export const createQueryAsiamartPlatform = (parameter, response) => {
  const __stringParameterTemp = JSON.stringify(parameter)
  const __stringParameterFinal = __stringParameterTemp.slice(1, __stringParameterTemp.length - 1)
  const __joinResponse = response.join('\n')

  console.log(__stringParameterFinal)
  console.log(__joinResponse)

  const finalQuery = `
    query GetPlatform {
      asiamartPlatform(${__stringParameterFinal}) {
        ${__joinResponse}
      }
    }
  ` 

  console.log(finalQuery, 'ini ======')
  return finalQuery
}