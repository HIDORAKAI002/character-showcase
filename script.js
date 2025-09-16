document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(Flip);

    const characterData = [
        { rank: '01', name: 'Dinesh', bio: 'This is the biography for Dinesh. You can edit this text.', image: 'images/Dinesh.jpg', color: '#ff6347' },
        { rank: '02', name: 'Snehith', bio: 'This is the biography for Snehith. You can edit this text.', image: 'images/Snehith.jpg', color: '#4682b4' },
        { rank: '03', name: 'Cris Samuel', bio: 'This is the biography for Cris Samuel. You can edit this text.', image: 'images/cris_samuel.jpg', color: '#3cb371' },
        { rank: '04', name: 'Amarnadh', bio: 'This is the biography for Amarnadh. You can edit this text.', image: 'images/Amarnadh.jpg', color: '#ba55d3' },
        { rank: '05', name: 'Venkat Sai', bio: 'This is the biography for Venkat Sai. You can edit this text.', image: 'images/venkat_sai.jpg', color: '#ffa500' },
        { rank: '06', name: 'Sudhanshu', bio: 'This is the biography for Sudhanshu. You can edit this text.', image: 'images/Sudhanshu.jpg', color: '#87ceeb' },
        { rank: '07', name: 'Deva Prasad', bio: 'This is the biography for Deva Prasad. You can edit this text.', image: 'images/deva_prasad.jpg', color: '#da70d6' },
        { rank: '08', name: 'Yoga Nandha', bio: 'This is the biography for Yoga Nandha. You can edit this text.', image: 'images/yoga_nandha.jpg', color: '#f0e68c' },
        { rank: '09', name: 'Karthikeya', bio: 'This is the biography for Karthikeya. You can edit this text.', image: 'images/Karthikeya.jpg', color: '#98fb98' },
        { rank: '10', name: 'Chinnababu', bio: 'This is the biography for Chinnababu. You can edit this text.', image: 'images/Chinnababu.jpg', color: '#ffb6c1' }
    ];

    const cards = document.querySelectorAll('.character-card');
    const detailPage = document.querySelector('#detail-page');
    const closeBtn = document.querySelector('#close-btn');
    
    const detailRank = detailPage.querySelector('.detail-rank-number');
    const detailName = detailPage.querySelector('.detail-character-name');
    const detailBio = detailPage.querySelector('.detail-bio');
    const detailTextElements = [detailRank, detailName, detailBio];
    const detailImage = detailPage.querySelector('.detail-character-image');
    let activeCard = null;

    function updateDetailPage(character) {
        detailRank.textContent = character.rank;
        detailName.textContent = character.name;
        detailBio.textContent = character.bio;
        detailImage.src = character.image;
        detailRank.style.color = character.color;
    }

    // --- OPEN ANIMATION ---
    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.preventDefault();
            
            activeCard = card;
            const character = characterData[card.getAttribute('data-index')];
            updateDetailPage(character);

            const cardImage = card.querySelector('.card-bg');
            detailImage.setAttribute('data-flip-id', cardImage.getAttribute('data-flip-id'));
            
            const state = Flip.getState([cardImage, detailImage, detailTextElements]);
            
            card.classList.add('hide');
            detailPage.classList.add('active');

            Flip.from(state, {
                duration: 0.7,
                ease: "power3.inOut",
                absolute: true,
                onEnter: elements => gsap.from(elements, { 
                    y: 40, 
                    opacity: 0, 
                    duration: 0.5, 
                    stagger: 0.1,
                    delay: 0.2
                }),
                onLeave: elements => gsap.to(elements, { opacity: 0 })
            });
        });
    });

    // --- CLOSE ANIMATION (Corrected Logic) ---
    closeBtn.addEventListener('click', () => {
        if (!activeCard) return;

        const cardImage = activeCard.querySelector('.card-bg');
        detailImage.setAttribute('data-flip-id', cardImage.getAttribute('data-flip-id'));
        
        // 1. Get the state of all elements in their final position
        const state = Flip.getState([cardImage, detailImage, detailTextElements]);

        // 2. Immediately change the classes to the initial layout
        detailPage.classList.remove('active');
        activeCard.classList.remove('hide');

        // 3. Animate FROM the state we captured TO the new state
        Flip.from(state, {
            duration: 0.7,
            ease: "power3.inOut",
            absolute: true,
            // Animate the text elements out as they "leave" the scene
            onLeave: elements => gsap.to(elements, { 
                opacity: 0, 
                y: -40,
                stagger: 0.05
            })
        });
    });
});