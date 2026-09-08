import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "@/components/admin/PageHeader";
import SectionCard from "@/components/admin/SectionCard";
import FormField from "@/components/admin/FormField";
import SubCard from "@/components/admin/SubCard";
import SaveButton from "@/components/admin/SaveButton";
import LoadingSkeleton from "@/components/admin/LoadingSkeleton";
import {
    useGetServicesSection1,
    useGetServicesSection2,
    useGetServicesSection3,
    useGetServicesSection4,
    useUpdateServicesSection1,
    useUpdateServicesSection2,
    useUpdateServicesSection3,
    useUpdateServicesSection4,
} from "@/services/servicesPage";
import type {
    IServicesSection1,
    IServicesSection2,
    IServicesSection3,
    IServicesSection4,
    IServiceCard,
} from "@/entity/services";

type Status = { type: "success" | "error"; message: string } | null;

const emptyCard: IServiceCard = {
    title: "", titleEn: "", description: "", descriptionEn: "",
    list1: "", list1En: "", list2: "", list2En: "", list3: "", list3En: "",
};

const defaultS1: IServicesSection1 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
};

const defaultS2: IServicesSection2 = {
    card1: { ...emptyCard }, card2: { ...emptyCard }, card3: { ...emptyCard }, card4: { ...emptyCard },
};

const defaultS3: IServicesSection3 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    list1Title: "", list1TitleEn: "", list1Description: "", list1DescriptionEn: "",
    list2Title: "", list2TitleEn: "", list2Description: "", list2DescriptionEn: "",
    list3Title: "", list3TitleEn: "", list3Description: "", list3DescriptionEn: "",
    list4Title: "", list4TitleEn: "", list4Description: "", list4DescriptionEn: "",
};

const defaultS4: IServicesSection4 = {
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
};

