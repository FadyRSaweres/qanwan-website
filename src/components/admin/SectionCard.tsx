import { ReactNode } from "react";

interface SectionCardProps {
    title: string;
    badge?: string;
    children: ReactNode;
}

const SectionCard = ({ title, badge, children }: SectionCardProps) => (
    <div className="admin-section-card">
        <div className="admin-section-card-header">
            <h3 className="admin-section-card-title">
                {title}
                {badge && <span className="admin-section-badge">{badge}</span>}
            </h3>
        </div>
        {children}
    </div>
);

export default SectionCard;
