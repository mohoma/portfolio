import Link from "next/link";

const navItems = {
    '/': {
        name: 'me',
    },
    '/projects': {
        name: 'projects',
    },
    '/now': {
        name: 'now',
    },
    '/blog': {
        name: 'blog',
    }
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] tracking-tight flex content">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, {name}]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={`transition-all text-[#6b7290] dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1`}
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    )
}