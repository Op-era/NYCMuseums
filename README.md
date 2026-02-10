# NYCMuseums
Website for Sunnyside Highschool Wildcats Playhouse

## NYC Museums Poll

An interactive polling website for Sunnyside Highschool Wildcats Playhouse to vote on their next NYC field trip destination.

### Features

- **6 NYC Museums to Choose From:**
  - The Museum of Broadway - Theater history museum
  - American Museum of Natural History - Classic NYC museum
  - The Metropolitan Museum of Art - Art and costume exhibits
  - Intrepid Sea, Air & Space Museum - Military and space exhibits
  - Museum of Modern Art (MoMA) - Contemporary art
  - Lincoln Center for the Performing Arts - Performing arts venue

- **Voting System:**
  - One vote per person (enforced via localStorage)
  - Real-time results with percentages
  - Vote tracking with timestamps and session IDs
  - IP address tracking for voter identification
  - Persistent data across page refreshes

- **School Theme:**
  - Blue and gold color scheme (Wildcats school colors)
  - Responsive design for mobile and desktop
  - Theater-focused branding

### How to Use

1. Open `index.html` in a web browser
2. Review the museum options and descriptions
3. Click "Vote for this Museum!" on your preferred choice
4. View real-time results showing vote percentages
5. Click "View Vote Logs" to see detailed voting history with IP addresses and percentages

### Running Locally

Simply open the `index.html` file in any modern web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Then visit http://localhost:8080 in your browser
```

### GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages using GitHub Actions. 

**To enable GitHub Pages:**

1. Go to your repository Settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment", select "Source" as "GitHub Actions"
4. The site will automatically deploy when you push to the main or master branch
5. Once deployed, your site will be available at: `https://op-era.github.io/NYCMuseums/`

The deployment workflow is configured in `.github/workflows/deploy.yml`.

### Files

- `index.html` - Main webpage structure
- `styles.css` - Blue and gold themed styling
- `script.js` - Voting functionality and data management

### Technologies Used

- Pure HTML/CSS/JavaScript (no frameworks required)
- localStorage for client-side data persistence
- Responsive CSS Grid layout
- External IP tracking API integration

---

© 2026 Sunnyside Highschool Wildcats Playhouse

