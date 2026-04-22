import React from 'react';

const ResourceCircles = () => {
    // Mock data for 4 resources
    const resources = [
        { id: 1, name: "Unit 1", color: "bg-blue-500", usage: "75%", status: "Stable", fill: " 75%" },
        { id: 2, name: "Unit 2", color: "bg-blue-500", usage: "40%", status: "Stable", fill: "40%" },
        { id: 3, name: "Unit 3", color: "bg-red-500", usage: "90%", status: "Unstable", fill: "90%" },
        { id: 4, name: "Unit 4", color: "bg-blue-500", usage: "20%", status: "Stable", fill: "20%" },
    ];

    return (
        <div className="flex justify-center items-center gap-8 p-8">
            {resources.map((resource) => (
                <div key={resource.id} className="flex flex-col items-center">
                    <div className="tooltip tooltip-bottom">
                        <div className="tooltip-content"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                fontWeight: 'bold'
                            }}>
                            <div
                                style={{
                                    fontSize: 16
                                }}>
                                {resource.name}
                            </div>
                            <div
                                style={{
                                    fontWeight: resource.status == "Stable" ? 'inherit' : 'bolder',
                                    color: resource.status == "Stable" ? '#49d294' : "#ff4848"
                                }}>
                                Status: {resource.status}
                            </div>
                            <div>
                                Fill: {resource.fill}
                            </div>
                        </div>

                        <div className={`w-16 h-16 rounded-full ${resource.color} flex items-center justify-center cursor-pointer`}>
                            <span className="text-white font-bold">{resource.usage}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResourceCircles;