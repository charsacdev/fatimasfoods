document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const wrapper = document.getElementById('wrapper');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent body scroll when menu is open on mobile
        if (window.innerWidth <= 991) {
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }

    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function () {
            toggleSidebar();
        });
    }

    // Close on overlay click
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on route change/link click (mobile UX)
    document.querySelectorAll('#sidebar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Handle Active Menu Items
    const currentPath = window.location.pathname;
    document.querySelectorAll('#sidebar ul li a').forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) && href !== 'index.html') {
            document.querySelectorAll('#sidebar ul li').forEach(li => li.classList.remove('active'));
            link.parentElement.classList.add('active');
        } else if (currentPath.endsWith('/admin/') || currentPath.endsWith('index.html')) {
            if (href === 'index.html') {
                link.parentElement.classList.add('active');
            }
        }
    });
});
