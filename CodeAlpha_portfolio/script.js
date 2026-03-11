        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor =>  {
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

        //Resume download Code
        
        document.getElementById('resume').addEventListener('click', () =>{
            //Creating a temporary <a> element and the filepath to make the download possible
            const link = document.createElement('a');
            link.href = 'CodeAlpha_portfolio\Resume\Falodun_Emmanuel_Resume.pdf';
            link.download = 'Falodun_Emmanuel_Resume.pdf';

            //Programmatically adding the link to the body of the page
            document.body.appendChild(link);
            // and making it downloadable by 'click' it
            link.click();

            //Removing the temporary <a> element, cleanup
            document.body.removeChild(link);
        });
        //Let CSS effects take place as user scrolls past images
        const homePic = document.getElementById('Homepic');
        const abPic = document.getElementById('Abpic');

        const observer = new IntersectionObserver((entries)=>
        {
            entries.forEach(entry =>
            {
                if(entry.isIntersecting)
                {
                    entry.target.classList.add('visible');
                }
                else{
                    entry.target.classList.remove('visible');
                }
            });
        },{
            threshold: 0.5
        });

        observer.observe(homePic);
        observer.observe(Abpic);