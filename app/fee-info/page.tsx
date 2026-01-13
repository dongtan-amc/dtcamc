import { NAME } from "@/constants/general-info";
import type { Metadata } from "next";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export const metadata: Metadata = {
    title: `진료비 안내 - ${NAME}`,
    description: "동물진료업의 행위에 따른 진료비용 안내",
};

// 진료비 데이터
const feeData = [
    {
        id: 1,
        category: "진찰료",
        item: "초진/재진 진찰료",
        minFee: "8,800원",
        maxFee: "33,000원",
        note: "- 병력청취 및 문진, 기초신체검사 등이 해당\n- 평일 통상 진료시간 외에는 별도 진찰료 산정",
    },
    {
        id: 2,
        category: "진찰료",
        item: "진찰에 대한 상담료\n진찰료에 해당하지 않는 기타 상담 행위에 대한 비용 (10분당)",
        minFee: "10,000원",
        maxFee: "10,000원",
        note: "- 행동학, 영양학 등 동물 양육 및 기타 건강관리 등 수의학적 상담 교육 등",
    },
    {
        id: 3,
        category: "입원비",
        item: "입원비 (1일당)\n동물종,품종,체중 및 야간시간, 공휴일, 응급상황 등에 따라 비용 상이",
        minFee: "50,000원",
        maxFee: "70,000원",
        note: "- 기본 병실(입원장)사용료로 사료 및 음수, 병실 기본위생관리 비용 등은 별도\n- 의약품 및 의료적 처치(수액,안약,산소공급, 환부 소독등) 비용 별도",
    },
    {
        id: 4,
        category: "예방접종료",
        item: "개 종합백신 (1회당)",
        minFee: "30,000원",
        maxFee: "30,000원",
        note: "- 주사재료 및 주사료(접종료) 포함.\n- 백신접종을 위한 병력청취 및 문진, 신체검사는 진찰료로 별도산정\n- 생독,사독, 백신의 세부 구성, 투여 경로 등에 따라 비용 상이\n- 백신 접종 이후 발생할수 있는 이상반응(부작용)에 대한 처치 비용 별도",
    },
    {
        id: 5,
        category: "예방접종료",
        item: "고양이 종합백신 (1회당)",
        minFee: "35,000원",
        maxFee: "35,000원",
        note: "",
    },
    {
        id: 6,
        category: "예방접종료",
        item: "광견병백신 (1회당)",
        minFee: "20,000원",
        maxFee: "20,000원",
        note: "",
    },
    {
        id: 7,
        category: "예방접종료",
        item: "켄넬코프백신 (1회당)",
        minFee: "20,000원",
        maxFee: "20,000원",
        note: "",
    },
    {
        id: 8,
        category: "예방접종료",
        item: "코로나바이러스백신 (1회당)",
        minFee: "20,000원",
        maxFee: "20,000원",
        note: "",
    },
    {
        id: 9,
        category: "예방접종료",
        item: "인플루엔자백신 (1회당)",
        minFee: "30,000원",
        maxFee: "30,000원",
        note: "",
    },
    {
        id: 10,
        category: "혈액검사",
        item: "전혈구검사비와 그 검사 판독료 (1회당)",
        minFee: "40,000원",
        maxFee: "40,000원",
        note: "- 종합검사 기준\n- 추가 검사항목이 있는경우 비용별\n- 기타 혈액관련검사 및 외부위탁 비용 별도",
    },
    {
        id: 11,
        category: "혈액검사",
        item: "혈액화학검사비와 그 검사 판독료 (1회당)",
        minFee: "60,000원",
        maxFee: "160,000원",
        note: "",
    },
    {
        id: 12,
        category: "혈액검사",
        item: "전해질검사비와 그 검사 판독료 (1회당)",
        minFee: "33,000원",
        maxFee: "33,000원",
        note: "",
    },
    {
        id: 13,
        category: "영상검사",
        item: "엑스선 촬영비와 그 촬영 판독료 (1개 부위 기준)",
        minFee: "40,000원",
        maxFee: "70,000원",
        note: "1회 또는 1개 부위 촬영을 기준으로 하되, 동물의 체중,촬영 부위, 방식, 시간 등에 따라 비용 상이\n- 영상검사를 위해 마취가 필요한 경우 마취 전 검사비용 및 마취비 별도\n- 기타 영상검사 및 외부위탁 촬영, 검사 비용 별도",
    },
    {
        id: 14,
        category: "영상검사",
        item: "초음파검사비와 그 검사 판독료 (1개 부위 기준)",
        minFee: "50,000원",
        maxFee: "150,000원",
        note: "",
    },
    {
        id: 15,
        category: "영상검사",
        item: "컴퓨터단층촬영검사(CT)비와 그 검사 판독료 (1개 부위 기준)",
        minFee: "550,000원",
        maxFee: "850,000원",
        note: "",
    },
    {
        id: 16,
        category: "투약·조제비용",
        item: "심장사상충, 외부기생충 (1회당)\n셀렉션 / 넥스가드",
        minFee: "15,000원 / 20,000원",
        maxFee: "32,000원 / 41,000원",
        note: "- 예방,구충 약품의 비용 (1회당)\n- 동물의 체중, 약품의 세부성분, 투여경로 등에 따라 비용 상이\n- 처방을 위한 병력청취 및 문진 신체검사는 진찰료로 별도 산정",
    },
    {
        id: 17,
        category: "투약·조제비용",
        item: "광범위 구충비 (1회당)\n파나쿠어",
        minFee: "2,000원",
        maxFee: "2,000원",
        note: "",
    },
];

