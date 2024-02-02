import NoResultLottie from "@/components/common/no-result-lottie";

export default function NoResult() {
  return (
    <div className="w-full flex flex-col items-center pt-10 pb-12">
      <NoResultLottie />
      <p className="text-2xl text-slate-950 font-bold pt-2">
        검색 결과가 없습니다...
      </p>
    </div>
  );
}
