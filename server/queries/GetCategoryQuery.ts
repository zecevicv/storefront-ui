export default `
  query ($slug: String, $id: Int) {
    category(slug: $slug, id: $id) {
      id
      name
      slug
      metaTitle
      metaImage
      imageFilename
      metaKeyword
      metaDescription
      jsonLd
      childs {
        id
        name
        slug
        childs {
          id
          name
          slug
        }
      }
      parent {
        id
        name
        slug
        parent {
          id
          name
          slug
          childs {
            id
            name
            slug
            childs {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`
