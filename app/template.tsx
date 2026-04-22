import MenuSidebar from "@/components/Sidebar/MenuSidebar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
            <MenuSidebar>
                <main
                    style={{
                        height: 'calc(100vh - 100px)',
                        gap: 5,
                        paddingBottom: 50,
                        overflowY: 'auto'
                    }}>
                    {children}
                </main>
            </MenuSidebar>
    )
}