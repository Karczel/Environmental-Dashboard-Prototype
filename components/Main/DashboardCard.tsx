import Link from "next/link";
import MediaBlock from "../MediaBlock";

interface DashboardCardProps {
    url: string;
    name: string;
    href: string;
}

export default function DashboardCard(
    { url, name, href }: DashboardCardProps
) {

    return (
        <Link href={href} className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <div
                    style={{
                        height: 250,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <MediaBlock
                        url={url} alt={name}
                        objectFit="contain" />
                </div>

            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
            </div>
        </Link>
    )
}