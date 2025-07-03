import { create } from "zustand";
import { Editor as TiptapEditor } from "@tiptap/react";

interface EditorState {
  editor: TiptapEditor | null;
  setEditor: (editor: TiptapEditor) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));