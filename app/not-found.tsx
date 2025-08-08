

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{maxWidth: 640, margin: "0 auto", padding: "80px 16px", textAlign: "center"}}>
      <h1 style={{fontSize: 24, fontWeight: 600}}>페이지를 찾을 수 없습니다</h1>
      <p style={{marginTop: 8, color: "#666"}}>주소를 확인하시거나 홈으로 돌아가세요.</p>
      <div style={{marginTop: 24}}>
        <Link href="/" style={{textDecoration: "underline"}}>홈으로</Link>
      </div>
    </div>
  );
}


// import NoResultLottie from "@/components/common/no-result-lottie";
// 
// export default function NotFound() {
//   return (
//     <div className="flex h-screen items-center justify-center bg-slate-950">
//       <div className="flex flex-col items-center">
//         <NoResultLottie />
//         <p className="pt-4 text-2xl font-bold text-slate-50">
//           페이지가 존재하지 않습니다.
//         </p>
//       </div>
//     </div>
//   );
// }
