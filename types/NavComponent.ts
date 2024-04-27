interface NavComponent {
    title: string;
    _path: string;
    author?: string;
    category?: string;
    publishedAt?: string;
    children?: NavComponent[];
}