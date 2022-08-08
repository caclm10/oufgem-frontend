export const toSlug = text => text.toString().toLowerCase()
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/\s+/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/[^\w\-]+/g, '');