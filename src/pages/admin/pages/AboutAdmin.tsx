import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "@/components/admin/PageHeader";
import SectionCard from "@/components/admin/SectionCard";
import FormField from "@/components/admin/FormField";
import SubCard from "@/components/admin/SubCard";
import SaveButton from "@/components/admin/SaveButton";
import LoadingSkeleton from "@/components/admin/LoadingSkeleton";
import {
    useGetAboutSection1,
    useGetAboutSection2,
    useGetAboutSection3,
    useGetAboutCeoMsg,
    useUpdateAboutSection1,
    useUpdateAboutSection2,
    useUpdateAboutSection3,
    useUpdateAboutCeoMsg,
} from "@/services/aboutUs";
import type {
    IAboutUsSection1,
    IAboutUsSection2,
    IAboutUsSection3,
    IAboutUsCeoMsg,
} from "@/entity/aboutUs";

type Status = { type: "success" | "error"; message: string } | null;

const defaultS1: IAboutUsSection1 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
};

const defaultS2: IAboutUsSection2 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    card1Title: "", card1TitleEn: "", card1Description: "", card1DescriptionEn: "",
    card2Title: "", card2TitleEn: "", card2Description: "", card2DescriptionEn: "",
    card3Title: "", card3TitleEn: "", card3Description: "", card3DescriptionEn: "",
    card4Title: "", card4TitleEn: "", card4Description: "", card4DescriptionEn: "",
};

const defaultS3: IAboutUsSection3 = {
    id: 0,
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    count1Title: "", count1TitleEn: "", count1Number: "",
    count2Title: "", count2TitleEn: "", count2Number: "",
    count3Title: "", count3TitleEn: "", count3Number: "",
    count4Title: "", count4TitleEn: "", count4Number: "",
};

const defaultCeo: IAboutUsCeoMsg = {
    id: 0,
    senderName: "", senderNameEn: "",
    senderTitle: "", senderTitleEn: "",
    message: "", messageEn: "",
    signature: "", signatureEn: "",
};

