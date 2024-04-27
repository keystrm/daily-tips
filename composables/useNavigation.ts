import type { RouteLocationNormalizedLoaded } from "vue-router";

export async function useNavigation(route:RouteLocationNormalizedLoaded) {

    const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
    
    let initialFilterOptions:FilterOptions = { author: null, category: null, publishedAt: null, hasChildren: false }

    const filterOptions = ref(initialFilterOptions)

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
        let navList:NavComponent[] = JSON.parse(JSON.stringify(flattenNavigationList.value))
        return navList.filter(item => {
            let matches = true;
    
            if (filterOptions.value.author && item.author !== filterOptions.value.author) {
                matches = false;
            }
            if (filterOptions.value.category && item.category !== filterOptions.value.category) {
                matches = false;
            }
            if (filterOptions.value.publishedAt && item.publishedAt !== filterOptions.value.publishedAt) {
                matches = false;
            }
            if (typeof filterOptions.value.hasChildren === 'boolean') {
                const hasChildren = Boolean(item.children && item.children.length > 0)
                if (filterOptions.value.hasChildren !== hasChildren) {
                    matches = false;
                }
            }
    
            return matches;
        });

    });

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
