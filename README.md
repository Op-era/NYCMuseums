# Sunnyside High School Theater - NYC Museum Poll

A voting website for Sunnyside High School Theater performers who will be performing Jane Eyre at Lincoln Center in New York City.

## Features

- **Museum Poll**: Vote on your favorite NYC museum to visit
- **One Vote Per Person**: Each visitor can only vote once (tracked via browser localStorage)
- **Vote Logging**: All votes are logged with timestamps and session IDs
- **Real-time Results**: See current voting results with visual bar charts
- **Theater-Focused**: Includes Broadway Museum, Museum of the Moving Image, and Lincoln Center Theater Collection
- **Popular Museums**: Also includes Met, MoMA, Natural History Museum, and more

## Museums Included

### Theater & Performance
1. The Broadway Museum
2. Museum of the Moving Image
3. Lincoln Center Theater Collection

### Art Museums
4. The Metropolitan Museum of Art
5. Museum of Modern Art (MoMA)
6. The Frick Collection

### Science & History
7. American Museum of Natural History
8. Intrepid Sea, Air & Space Museum
9. 9/11 Memorial & Museum
10. New York Hall of Science

## How to Use

1. Open `index.html` in a web browser
2. Browse the museum options with descriptions and images
3. Click "Vote for This Museum" on your favorite museum
4. Your vote is recorded and results are updated in real-time
5. You can only vote once per browser session

## Vote Logging

All votes are logged with:
- Timestamp
- Museum ID and name
- Unique session ID
- Anonymous voter tracking

To view all vote logs, open the browser console and type:
```javascript
exportVoteLogs()
```

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no dependencies)
- **Vote Storage**: Browser localStorage (persistent)
- **One-Vote System**: Enforced via localStorage flag
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Customizing Images

The website currently uses placeholder images. To add real museum photos:

1. Download museum images (see `IMAGE_SOURCES.md` for recommendations)
2. Save them in the `images/` folder with these exact names:
   - broadway-museum.jpg
   - moving-image.jpg
   - met-museum.jpg
   - natural-history.jpg
   - moma.jpg
   - lincoln-center.jpg
   - intrepid.jpg
   - 911-memorial.jpg
   - frick.jpg
   - hall-of-science.jpg

## File Structure

```
.
├── index.html          # Main HTML page
├── styles.css          # Styling and layout
├── script.js           # Voting logic and functionality
├── images/             # Museum images
│   └── *.jpg          # Individual museum photos
├── IMAGE_SOURCES.md   # Guide for finding museum images
└── README.md          # This file
```

## Browser Compatibility

- Chrome, Firefox, Safari, Edge (modern versions)
- Requires JavaScript enabled
- Requires localStorage support

## Deployment

Simply upload all files to any web host:
- GitHub Pages
- Netlify
- Vercel
- Any static web hosting service

Or open `index.html` directly in a browser for local use.

## For Production Use

For a production environment with multiple users across different devices, consider:

1. **Backend Server**: Replace localStorage with a proper database
2. **User Authentication**: Track voters by email or student ID
3. **Analytics**: Add proper analytics tracking
4. **Real Images**: Replace placeholder images with actual museum photos
5. **Email Integration**: Send unique voting links to each student

## License

Created for Sunnyside High School Theater - Jane Eyre Performance at Lincoln Center, 2026
