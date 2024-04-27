import type { RouteLocationNormalizedLoaded } from "vue-router";

export async function useNavigation(route:RouteLocationNormalizedLoaded) {

    const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
    
    let initialFilterOptions:FilterOptions = { author: null, category: null, date: null }
    const filterOptions = ref(initialFilterOptions)
    const includeParents = ref(false);

    const flattenNavigationList = computed(()=>{
        const result: NavComponent[] = [];
        const uniquePaths = new Set();

        function addItems(items: NavComponent[]) {
            items.forEach(item => {
                if (!uniquePaths.has(item._path)) {
                    result.push(item);
                    uniquePaths.add(item._path);
                }
                if (item.children) {
                    addItems(item.children);
                }
            });
        }

        if (navigation.value) {
            addItems(navigation.value);
        }
        return result;
    })

    const navigationList = computed(() => {
        const result: NavComponent[] = [];
        const uniquePaths = new Set();

        function addItems(items: NavComponent[], isChild = false) {
            items.forEach(item => {
                if (matchesFilters(item, filterOptions.value) && !uniquePaths.has(item._path)) {
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

    const categories = computed(()=> {
        let categories = flattenNavigationList.value.map((nav)=>nav.category).filter((cat)=>cat!==undefined)
        return [...new Set(categories)]
    })
    const authors = computed(()=> {
        let authors = flattenNavigationList.value.map((nav)=>nav.author).filter((cat)=>cat!==undefined)
        return [...new Set(authors)]
    })

    return {
        navigationList,
        filterOptions,
        currentNav,
        navigate,
        categories,
        authors
    };
}
