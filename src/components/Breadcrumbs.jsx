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
                    return (
                        <li key={index}>
                            {!isLast ? (
                                <a href={crumb.href}>{crumb.label}</a>
                            ) : (
                                <span aria-current="page">{crumb.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}