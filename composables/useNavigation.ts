interface NavComponent {
    title: string;
    _path: string;
    author?: string;
    category?: string;
    publishedAt?: string;
    children?: NavComponent[];
}

interface FilterOptions {
    author?: string | null;
    category?: string | null;
    date?: string | null;
}

export async function useNavigation(filterOptions:FilterOptions = { author: null, category: null, date: null }) {

    const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
    const route = useRoute()

    const includeParents = ref(false);

    const navigationList = computed(() => {
        const result: NavComponent[] = [];
        const uniquePaths = new Set();

        function addItems(items: NavComponent[], isChild = false) {
            items.forEach(item => {
                if (matchesFilters(item, filterOptions) && !uniquePaths.has(item._path)) {
                    if (item._path === "/" || includeParents.value || isChild) {
                        result.push(item);
                    }
                    uniquePaths.add(item._path);
                }
                if (item.children) {
                    addItems(item.children, true);
                }
            });
        }

        if (navigation.value) {
            addItems(navigation.value);
        }
        return result;
    });

    function matchesFilters(item: NavComponent, options:FilterOptions): boolean {
        return (!options.author || item.author === options.author) &&
               (!options.category || item.category === options.category) &&
               (!options.date || item.publishedAt === options.date);
    }

    const currentNav = computed(() => navigationList.value.find((item) => item._path === route.path));
    const currentNavIndex = computed(() => navigationList.value.findIndex((item) => item._path === route.path));

    const navigate = (direction: 'next' | 'previous') => {
        const index = currentNavIndex.value;
        if (index !== -1) {
            const newIndex = direction === 'next' ? index + 1 : index - 1;
            if (newIndex >= 0 && newIndex < navigationList.value.length) {
                navigateTo(navigationList.value[newIndex]._path);
            }
        }
    }

    return {
        navigationList,
        currentNav,
        navigate
    };
}
