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
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader className="bg-olive-drab-500">
          <TableRow>
            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
              <TableHead
                key={day}
                className="w-[14.2%] py-4 text-center text-lg font-bold text-white md:py-6 md:text-2xl"
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
                className="overflow-hidden bg-white text-center text-lg font-bold text-primary md:text-2xl"
                key={index}
              >
                <div className="flex justify-center py-4 md:py-6">
                  {element ? (
                    <div className="h-4 w-4 rounded-full bg-olive-drab-500 md:h-6 md:w-6" />
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
