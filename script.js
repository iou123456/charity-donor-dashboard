// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Donation Trends Chart
    const trendsCtx = document.getElementById('donationTrendsChart').getContext('2d');
    const trendsChart = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Donations ($)',
                data: [3200, 4100, 3800, 5200, 6100, 7300],
                backgroundColor: 'rgba(74, 111, 165, 0.1)',
                borderColor: '#4a6fa5',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Donation Sources Chart
    const sourcesCtx = document.getElementById('donationSourcesChart').getContext('2d');
    const sourcesChart = new Chart(sourcesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Website', 'Mobile App', 'Email', 'Social Media', 'Events'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    '#4a6fa5',
                    '#4fc3a1',
                    '#f6c23e',
                    '#e74a3b',
                    '#858796'
                ],
                borderWidth: 0
            }]
        },
        // In your chart initialization code, add these options:
options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                maxRotation: 45,
                minRotation: 45
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                drawBorder: false
            }
        }
    }
}
    });

    // Mobile menu toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // This would be triggered by a menu button in a real implementation
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    }
    
    // Example: Add click event to a menu button (you would need to add this button to your HTML)
    // document.querySelector('.menu-toggle').addEventListener('click', toggleSidebar);
    
    // For demo purposes, we'll log that the dashboard is ready
    console.log('Charity Donor Dashboard initialized');
    
    // You could add more interactive functionality here
    // For example:
    // - Form submissions
    // - API calls to fetch real data
    // - More interactive UI elements
});

// Additional functions can be added here
function fetchDonationData() {
    // This would make an API call to get real data
    console.log('Fetching donation data...');
    // In a real implementation, you would:
    // 1. Make a fetch() call to your backend API
    // 2. Update the charts with the new data
}

function exportDonations() {
    // This would handle exporting donation data
    console.log('Exporting donations...');
    // In a real implementation, this might:
    // 1. Generate a CSV/Excel file
    // 2. Or make an API call to trigger an export
}
