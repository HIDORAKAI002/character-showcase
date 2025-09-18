document.addEventListener('DOMContentLoaded', () => {
    const characterData = [
        { name: 'Dinesh', role: 'Aspiring Developer & Gamer', age: '19 years old', location: 'Guntur,Andhra Pradesh-INDIA', quote: '“Code is like humor. When you have to explain it, it’s bad.”', bio: 'Passionate about technology and the creative process of building websites, I enjoy turning ideas into digital spaces that are simple, functional, and lasting. Outside of work, movies are a big part of my life—not just for entertainment but as a way to connect, reflect, and stay inspired. As a follower of Pawan Kalyan, I admire the values he represents—discipline, resilience, and standing up for what matters—and I try to bring the same energy into my own journey. Balancing professional goals with personal interests, I believe in steady growth, meaningful contributions, and finding inspiration in both code and cinema.', hobbies: ['📺 TFI', '📚 AI', '🎧 Music'], images: ['images/Dinesh.jpg', 'images/Dinesh_2.jpg', 'images/Dinesh_3.jpg', 'images/Dinesh_4.jpg', { type: 'video', src: 'videos/dinesh_clip.mp4' }], color: '#ff6347' },
        { name: 'Snehith', role: 'Creative Thinker & Club Owner', age: '19 years old', location: 'India', quote: '“Creativity is intelligence having fun.”', bio: 'Owner of the Horror Language Brainrot Club, known for bringing wild and unique perspectives into everything. Always looking for the strange, the unexpected, and the fun in conversations. Balances humor and creativity with an offbeat style that makes him stand out. At just 21, already shaping spaces where creativity and chaos collide.', hobbies: ['🚽 Skibidy Toilet', '🗣️🔥 DHABIDI-DHIBIDI'], images: ['images/Snehith.jpg', 'images/Snehith_2.jpg', 'images/Snehith_3.jpg', 'images/Snehith_4.jpg', { type: 'video', src: 'videos/snehith_clip.mp4' }], color: '#4682b4' },
        { name: 'Samuel', role: 'AM to PM in girls DM', age: '19', location: 'India', quote: '“Women are like fine wine—the older they get, the rarer the taste.”', bio: 'Women aren’t meant to be chased like prizes; they’re meant to be appreciated like masterpieces. True beauty doesn’t fade with age—it matures, sharpens, and deepens, just like fine wine. Confidence and grace are worth more than any fleeting trend. The real game isn’t in collecting attention, it’s in earning respect. A king doesn’t conquer women; he understands them, learns from them, and values the elegance that time only enhances. Life isn’t about running after validation—it’s about moving with presence, savoring conversations like vintage bottles, and recognizing that rarity is built, not given.', hobbies: ['👧 Ammai Settu', '❤️Heartu'], images: ['images/cris_samuel.jpg', 'images/cris_samuel_2.jpg', 'images/cris_samuel_3.jpg', 'images/cris_samuel_4.jpg', { type: 'video', src: 'videos/cris_clip.mp4' }], color: '#3cb371' },
        { name: 'Karthikeya', role: 'Bullet Enthusiast', age: '19 years old', location: 'India', quote: '“Life’s better with the engine roaring.”', bio: 'Life feels alive on the Bullet—the loud engine, the open road, and the unmatched vibe. Known for staying chill, hanging out, and never letting things get too heavy. Plays it off like there’s no relationship in sight, but everyone knows the story without him saying a word. Loyal, fun, and always up for a ride or a laugh, he keeps the mood light while still making his presence felt.', hobbies: ['🏍️ Bullet Vibes', '🎥 Reels', '🎶 Music'], images: ['images/Karthikeya.jpg', 'images/Karthikeya_2.jpg', 'images/Karthikeya_3.jpg', 'images/Karthikeya_4.jpg', { type: 'video', src: 'videos/karthikeya_clip.mp4' }], color: '#98fb98' },
        { name: 'Mohan', role: 'Independent Trader', age: '19', location: 'India', quote: '“Discipline over distraction, profits over validation.”', bio: 'I trade for myself, not for attention. The market is my only focus—no signals, no noise, and definitely no distractions. While others waste time chasing girls, I chase opportunities. Every profit is mine to claim, every loss is mine to own. I don’t rely on anyone, I don’t beg for advice, and I don’t let emotions cloud my moves. Discipline, patience, and self-reliance keep me ahead. Relationships fade, but profits stay. I’m not here to impress—I’m here to win, silently and on my own terms.', hobbies: ['📈 Trading', '📊 Charts', '💹 Market Analysis'], images: ['images/Mohan.jpg', 'images/Mohan_2.jpg', 'images/Mohan_3.jpg', 'images/Mohan_4.jpg', { type: 'video', src: 'videos/mohan_clip.mp4' }], color: '#f0e68c' },
        { name: 'Amarnadh', role: 'Placeholder Role', age: '19', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Amarnadh.jpg', 'images/Amarnadh_2.jpg', 'images/Amarnadh_3.jpg', 'images/Amarnadh_4.jpg', { type: 'video', src: 'videos/amarnadh_clip.mp4' }], color: '#ba55d3' },
        { name: 'Venkat Sai', role: 'Placeholder Role', age: '19', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/venkat_sai.jpg', 'images/venkat_sai_2.jpg', 'images/venkat_sai_3.jpg', 'images/venkat_sai_4.jpg', { type: 'video', src: 'videos/venkat_clip.mp4' }], color: '#ffa500' },
        { name: 'Sudhanshu', role: 'Placeholder Role', age: '19', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Sudhanshu.jpg', 'images/Sudhanshu_2.jpg', 'images/Sudhanshu_3.jpg', 'images/Sudhanshu_4.jpg', { type: 'video', src: 'videos/sudhanshu_clip.mp4' }], color: '#87ceeb' },
        { name: 'Deva Prasad', role: 'Placeholder Role', age: '19', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/deva_prasad.jpg', 'images/deva_prasad_2.jpg', 'images/deva_prasad_3.jpg', 'images/deva_prasad_4.jpg', { type: 'video', src: 'videos/deva_clip.mp4' }], color: '#da70d6' },
        { name: 'Chinnababu', role: 'Placeholder Role', age: '19', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Chinnababu.jpg', 'images/Chinnababu_2.jpg', 'images/Chinnababu_3.jpg', 'images/Chinnababu_4.jpg', { type: 'video', src: 'videos/chinna_clip.mp4' }], color: '#ffb6c1' }
    ];

    const preloader = document.getElementById('preloader');
    const loadingBar = document.querySelector('.loading-bar');
    const siteContainer = document.querySelector('.site-container');
    const cards = document.querySelectorAll('.character-card');
    const detailPage = document.querySelector('#detail-page');
    const closeBtn = document.querySelector('#close-btn');
    const mainContent = document.querySelector('.character-showcase');
    
    const detailName = detailPage.querySelector('.detail-name');
    const detailRole = detailPage.querySelector('.detail-role');
    const detailAge = detailPage.querySelector('.detail-age');
    const detailLocation = detailPage.querySelector('.detail-location');
    const detailQuote = detailPage.querySelector('.detail-quote');
    const detailBio = detailPage.querySelector('.detail-bio');
    const detailHobbiesList = detailPage.querySelector('.detail-hobbies-list');
    const detailImage = detailPage.querySelector('.detail-character-image');
    const detailVideo = detailPage.querySelector('.detail-character-video');
    const allDetailText = [detailName, detailRole, detailPage.querySelector('.detail-info-grid'), detailQuote, detailBio, detailPage.querySelector('.detail-hobbies')];
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentCharacter;
    let currentImageIndex = 0;

    function finishLoading() {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                preloader.style.display = 'none';
                gsap.to(siteContainer, { opacity: 1, duration: 0.5 });
            }
        });
    }

    function preloadImages() {
        gsap.set(siteContainer, { opacity: 0 });
        gsap.to(loadingBar, { width: '100%', duration: 1.5, ease: 'linear' });
        setTimeout(finishLoading, 1500);
    }

    function updateDetailPage(character) {
        currentCharacter = character;
        currentImageIndex = 0;
        detailName.textContent = character.name;
        detailRole.textContent = character.role;
        detailAge.textContent = character.age;
        detailLocation.textContent = character.location;
        detailQuote.textContent = character.quote;
        detailBio.textContent = character.bio;

        detailHobbiesList.innerHTML = '';
        character.hobbies.forEach(hobby => {
            const li = document.createElement('li');
            li.textContent = hobby;
            detailHobbiesList.appendChild(li);
        });

        showItem(character.images[0]);
    }

    function showItem(item) {
        if (typeof item === 'string') {
            detailVideo.pause();
            detailVideo.style.display = 'none';
            detailImage.style.display = 'block';
            detailImage.src = item;
        } else if (item.type === 'video') {
            detailImage.style.display = 'none';
            detailVideo.style.display = 'block';
            detailVideo.src = item.src;
            detailVideo.removeAttribute('controls');
            detailVideo.muted = false;
            detailVideo.volume = 1.0;
            detailVideo.loop = true;
            detailVideo.autoplay = true;
            detailVideo.play();
        }
    }

    function changeImage() {
        const item = currentCharacter.images[currentImageIndex];
        showItem(item);
    }

    function openAnimation(card) {
        const character = characterData[card.getAttribute('data-index')];
        updateDetailPage(character);
        gsap.set(allDetailText, { opacity: 0 });
        detailPage.classList.add('active');
        const tl = gsap.timeline();
        tl.fromTo(detailPage, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' })
          .to(allDetailText, { opacity: 1, y: 0, stagger: 0.05, duration: 0.4 }, "-=0.2");
    }

    function closeAnimation() {
        const tl = gsap.timeline({
            onComplete: () => {
                detailPage.classList.remove('active');
                gsap.set(allDetailText, { clearProps: "all" });
                detailVideo.pause();
            }
        });
        tl.to(allDetailText, { opacity: 0, y: -20, stagger: 0.05, duration: 0.3 })
          .to(detailPage, { opacity: 0, scale: 0.95, duration: 0.4 }, "-=0.2");
    }
    
    cards.forEach(card => {
        card.addEventListener('click', () => openAnimation(card));
    });

    closeBtn.addEventListener('click', () => closeAnimation());
    
    nextBtn.addEventListener('click', () => {
        if (!currentCharacter) return;
        currentImageIndex++;
        if (currentImageIndex >= currentCharacter.images.length) {
            currentImageIndex = 0;
        }
        changeImage();
    });

    prevBtn.addEventListener('click', () => {
        if (!currentCharacter) return;
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = currentCharacter.images.length - 1;
        }
        changeImage();
    });
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            mainContent.classList.add('grid-is-active');
            card.classList.add('is-hovered');
        });
        card.addEventListener('mouseleave', () => {
            mainContent.classList.remove('grid-is-active');
            card.classList.remove('is-hovered');
        });
    });

    preloadImages();
});