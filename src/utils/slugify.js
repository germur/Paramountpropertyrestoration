/**
 * Centralized slugify function for consistent URL generation.
 * Ensures that all parts of the application generate URLs in the exact same way.
 * 
 * @param {string} input - The string to slugify
 * @returns {string} - The slugified string
 */
export const slugify = (input) => {
    if (!input) return '';
    return input
        .toString()
        .normalize('NFD')                   // Split accented characters
        .replace(/[\u0300-\u036f]/g, '')    // Remove accent marks
        .toLowerCase()                      // Convert to lowercase
        .trim()                             // Remove whitespace from both ends
        .replace(/[^a-z0-9\s-]/g, '')       // Remove all non-word chars (except spaces and hyphens)
        .replace(/[\s_]+/g, '-')            // Replace spaces and underscores with hyphens
        .replace(/-+/g, '-');               // Replace multiple hyphens with a single hyphen
};