export default function FeeInfoPage() {
    // 카테고리별로 그룹화하여 rowSpan 계산
    const getCategoryRowSpan = (index: number): number => {
        const currentCategory = feeData[index].category;
        let count = 0;
        for (let i = index; i < feeData.length; i++) {
            if (feeData[i].category === currentCategory) {
                count++;
            } else {
                break;
            }
        }
        return count;
    };

    const shouldShowCategory = (index: number): boolean => {
        if (index === 0) return true;
        return feeData[index].category !== feeData[index - 1].category;
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-24">
            <div className="mx-auto max-w-6xl px-4">
                {/* 헤더 */}
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-2xl font-bold text-[#1e2b3a] sm:text-3xl">
                        동물진료업의 행위에 따른 진료비용
                    </h1>
                    <p className="text-sm text-gray-600 sm:text-base">
                        「수의사법」 제20조 및 같은 법 시행규칙 제18조의3에 따른 진료비용 안내
                    </p>
                </div>

                {/* 테이블 */}
                <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
                    <table className="w-full min-w-[800px] border-collapse text-sm">
                        <thead>
                            <tr className="bg-[#1e2b3a] text-white">
                                <th className="border border-gray-300 px-2 py-3 text-center">연번</th>
                                <th className="border border-gray-300 px-2 py-3 text-center">구분</th>
                                <th className="border border-gray-300 px-3 py-3 text-center">진료행위(항목)</th>
                                <th className="border border-gray-300 px-2 py-3 text-center" colSpan={2}>
                                    진료비용(단위: 원)
                                </th>
                                <th className="border border-gray-300 px-3 py-3 text-center">비 고</th>
                            </tr>
                            <tr className="bg-[#2a3a4a] text-white">
                                <th className="border border-gray-300 px-2 py-2"></th>
                                <th className="border border-gray-300 px-2 py-2"></th>
                                <th className="border border-gray-300 px-3 py-2"></th>
                                <th className="border border-gray-300 px-2 py-2 text-center">최저</th>
                                <th className="border border-gray-300 px-2 py-2 text-center">최고</th>
                                <th className="border border-gray-300 px-3 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="border border-gray-300 px-2 py-3 text-center">
                                        {item.id}
                                    </td>
                                    {shouldShowCategory(index) && (
                                        <td
                                            className="border border-gray-300 px-2 py-3 text-center font-medium"
                                            rowSpan={getCategoryRowSpan(index)}
                                        >
                                            {item.category}
                                        </td>
                                    )}
                                    <td className="border border-gray-300 px-3 py-3 whitespace-pre-line">
                                        {item.item}
                                    </td>
                                    <td className="border border-gray-300 px-2 py-3 text-center">
                                        {item.minFee}
                                    </td>
                                    <td className="border border-gray-300 px-2 py-3 text-center">
                                        {item.maxFee}
                                    </td>
                                    <td className="border border-gray-300 px-3 py-3 text-xs text-gray-600 whitespace-pre-line">
                                        {item.note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 하단 버튼 */}
                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1e2b3a] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2a3a4a]"
                    >
                        <IoHome className="h-5 w-5" />
                        홈으로 이동
                    </Link>
                </div>

                {/* 법적 고지 */}
                <div className="mt-8 rounded-lg bg-blue-50 p-4 text-center text-xs text-gray-600">
                    <p>
                        본 진료비용은 「수의사법」 제20조(진찰 등의 진료비용 게시) 및 같은 법 시행규칙 제18조의3에 따라 게시됩니다.
                    </p>
                    <p className="mt-1">
                        실제 진료비용은 동물의 상태, 진료 내용 등에 따라 달라질 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
