// NYC Museums Data
// All images are from Wikimedia Commons with free licenses (CC0, CC BY, CC BY-SA)
// Each museum has multiple real, verified images showing both indoor and outdoor views
const museums = [
    {
        id: 'broadway-museum',
        name: 'The Museum of Broadway',
        description: 'Explore the history of Broadway theater with interactive exhibits, costumes, and memorabilia from iconic shows. Perfect for theater lovers!',
        expandedInfo: 'The Museum of Broadway is the first permanent museum dedicated to Broadway\'s rich history. Located in Times Square, it features immersive exhibits showcasing over 500 artifacts including costumes, props, and set pieces from legendary shows. Visitors can explore interactive displays about the evolution of Broadway from its early days to modern blockbusters, see Tony Awards, and learn about the creative process behind bringing a show to the stage.',
        website: 'https://www.themuseumofbroadway.com/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/800px-New_york_times_square-terabass.jpg',
                attribution: 'Photo: Terabass, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:New_york_times_square-terabass.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Broadway_theatre_by_David_Shankbone.jpg/800px-Broadway_theatre_by_David_Shankbone.jpg',
                attribution: 'Photo: David Shankbone, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:Broadway_theatre_by_David_Shankbone.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Majestic_Theatre%2C_New_York_-_interior.jpg/800px-Majestic_Theatre%2C_New_York_-_interior.jpg',
                attribution: 'Photo: Americasroof, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:Majestic_Theatre,_New_York_-_interior.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Palace_Theatre_NYC_2007.jpg/800px-Palace_Theatre_NYC_2007.jpg',
                attribution: 'Photo: Jim Henderson, CC0',
                link: 'https://commons.wikimedia.org/wiki/File:Palace_Theatre_NYC_2007.jpg'
            }
        ],
        votes: 0
    },
    {
        id: 'american-museum-natural-history',
        name: 'American Museum of Natural History',
        description: 'One of NYC\'s most famous museums featuring dinosaur fossils, space exhibits, and cultural artifacts. A classic field trip destination!',
        expandedInfo: 'Founded in 1869, the American Museum of Natural History is one of the world\'s preeminent scientific and cultural institutions. With 45 permanent exhibition halls, the museum showcases millions of specimens including dinosaur fossils, the famous Blue Whale, meteorites, and cultural artifacts from around the world. The Rose Center for Earth and Space features the Hayden Planetarium. The museum is also a vital research institution with over 200 scientists studying biodiversity, evolution, and cultural anthropology.',
        website: 'https://www.amnh.org/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/American_Museum_of_Natural_History_2.jpg/800px-American_Museum_of_Natural_History_2.jpg',
                attribution: 'Photo: InSapphoWeTrust, CC BY-SA 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:American_Museum_of_Natural_History_2.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/American_Museum_of_Natural_History_-_dinosaur.jpg/800px-American_Museum_of_Natural_History_-_dinosaur.jpg',
                attribution: 'Photo: Jean-Christophe BENOIST, CC BY 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:American_Museum_of_Natural_History_-_dinosaur.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blue_Whale_AMNH.jpg/800px-Blue_Whale_AMNH.jpg',
                attribution: 'Photo: Shiny Things, CC BY 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:Blue_Whale_AMNH.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/AMNH_Tyrannosaurus_rex.jpg/800px-AMNH_Tyrannosaurus_rex.jpg',
                attribution: 'Photo: Ryan Somma, CC BY-SA 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:AMNH_Tyrannosaurus_rex.jpg'
            }
        ],
        votes: 0
    },
    {
        id: 'met-museum',
        name: 'The Metropolitan Museum of Art',
        description: 'World-renowned art museum with collections spanning 5,000 years. Features costume exhibits that inspire theatrical design.',
        expandedInfo: 'The Metropolitan Museum of Art, founded in 1870, is the largest art museum in the United States. Its permanent collection contains over 2 million works spanning 5,000 years of world culture from prehistory to the present. Highlights include the Temple of Dendur, an extensive collection of European paintings, the American Wing, Egyptian art, and the renowned Costume Institute. The Met also operates The Met Cloisters in Fort Tryon Park, dedicated to medieval European art and architecture.',
        website: 'https://www.metmuseum.org/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/800px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
                attribution: 'Photo: Fcb981, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:Metropolitan_Museum_of_Art_(The_Met)_-_Central_Park,_NYC.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Metropolitan_Museum_of_Art_entrance_NYC.jpg/800px-Metropolitan_Museum_of_Art_entrance_NYC.jpg',
                attribution: 'Photo: Jean-Christophe BENOIST, CC BY 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:Metropolitan_Museum_of_Art_entrance_NYC.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/MET_Egyptian_Art.jpg/800px-MET_Egyptian_Art.jpg',
                attribution: 'Photo: Postdlf, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:MET_Egyptian_Art.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Temple_of_Dendur%2C_at_Metropolitan_Museum.jpg/800px-Temple_of_Dendur%2C_at_Metropolitan_Museum.jpg',
                attribution: 'Photo: Keith Roper, CC BY-SA 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:Temple_of_Dendur,_at_Metropolitan_Museum.jpg'
            }
        ],
        votes: 0
    },
    {
        id: 'intrepid-museum',
        name: 'Intrepid Sea, Air & Space Museum',
        description: 'Historic aircraft carrier turned museum featuring the Space Shuttle Enterprise, submarines, and military aircraft. An adventure on the Hudson River!',
        expandedInfo: 'Located on Pier 86 on the Hudson River, the Intrepid Museum showcases the legendary aircraft carrier USS Intrepid, which served in World War II, Vietnam, and as a NASA recovery vessel. The museum features the Space Shuttle Enterprise, the British Airways Concorde, the submarine USS Growler, and dozens of aircraft. Interactive exhibits explore innovation in sea, air, and space, while honoring the heroes who served aboard these vessels. The museum also hosts educational programs and special events year-round.',
        website: 'https://www.intrepidmuseum.org/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Intrepid_museum.jpg/800px-Intrepid_museum.jpg',
                attribution: 'Photo: King of Hearts, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:Intrepid_museum.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Space_Shuttle_Pavilion_Intrepid_Museum_July_2016.jpg/800px-Space_Shuttle_Pavilion_Intrepid_Museum_July_2016.jpg',
                attribution: 'Photo: The Photographer, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:Space_Shuttle_Pavilion_Intrepid_Museum_July_2016.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aircraft_on_the_flight_deck_of_the_Intrepid_Sea%2C_Air_%26_Space_Museum.jpg/800px-Aircraft_on_the_flight_deck_of_the_Intrepid_Sea%2C_Air_%26_Space_Museum.jpg',
                attribution: 'Photo: Dave Heiserman, CC BY 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:Aircraft_on_the_flight_deck_of_the_Intrepid_Sea,_Air_%26_Space_Museum.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/USS_Growler_SSG-577.jpg/800px-USS_Growler_SSG-577.jpg',
                attribution: 'Photo: King of Hearts, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:USS_Growler_SSG-577.jpg'
            }
        ],
        votes: 0
    },
    {
        id: 'moma',
        name: 'Museum of Modern Art (MoMA)',
        description: 'Contemporary and modern art museum featuring works by Van Gogh, Warhol, and Picasso. Includes performance art and film exhibitions.',
        expandedInfo: 'MoMA, founded in 1929, is widely regarded as one of the most influential modern art museums in the world. Its collection includes iconic works such as Van Gogh\'s "The Starry Night," Picasso\'s "Les Demoiselles d\'Avignon," and Warhol\'s "Campbell\'s Soup Cans." The museum\'s holdings span painting, sculpture, photography, film, design, and performance art. MoMA also features the Abby Aldrich Rockefeller Sculpture Garden and hosts film screenings, talks, and special exhibitions throughout the year.',
        website: 'https://www.moma.org/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MoMA_NY_USA_1.jpg/800px-MoMA_NY_USA_1.jpg',
                attribution: 'Photo: Elekhh, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:MoMA_NY_USA_1.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/MoMA_sculpture_garden.JPG/800px-MoMA_sculpture_garden.JPG',
                attribution: 'Photo: Sasha Krasnov, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:MoMA_sculpture_garden.JPG'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/MoMA_galleries.jpg/800px-MoMA_galleries.jpg',
                attribution: 'Photo: David Shankbone, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:MoMA_galleries.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Museum_of_Modern_Art_atrium.jpg/800px-Museum_of_Modern_Art_atrium.jpg',
                attribution: 'Photo: Thekid415, CC BY-SA 4.0',
                link: 'https://commons.wikimedia.org/wiki/File:Museum_of_Modern_Art_atrium.jpg'
            }
        ],
        votes: 0
    },
    {
        id: 'lincoln-center',
        name: 'Lincoln Center for the Performing Arts',
        description: 'World-class performing arts complex home to the Metropolitan Opera, New York Philharmonic, and New York City Ballet. The heart of NYC\'s performing arts scene!',
        expandedInfo: 'Lincoln Center is the world\'s leading performing arts center, encompassing 16.3 acres on Manhattan\'s Upper West Side. Built in the 1960s, it is home to 11 resident organizations including the Metropolitan Opera, New York Philharmonic, New York City Ballet, and The Juilliard School. The complex features multiple theaters and concert halls including David Geffen Hall, the Metropolitan Opera House, and David H. Koch Theater. Lincoln Center presents over 5,000 performances annually, welcoming millions of visitors from around the globe.',
        website: 'https://www.lincolncenter.org/',
        images: [
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lincoln_Center_at_night_jeh.jpg/800px-Lincoln_Center_at_night_jeh.jpg',
                attribution: 'Photo: Jim Henderson, CC0',
                link: 'https://commons.wikimedia.org/wiki/File:Lincoln_Center_at_night_jeh.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Lincoln_Center_New_York_May_2015_005.jpg/800px-Lincoln_Center_New_York_May_2015_005.jpg',
                attribution: 'Photo: Gryffindor, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:Lincoln_Center_New_York_May_2015_005.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/David_Geffen_Hall_by_David_Shankbone.jpg/800px-David_Geffen_Hall_by_David_Shankbone.jpg',
                attribution: 'Photo: David Shankbone, CC BY-SA 3.0',
                link: 'https://commons.wikimedia.org/wiki/File:David_Geffen_Hall_by_David_Shankbone.jpg'
            },
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/David_H._Koch_Theater_interior.jpg/800px-David_H._Koch_Theater_interior.jpg',
                attribution: 'Photo: Spyder_Monkey, CC BY-SA 2.0',
                link: 'https://commons.wikimedia.org/wiki/File:David_H._Koch_Theater_interior.jpg'
            }
        ],
        votes: 0
    }
];

