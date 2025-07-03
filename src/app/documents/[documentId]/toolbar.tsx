"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@radix-ui/react-context-menu";
import { BoldIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlusIcon, Printer, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-react";

interface ToolbarButtonProps {
    onClick: () => void;
    isActive?: boolean;
    icon: LucideIcon;
};

export const ToolbarButton = ({ 
    onClick, 
    isActive, 
    icon: Icon 
    

}: ToolbarButtonProps) => {
    return (
        
        
        <button
        onClick={onClick}
        className={cn(
            "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
            isActive && "bg-neutral-200/80",
        )} >
           <Icon className="w-4 h-4" />
        </button>
    );
};

export const Toolbar = () => {
    const { editor } = useEditorStore();

    console.log(" Toolbar editor:", {editor});
    const sections: {
        label: string;
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][]=[
        [
            {
                label: "undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label:"Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "true" ? "false" : "true");
                }
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
               
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
               
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),

            },
        ],
        [
            {
                label:"comments",
                icon: MessageSquarePlusIcon,
                onClick: () => console.log("TODO: Add comments feature"),
                isActive: false,
            },
            {
                label: "List Todo",
                icon: ListTodoIcon,
                isActive: editor?.isActive("taskList"),
                onClick: () => editor?.chain().focus().toggleTaskList().run(),

            },
            {
                label: "Remove Formatting",
                icon: RemoveFormattingIcon,

                onClick: () => editor?.chain().focus().unsetAllMarks().run(),

            },


        ]

    ];
    return (
        <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map(item => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator className="h-6 w-px bg-neutral-300" />
            {/*todo: font family*/}
             <Separator className="h-6 w-px bg-neutral-300" />
            {/*todo: heading*/}
             <Separator className="h-6 w-px bg-neutral-300" />
            {/*todo: font size*/}
            <Separator className="h-6 w-px bg-neutral-300" />
            
            {sections[1].map(item => (
                <ToolbarButton key={item.label} {...item} isActive={editor?.isActive(item.label.toLowerCase())} />
            ))}
            {/*todo: text color*/}
            {/*todo: highlight color*/}
            <Separator className="h-6 w-px bg-neutral-300" />
            {/*todo: link*/}
            {/*todo: image*/}
            {/*todo: align*/}
            {/*todo: line height*/}
            {/*todo: list*/}
             {sections[2].map(item => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    );
}