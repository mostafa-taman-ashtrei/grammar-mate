import GradientText from "./GradientText";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface props {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const PageHeading: React.FC<props> = ({ title, description, bgColor }) => {
    return (
        <>
            <div className="px-4 lg:px-8 flex items-center gap-x-1 mb-4 mt-2">
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <img
                        src="/logo.png"
                        className="w-5 h-5 items-center"
                        alt="logo"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-bold"><GradientText text={title} /></h2>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
            <hr />
        </>
    );
};

export default PageHeading;