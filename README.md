# 🎪 Jesus Discipleship Ministry - Complete Website System

A **professional, feature-rich ministry website** with integrated admin panel for managing livestreams, sermons, hymns, gallery, and notifications.

---

## ✨ KEY FEATURES

### 👥 For Users:
- 🎥 **Live Stream Page** - Watch services, get notifications
- 🎤 **Sermon Library** - Search and listen to sermons
- 🎵 **Hymn Database** - Searchable hymn library with lyrics
- 📸 **Photo Gallery** - Browse ministry photos
- 🙏 **Prayer Wall** - Submit and pray for requests
- 📖 **Daily Scripture** - New scripture each day
- 📅 **Events** - Upcoming church events
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works on all devices

### 🔐 For Admins:
- 🎥 **Livestream Control** - Set URLs, start/stop sessions, send notifications
- 🎤 **Sermon Management** - Upload, edit, delete sermons with audio/video links
- 🎵 **Hymn Management** - Upload hymns with full lyrics
- 📸 **Gallery Upload** - Upload and manage photos
- 🔔 **Send Notifications** - Notify users about important updates
- 📊 **Dashboard** - Real-time content statistics
- ⚡ **Instant Updates** - All changes appear immediately for users

---

## 🚀 QUICK START

### For Users:
Just visit and enjoy! No setup needed.

### For Admins:
1. Click **"Admin"** link in footer of any page
2. OR go to: `admin.html`
3. Password: **`1990@JDM`**
4. Start uploading content!

---

## 📋 COMPLETE FEATURE LIST

| Feature | Status | Details |
|---------|--------|---------|
| Livestream Management | ✅ | Set URLs, start/stop, notify users |
| Sermon Library | ✅ | Upload, search, filter, play/watch |
| Hymn Database | ✅ | Upload hymns, search lyrics, print |
| Gallery | ✅ | Upload images, view, filter |
| Notifications | ✅ | Send alerts to subscribed users |
| Dark Mode | ✅ | Toggle day/night theme |
| Mobile Responsive | ✅ | Works on all devices |
| Search & Filter | ✅ | Find content quickly |
| Real-time Updates | ✅ | Changes appear instantly |
| No Server Needed | ✅ | Static site, works anywhere |

---

## 📁 PAGES INCLUDED

### Main Pages:
1. **index.html** - Homepage (REDESIGNED)
2. **admin.html** - Admin Dashboard (COMPLETELY REBUILT)
3. **sermons.html** - Sermon Library (NEW)
4. **hymns.html** - Hymn Library (UPDATED)
5. **live-stream.html** - Livestream (UPDATED)

### Supporting Pages:
6. **about.html** - About the ministry
7. **programs.html** - Programs offered
8. **events.html** - Upcoming events
9. **daily-scripture.html** - Daily Bible verses
10. **prayer-wall.html** - Prayer requests
11. **gallery.html** - Photo gallery
12. **prayer-rooms.html** - Prayer rooms
13. **contact.html** - Contact info
14. **give.html** - Giving/donations

---

## 🎯 HOW IT WORKS

### Step 1: Admin Uploads Content
```
Admin Panel → Upload Sermon/Hymn/Image → Save
↓
Content stored in browser's LocalStorage
```

### Step 2: Users See It Immediately
```
LocalStorage → User's Page (auto-refresh every 30 seconds)
↓
Users can search, filter, watch, listen, or view
```

### Example Workflow:
```
1. Admin uploads sermon on Monday
2. Tuesday morning: appears on sermons.html
3. Users can search for it
4. Users watch video/listen to audio
5. Sermon stays in library permanently
```

---

## 💾 DATA STORAGE

All data stored in **browser's LocalStorage**:

**Advantages:**
✅ Works without any server
✅ Instant updates across pages
✅ ~10MB storage per site
✅ Data persists across browser sessions

**Keys used:**
- `admin_sermons` - All sermons
- `admin_hymns` - All hymns
- `youtube_live_url` - YouTube stream
- `facebook_live_url` - Facebook stream
- `notifications` - Sent notifications
- `gallery_images` - Uploaded images

---

## 🔧 TECHNICAL DETAILS

- **No Frameworks** - Pure HTML, CSS, JavaScript
- **No Server Required** - Works as static site
- **No Database** - Uses browser LocalStorage
- **No Build Process** - Just open and use!
- **All Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Friendly** - Fully responsive

---

## 📚 DOCUMENTATION

**3 Complete Guides Included:**

1. **ADMIN_GUIDE.md** - Complete admin instructions
   - How to use each admin feature
   - Step-by-step workflows
   - Troubleshooting

2. **REDESIGN_SUMMARY.md** - Design improvements
   - What changed from original
   - New features
   - Visual upgrades

3. **IMPLEMENTATION_GUIDE.md** - Technical details
   - How system works
   - File structure
   - Customization tips

---

## 🔐 ADMIN LOGIN

**Password**: `1990@JDM`

**Admin Sections:**
1. 🎥 Live Stream - Manage streaming
2. 🎤 Manage Sermons - Upload sermons
3. 🎵 Manage Hymns - Upload hymns
4. 📸 Gallery Images - Upload photos
5. 📖 Daily Scriptures - Add daily verses
6. 🔔 Send Notifications - Notify users

---

## 📱 USER FEATURES

### Sermons Page:
- Search by title, speaker, description
- Filter: Recent, Popular, Audio Only, Video Available
- Direct links to watch/listen
- Beautiful card layout

