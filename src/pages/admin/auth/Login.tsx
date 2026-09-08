import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/services/auth";
import { Eye, EyeOff, LogIn, Loader2, AlertCircle, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const loginMut = useLogin();
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState("");

    const toggleLanguage = () => {
        const nextLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(nextLang);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password.trim()) {
            setError(t("contact.errorTitle", "Please fill in all fields"));
            return;
        }

        try {
            const res = await loginMut.mutateAsync({ email, password });
            localStorage.setItem("token", res.token);
            navigate("/admin");
        } catch (err: any) {
            setError(err?.message || t("admin.login_error", "Invalid credentials"));
        }
    };

    return (
        <div className="login-page">
            {/* Language toggle on login page */}
            <button className="login-lang-switch" onClick={toggleLanguage}>
                <Languages size={18} />
                <span>{i18n.language === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* Decorative background */}
            <div className="login-bg-glow login-bg-glow--1" />
            <div className="login-bg-glow login-bg-glow--2" />

            <div className="login-card">
                {/* Header */}
                <div className="login-header">
                    <div className="login-logo">
                        <img src={logo} alt="Logo" className="invert" />
                    </div>
                    <h1 className="login-title">{t("admin.login_title", "Welcome Back")}</h1>
                    <p className="login-subtitle">{t("admin.login_subtitle", "Sign in to the CMS panel")}</p>
                </div>

                {/* Error */}
                {error && (
                    <div className="login-error">
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-field">
                        <label htmlFor="login-email">{t("admin.email_label", "Email")}</label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="admin@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />
                    </div>

                    <div className="login-field">
                        <label htmlFor="login-password">{t("admin.password_label", "Password")}</label>
                        <div className="login-pw-wrap">
                            <input
                                id="login-password"
                                type={showPw ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="login-pw-toggle"
                                onClick={() => setShowPw(!showPw)}
                                tabIndex={-1}
                                aria-label={showPw ? "Hide password" : "Show password"}
                            >
                                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="login-submit"
                        disabled={loginMut.isPending}
                    >
                        {loginMut.isPending ? (
                            <Loader2 size={18} className="spin" />
                        ) : (
                            <LogIn size={18} />
                        )}
                        <span>{loginMut.isPending ? t("admin.signing_in", "Signing in…") : t("admin.sign_in", "Sign In")}</span>
                    </button>
                </form>

                <p className="login-footer">
                    {t("admin.protected_area", "Protected area · Admin access only")}
                </p>
            </div>
        </div>
    );
};

export default Login;

