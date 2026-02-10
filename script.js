// NYC Museums Data
const museums = [
    {
        id: 'broadway-museum',
        name: 'The Museum of Broadway',
        description: 'Explore the history of Broadway theater with interactive exhibits, costumes, and memorabilia from iconic shows. Perfect for theater lovers!',
        image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop',
        votes: 0
    },
    {
        id: 'american-museum-natural-history',
        name: 'American Museum of Natural History',
        description: 'One of NYC\'s most famous museums featuring dinosaur fossils, space exhibits, and cultural artifacts. A classic field trip destination!',
        image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=600&h=400&fit=crop',
        votes: 0
    },
    {
        id: 'met-museum',
        name: 'The Metropolitan Museum of Art',
        description: 'World-renowned art museum with collections spanning 5,000 years. Features costume exhibits that inspire theatrical design.',
        image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=600&h=400&fit=crop',
        votes: 0
    },
    {
        id: 'intrepid-museum',
        name: 'Intrepid Sea, Air & Space Museum',
        description: 'Historic aircraft carrier turned museum featuring the Space Shuttle Enterprise, submarines, and military aircraft. An adventure on the Hudson River!',
        image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop',
        votes: 0
    },
    {
        id: 'moma',
        name: 'Museum of Modern Art (MoMA)',
        description: 'Contemporary and modern art museum featuring works by Van Gogh, Warhol, and Picasso. Includes performance art and film exhibitions.',
        image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&h=400&fit=crop',
        votes: 0
    },
    {
        id: 'lincoln-center',
        name: 'Lincoln Center for the Performing Arts',
        description: 'World-class performing arts complex home to the Metropolitan Opera, New York Philharmonic, and New York City Ballet. The heart of NYC\'s performing arts scene!',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop',
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
        
        card.innerHTML = `
            <img src="${museum.image}" alt="${museum.name}" class="museum-image" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; this.style.display='block';">
            <div class="museum-info">
                <h3>${museum.name}</h3>
                <p>${museum.description}</p>
                <button class="vote-btn" data-museum-id="${museum.id}" ${hasVoted ? 'disabled' : ''}>
                    ${hasVoted ? 'Voting Closed' : 'Vote for this Museum!'}
                </button>
                <div class="vote-count">
                    ${museum.votes} vote${museum.votes !== 1 ? 's' : ''}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Add vote button listeners
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', handleVote);
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

// Initialize app
function init() {
    loadVoteCounts();
    renderMuseums();
    renderResults();
    setupModal();
    
    // Check if user has voted and show info message
    if (hasUserVoted()) {
        showStatus('You have already cast your vote. Thank you for participating!', 'info');
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
