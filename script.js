document.addEventListener('DOMContentLoaded', () => {
    // We no longer need the Flip plugin with this simpler animation
    // gsap.registerPlugin(Flip); 

    const characterData = [
        { name: 'Dinesh', role: 'Aspiring Developer & Gamer', age: '20 years old', location: 'Guntur,Andhra Pradesh-INDIA', quote: '“Code is like humor. When you have to explain it, it’s bad.”', bio: 'Passionate about technology and the creative process of building websites, I enjoy turning ideas into digital spaces that are simple, functional, and lasting. Outside of work, movies are a big part of my life—not just for entertainment but as a way to connect, reflect, and stay inspired. As a follower of Pawan Kalyan, I admire the values he represents—discipline, resilience, and standing up for what matters—and I try to bring the same energy into my own journey. Balancing professional goals with personal interests, I believe in steady growth, meaningful contributions, and finding inspiration in both code and cinema.', hobbies: ['📺 TFI', '📚 AI', '🎧 Music'], images: ['images/Dinesh.jpg', 'images/Dinesh_2.jpg', 'images/Dinesh_3.jpg', 'images/Dinesh_4.jpg', 'images/Dinesh_5.jpg'], color: '#ff6347' },
        { name: 'Snehith', role: 'Creative Thinker', age: '21 years old', location: 'India', quote: '“Creativity is intelligence having fun.”', bio: 'Known for his unique perspective...', hobbies: ['🚽 skibidy toilet', '🗣️🔥DHABIDI-DHIBIDI'], images: ['images/Snehith.jpg', 'images/Snehith_2.jpg', 'images/Snehith_3.jpg', 'images/Snehith_4.jpg', 'images/Snehith_5.jpg'], color: '#4682b4' },
        { name: 'Cris Samuel', role: 'AM to PM in girls DM', age: '19', location: 'India', quote: '“Women are like fine wine—the older they get, the rarer the taste.”', bio: 'Women aren’t meant to be chased like prizes; they’re meant to be appreciated like masterpieces. True beauty doesn’t fade with age—it matures, sharpens, and deepens, just like fine wine. Confidence and grace are worth more than any fleeting trend. The real game isn’t in collecting attention, it’s in earning respect. A king doesn’t conquer women; he understands them, learns from them, and values the elegance that time only enhances. Life isn’t about running after validation—it’s about moving with presence, savoring conversations like vintage bottles, and recognizing that rarity is built, not given. Every interaction is art, every woman is poetry, and only those who know how to read between the lines truly get to enjoy it', hobbies: ['👧 Ammai Settu', '❤️Heartu'], images: ['images/cris_samuel.jpg', 'images/cris_samuel_2.jpg', 'images/cris_samuel_3.jpg', 'images/cris_samuel_4.jpg', 'images/cris_samuel_5.jpg'], color: '#3cb371' },
        { name: 'Amarnadh', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Amarnadh.jpg', 'images/Amarnadh_2.jpg', 'images/Amarnadh_3.jpg', 'images/Amarnadh_4.jpg', 'images/Amarnadh_5.jpg'], color: '#ba55d3' },
        { name: 'Venkat Sai', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/venkat_sai.jpg', 'images/venkat_sai_2.jpg', 'images/venkat_sai_3.jpg', 'images/venkat_sai_4.jpg', 'images/venkat_sai_5.jpg'], color: '#ffa500' },
        { name: 'Sudhanshu', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Sudhanshu.jpg', 'images/Sudhanshu_2.jpg', 'images/Sudhanshu_3.jpg', 'images/Sudhanshu_4.jpg', 'images/Sudhanshu_5.jpg'], color: '#87ceeb' },
        { name: 'Deva Prasad', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/deva_prasad.jpg', 'images/deva_prasad_2.jpg', 'images/deva_prasad_3.jpg', 'images/deva_prasad_4.jpg', 'images/deva_prasad_5.jpg'], color: '#da70d6' },
        { name: 'Mohan', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Mohan.jpg', 'images/Mohan_2.jpg', 'images/Mohan_3.jpg', 'images/Mohan_4.jpg', 'images/Mohan_5.jpg'], color: '#f0e68c' },
        { name: 'Karthikeya', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Karthikeya.jpg', 'images/Karthikeya_2.jpg', 'images/Karthikeya_3.jpg', 'images/Karthikeya_4.jpg', 'images/Karthikeya_5.jpg'], color: '#98fb98' },
        { name: 'Chinnababu', role: 'Placeholder Role', age: '20', location: 'India', quote: '“Placeholder”', bio: 'Placeholder bio.', hobbies: ['Placeholder'], images: ['images/Chinnababu.jpg', 'images/Chinnababu_2.jpg', 'images/Chinnababu_3.jpg', 'images/Chinnababu_4.jpg', 'images/Chinnababu_5.jpg'], color: '#ffb6c1' }
    ];

    const cards = document.querySelectorAll('.character-card');
    const detailPage = document.querySelector('#detail-page');
    const closeBtn = document.querySelector('#close-btn');
<<<<<<< HEAD
    const mainContent = document.querySelector('.character-showcase');
=======
    const mainContent = document.querySelector('.character-showcase'); // Get main container
>>>>>>> d11420ecad20483cc0f85f20ad07b0e6e698dc54
    
    const detailName = detailPage.querySelector('.detail-name');
    const detailRole = detailPage.querySelector('.detail-role');
    const detailAge = detailPage.querySelector('.detail-age');
    const detailLocation = detailPage.querySelector('.detail-location');
    const detailQuote = detailPage.querySelector('.detail-quote');
    const detailBio = detailPage.querySelector('.detail-bio');
    const detailHobbiesList = detailPage.querySelector('.detail-hobbies-list');
    const detailImage = detailPage.querySelector('.detail-character-image');
    const allDetailText = [detailName, detailRole, detailPage.querySelector('.detail-info-grid'), detailQuote, detailBio, detailPage.querySelector('.detail-hobbies')];
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentCharacter;
    let currentImageIndex = 0;
    
    function updateDetailPage(character) {
        currentCharacter = character;
        currentImageIndex = 0;
        detailName.textContent = character.name;
        detailRole.textContent = character.role;
        detailAge.textContent = character.age;
        detailLocation.textContent = character.location;
        detailQuote.textContent = character.quote;
        detailBio.textContent = character.bio;
        detailImage.src = character.images[currentImageIndex];
        detailHobbiesList.innerHTML = '';
        character.hobbies.forEach(hobby => {
            const li = document.createElement('li');
            li.textContent = hobby;
            detailHobbiesList.appendChild(li);
        });
    }

    // --- NEW, SIMPLER OPEN/CLOSE ANIMATION ---
    function openAnimation(card) {
        const character = characterData[card.getAttribute('data-index')];
        updateDetailPage(character);

        // Instantly hide the text to prepare for animation
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
            }
        });
        tl.to(allDetailText, { opacity: 0, y: -20, stagger: 0.05, duration: 0.3 })
          .to(detailPage, { opacity: 0, scale: 0.95, duration: 0.4 }, "-=0.2");
    }
    
    cards.forEach((card) => {
        card.addEventListener('click', () => openAnimation(card));
    });

<<<<<<< HEAD
    closeBtn.addEventListener('click', () => closeAnimation());
    
    function changeImage() {
        gsap.to(detailImage, { 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.in',
            onComplete: () => {
                detailImage.src = currentCharacter.images[currentImageIndex];
                gsap.to(detailImage, { 
                    opacity: 1, 
                    duration: 0.3, 
                    ease: 'power2.out' 
                });
            }
        });
    }

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
=======
    // --- CLOSE ANIMATION ---
    closeBtn.addEventListener('click', () => {
        if (!activeCard) return;

        const cardImage = activeCard.querySelector('.card-bg');
        detailImage.setAttribute('data-flip-id', cardImage.getAttribute('data-flip-id'));
        
        const state = Flip.getState([cardImage, detailImage, detailTextElements]);

        detailPage.classList.remove('active');
        activeCard.classList.remove('hide');

        Flip.from(state, {
            duration: 0.7,
            ease: "power3.inOut",
            absolute: true,
            onLeave: elements => gsap.to(elements, { 
                opacity: 0, 
                y: -40,
                stagger: 0.1
            })
>>>>>>> d11420ecad20483cc0f85f20ad07b0e6e698dc54
        });
    });
    
    // NEW: Logic for the grayscale hover effect
    mainContent.addEventListener('mouseenter', () => {
        mainContent.classList.add('grid-hover-effect');
    });
    
    mainContent.addEventListener('mouseleave', () => {
        mainContent.classList.remove('grid-hover-effect');
    });
});
