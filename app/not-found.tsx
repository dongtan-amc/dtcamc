import NoResultLottie from "@/components/common/no-result-lottie";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <NoResultLottie />
        <p className="pt-4 text-2xl font-bold text-slate-50">
          페이지가 존재하지 않습니다.
        </p>
      </div>
    </div>
  );
}
