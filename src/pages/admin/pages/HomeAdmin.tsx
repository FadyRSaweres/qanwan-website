import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "@/components/admin/PageHeader";
import SectionCard from "@/components/admin/SectionCard";
import FormField from "@/components/admin/FormField";
import SubCard from "@/components/admin/SubCard";
import SaveButton from "@/components/admin/SaveButton";
import LoadingSkeleton from "@/components/admin/LoadingSkeleton";
import {
    useGetHomeSection1,
    useGetHomeSection2,
    useGetHomeSection3,
    useGetHomeSection4,
    useGetHomeSection5,
    useUpdateHomeSection1,
    useUpdateHomeSection2,
    useUpdateHomeSection3,
    useUpdateHomeSection4,
    useUpdateHomeSection5,
} from "@/services/home";
import type {
    IHomeSection1,
    IHomeSection2,
    IHomeSection3,
    IHomeSection4,
    IHomeSection5,
    IHomeCard,
} from "@/entity/home";

type Status = { type: "success" | "error"; message: string } | null;

/* ──── helpers ──── */
const emptyCard: IHomeCard = { title: "", titleEn: "", description: "", descriptionEn: "" };

const defaultS1: IHomeSection1 = {
    sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    firstCountTitle: "", firstCountTitleEn: "", firstCountNumber: "",
    secondCountTitle: "", secondCountTitleEn: "", secondCountNumber: "",
    thirdCountTitle: "", thirdCountTitleEn: "", thirdCountNumber: "",
};

const defaultS2: IHomeSection2 = {
    id: 0, sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    card1: { ...emptyCard }, card2: { ...emptyCard }, card3: { ...emptyCard }, card4: { ...emptyCard },
};

const defaultS3: IHomeSection3 = {
    id: 0, sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    card1: { ...emptyCard }, card2: { ...emptyCard }, card3: { ...emptyCard }, card4: { ...emptyCard },
    count1Title: "", count1TitleEn: "", count1Number: "",
    count2Title: "", count2TitleEn: "", count2Number: "",
    count3Title: "", count3TitleEn: "", count3Number: "",
    count4Title: "", count4TitleEn: "", count4Number: "",
};

const defaultS4: IHomeSection4 = {
    id: 0, sectionBadgeName: "", sectionBadgeNameEn: "",
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
    card1Title: "", card1TitleEn: "", card1Description: "", card1DescriptionEn: "",
    card2Title: "", card2TitleEn: "", card2Description: "", card2DescriptionEn: "",
    card3Title: "", card3TitleEn: "", card3Description: "", card3DescriptionEn: "",
    list1Title: "", list1TitleEn: "", list1Number: "",
    list2Title: "", list2TitleEn: "", list2Number: "",
    list3Title: "", list3TitleEn: "", list3Number: "",
    list4Title: "", list4TitleEn: "", list4Number: "",
};

const defaultS5: IHomeSection5 = {
    sectionTitle: "", sectionTitleEn: "",
    sectionDescription: "", sectionDescriptionEn: "",
};

