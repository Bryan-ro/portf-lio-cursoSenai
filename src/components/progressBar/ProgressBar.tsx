import Paragraph from "../texts/Paragraph";

type ProgressBarProps = {
    progressBarLoading: boolean,
    progressBarWidth: number,
    title: string
}

export default function ProgressBar({ progressBarLoading, progressBarWidth, title }: ProgressBarProps) {
    console.log(progressBarWidth);
    console.log(progressBarLoading);
    return (
        <div className="w-full p-1">
            <div className="flex justify-between">
                <Paragraph className="text-sm font-bold">{title.toLocaleUpperCase()}</Paragraph>
                <Paragraph className="text-sm font-bold ">{progressBarWidth}%</Paragraph>
            </div>
            <div className="w-full rounded-full h-3.5 mb-4 bg-gray-700">
                <div className="bg-blue-600 h-3.5 rounded-full dark:bg-blue-500 duration-1000" style={{
                    width: !progressBarLoading ? "0%" : `${progressBarWidth}%`
                }}></div>
            </div>
        </div>
    );
}