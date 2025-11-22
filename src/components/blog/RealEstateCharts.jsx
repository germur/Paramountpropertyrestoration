import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const chartColors = [
    "#35c3e9", // Primary teal
    "#1e293b", // Dark navy
    "#64748b", // Gray
    "#10b981", // Green
    "#ea580c", // Orange
];

const createTooltipCallback = () => {
    return {
        title: function (tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(" ");
            } else {
                return label;
            }
        },
    };
};

export const HealthRiskChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");
            try {
                chartInstance.current = new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        labels: [
                            "Allergies",
                            ["Respiratory", "Issues"],
                            ["Chronic", "Headaches"],
                            ["Skin", "Irritation"],
                            "Other",
                        ],
                        datasets: [
                            {
                                label: "Symptom Distribution",
                                data: [40, 30, 15, 10, 5],
                                backgroundColor: chartColors,
                                borderColor: "#FFFFFF",
                                borderWidth: 2,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: "bottom",
                            },
                            tooltip: {
                                callbacks: createTooltipCallback(),
                            },
                        },
                    },
                });
            } catch (error) {
                console.error("HealthRiskChart: Error creating chart", error);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container h-80 md:h-96 w-full relative max-w-[600px] mx-auto h-[300px] md:h-[350px]">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export const SellerImpactChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");
            chartInstance.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [
                        ["Deal", "Cancellation"],
                        ["Price", "Reduction"],
                        "No Impact",
                    ],
                    datasets: [
                        {
                            label: "Impact on Sale (%)",
                            data: [30, 50, 20],
                            backgroundColor: [
                                "#ea580c", // Orange
                                "#35c3e9", // Teal
                                "#10b981", // Green
                            ],
                            borderRadius: 4,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 60,
                            ticks: {
                                callback: function (value) {
                                    return value + "%";
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: createTooltipCallback(),
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container h-80 md:h-96 w-full relative max-w-[600px] mx-auto h-[300px] md:h-[350px]">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export const MoldTypesChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");
            chartInstance.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [
                        "Aspergillus",
                        "Cladosporium",
                        ["Stachybotrys", "(Black Mold)"],
                        "Penicillium",
                        "Other",
                    ],
                    datasets: [
                        {
                            label: "Frequency in Homes (%)",
                            data: [35, 25, 15, 15, 10],
                            backgroundColor: chartColors,
                            borderRadius: 4,
                        },
                    ],
                },
                options: {
                    indexAxis: "y",
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value + "%";
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: createTooltipCallback(),
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container h-96 w-full relative max-w-[600px] mx-auto h-[300px] md:h-[350px]">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};
