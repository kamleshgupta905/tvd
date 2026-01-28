const chatbotStyles = `
/* Ultra-Premium ElevenLabs Inspired Chatbot Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

.chatbot-toggler {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border: none;
    height: 64px; /* Increased size */
    width: 64px;  /* Increased size */
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #000000; /* Deep Black */
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 9999;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.chatbot-toggler:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
}

.chatbot-toggler span {
    color: #fff;
    position: absolute;
    font-size: 1.75rem; /* Increased icon size */
    transition: all 0.3s ease;
}

.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
}

body.show-chatbot .chatbot-toggler span:last-child {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

/* Chatbot Window */
.chatbot {
    position: fixed;
    right: 30px;
    bottom: 100px;
    width: 360px;
    background: rgba(255, 255, 255, 0.95); /* Glass Effect */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px) scale(0.95);
    transform-origin: bottom right;
    box-shadow: 0 20px 50px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 9999;
    font-family: 'Inter', sans-serif;
    border: 1px solid rgba(255,255,255,0.5);
}

body.show-chatbot .chatbot {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
}

/* Header */
.chatbot header {
    padding: 18px 24px;
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chatbot header h2 {
    color: #111;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Close Icon */
.chatbot header .close-btn {
    color: #666;
    cursor: pointer;
    font-size: 1.1rem;
    transition: color 0.2s;
    background: #f3f3f3;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chatbot header .close-btn:hover {
    color: #000;
    background: #e5e5e5;
}

/* Chatbox Area */
.chatbot .chatbox {
    overflow-y: auto;
    height: 380px;
    padding: 24px 20px 80px;
    background: transparent;
    scroll-behavior: smooth;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
    width: 4px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
    background: transparent;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 10px;
}

/* Messages */
.chatbox .chat {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

.chatbox .outgoing {
    justify-content: flex-end;
}

/* Icons */
.chatbox .incoming span {
    width: 28px;
    height: 28px;
    color: #000;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    border-radius: 50%;
    margin-right: 10px;
    align-self: flex-end;
}

/* Bubbles */
.chatbox .chat p {
    white-space: pre-wrap;
    padding: 12px 16px;
    border-radius: 14px;
    max-width: 85%;
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
}

/* User Bubble (Dark Mode Style) */
.chatbox .outgoing p {
    background: #111;
    color: #fff;
    border-radius: 14px 14px 4px 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Bot Bubble (Minimal Grey) */
.chatbox .incoming p {
    background: #f3f3f3;
    color: #111;
    border-radius: 14px 14px 14px 4px;
}

/* Input Area */
.chatbot .chat-input {
    display: flex;
    gap: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    padding: 16px 20px;
    border-top: 1px solid rgba(0,0,0,0.06);
    backdrop-filter: blur(10px);
}

.chat-input textarea {
    height: 44px;
    width: 100%;
    border: 1px solid #e5e5e5;
    outline: none;
    resize: none;
    max-height: 120px;
    padding: 11px 14px;
    font-size: 0.9rem;
    border-radius: 12px;
    background: #fff;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s;
    color: #333;
}

.chat-input textarea:focus {
    border-color: #000;
}

.chat-input span {
    align-self: center;
    color: #fff;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #000;
    transition: all 0.2s;
    flex-shrink: 0;
    font-size: 1rem;
}

.chat-input span:hover {
    background: #333;
    transform: scale(1.05);
}

.whatsapp-toggler {
    position: fixed;
    bottom: 30px;
    right: 110px;
    border: none;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #25D366;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 9999;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    text-decoration: none;
}

.whatsapp-toggler:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.whatsapp-toggler span {
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 490px) {
    .chatbot-toggler {
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
    }
    .whatsapp-toggler {
        right: 85px;
        bottom: 20px;
        width: 50px;
        height: 50px;
    }
    .whatsapp-toggler span {
        font-size: 1.5rem;
    }
    .chatbot-toggler span {
        font-size: 1.4rem;
    }
    .chatbot {
        right: 0;
        bottom: 0;
        height: 100% !important;
        width: 100%;
        border-radius: 0;
        border: none;
    }
    .chatbot .chatbox {
        height: calc(100% - 75px); /* Adjust for header and input */
        padding: 25px 15px 100px;
    }
    .chatbot header {
        padding: 15px 20px;
    }
    .chatbot .chat-input {
        padding: 15px 20px;
    }
}
`;

