import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NAME } from "@/constants/constants";

export default function TimeTable() {
  return (
    <div className="space-y-12 leading-8 pb-12 pt-10">
      <div className="flex gap-16">
        <h2 className="shrink-0 text-4xl font-bold text-olive-drab-600">
          진료시간 안내
        </h2>
        <div className="w-full">
          <h3 className="text-slate-950 font-bold text-3xl mt-1">
            {NAME}는 365일 연중 무휴, 24시 진료 가능합니다
          </h3>
          <Table className="mt-8 border text-lg">
            <TableCaption>
              <div className="text-left text-slate-950 space-y-2">
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 진료시간이 변경될 경우 홈페이지를 통해 공지하겠습니다.
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 야간 응급진료 시간에 내원하시는 경우, 기본 야간 진료비가
                  청구됩니다.
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 추가적인 안내사항
                </p>
              </div>
            </TableCaption>
            <TableHeader className="bg-olive-drab-700">
              <TableRow className="">
                <TableHead className="text-white text-center">구분</TableHead>
                <TableHead className="text-white text-center">시간</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center">주간진료</TableCell>
                <TableCell className="text-center">
                  오전 9시 - 오후 9시
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">야간진료</TableCell>
                <TableCell className="text-center">
                  오후 9시 - 오전 1시
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">심야진료</TableCell>
                <TableCell className="text-center">
                  오전 1시 - 오전 9시
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">점심시간</TableCell>
                <TableCell className="text-center">
                  오후 12시 - 오후 1시
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">회진시간</TableCell>
                <TableCell className="text-center">
                  오후 ??시 - 오후 ??시
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex gap-16 w-full">
        <h2 className="shrink-0 text-4xl font-bold text-olive-drab-600">
          미용시간 안내
        </h2>
        <div className="w-full">
          <h3 className="text-slate-950 font-bold text-3xl mt-1">
            시티독 애견미용은 예약제로 운영됩니다.
          </h3>
          <Table className="mt-8 border text-lg">
            <TableCaption>
              <div className="text-left text-slate-950 space-y-2">
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 미용예약 : 031 - 8003 - 7535
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 병원건물 1층에 위치하며 병원 내부와 연결됩니다.
                </p>
              </div>
            </TableCaption>
            <TableHeader className="bg-olive-drab-700">
              <TableRow className="">
                <TableHead className="text-white text-center">구분</TableHead>
                <TableHead className="text-white text-center">시간</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center">미용시간</TableCell>
                <TableCell className="text-center">
                  오전 10시 - 오후 7시
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
