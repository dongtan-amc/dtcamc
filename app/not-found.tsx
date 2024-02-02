import NoResultLottie from "@/components/common/no-result-lottie";

export default function NotFound() {
  return (
    <div className="bg-slate-950 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <NoResultLottie />
        <p className="text-2xl text-slate-50 font-bold pt-4">
          페이지가 존재하지 않습니다.
        </p>
      </div>
    </div>
  );
}