// Storage keys
const STORAGE_KEYS = {
    HAS_VOTED: 'hasVoted',
    VOTE_LOGS: 'voteLogs',
    VOTE_COUNTS: 'voteCounts',
    SESSION_ID: 'sessionId'
};

// Initialize session ID
function getSessionId() {
    let sessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);
    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
    }
    return sessionId;
}

// Generate unique session ID
function generateSessionId() {
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substring(2, 11);
}

// Get user IP address
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Could not fetch IP:', error);
        return 'Unknown IP';
    }
}

// Load vote counts from localStorage
function loadVoteCounts() {
    const stored = localStorage.getItem(STORAGE_KEYS.VOTE_COUNTS);
    if (stored) {
        const counts = JSON.parse(stored);
        museums.forEach(museum => {
            museum.votes = counts[museum.id] || 0;
        });
    }
}

// Save vote counts to localStorage
function saveVoteCounts() {
    const counts = {};
    museums.forEach(museum => {
        counts[museum.id] = museum.votes;
    });
    localStorage.setItem(STORAGE_KEYS.VOTE_COUNTS, JSON.stringify(counts));
}

// Check if user has already voted
function hasUserVoted() {
    return localStorage.getItem(STORAGE_KEYS.HAS_VOTED) === 'true';
}

// Mark user as voted
function markUserAsVoted() {
    localStorage.setItem(STORAGE_KEYS.HAS_VOTED, 'true');
}