/* ──── Component ──── */
const HomeAdmin = () => {
    const { t } = useTranslation();
    const q1 = useGetHomeSection1();
    const q2 = useGetHomeSection2();
    const q3 = useGetHomeSection3();
    const q4 = useGetHomeSection4();
    const q5 = useGetHomeSection5();

    const mut1 = useUpdateHomeSection1();
    const mut2 = useUpdateHomeSection2();
    const mut3 = useUpdateHomeSection3();
    const mut4 = useUpdateHomeSection4();
    const mut5 = useUpdateHomeSection5();

    const [s1, setS1] = useState<IHomeSection1>(defaultS1);
    const [s2, setS2] = useState<IHomeSection2>(defaultS2);
    const [s3, setS3] = useState<IHomeSection3>(defaultS3);
    const [s4, setS4] = useState<IHomeSection4>(defaultS4);
    const [s5, setS5] = useState<IHomeSection5>(defaultS5);

    const [status, setStatus] = useState<Record<string, Status>>({});

    useEffect(() => { if (q1.data) setS1(q1.data); }, [q1.data]);
    useEffect(() => { if (q2.data) setS2(q2.data); }, [q2.data]);
    useEffect(() => { if (q3.data) setS3(q3.data); }, [q3.data]);
    useEffect(() => { if (q4.data) setS4(q4.data); }, [q4.data]);
    useEffect(() => { if (q5.data) setS5(q5.data); }, [q5.data]);

    const flash = (key: string, s: Status) => {
        setStatus((p) => ({ ...p, [key]: s }));
        setTimeout(() => setStatus((p) => ({ ...p, [key]: null })), 3000);
    };

    const save = async (key: string, fn: () => Promise<any>) => {
        try { await fn(); flash(key, { type: "success", message: t("admin.success", "Saved!") }); }
        catch { flash(key, { type: "error", message: t("admin.error", "Save failed") }); }
    };

    const loading = q1.isLoading || q2.isLoading || q3.isLoading || q4.isLoading || q5.isLoading;
    if (loading) return <><PageHeader title="Home Page" subtitle="Loading sections…" /><LoadingSkeleton count={5} /></>;

    /* ──── render helpers ──── */
    const upS1 = (k: keyof IHomeSection1) => (v: string) => setS1((p) => ({ ...p, [k]: v }));
    const upS2 = (k: keyof IHomeSection2) => (v: string) => setS2((p) => ({ ...p, [k]: v } as any));
    const upS2Card = (card: "card1" | "card2" | "card3" | "card4", k: keyof IHomeCard) => (v: string) =>
        setS2((p) => ({ ...p, [card]: { ...p[card], [k]: v } }));
    const upS3 = (k: keyof IHomeSection3) => (v: string) => setS3((p) => ({ ...p, [k]: v } as any));
    const upS3Card = (card: "card1" | "card2" | "card3" | "card4", k: keyof IHomeCard) => (v: string) =>
        setS3((p) => ({ ...p, [card]: { ...p[card], [k]: v } }));
    const upS4 = (k: keyof IHomeSection4) => (v: string) => setS4((p) => ({ ...p, [k]: v }));
    const upS5 = (k: keyof IHomeSection5) => (v: string) => setS5((p) => ({ ...p, [k]: v }));

    return (
        <>
            <PageHeader title="Home Page" subtitle="Edit hero, features, counters, and CTA sections" />

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
                <div className="admin-form-grid cols-3" style={{ marginTop: 16 }}>
                    <FormField label="Count 1 Title (AR)" value={s1.firstCountTitle} onChange={upS1("firstCountTitle")} />
                    <FormField label="Count 1 Title (EN)" value={s1.firstCountTitleEn} onChange={upS1("firstCountTitleEn")} />
                    <FormField label="Count 1 Number" value={s1.firstCountNumber} onChange={upS1("firstCountNumber")} type="number" />
                    <FormField label="Count 2 Title (AR)" value={s1.secondCountTitle} onChange={upS1("secondCountTitle")} />
                    <FormField label="Count 2 Title (EN)" value={s1.secondCountTitleEn} onChange={upS1("secondCountTitleEn")} />
                    <FormField label="Count 2 Number" value={s1.secondCountNumber} onChange={upS1("secondCountNumber")} type="number" />
                    <FormField label="Count 3 Title (AR)" value={s1.thirdCountTitle} onChange={upS1("thirdCountTitle")} />
                    <FormField label="Count 3 Title (EN)" value={s1.thirdCountTitleEn} onChange={upS1("thirdCountTitleEn")} />
                    <FormField label="Count 3 Number" value={s1.thirdCountNumber} onChange={upS1("thirdCountNumber")} type="number" />
                </div>
                <SaveButton onClick={() => save("s1", () => mut1.mutateAsync(s1))} loading={mut1.isPending} status={status.s1} />
            </SectionCard>

            {/* Section 2 — Features */}
            <SectionCard title="Section 2 — Features" badge="Cards">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s2.sectionBadgeName} onChange={upS2("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s2.sectionBadgeNameEn} onChange={upS2("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s2.sectionTitle} onChange={upS2("sectionTitle")} />
                    <FormField label="Title (EN)" value={s2.sectionTitleEn} onChange={upS2("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s2.sectionDescription} onChange={upS2("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s2.sectionDescriptionEn} onChange={upS2("sectionDescriptionEn")} type="textarea" />
                </div>
                {(["card1", "card2", "card3", "card4"] as const).map((c, i) => (
                    <SubCard key={c} title={`Card ${i + 1}`}>
                        <FormField label="Title (AR)" value={s2[c].title} onChange={upS2Card(c, "title")} />
                        <FormField label="Title (EN)" value={s2[c].titleEn} onChange={upS2Card(c, "titleEn")} />
                        <FormField label="Desc (AR)" value={s2[c].description} onChange={upS2Card(c, "description")} type="textarea" />
                        <FormField label="Desc (EN)" value={s2[c].descriptionEn} onChange={upS2Card(c, "descriptionEn")} type="textarea" />
                    </SubCard>
                ))}
                <SaveButton onClick={() => save("s2", () => mut2.mutateAsync(s2))} loading={mut2.isPending} status={status.s2} />
            </SectionCard>

            {/* Section 3 — Cards + Counters */}
            <SectionCard title="Section 3 — Cards & Counters" badge="Mixed">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s3.sectionBadgeName} onChange={upS3("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s3.sectionBadgeNameEn} onChange={upS3("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s3.sectionTitle} onChange={upS3("sectionTitle")} />
                    <FormField label="Title (EN)" value={s3.sectionTitleEn} onChange={upS3("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s3.sectionDescription} onChange={upS3("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s3.sectionDescriptionEn} onChange={upS3("sectionDescriptionEn")} type="textarea" />
                </div>
                {(["card1", "card2", "card3", "card4"] as const).map((c, i) => (
                    <SubCard key={c} title={`Card ${i + 1}`}>
                        <FormField label="Title (AR)" value={s3[c].title} onChange={upS3Card(c, "title")} />
                        <FormField label="Title (EN)" value={s3[c].titleEn} onChange={upS3Card(c, "titleEn")} />
                        <FormField label="Desc (AR)" value={s3[c].description} onChange={upS3Card(c, "description")} type="textarea" />
                        <FormField label="Desc (EN)" value={s3[c].descriptionEn} onChange={upS3Card(c, "descriptionEn")} type="textarea" />
                    </SubCard>
                ))}
                <div className="admin-form-grid cols-3" style={{ marginTop: 16 }}>
                    {([1, 2, 3, 4] as const).map((n) => (
                        <SubCard key={n} title={`Counter ${n}`}>
                            <FormField label="Title (AR)" value={(s3 as any)[`count${n}Title`]} onChange={upS3(`count${n}Title` as any)} />
                            <FormField label="Title (EN)" value={(s3 as any)[`count${n}TitleEn`]} onChange={upS3(`count${n}TitleEn` as any)} />
                            <FormField label="Number" value={(s3 as any)[`count${n}Number`]} onChange={upS3(`count${n}Number` as any)} type="number" />
                        </SubCard>
                    ))}
                </div>
                <SaveButton onClick={() => save("s3", () => mut3.mutateAsync(s3))} loading={mut3.isPending} status={status.s3} />
            </SectionCard>

            {/* Section 4 — Cards + Lists */}
            <SectionCard title="Section 4 — Cards & Lists" badge="Mixed">
                <div className="admin-form-grid">
                    <FormField label="Badge (AR)" value={s4.sectionBadgeName} onChange={upS4("sectionBadgeName")} />
                    <FormField label="Badge (EN)" value={s4.sectionBadgeNameEn} onChange={upS4("sectionBadgeNameEn")} />
                    <FormField label="Title (AR)" value={s4.sectionTitle} onChange={upS4("sectionTitle")} />
                    <FormField label="Title (EN)" value={s4.sectionTitleEn} onChange={upS4("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s4.sectionDescription} onChange={upS4("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s4.sectionDescriptionEn} onChange={upS4("sectionDescriptionEn")} type="textarea" />
                </div>
                {([1, 2, 3] as const).map((n) => (
                    <SubCard key={n} title={`Card ${n}`}>
                        <FormField label="Title (AR)" value={(s4 as any)[`card${n}Title`]} onChange={upS4(`card${n}Title` as any)} />
                        <FormField label="Title (EN)" value={(s4 as any)[`card${n}TitleEn`]} onChange={upS4(`card${n}TitleEn` as any)} />
                        <FormField label="Desc (AR)" value={(s4 as any)[`card${n}Description`]} onChange={upS4(`card${n}Description` as any)} type="textarea" />
                        <FormField label="Desc (EN)" value={(s4 as any)[`card${n}DescriptionEn`]} onChange={upS4(`card${n}DescriptionEn` as any)} type="textarea" />
                    </SubCard>
                ))}
                <div className="admin-form-grid cols-3" style={{ marginTop: 16 }}>
                    {([1, 2, 3, 4] as const).map((n) => (
                        <SubCard key={n} title={`List ${n}`}>
                            <FormField label="Title (AR)" value={(s4 as any)[`list${n}Title`]} onChange={upS4(`list${n}Title` as any)} />
                            <FormField label="Title (EN)" value={(s4 as any)[`list${n}TitleEn`]} onChange={upS4(`list${n}TitleEn` as any)} />
                            <FormField label="Number" value={(s4 as any)[`list${n}Number`]} onChange={upS4(`list${n}Number` as any)} type="number" />
                        </SubCard>
                    ))}
                </div>
                <SaveButton onClick={() => save("s4", () => mut4.mutateAsync(s4))} loading={mut4.isPending} status={status.s4} />
            </SectionCard>

            {/* Section 5 — CTA */}
            <SectionCard title="Section 5 — CTA" badge="CTA">
                <div className="admin-form-grid">
                    <FormField label="Title (AR)" value={s5.sectionTitle} onChange={upS5("sectionTitle")} />
                    <FormField label="Title (EN)" value={s5.sectionTitleEn} onChange={upS5("sectionTitleEn")} />
                    <FormField label="Description (AR)" value={s5.sectionDescription} onChange={upS5("sectionDescription")} type="textarea" />
                    <FormField label="Description (EN)" value={s5.sectionDescriptionEn} onChange={upS5("sectionDescriptionEn")} type="textarea" />
                </div>
                <SaveButton onClick={() => save("s5", () => mut5.mutateAsync(s5))} loading={mut5.isPending} status={status.s5} />
            </SectionCard>
        </>
    );
};

export default HomeAdmin;
