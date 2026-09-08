import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "@/components/admin/PageHeader";
import SectionCard from "@/components/admin/SectionCard";
import FormField from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import LoadingSkeleton from "@/components/admin/LoadingSkeleton";
import {
    useGetContactSection1,
    useGetContactSection2,
    useUpdateContactSection1,
    useUpdateContactSection2,
} from "@/services/contactUs";
import type {
    IContactUsSection1,
    IContactUsSection2,
} from "@/entity/contactUs";

type Status = { type: "success" | "error"; message: string } | null;

const defaultS1: IContactUsSection1 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
};

const defaultS2: IContactUsSection2 = {
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    email: "", phoneNumber: "",
    address: "", addressEn: "",
    facebookLink: "", instagramLink: "", twitterLink: "",
    linkedinLink: "", githubLink: "", whatsappLink: "",
};

const ContactAdmin = () => {
    const { t } = useTranslation();
    const q1 = useGetContactSection1();
    const q2 = useGetContactSection2();

    const mut1 = useUpdateContactSection1();
    const mut2 = useUpdateContactSection2();

    const [s1, setS1] = useState<IContactUsSection1>(defaultS1);
    const [s2, setS2] = useState<IContactUsSection2>(defaultS2);

    const [status, setStatus] = useState<Record<string, Status>>({});

    useEffect(() => { if (q1.data) setS1(q1.data); }, [q1.data]);
    useEffect(() => { if (q2.data) setS2(q2.data); }, [q2.data]);

    const flash = (key: string, s: Status) => {
        setStatus((p) => ({ ...p, [key]: s }));
        setTimeout(() => setStatus((p) => ({ ...p, [key]: null })), 3000);
    };
    const save = async (key: string, fn: () => Promise<any>) => {
        try { await fn(); flash(key, { type: "success", message: t("admin.success", "Saved!") }); }
        catch { flash(key, { type: "error", message: t("admin.error", "Save failed") }); }
    };

    const loading = q1.isLoading || q2.isLoading;
    if (loading) return <><PageHeader title={t("admin.contact", "Contact Us")} subtitle={t("admin.loading", "Loading…")} /><LoadingSkeleton count={2} /></>;

    const upS1 = (k: keyof IContactUsSection1) => (v: string) => setS1((p) => ({ ...p, [k]: v }));
    const upS2 = (k: keyof IContactUsSection2) => (v: string) => setS2((p) => ({ ...p, [k]: v }));

    return (
        <>
            <PageHeader title="Contact Us Page" subtitle="Edit hero text, contact details, and social links" />

            {/* Section 1 — Hero */}
            <SectionCard title="Section 1 — Hero" badge="Hero">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s1.sectionBadgeName} onChange={upS1("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s1.sectionBadgeNameEn} onChange={upS1("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s1.sectionTitle} onChange={upS1("sectionTitle")} />
                    <FormField label="Title (EN)" value={s1.sectionTitleEn} onChange={upS1("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s1.sectionDescription} onChange={upS1("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s1.sectionDescriptionEn} onChange={upS1("sectionDescriptionEn")} type="textarea" />
                </div>
                <SaveButton onClick={() => save("s1", () => mut1.mutateAsync(s1))} loading={mut1.isPending} status={status.s1} />
            </SectionCard>

            {/* Section 2 — Contact Info & Social */}
            <SectionCard title="Section 2 — Contact Info" badge="Details">
                <div className="admin-form-grid">
                    <FormField label="Title (AR)" value={s2.sectionTitle} onChange={upS2("sectionTitle")} />
                    <FormField label="Title (EN)" value={s2.sectionTitleEn} onChange={upS2("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s2.sectionDescription} onChange={upS2("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s2.sectionDescriptionEn} onChange={upS2("sectionDescriptionEn")} type="textarea" />
                </div>

                <div className="admin-form-grid" style={{ marginTop: 16 }}>
                    <FormField label="Email" value={s2.email} onChange={upS2("email")} type="email" />
                    <FormField label="Phone Number" value={s2.phoneNumber} onChange={upS2("phoneNumber")} type="tel" />
                    <FormField label="Address (AR)" value={s2.address} onChange={upS2("address")} />
                    <FormField label="Address (EN)" value={s2.addressEn} onChange={upS2("addressEn")} />
                </div>

                <div className="admin-form-grid cols-3" style={{ marginTop: 16 }}>
                    <FormField label="Facebook" value={s2.facebookLink} onChange={upS2("facebookLink")} type="url" />
                    <FormField label="Instagram" value={s2.instagramLink} onChange={upS2("instagramLink")} type="url" />
                    <FormField label="Twitter / X" value={s2.twitterLink} onChange={upS2("twitterLink")} type="url" />
                    <FormField label="LinkedIn" value={s2.linkedinLink} onChange={upS2("linkedinLink")} type="url" />
                    <FormField label="GitHub" value={s2.githubLink} onChange={upS2("githubLink")} type="url" />
                    <FormField label="WhatsApp" value={s2.whatsappLink} onChange={upS2("whatsappLink")} type="url" />
                </div>
                <SaveButton onClick={() => save("s2", () => mut2.mutateAsync(s2))} loading={mut2.isPending} status={status.s2} />
            </SectionCard>
        </>
    );
};

export default ContactAdmin;
