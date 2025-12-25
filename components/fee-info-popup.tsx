"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const POPUP_STORAGE_KEY = "fee-info-popup-hidden-date";

export default function FeeInfoPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // 홈페이지에서만 팝업 표시
        if (pathname !== "/") return;

        // 오늘 하루 보지 않기를 선택했는지 확인
        const hiddenDate = localStorage.getItem(POPUP_STORAGE_KEY);
        if (hiddenDate) {
            const today = new Date().toDateString();
            if (hiddenDate === today) {
                return; // 오늘 이미 닫았으면 표시하지 않음
            }
        }

        setIsOpen(true);
    }, [pathname]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleHideToday = () => {
        const today = new Date().toDateString();
        localStorage.setItem(POPUP_STORAGE_KEY, today);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
            <div className="relative w-full max-w-2xl animate-in fade-in zoom-in duration-300">
                {/* 팝업 컨텐츠 */}
                <Link
                    href="/fee-info"
                    className="block cursor-pointer"
                    onClick={handleClose}
                >
                    <div className="relative overflow-hidden rounded-t-lg bg-[#1e2b3a]">
                        {/* 메인 콘텐츠 */}
                        <div className="relative px-6 py-10 text-center">
                            <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
                                24시 동탄시티 동물의료센터
                                <br />
                                법적 고지 대상 진료비 안내
                            </h2>

                            <div className="mx-auto max-w-lg space-y-2 text-left text-sm leading-relaxed text-white/80">
                                <p>
                                    「수의사법」 제20조(진찰 등의 진료비용 게시) 및
                                </p>
                                <p>
                                    같은 법 시행규칙 제18조의3(진찰 등의 진료비용 게시 대상 및 방법),
                                </p>
                                <p>
                                    「동물소유자등에게 알릴 필요가 있는 동물진료업의 행위에 대한 진료비용」
                                </p>
                                <p>고시에 따라 다음과 같이 진료비용을 게시합니다.</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* 하단 버튼 영역 */}
                <div className="flex overflow-hidden rounded-b-lg">
                    <button
                        onClick={handleHideToday}
                        className="flex-1 bg-white py-4 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        오늘 하루 보지 않기
                    </button>
                    <button
                        onClick={handleClose}
                        className="flex-1 bg-[#4a7dbd] py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#3a6dad]"
                    >
                        닫기
                    </button>
                </div>

                {/* 닫기 아이콘 (우측 상단) */}
                <button
                    onClick={handleClose}
                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors hover:bg-gray-100"
                    aria-label="팝업 닫기"
                >
                    <IoClose className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
