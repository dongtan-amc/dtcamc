import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Schedule({ schedule }: { schedule: number[] }) {
  return (
    <div>
      <Table>
        <TableHeader className="bg-olive-drab-500">
          <TableRow>
            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
              <TableHead
                key={day}
                className="w-[14.2%] py-3 text-center text-base font-bold text-white md:text-2xl"
              >
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            {schedule.map((element, index) => (
              <TableCell
                className="text-center text-base font-bold text-primary md:text-2xl"
                key={index}
              >
                <div className="flex justify-center py-2">
                  {element ? (
                    <div className="h-3 w-3 rounded-full bg-olive-drab-500 md:h-6 md:w-6" />
                  ) : (
                    "휴진"
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
