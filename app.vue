<script setup>
  import {onMounted, reactive} from 'vue'
  import axios from 'axios'
  import {createQueryAsiamartPlatform, queryAsiamartPlatformProductVariation, queryAsiamartPlatformProductVariations, queryAsiamartPlatformProductOptions, getAsiamartPlatform, getAsiamartPlatformProducts, getAsiamartPlatformOneProduct} from "./query/templateQuery"
  import {queryGetCategories, queryGetOneCategories} from "./query/category"
  import {queryGetCountries, queryGetOneCountry} from "./query/country"
  import {queryGetProvincess, queryGetOneProvince} from "./query/province"
  import {queryGetCities, queryGetOneCity} from "./query/city"

  const state = reactive({
    data: []
  })

  

  // ========= platform ========= 
  async function getPlatform() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: getAsiamartPlatform,
        variables: {
          "url": '%mobile1%'
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    // console.log(getAsiamartPlatform)
    console.log(response)
    state.data = response
  }

  async function getPlatformFunctionQuery() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: createQueryAsiamartPlatform({url: '%mobile1%'}, ['id', 'name', 'url']),
        // variables: {
        //   "url": '%mobile1%'
        // }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    // console.log(getAsiamartPlatform)
    console.log(response)
    state.data = response
  }

  // ========= product ========= 
  async function getPlatformProducts() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: getAsiamartPlatformProducts,
        variables: {
          platform_id: 664,
          first: 5,
          page: 1
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response

  }
  async function getPlatformOneProducts() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: getAsiamartPlatformOneProduct,
        variables: {
          id: 12878,
          platform_id: 664,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchAsiamartPlatformProductOptions() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryAsiamartPlatformProductOptions,
        variables: {
          product_id: 12887,
          first: 5,
          page: 1
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchAsiamartPlatformProductVariations() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryAsiamartPlatformProductVariations,
        variables: {
          product_id: 12887,
          first: 5,
          page: 1
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchAsiamartPlatformProductVariation() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryAsiamartPlatformProductVariation,
        variables: {
          id: 265351
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }

  // ========= category ========= 
  async function fetchCategory() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetCategories,
        variables: {
          first: 3,
          page: 1,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchOneCategory() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetOneCategories,
        variables: {
          id: 39,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }

  // ========= country ========= 
  async function fetchCountries() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetCountries,
        variables: {
          first: 3,
          page: 1,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchOneCountry() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetOneCountry,
        variables: {
          id: 99,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }

  // ========= province ========= 
  async function fetchProvinces() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetProvincess,
        variables: {
          first: 3,
          page: 1,
          value: 99
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchOneProvince() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetOneProvince,
        variables: {
          id: 58,
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }

  // ========= city ========= 
  async function fetchCities() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetCities,
        variables: {
          first: 3,
          page: 1,
          value: 58 // province id
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }
  async function fetchOneCity() {
    const response = await axios.post(
      'https://api2.asiacommerce.net/graphql', {
        query: queryGetOneCity,
        variables: {
          id: 2250, // city id
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    console.log(response)
    state.data = response
  }

  onMounted(() => {
    getPlatformFunctionQuery()
    // createQueryAsiamartPlatform({url: 'mobile1'}, ['id', 'name'])
  })
</script>

<template>
  <div>
    {{ state.data }}
  </div>
</template>
