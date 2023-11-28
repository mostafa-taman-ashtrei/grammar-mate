import { BookCheck, Clipboard } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import PageHeading from "@/components/general/PageHeading";
import { Textarea } from "@/components/ui/textarea";
import ThemeToggle from "@/components/general/ThemeToggle";

const TextPage = () => {
    return (
        <div className="px-4 lg:px-8  ">
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

            <div>
                <div className="w-full border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-black">
                        <Textarea
                            className="w-80 h-52 max-h-52 resize-none x-0 text-sm text-gray-900 bg-white border-0 dark:bg-black dark:text-white dark:placeholder-gray-400"
                            placeholder="Place your text here ..."
                        />
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button className="flex flex-row items-center justify-center gap-1 bg-blue-800 text-white hover:dark:text-black">
                                        <BookCheck />
                                        Grammarify
                                    </Button>
                                </TooltipTrigger>

                                <TooltipContent>
                                    <p>Correct grammar</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button size="icon" className="rounded-full bg-blue-800 text-white hover:dark:text-black">
                                            <Clipboard />
                                        </Button>

                                    </TooltipTrigger>

                                    <TooltipContent align="end">
                                        <p>Paste from clipboard</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextPage;