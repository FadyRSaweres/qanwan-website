const LoadingSkeleton = ({ count = 3 }: { count?: number }) => (
    <>
        {Array.from({ length: count }).map((_, i) => (
            <div className="admin-section-card" key={i}>
                <div className="admin-form-grid">
                    <div className="admin-skeleton" />
                    <div className="admin-skeleton" />
                    <div className="admin-skeleton" style={{ height: 80, gridColumn: "1/-1" }} />
                </div>
            </div>
        ))}
    </>
);

export default LoadingSkeleton;
