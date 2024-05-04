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
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            월
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            화
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            수
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            목
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            금
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            토
          </TableHead>
          <TableHead className="text-white text-center text-[30px] font-bold py-8 w-[14.2%]">
            일
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          {schedule.map((element, index) => (
            <TableCell
              className={cn(
                "text-center text-[30px] text-primary font-bold bg-white overflow-hidden",
                index === 0 && "rounded-bl-2xl",
                index === 6 && "rounded-br-2xl"
              )}
              key={index}
            >
              <div className="flex justify-center py-6">
                {element ? (
                  <div className="w-6 h-6 rounded-full bg-olive-drab-500" />
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
