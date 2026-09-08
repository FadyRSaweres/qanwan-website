
const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

interface FetchOptions extends RequestInit {
    body?: any;
    showLoading?: boolean;
    loadingMessage?: string;
    showError?: boolean;
    requiredToken?: boolean;
    responseType?: 'json' | 'blob';
}



export const getCurrentLanguage = () => {
    return localStorage.getItem('i18nextLng') || 'en';
};

export async function apiFetch<T>(
    url: string,
    options: FetchOptions = {}
): Promise<any> {
    const {
        body,
        headers,
        requiredToken,
        showLoading = true,
        loadingMessage = 'جاري التحميل...',
        showError = true,
        ...rest
    } = options;

    try {
        const isFormData = body instanceof FormData;
        const res = await fetch(`${API_BASE_URL}${url}`, {
            ...rest,
            headers: {
                ...(requiredToken && {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    'Accept-Language': getCurrentLanguage(),
                }),
                ...(!isFormData && {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    'Accept-Language': getCurrentLanguage(),
                }),
                ...headers,
                'Accept-Language': getCurrentLanguage(), // allow custom headers if needed
            },
            body: isFormData ? body : body ? JSON.stringify(body) : undefined,
            cache: "no-store",
        });


        if (!res.ok) {
            let errorData;
            try {
                errorData = await res.clone().json();
            } catch {
                errorData = {
                    message: "Forbidden or CORS error",
                    status: res.status,
                };
            }

            throw errorData;
        }

        if (options.responseType === 'blob') {
            const blob = await res.blob();
            return { success: true, payload: blob as any };
        }

        const data = await res.json();
        return data as any;

    } catch (error: any) {
        if (showError) {
            const errorMessage = error?.message || error?.error || "An error occurred";
        }

        throw error;
    }
}