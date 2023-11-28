import { BookCheck } from "lucide-react";
import PageHeading from "@/components/general/PageHeading";
import TextData from "@/components/TextPage/TextData";
import TextForm from "@/components/TextPage/TextForm";
import ThemeToggle from "@/components/general/ThemeToggle";
import { ViewType } from "@/types/ui";
import { useState } from "react";

const TextPage: React.FC = () => {
    const [view, SetView] = useState<ViewType>("form");
    const [text, setText] = useState("");

    const backOrForward = () => SetView((prev) => prev === "data" ? "form" : "data");

    return (
        <div className="px-4 py-1 lg:px-8">
            <div className="flex flex-row justify-between items-center">
                <PageHeading
                    title="Grammar Mate"
                    description=""
                    icon={BookCheck}
                    iconColor="text-sky-700"
                    bgColor="bg-sky-700/10"
                />

                <ThemeToggle />
            </div>

            {view === "form" ? <TextForm setText={setText} backOrForward={backOrForward} /> : <TextData text={text} backOrForward={backOrForward} />}

        </div>
    );
};

export default TextPage;