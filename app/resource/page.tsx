interface Resource {
    id: number;
}

export default function ResourcesPage({id}:Resource)
{
    return (
        <div>
            Resources Page
            {id}
            <div>
                Main
            </div>
            <div>
                Customizer
            </div>
        </div>
    )
}