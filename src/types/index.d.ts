

// Defines what props a book must have
declare interface Book {
    title: string;
    // Sometimes the author name is unknown
    author_name?: string | undefined | null;
    author_prename?: string | undefined | null;
    // Each book must have an id
    book_id: number;
}
