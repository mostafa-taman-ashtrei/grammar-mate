import { ArrowLeftCircle, Copy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface props {
    text: string;
    backOrForward: () => void;
}

const TextData: React.FC<props> = ({ text, backOrForward }) => {
    const handleCopyText = async () => {
        await navigator.clipboard.writeText(text);
    };

    return (
        <div className="px-4 py-1 w-full justify-center items-center">
            <div className="flex flex-row justify-between items-center mb-1 border-b pb-1">
                <ArrowLeftCircle className="text-sky-500 cursor-pointer" onClick={backOrForward} />

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Copy
                                className="text-sky-500 cursor-pointer"
                                onClick={handleCopyText}
                            />
                        </TooltipTrigger>

                        <TooltipContent align="end">
                            <p>Copy Text</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <p className="text-sm text-gray-500 h-60 w-80  overflow-auto">
                {text}
            </p>
        </div>
    );
};

export default TextData;