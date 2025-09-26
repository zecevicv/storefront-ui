import type { Homepage, WebsiteHomepageResponse } from '~/graphql'
import { QueryName } from '~/server/queries'

export const useWebsiteHomePage = () => {
  const { $sdk } = useNuxtApp()
  const websiteHomepage = useState<Homepage>('websiteHomepage', () => ({}) as Homepage)
  const loading = ref(false)

  const getWebsiteHomepage = async () => {
    loading.value = true
    try {
      const { data } = await useAsyncData<any, WebsiteHomepageResponse>(() =>
        $sdk().odoo.query({ queryName: QueryName.GetWebsiteHomepageQuery },
          {},
          { headers: useRequestHeaders() },
        ),
      )

      if (data.value) {
        websiteHomepage.value = data.value?.websiteHomepage as Homepage
      }
    }
    finally {
      loading.value = false
    }
  }

  return {
    websiteHomepage,
    getWebsiteHomepage,
    loading,
  }
}