### Hymns Page:
- Search by title, author, or lyrics
- View full lyrics
- Copy to clipboard
- Print functionality
- Built-in hymns + admin uploads

### Livestream Page:
- "We will notify you" message when offline
- Email subscription form
- Auto-refresh to check status
- Links to YouTube/Facebook

### Gallery Page:
- View all photos
- Filter by category
- Lightbox modal viewer
- Responsive grid

---

## 🎨 DESIGN FEATURES

- Modern, clean interface
- Professional color scheme
- Smooth animations
- Responsive layouts
- Dark mode support
- Touch-friendly on mobile
- Fast loading

---

## 🌍 DEPLOYMENT

### Test Locally:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### Deploy to Web:
1. Get hosting (any web host works)
2. Upload all files via FTP
3. Done! Website is live

### Deploy to GitHub Pages:
1. Create GitHub account
2. Create repo: `username.github.io`
3. Upload files
4. Website live automatically!

---

## 🚨 IMPORTANT NOTES

### Data Backup:
- Data stored in browser localStorage
- Clearing cache deletes data
- **For production**: Use backend database

### Security:
- Current: Simple password
- **For production**: Implement proper authentication

### Storage Limits:
- ~10MB per browser
- For larger sites: Upgrade storage layer
- Cloud options: Firebase, AWS, etc.

---

## 🆘 QUICK HELP

### Admin Password Lost?
- Check password at top of admin.html
- Current: `1990@JDM`

### Livestream Not Showing?
- Check URL is valid
- Verify stream is active
- Try refreshing page

### Sermons Not Appearing?
- Check if saved successfully
- Try different browser
- Check console for errors

### Notifications Not Working?
- Subscribe on livestream page
- Check browser permissions
- Try another browser

---

## 📞 CONTACT

**Jesus Discipleship Ministry**
- Email: olusolaea12@gmail.com
- Phone: +234 7067581767
- Address: Yejide Junction, near St. Luke Grammar School, Mokola Ibadan, Nigeria

---

## 🎉 WHAT YOU GET

✅ Professional ministry website
✅ Integrated admin panel
✅ Livestream management
✅ Sermon library
✅ Hymn database
✅ Photo gallery
✅ Notification system
✅ Real-time updates
✅ Mobile responsive
✅ Ready to deploy
✅ No server needed
✅ Complete documentation

---

## 🔄 How to Use
   ```bash
   cd jesus-discipleship-static
   php -S localhost:8000
   ```
   Then open `http://localhost:8000` in your browser

## File Structure

```
jesus-discipleship-static/
├── index.html              # Home page
├── about.html              # About page
├── programs.html           # Programs page
├── events.html             # Events page
├── give.html               # Giving page
├── prayer-wall.html        # Prayer wall
├── daily-scripture.html    # Daily scripture
├── sermons.html            # Sermons page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## Features Overview

### Theme Toggle
- Click the moon/sun icon in the navigation bar to switch between light and dark themes
- Your preference is saved and remembered for future visits

### Prayer Wall
- Submit prayer requests (name optional)
- View and pray for other community members' requests
- Prayer counts are tracked and updated
- All data is stored locally in your browser

### Responsive Design
- Optimized for all screen sizes
- Mobile-friendly navigation and layout
- Touch-friendly buttons and interactions

### Interactive Elements
- Hover effects on buttons and links
- Smooth scrolling (where applicable)
- Form validation and feedback
- Notification system for user actions

## Ministry Information

- **Name**: Jesus Discipleship Ministry
- **Location**: Yejide Junction, near St. Luke Grammar School, Mokola Ibadan, Nigeria
- **Founded**: 2010
- **Senior Pastor**: OLUSOLA EMMANUEL AYODELE

### Service Times
- Sunday Service: 10:00 AM
- Bible Study: Wednesday 6:00 PM
- Prayer Meeting: Friday 7:00 PM

### Core Beliefs
- The Bible as the inspired Word of God
- The Trinity (Father, Son, Holy Spirit)
- Salvation by grace through faith in Jesus Christ
- The Church as the body of Christ
- The Second Coming of Jesus Christ
- The Great Commission

### Ministries
- Children's Ministry
- Youth Ministry
- Men's Ministry
- Women's Ministry
- Music Ministry
- Outreach Ministry

## Customization

### Changing Content
- Edit the HTML files directly to update text, images, and content
- Modify `styles.css` to change colors, fonts, and layout
- Update `script.js` to modify interactive functionality

### Adding New Pages
1. Create a new HTML file following the existing structure
2. Add navigation link in all HTML files
3. Style as needed in `styles.css`

### Changing Colors/Themes
- Main colors are defined in CSS custom properties
- Update the color values in `styles.css` to match your preferences

## Browser Compatibility

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Future Enhancements

- Add more interactive features
- Integrate with backend services for dynamic content
- Add multimedia support for sermons
- Implement contact form functionality
- Add event calendar integration
- Include online giving integration

## License

This project is created for Jesus Discipleship Ministry and can be freely used and modified for church websites.

## Contact

For technical support or customization requests:
- Email: info@jesusdiscipleshipministry.org
- Phone: +234 XXX XXX XXXX
- Address: Yejide Junction, near St. Luke Grammar School, Mokola Ibadan, Nigeria
# CHURCH
# CHURCH
# JDM
# chu
