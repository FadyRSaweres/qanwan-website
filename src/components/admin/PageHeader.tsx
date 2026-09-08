interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
    <div className="admin-page-header">
        <h1 className="admin-page-title">{title}</h1>
        {subtitle && <p className="admin-page-subtitle">{subtitle}</p>}
    </div>
);

export default PageHeader;