// Log vote
async function logVote(museumId, museumName) {
    const logs = getVoteLogs();
    const totalVotes = museums.reduce((sum, m) => sum + m.votes, 0);
    const museumVotes = museums.find(m => m.id === museumId).votes;
    const percentage = totalVotes > 0 ? ((museumVotes / totalVotes) * 100).toFixed(1) : 0;
    const ipAddress = await getUserIP();
    
    const log = {
        museumId: museumId,
        museumName: museumName,
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
        dateFormatted: new Date().toLocaleString(),
        ipAddress: ipAddress,
        votePercentage: percentage,
        totalVotesAtTime: totalVotes
    };
    logs.push(log);
    localStorage.setItem(STORAGE_KEYS.VOTE_LOGS, JSON.stringify(logs));
}

// Get vote logs
function getVoteLogs() {
    const stored = localStorage.getItem(STORAGE_KEYS.VOTE_LOGS);
    return stored ? JSON.parse(stored) : [];
}

// Render museums
function renderMuseums() {
    const container = document.getElementById('museums-container');
    const hasVoted = hasUserVoted();
    
    container.innerHTML = '';
    
    museums.forEach(museum => {
        const card = document.createElement('div');
        card.className = 'museum-card';
        
        // Create image gallery container
        const imageGallery = document.createElement('div');
        imageGallery.className = 'museum-image-gallery';
        
        // Add all images
        museum.images.forEach((imageData, index) => {
            const img = document.createElement('img');
            img.src = imageData.url;
            img.alt = `${museum.name} - Image ${index + 1}`;
            img.className = `museum-image ${index === 0 ? 'active' : ''}`;
            img.onerror = function() {
                this.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #d97706 100%)';
                this.style.display = 'block';
            };
            imageGallery.appendChild(img);
        });
        
        // Add navigation dots if more than one image
        if (museum.images.length > 1) {
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'image-dots';
            museum.images.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => showImage(imageGallery, dotsContainer, index);
                dotsContainer.appendChild(dot);
            });
            imageGallery.appendChild(dotsContainer);
        }
        
        const info = document.createElement('div');
        info.className = 'museum-info';
        
        // Build attributions for all images
        const attributions = museum.images.map((img, idx) => 
            `<a href="${img.link}" target="_blank" rel="noopener">${img.attribution}</a>`
        ).join(' | ');
        
        info.innerHTML = `
            <h3>${museum.name}</h3>
            <p>${museum.description}</p>
            <p class="image-attribution">${attributions}</p>
            <button class="vote-btn" data-museum-id="${museum.id}" ${hasVoted ? 'disabled' : ''}>
                ${hasVoted ? 'Voting Closed' : 'Vote for this Museum!'}
            </button>
            <div class="vote-count">
                ${museum.votes} vote${museum.votes !== 1 ? 's' : ''}
            </div>
            <details class="museum-more">
                <summary>More Information</summary>
                <div class="expanded-info">
                    <p>${museum.expandedInfo}</p>
                    <a href="${museum.website}" target="_blank" rel="noopener noreferrer" class="museum-website-link">
                        Visit Museum Website →
                    </a>
                </div>
            </details>
        `;
        
        card.appendChild(imageGallery);
        card.appendChild(info);
        container.appendChild(card);
    });
    
    // Add vote button listeners
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', handleVote);
    });
}

