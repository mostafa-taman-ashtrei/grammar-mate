import * as z from "zod";

import { BookCheck, Clipboard, Loader } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface props {
    setText: React.Dispatch<React.SetStateAction<string>>;
    backOrForward: () => void;
}

const formSchema = z.object({
    text: z.string().min(1, { message: "Type or paste in something to get started! " })
});

const TextForm: React.FC<props> = ({ setText, backOrForward }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: ""
        },
    });

    const isLoading = form.formState.isLoading;

    const handleTextPaste = async () => {
        const text = await navigator.clipboard.readText();
        form.setValue("text", text, { shouldValidate: true });
    };

    const handleSubmitForm = async (values: z.infer<typeof formSchema>) => {
        setText(values.text);
        backOrForward();

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <div className="w-full border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-black">
                        <FormField
                            control={form.control}
                            name="text"
                            disabled={isLoading}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            className="w-80 h-52 max-h-52 resize-none x-0 text-sm text-gray-900 bg-white border-0 dark:bg-black dark:text-white dark:placeholder-gray-400"
                                            placeholder="Place your text here ..."
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        className="flex flex-row items-center justify-center gap-1 bg-blue-800 text-white hover:dark:text-black"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {
                                            isLoading
                                                ? <Loader className="animate-spin" />
                                                : <>
                                                    <BookCheck />
                                                    Grammarify
                                                </>
                                        }
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
                                        <Button
                                            size="icon"
                                            className="rounded-full bg-blue-800 text-white hover:dark:text-black"
                                            onClick={handleTextPaste}
                                        >
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
            </form>
        </Form>
    );
};

export default TextForm;