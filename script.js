// NYC Museums Data
// Using CSS-based gradients for visual representation instead of external images
// Each museum has a unique color scheme representing its character
const museums = [
    {
        id: 'broadway-museum',
        name: 'The Museum of Broadway',
        description: 'Explore the history of Broadway theater with interactive exhibits, costumes, and memorabilia from iconic shows. Perfect for theater lovers!',
        expandedInfo: 'The Museum of Broadway is the first permanent museum dedicated to Broadway\'s rich history. Located in Times Square, it features immersive exhibits showcasing over 500 artifacts including costumes, props, and set pieces from legendary shows. Visitors can explore interactive displays about the evolution of Broadway from its early days to modern blockbusters, see Tony Awards, and learn about the creative process behind bringing a show to the stage.',
        website: 'https://www.themuseumofbroadway.com/',
        images: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
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
        
        // Define color schemes for each museum
        const colorSchemes = [
            ['#8b5cf6', '#ec4899'], // Purple to Pink - Broadway
            ['#0ea5e9', '#06b6d4'], // Blue to Cyan - Natural History
            ['#f59e0b', '#ef4444'], // Amber to Red - Met
            ['#10b981', '#3b82f6'], // Green to Blue - Intrepid
            ['#6366f1', '#8b5cf6'], // Indigo to Purple - MoMA
            ['#f43f5e', '#ec4899']  // Rose to Pink - Lincoln Center
        ];
        
        const museumIndex = museums.findIndex(m => m.id === museum.id);
        const colors = colorSchemes[museumIndex] || ['#6366f1', '#8b5cf6'];
        
        // Add decorative divs instead of images
        museum.images.forEach((imageData, index) => {
            const imgDiv = document.createElement('div');
            imgDiv.className = `museum-image ${index === 0 ? 'active' : ''}`;
            imgDiv.setAttribute('role', 'img');
            imgDiv.setAttribute('aria-label', `${museum.name} - Image ${index + 1}`);
            
            // Create unique gradient for each image
            // Start at 135° and rotate 45° for each subsequent image (135°, 180°, 225°, 270°)
            // This creates visual variety while maintaining aesthetic consistency
            const angle = 135 + (index * 45);
            const color1 = colors[0];
            const color2 = colors[1];
            imgDiv.style.background = `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
            
            // Add decorative pattern overlay
            const pattern = document.createElement('div');
            pattern.className = 'museum-image-pattern';
            pattern.style.background = `radial-gradient(circle at ${20 + index * 20}% ${30 + index * 15}%, rgba(255,255,255,0.1) 0%, transparent 50%)`;
            imgDiv.appendChild(pattern);
            
            imageGallery.appendChild(imgDiv);
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
        
        info.innerHTML = `
            <h3>${museum.name}</h3>
            <p>${museum.description}</p>
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
    
    const colorSchemes = [
        { museum: 'The Museum of Broadway', colors: 'Purple to Pink gradient', theme: 'Vibrant theatrical energy' },
        { museum: 'American Museum of Natural History', colors: 'Blue to Cyan gradient', theme: 'Ocean and sky exploration' },
        { museum: 'The Metropolitan Museum of Art', colors: 'Amber to Red gradient', theme: 'Warmth of artistic heritage' },
        { museum: 'Intrepid Sea, Air & Space Museum', colors: 'Green to Blue gradient', theme: 'Sea to sky journey' },
        { museum: 'Museum of Modern Art (MoMA)', colors: 'Indigo to Purple gradient', theme: 'Contemporary artistic vision' },
        { museum: 'Lincoln Center for the Performing Arts', colors: 'Rose to Pink gradient', theme: 'Elegance of performing arts' }
    ];
    
    colorSchemes.forEach(scheme => {
        const museumAttr = document.createElement('div');
        museumAttr.className = 'museum-attribution';
        
        const title = document.createElement('h4');
        title.textContent = scheme.museum;
        museumAttr.appendChild(title);
        
        const desc = document.createElement('p');
        desc.innerHTML = `<strong>${scheme.colors}</strong> - ${scheme.theme}`;
        museumAttr.appendChild(desc);
        
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
