import api from "."

export const getCollections = async (slug = null) => {
    const resp = await api.get('collections' + (slug ? `/${slug}` : ''))

    return resp.data.collections
}