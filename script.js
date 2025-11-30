// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }
}

// Background cycling functionality
const backgrounds = [
    'backgrounds/bg1.png',
    'backgrounds/bg2.png',
    'backgrounds/bg3.png',
    'backgrounds/bg4.png',
    'backgrounds/bg5.png',
    'backgrounds/bg6.png',
    'backgrounds/bg7.png',
    'backgrounds/bg8.png',
    'backgrounds/bg9.png',
    'backgrounds/bg10.png',
    'backgrounds/bg11.png'
];

let currentBackgroundIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Prayer wall functionality
function loadPrayers() {
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    const prayerContainer = document.getElementById("prayer-requests");

    if (prayerContainer) {
        prayerContainer.innerHTML = "";

        if (prayers.length === 0) {
            prayerContainer.innerHTML = "<p>No prayer requests yet. Be the first to share!</p>";
            return;
        }

        prayers.forEach((prayer, index) => {
            const prayerDiv = document.createElement("div");
            prayerDiv.className = "prayer-card";
            prayerDiv.innerHTML = `
                <div class="prayer-header">
                    <span class="prayer-name">${prayer.name || "Anonymous"}</span>
                    <span class="prayer-date">${prayer.date}</span>
                </div>
                <p class="prayer-text">${prayer.request}</p>
                <button class="btn btn-outline pray-btn" onclick="prayForRequest(${index})">🙏 Pray</button>
            `;
            prayerContainer.appendChild(prayerDiv);
        });
    }
}

function submitPrayer() {
    const name = document.getElementById("prayer-name").value;
    const request = document.getElementById("prayer-request").value;

    if (request.trim()) {
        const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
        prayers.push({
            name: name.trim() || null,
            request: request.trim(),
            date: new Date().toLocaleDateString()
        });
        localStorage.setItem("prayers", JSON.stringify(prayers));

        document.getElementById("prayer-name").value = "";
        document.getElementById("prayer-request").value = "";

        loadPrayers();
        alert("Your prayer request has been submitted!");
    }
}

function prayForRequest(index) {
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    if (prayers[index]) {
        prayers[index].prayed = (prayers[index].prayed || 0) + 1;
        localStorage.setItem("prayers", JSON.stringify(prayers));
        loadPrayers();
    }
}

// Gallery functionality
function openModal(imgSrc, caption) {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");

    if (modal && modalImg && modalCaption) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        modalCaption.textContent = caption;
    }
}

function closeModal() {
    const modal = document.getElementById("gallery-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Live stream functionality
function switchStreamTab(tabName) {
    // Hide all stream contents
    const contents = document.querySelectorAll('.stream-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.stream-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected content and activate tab
    const selectedContent = document.getElementById(tabName);
    const selectedTab = document.querySelector(`[onclick="switchStreamTab('${tabName}')"]`);

    if (selectedContent) selectedContent.classList.add('active');
    if (selectedTab) selectedTab.classList.add('active');
}

// Notification banner functionality
function closeNotification() {
    const banner = document.getElementById("notification-banner");
    if (banner) {
        banner.style.display = "none";
    }
}

// Gallery filter functionality
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    event.target.classList.add('active');

    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Blog load more functionality
function loadMoreBlogs() {
    // This would typically load more blog posts from a server
    // For now, just show a message
    alert("More blog posts would be loaded here!");
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById("newsletter-email");
    if (email && email.value) {
        alert("Thank you for subscribing! You'll receive our latest updates.");
        email.value = "";
    }
}

// Chat functionality (for live stream)
function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (input && input.value.trim() && messages) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `
            <span class="username">You:</span> ${input.value.trim()}
        `;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
        input.value = "";
    }
}

// Handle Enter key in chat
document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
        chatInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    }
});

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", function() {
    loadPrayers();
    changeBackground(); // Set initial background
    setInterval(changeBackground, 10000); // Change every 10 seconds

    // Set default stream tab
    switchStreamTab('live-service');
});