const AboutAdmin = () => {
    const { t } = useTranslation();
    const q1 = useGetAboutSection1();
    const q2 = useGetAboutSection2();
    const q3 = useGetAboutSection3();
    const qCeo = useGetAboutCeoMsg();

    const mut1 = useUpdateAboutSection1();
    const mut2 = useUpdateAboutSection2();
    const mut3 = useUpdateAboutSection3();
    const mutCeo = useUpdateAboutCeoMsg();

    const [s1, setS1] = useState<IAboutUsSection1>(defaultS1);
    const [s2, setS2] = useState<IAboutUsSection2>(defaultS2);
    const [s3, setS3] = useState<IAboutUsSection3>(defaultS3);
    const [ceo, setCeo] = useState<IAboutUsCeoMsg>(defaultCeo);

    const [status, setStatus] = useState<Record<string, Status>>({});

    useEffect(() => { if (q1.data) setS1(q1.data); }, [q1.data]);
    useEffect(() => { if (q2.data) setS2(q2.data); }, [q2.data]);
    useEffect(() => { if (q3.data) setS3(q3.data); }, [q3.data]);
    useEffect(() => { if (qCeo.data) setCeo(qCeo.data); }, [qCeo.data]);

    const flash = (key: string, s: Status) => {
        setStatus((p) => ({ ...p, [key]: s }));
        setTimeout(() => setStatus((p) => ({ ...p, [key]: null })), 3000);
    };
    const save = async (key: string, fn: () => Promise<any>) => {
        try { await fn(); flash(key, { type: "success", message: t("admin.success", "Saved!") }); }
        catch { flash(key, { type: "error", message: t("admin.error", "Save failed") }); }
    };

    const loading = q1.isLoading || q2.isLoading || q3.isLoading || qCeo.isLoading;
    if (loading) return <><PageHeader title={t("admin.about", "About Us")} subtitle={t("admin.loading", "Loading…")} /><LoadingSkeleton count={4} /></>;

    const upS1 = (k: keyof IAboutUsSection1) => (v: string) => setS1((p) => ({ ...p, [k]: v }));
    const upS2 = (k: keyof IAboutUsSection2) => (v: string) => setS2((p) => ({ ...p, [k]: v }));
    const upS3 = (k: keyof IAboutUsSection3) => (v: string) => setS3((p) => ({ ...p, [k]: v } as any));
    const upCeo = (k: keyof IAboutUsCeoMsg) => (v: string) => setCeo((p) => ({ ...p, [k]: v }));

    return (
        <>
            <PageHeader title="About Us Page" subtitle="Edit hero, values, counters, and CEO message" />

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

            {/* Section 2 — Values Cards */}
            <SectionCard title="Section 2 — Values" badge="Cards">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s2.sectionBadgeName} onChange={upS2("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s2.sectionBadgeNameEn} onChange={upS2("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s2.sectionTitle} onChange={upS2("sectionTitle")} />
                    <FormField label="Title (EN)" value={s2.sectionTitleEn} onChange={upS2("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s2.sectionDescription} onChange={upS2("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s2.sectionDescriptionEn} onChange={upS2("sectionDescriptionEn")} type="textarea" />
                </div>
                {([1, 2, 3, 4] as const).map((n) => (
                    <SubCard key={n} title={`Card ${n}`}>
                        <FormField label="Title (AR)" value={(s2 as any)[`card${n}Title`]} onChange={upS2(`card${n}Title` as any)} />
                        <FormField label="Title (EN)" value={(s2 as any)[`card${n}TitleEn`]} onChange={upS2(`card${n}TitleEn` as any)} />
                        <FormField label="Desc (AR)" value={(s2 as any)[`card${n}Description`]} onChange={upS2(`card${n}Description` as any)} type="textarea" />
                        <FormField label="Desc (EN)" value={(s2 as any)[`card${n}DescriptionEn`]} onChange={upS2(`card${n}DescriptionEn` as any)} type="textarea" />
                    </SubCard>
                ))}
                <SaveButton onClick={() => save("s2", () => mut2.mutateAsync(s2))} loading={mut2.isPending} status={status.s2} />
            </SectionCard>

            {/* Section 3 — Counters */}
            <SectionCard title="Section 3 — Counters" badge="Stats">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s3.sectionBadgeName} onChange={upS3("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s3.sectionBadgeNameEn} onChange={upS3("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s3.sectionTitle} onChange={upS3("sectionTitle")} />
                    <FormField label="Title (EN)" value={s3.sectionTitleEn} onChange={upS3("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s3.sectionDescription} onChange={upS3("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s3.sectionDescriptionEn} onChange={upS3("sectionDescriptionEn")} type="textarea" />
                </div>
                {([1, 2, 3, 4] as const).map((n) => (
                    <SubCard key={n} title={`Counter ${n}`}>
                        <FormField label="Title (AR)" value={(s3 as any)[`count${n}Title`]} onChange={upS3(`count${n}Title` as any)} />
                        <FormField label="Title (EN)" value={(s3 as any)[`count${n}TitleEn`]} onChange={upS3(`count${n}TitleEn` as any)} />
                        <FormField label="Number" value={(s3 as any)[`count${n}Number`]} onChange={upS3(`count${n}Number` as any)} type="number" />
                    </SubCard>
                ))}
                <SaveButton onClick={() => save("s3", () => mut3.mutateAsync(s3))} loading={mut3.isPending} status={status.s3} />
            </SectionCard>

            {/* CEO Message */}
            <SectionCard title="CEO Message" badge="Quote">
                <div className="admin-form-grid">
                    <FormField label="Sender Name (AR)" value={ceo.senderName} onChange={upCeo("senderName")} />
                    <FormField label="Sender Name (EN)" value={ceo.senderNameEn} onChange={upCeo("senderNameEn")} />
                    <FormField label="Sender Title (AR)" value={ceo.senderTitle} onChange={upCeo("senderTitle")} />
                    <FormField label="Sender Title (EN)" value={ceo.senderTitleEn} onChange={upCeo("senderTitleEn")} />
                    <FormField label="Message (AR)" value={ceo.message} onChange={upCeo("message")} type="textarea" />
                    <FormField label="Message (EN)" value={ceo.messageEn} onChange={upCeo("messageEn")} type="textarea" />
                    <FormField label="Signature (AR)" value={ceo.signature} onChange={upCeo("signature")} />
                    <FormField label="Signature (EN)" value={ceo.signatureEn} onChange={upCeo("signatureEn")} />
                </div>
                <SaveButton onClick={() => save("ceo", () => mutCeo.mutateAsync(ceo))} loading={mutCeo.isPending} status={status.ceo} />
            </SectionCard>
        </>
    );
};

export default AboutAdmin;
