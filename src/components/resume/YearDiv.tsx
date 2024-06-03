interface YearDivProps {
    startYear: number;
    endYear: number | "Atual";
}

export default function YearDiv({ startYear, endYear }: YearDivProps) {
    return (
        <div className="bg-gray-400 inline-block mb-2">
            <p className="font-semibold p-1 pl-2 pr-2 text-lg">{startYear} - {endYear}</p>
        </div>
    );
} 