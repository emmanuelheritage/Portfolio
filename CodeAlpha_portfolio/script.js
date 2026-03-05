        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Hamburger Icon Function
        const hamburger = document.querySelector('.hamburger');
        const nav = document.getElementById('links');

        hamburger.addEventListener('click', function()
        {
            nav.classList.toggle('active');
        });

        //Closes menu when a link is clicked
        document.querySelectorAll('#links a').forEach(link =>
        {
            link.addEventListener('click', () =>
            {
                nav.classList.remove('active');
            });
            
        });