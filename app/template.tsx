import Header from "@/components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                height: '100%'
            }}>
            <Header />
            <main
                style={{
                    height: 'calc(100vh - 40px)',
                }}>
                {children}
            </main>
        </div>
    )
}