const chatbotHTML = `
<a href="https://wa.me/919008528434" class="whatsapp-toggler" target="_blank">
    <span class="material-symbols-rounded"><i class="fa-brands fa-whatsapp"></i></span>
</a>
<button class="chatbot-toggler">
    <span class="material-symbols-rounded"><i class="fa-solid fa-message"></i></span>
    <span class="material-symbols-outlined"><i class="fa-solid fa-xmark"></i></span>
</button>
<div class="chatbot">
    <header>
        <h2>SLV Support 🤖</h2>
        <span class="close-btn material-symbols-outlined"><i class="fa-solid fa-xmark"></i></span>
    </header>
    <ul class="chatbox">
        <li class="chat incoming">
            <span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span>
            <p>Namaste! 🙏<br>Main SLV Service Center se hu. Main aapki kaise help kar sakta hu?</p>
        </li>
    </ul>
    <div class="chat-input">
        <textarea placeholder="Type a message..." spellcheck="false" required></textarea>
        <span id="send-btn" class="material-symbols-rounded"><i class="fa-solid fa-paper-plane"></i></span>
    </div>
</div>
`;

// Logic for responses
const getResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hi') || msg.includes('hello') || msg.includes('namaste') || msg.includes('hey')) {
        return "Namaste! Welcome to SLV Service Center. Kya aap TV repair karwana chahte hain ya service inquiry hai?";
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('kitne') || msg.includes('paisa')) {
        return "Repair ka cost, device check karne ke baad hi bataya ja sakta hai. Visit us for a FREE diagnosis! 🛠️";
    }
    if (msg.includes('time') || msg.includes('open') || msg.includes('close') || msg.includes('baje')) {
        return "Hum Roz (Mon-Sun) Subah 9:00 AM se Raat 9:00 PM tak open rehte hain.";
    }
    if (msg.includes('location') || msg.includes('address') || msg.includes('kahan') || msg.includes('jagah') || msg.includes('shop')) {
        return "Humara service center Andrahalli, Bengaluru main hai. Google Maps location ke liye yahan click karein: [Map Link]";
    }
    if (msg.includes('phone') || msg.includes('number') || msg.includes('contact') || msg.includes('call') || msg.includes('baat')) {
        return "Aap humein direct call kar sakte hain: +91 90085 28434 📞";
    }
    if (msg.includes('laptop') || msg.includes('mobile') || msg.includes('tv') || msg.includes('screen')) {
        return "Haan, hum Mobile, Laptop, TV aur Home Appliances sab kuch repair karte hain. Genuine parts ke saath! ✅";
    }
    if (msg.includes('warranty') || msg.includes('guarantee')) {
        return "Bilkul! Humare repairs aur parts par 6 months tak ki warranty milti hai. 🛡️";
    }

    return "Maaf karein, main robot hoon aur samajh nahi paaya. 🤖\n\nKripya call karein: +91 90085 28434 ya seedha message mein 'Call' likhein.";
}

document.addEventListener("DOMContentLoaded", () => {
    // Inject CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = chatbotStyles;
    document.head.appendChild(styleSheet);

    // Inject HTML
    const chatbotContainer = document.createElement("div");
    chatbotContainer.innerHTML = chatbotHTML;
    document.body.appendChild(chatbotContainer);

    // Get Elements
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeBtn = document.querySelector(".close-btn");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");

    let userMessage = null; // Variable to store user's message
    const inputInitHeight = chatInput.scrollHeight;

    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi; // return chat <li> element
    }

    const generateResponse = (userMsg) => {
        const responseText = getResponse(userMsg);

        // Remove "Thinking..." message and add actual response
        chatbox.appendChild(createChatLi(responseText, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }

    const handleChat = () => {
        userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
        if (!userMessage) return;

        // Clear the input textarea and set its height to default
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;

        // Append the user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            // Show "Thinking..." logic or direct response
            // For now, direct response with slight delay for realism
            generateResponse(userMessage);
        }, 600);
    }

    chatInput.addEventListener("input", () => {
        // Adjust the height of the input textarea based on its content
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatInput.addEventListener("keydown", (e) => {
        // If Enter key is pressed without Shift key and the window 
        // width is greater than 800px, handle the chat
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
            e.preventDefault();
            handleChat();
        }
    });

    sendChatBtn.addEventListener("click", handleChat);
    closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
});
