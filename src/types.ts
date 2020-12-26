export interface Metadata {
    title: string;
    priority: number;
    description?: string;
    keywords?: string[];
    category: DocsCategory;
}

export type DocsCategory = "getting-started" | "layout" | "components";

export interface ComponentsContextType {
    components: string[];
    setComponents: React.Dispatch<React.SetStateAction<string[]>> | null;
}