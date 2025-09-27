import React from 'react';

export default function Breadcrumbs({ crumbs }) {
    // No renderizar nada si no hay migas de pan o solo está "Home"
    if (!crumbs || crumbs.length <= 1) {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb-list">
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    const displayLabel = crumb.label.toLowerCase() === 'blog' 
                        ? 'Resources' 
                        : crumb.label;
                    
                    return (
                        <li key={index} className="breadcrumb-item">
                            {!isLast ? (
                                <a href={crumb.href} className="breadcrumb-link">
                                    {displayLabel}
                                </a>
                            ) : (
                                <span aria-current="page" className="breadcrumb-current">
                                    {displayLabel}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

// Versión como string template para usar en Astro
export function BreadcrumbsString({ crumbs }) {
    if (!crumbs || crumbs.length <= 1) {
        return '';
    }

    const breadcrumbItems = crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        const displayLabel = crumb.label.toLowerCase() === 'blog' 
            ? 'Resources' 
            : crumb.label;
        
        return `
            <li class="breadcrumb-item">
                ${!isLast 
                    ? `<a href="${crumb.href}" class="breadcrumb-link">${displayLabel}</a>`
                    : `<span aria-current="page" class="breadcrumb-current">${displayLabel}</span>`
                }
            </li>
        `;
    }).join('');

    return `
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb-list">
                ${breadcrumbItems}
            </ol>
        </nav>
    `;
}