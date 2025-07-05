import React from 'react';

export default function Breadcrumbs({ crumbs }) {
    // No renderizar nada si no hay migas de pan o solo está "Home"
    if (!crumbs || crumbs.length <= 1) {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol>
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    const displayLabel = crumb.label.toLowerCase() === 'blog' 
                        ? 'Resources' 
                        : crumb.label;
                    return (
                        <li key={index}>
                            {!isLast ? (
                                <a href={crumb.href}>{displayLabel}</a>
                            ) : (
                                <span aria-current="page">{displayLabel}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}