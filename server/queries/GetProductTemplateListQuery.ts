import productFragment from '../fragments/productFragment'

export default `
query(
  $filter: ProductFilterInput
  $currentPage: Int
  $pageSize: Int = 0
  $search: String
  $sort: ProductSortInput
) {
  products(
    filter: $filter
    currentPage: $currentPage
    pageSize: $pageSize
    search: $search
    sort: $sort
  ) {
    totalCount
    filterCounts
    attributeValues {
      id
      name
      displayType
      name
      htmlColor
      search
      attribute{
        id
        name
      }
      
    }
    products {
      ${productFragment}
    }
  }
}
`
