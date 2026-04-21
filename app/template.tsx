import Header from "@/components/Header";
import MenuSidebar from "@/components/Sidebar/MenuSidebar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
            <MenuSidebar>
                <main
                    style={{
                        height: 'calc(100vh - 40px)',
                        display: 'flex',
                        gap: 5,
                    }}>

                    {children}

                </main>
            </MenuSidebar>
    )
}