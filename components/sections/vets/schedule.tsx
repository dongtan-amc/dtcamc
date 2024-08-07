import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function Schdule({ schedule }: { schedule: number[] }) {
  return (
    <Table>
      <TableHeader className="bg-olive-drab-500">
        <TableRow>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            월
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            화
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            수
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            목
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            금
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            토
          </TableHead>
          <TableHead className="w-[14.2%] py-8 text-center text-[30px] font-bold text-white">
            일
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          {schedule.map((element, index) => (
            <TableCell
              className={cn(
                "overflow-hidden bg-white text-center text-[30px] font-bold text-primary",
              )}
              key={index}
            >
              <div className="flex justify-center py-6">
                {element ? (
                  <div className="h-6 w-6 rounded-full bg-olive-drab-500" />
                ) : (
                  "휴진"
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
