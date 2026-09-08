import { ReactNode } from "react";

interface SubCardProps {
    title: string;
    children: ReactNode;
}

const SubCard = ({ title, children }: SubCardProps) => (
    <div className="admin-sub-card">
        <h4 className="admin-sub-card-title">{title}</h4>
        <div className="admin-form-grid">
            {children}
        </div>
    </div>
);

export default SubCard;