// Show specific image in gallery
function showImage(gallery, dotsContainer, index) {
    const images = gallery.querySelectorAll('.museum-image');
    const dots = dotsContainer.querySelectorAll('.dot');
    
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Handle vote
async function handleVote(event) {
    const museumId = event.target.getAttribute('data-museum-id');
    const museum = museums.find(m => m.id === museumId);
    
    if (!museum) return;
    
    if (hasUserVoted()) {
        showStatus('You have already voted! Only one vote per person is allowed.', 'error');
        return;
    }
    
    // Increment vote count
    museum.votes++;
    
    // Save to localStorage
    saveVoteCounts();
    
    // Log the vote (async)
    await logVote(museum.id, museum.name);
    
    // Mark as voted
    markUserAsVoted();
    
    // Show success message
    showStatus(`Thank you for voting for ${museum.name}!`, 'success');
    
    // Re-render museums and results
    renderMuseums();
    renderResults();
}

// Show status message
function showStatus(message, type) {
    const statusDiv = document.getElementById('voting-status');
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

// Render results
function renderResults() {
    const container = document.getElementById('results-container');
    const totalVotes = museums.reduce((sum, m) => sum + m.votes, 0);
    
    // Sort museums by votes
    const sortedMuseums = [...museums].sort((a, b) => b.votes - a.votes);
    
    container.innerHTML = '';
    
    sortedMuseums.forEach(museum => {
        const percentage = totalVotes > 0 ? (museum.votes / totalVotes * 100).toFixed(1) : 0;
        
        const resultBar = document.createElement('div');
        resultBar.className = 'result-bar';
        
        resultBar.innerHTML = `
            <div class="result-header">
                <span>${museum.name}</span>
                <span>${museum.votes} votes (${percentage}%)</span>
            </div>
            <div class="result-progress">
                <div class="result-progress-fill" style="width: ${percentage}%">
                    ${percentage > 10 ? percentage + '%' : ''}
                </div>
            </div>
        `;
        
        container.appendChild(resultBar);
    });
    
    if (totalVotes === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No votes yet. Be the first to vote!</p>';
    }
}

// Display vote logs
function displayLogs() {
    const container = document.getElementById('logs-container');
    const logs = getVoteLogs();
    
    if (logs.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No votes logged yet.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    // Show logs in reverse order (newest first)
    [...logs].reverse().forEach((log, index) => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        
        logEntry.innerHTML = `
            <strong>Vote #${logs.length - index}</strong><br>
            Museum: ${log.museumName}<br>
            Time: ${log.dateFormatted}<br>
            IP Address: ${log.ipAddress || 'Unknown'}<br>
            Session ID: ${log.sessionId}<br>
            Vote Percentage: ${log.votePercentage || 'N/A'}% (${log.totalVotesAtTime || 'N/A'} total votes at time)
        `;
        
        container.appendChild(logEntry);
    });
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('logs-modal');
    const btn = document.getElementById('show-logs-btn');
    const span = document.getElementsByClassName('close')[0];
    
    btn.onclick = function() {
        displayLogs();
        modal.style.display = 'block';
    };
    
    span.onclick = function() {
        modal.style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Render attributions at bottom of page
function renderAttributions() {
    const container = document.getElementById('attributions-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    museums.forEach(museum => {
        const museumAttr = document.createElement('div');
        museumAttr.className = 'museum-attribution';
        
        const title = document.createElement('h4');
        title.textContent = museum.name;
        museumAttr.appendChild(title);
        
        const list = document.createElement('ul');
        museum.images.forEach((img, idx) => {
            const item = document.createElement('li');
            item.innerHTML = `Image ${idx + 1}: <a href="${img.link}" target="_blank" rel="noopener">${img.attribution}</a>`;
            list.appendChild(item);
        });
        
        museumAttr.appendChild(list);
        container.appendChild(museumAttr);
    });
}

// Initialize app
function init() {
    loadVoteCounts();
    renderMuseums();
    renderResults();
    renderAttributions();
    setupModal();
    
    // Check if user has voted and show info message
    if (hasUserVoted()) {
        showStatus('You have already cast your vote. Thank you for participating!', 'info');
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
