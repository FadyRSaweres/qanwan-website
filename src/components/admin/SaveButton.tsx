import { Save, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SaveButtonProps {
    onClick: () => void;
    loading?: boolean;
    status?: { type: "success" | "error"; message: string } | null;
}

const SaveButton = ({ onClick, loading, status }: SaveButtonProps) => {
    const { t } = useTranslation();

    return (
        <div className="admin-save-row">
            {status && (
                <span className={`admin-status ${status.type}`}>
                    {status.message}
                </span>
            )}
            <button className="admin-save-btn" onClick={onClick} disabled={loading}>
                {loading ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
                {loading ? t("admin.saving", "Saving...") : t("admin.save", "Save Changes")}
            </button>
        </div>
    );
};

export default SaveButton;

