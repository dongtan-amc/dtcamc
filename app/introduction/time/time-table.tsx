import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DAY_TIME,
  LATE_NIGHT_TIME,
  LUNCH_TIME,
  NAME,
  NIGHT_TIME,
  SUNDAY_TIME,
} from "@/constants/general-info";

export default function TimeTable() {
  return (
    <div className="space-y-12 leading-8 pb-12 pt-10">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
        <h2 className="shrink-0 text-xl font-bold text-olive-drab-600">
          진료시간 안내
        </h2>
        <div className="w-full">
          <h3 className="text-slate-950 font-bold text-xl">
            {NAME}는 365일 연중 무휴입니다.
          </h3>
          <Table className="mt-8 border text-base lg:text-lg">
            <TableCaption className="text-xs lg:text-base">
              <div className="text-left text-slate-950 space-y-2">
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 진료시간이 변경될 경우 홈페이지를 통해 공지하겠습니다.
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 야간 및 심야진료 시간에 내원하시는 경우, 추가 진료비가
                  청구됩니다.
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 일요일은 야간진료를 하지 않습니다. 입원환자 관리는
                  정상적으로 운영됩니다.
                </p>
                <p className="bg-olive-drab-50 px-4 py-2">
                  ※ 심야진료는 기존 고객만 가능합니다.
                </p>
              </div>
            </TableCaption>
            <TableHeader className="bg-olive-drab-700">
              <TableRow>
                <TableHead className="text-white text-center">구분</TableHead>
                <TableHead className="text-white text-center">시간</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center text-nowrap">
                  주간진료
                </TableCell>
                <TableCell className="text-center">{DAY_TIME}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">야간진료</TableCell>
                <TableCell className="text-center">{NIGHT_TIME}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-red-500">
                  일요일
                </TableCell>
                <TableCell className="text-center">
                  {SUNDAY_TIME} <br />※ 일요일은 야간진료를 하지 않습니다.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">심야진료</TableCell>
                <TableCell className="text-center">{LATE_NIGHT_TIME}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">점심시간</TableCell>
                <TableCell className="text-center">{LUNCH_TIME}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 미용 시간 안내 */}
      {/* <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
        <h2 className="shrink-0 text-xl font-bold text-olive-drab-600">
          미용시간 안내
        </h2>
        <div className="w-full">
          <h3 className="text-slate-950 font-bold text-xl">
            시티독 애견미용은 예약제로 운영됩니다.
          </h3>
          <Table className="mt-8 border text-base lg:text-lg">
            <TableCaption className="text-xs lg:text-base">
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
              <TableRow>
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
      </div> */}
    </div>
  );
}