const ServicesAdmin = () => {
    const { t } = useTranslation();
    const q1 = useGetServicesSection1();
    const q2 = useGetServicesSection2();
    const q3 = useGetServicesSection3();
    const q4 = useGetServicesSection4();

    const mut1 = useUpdateServicesSection1();
    const mut2 = useUpdateServicesSection2();
    const mut3 = useUpdateServicesSection3();
    const mut4 = useUpdateServicesSection4();

    const [s1, setS1] = useState<IServicesSection1>(defaultS1);
    const [s2, setS2] = useState<IServicesSection2>(defaultS2);
    const [s3, setS3] = useState<IServicesSection3>(defaultS3);
    const [s4, setS4] = useState<IServicesSection4>(defaultS4);

    const [status, setStatus] = useState<Record<string, Status>>({});

    useEffect(() => { if (q1.data) setS1(q1.data); }, [q1.data]);
    useEffect(() => { if (q2.data) setS2(q2.data); }, [q2.data]);
    useEffect(() => { if (q3.data) setS3(q3.data); }, [q3.data]);
    useEffect(() => { if (q4.data) setS4(q4.data); }, [q4.data]);

    const flash = (key: string, s: Status) => {
        setStatus((p) => ({ ...p, [key]: s }));
        setTimeout(() => setStatus((p) => ({ ...p, [key]: null })), 3000);
    };
    const save = async (key: string, fn: () => Promise<any>) => {
        try { await fn(); flash(key, { type: "success", message: t("admin.success", "Saved!") }); }
        catch { flash(key, { type: "error", message: t("admin.error", "Save failed") }); }
    };

    const loading = q1.isLoading || q2.isLoading || q3.isLoading || q4.isLoading;
    if (loading) return <><PageHeader title={t("admin.services", "Services")} subtitle={t("admin.loading", "Loading…")} /><LoadingSkeleton count={4} /></>;

    const upS1 = (k: keyof IServicesSection1) => (v: string) => setS1((p) => ({ ...p, [k]: v }));
    const upS2Card = (card: "card1" | "card2" | "card3" | "card4", k: keyof IServiceCard) => (v: string) =>
        setS2((p) => ({ ...p, [card]: { ...p[card], [k]: v } }));
    const upS3 = (k: keyof IServicesSection3) => (v: string) => setS3((p) => ({ ...p, [k]: v }));
    const upS4 = (k: keyof IServicesSection4) => (v: string) => setS4((p) => ({ ...p, [k]: v }));

    return (
        <>
            <PageHeader title="Services Page" subtitle="Edit service hero, cards, process steps, and CTA" />

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

            {/* Section 2 — Service Cards */}
            <SectionCard title="Section 2 — Service Cards" badge="Cards">
                {(["card1", "card2", "card3", "card4"] as const).map((c, i) => (
                    <SubCard key={c} title={`Service ${i + 1}`}>
                        <FormField label="Title (AR)" value={s2[c].title} onChange={upS2Card(c, "title")} />
                        <FormField label="Title (EN)" value={s2[c].titleEn} onChange={upS2Card(c, "titleEn")} />
                        <FormField label="Desc (AR)" value={s2[c].description} onChange={upS2Card(c, "description")} type="textarea" />
                        <FormField label="Desc (EN)" value={s2[c].descriptionEn} onChange={upS2Card(c, "descriptionEn")} type="textarea" />
                        <FormField label="Detail 1 (AR)" value={s2[c].list1} onChange={upS2Card(c, "list1")} />
                        <FormField label="Detail 1 (EN)" value={s2[c].list1En} onChange={upS2Card(c, "list1En")} />
                        <FormField label="Detail 2 (AR)" value={s2[c].list2} onChange={upS2Card(c, "list2")} />
                        <FormField label="Detail 2 (EN)" value={s2[c].list2En} onChange={upS2Card(c, "list2En")} />
                        <FormField label="Detail 3 (AR)" value={s2[c].list3} onChange={upS2Card(c, "list3")} />
                        <FormField label="Detail 3 (EN)" value={s2[c].list3En} onChange={upS2Card(c, "list3En")} />
                    </SubCard>
                ))}
                <SaveButton onClick={() => save("s2", () => mut2.mutateAsync(s2))} loading={mut2.isPending} status={status.s2} />
            </SectionCard>

            {/* Section 3 — Process Steps */}
            <SectionCard title="Section 3 — Process Steps" badge="Steps">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s3.sectionBadgeName} onChange={upS3("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s3.sectionBadgeNameEn} onChange={upS3("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s3.sectionTitle} onChange={upS3("sectionTitle")} />
                    <FormField label="Title (EN)" value={s3.sectionTitleEn} onChange={upS3("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s3.sectionDescription} onChange={upS3("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s3.sectionDescriptionEn} onChange={upS3("sectionDescriptionEn")} type="textarea" />
                </div>
                {([1, 2, 3, 4] as const).map((n) => (
                    <SubCard key={n} title={`Step ${n}`}>
                        <FormField label="Title (AR)" value={(s3 as any)[`list${n}Title`]} onChange={upS3(`list${n}Title` as any)} />
                        <FormField label="Title (EN)" value={(s3 as any)[`list${n}TitleEn`]} onChange={upS3(`list${n}TitleEn` as any)} />
                        <FormField label="Desc (AR)" value={(s3 as any)[`list${n}Description`]} onChange={upS3(`list${n}Description` as any)} type="textarea" />
                        <FormField label="Desc (EN)" value={(s3 as any)[`list${n}DescriptionEn`]} onChange={upS3(`list${n}DescriptionEn` as any)} type="textarea" />
                    </SubCard>
                ))}
                <SaveButton onClick={() => save("s3", () => mut3.mutateAsync(s3))} loading={mut3.isPending} status={status.s3} />
            </SectionCard>

            {/* Section 4 — CTA */}
            <SectionCard title="Section 4 — CTA" badge="CTA">
                <div className="admin-form-grid">
                    <FormField label="Title (AR)" value={s4.sectionTitle} onChange={upS4("sectionTitle")} />
                    <FormField label="Title (EN)" value={s4.sectionTitleEn} onChange={upS4("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s4.sectionDescription} onChange={upS4("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s4.sectionDescriptionEn} onChange={upS4("sectionDescriptionEn")} type="textarea" />
                </div>
                <SaveButton onClick={() => save("s4", () => mut4.mutateAsync(s4))} loading={mut4.isPending} status={status.s4} />
            </SectionCard>
        </>
    );
};

export default ServicesAdmin;
