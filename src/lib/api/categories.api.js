import api from '.'

export const getCategories = async (withTypes = false) => {
    const resp = await api.get('categories')

    return resp.data.categories
}