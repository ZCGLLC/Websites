/* Vanta Nail Bar — site knowledge chatbot */
(() => {
  const BOOKING_URL = "https://lk.macmarketing.us/VantaNailBar-Booking";
  const PHONE = "(469) 898-6688";
  const PHONE_TEL = "tel:+14698986688";
  const EMAIL = "vantanailbar@gmail.com";
  const ADDRESS = "9100 N Central Expy, Ste 115, Dallas, TX 75231";
  const MAPS = "https://maps.app.goo.gl/68ca6kn9Uj5E1oPu8";

  const KNOWLEDGE = {
    business: {
      name: "Vanta Nail Bar",
      tagline: "Where Beauty Finds Its Edge",
      type: "Modern nail salon in Dallas, TX",
      about:
        "Vanta Nail Bar is a modern beauty destination created for guests who appreciate clean style, thoughtful details, and a relaxing elevated experience. Nail care here is meant to feel like self-care — calm, welcoming, and never rushed.",
    },
    contact: {
      phone: PHONE,
      email: EMAIL,
      address: ADDRESS,
      maps: MAPS,
      instagram: "https://www.instagram.com/vantanailbar",
      facebook: "https://www.facebook.com/profile.php?id=61589233480053",
      yelp: "https://www.yelp.com/biz/vanta-nail-bar-dallas",
    },
    hours: [
      { days: "Monday–Friday", open: "10:00 AM", close: "08:00 PM" },
      { days: "Saturday", open: "09:00 AM", close: "07:00 PM" },
      { days: "Sunday", open: "11:00 AM", close: "05:30 PM" },
    ],
    booking: {
      url: BOOKING_URL,
      note: "Online booking is available and recommended, especially on weekends. You can also call the salon.",
    },
    highlights: [
      "Clean & comfortable environment",
      "Detail-oriented nail work",
      "Friendly guest experience",
      "Fresh, trendy inspiration from timeless styles to creative designs",
    ],
    pedicures: [
      {
        name: "Golden Mystique",
        desc: "Gold-infused ritual with detox soak, sugar scrub, hydrating mask, hot stones, collagen socks, red-light therapy, and neck wrap.",
      },
      {
        name: "Serenity CBD",
        desc: "CBD salts and oils, warm steam, paraffin, hot stones, and Thermal Tension Release neck wrap for calm and restoration.",
      },
      {
        name: "Oriental Herbal",
        desc: "Lemongrass-ginger soak, essential oil scrub, clay mask under hot towels, lymphatic drainage massage, and neck wrap.",
      },
      {
        name: "Soft Touch",
        desc: "Milk-and-honey detox soak with scrub, mask, paraffin, hot stones, and neck/shoulder massage.",
      },
      {
        name: "Bloom Harmony",
        desc: "Cuticle care, sea salt soak, callus treatment, sugar exfoliation, hydrating mask, massage, paraffin + hot stones.",
      },
      {
        name: "Lavender Renewal",
        desc: "Cuticle care, sea salt soak, callus treatment, sugar exfoliation, hydrating mask, massage, paraffin or hot stone.",
      },
      {
        name: "The Pure",
        desc: "Cuticle care, sea salt soak, sugar exfoliation, and hydrating massage.",
      },
    ],
    manicures: [
      { name: "The Pure", desc: "Clean, effortless grooming for polished professional nails." },
      { name: "Lavender Renewal", desc: "Aromatic lavender botanicals with a gentle hydrating finish." },
      { name: "Bloom Harmony", desc: "Organic herbs and warm oils for a skin-calming experience." },
      { name: "Soft Touch", desc: "Deep conditioning for soft, replenished skin and cuticles." },
      { name: "Oriental Herbal", desc: "Floral-infused ritual to quiet the mind and restore suppleness." },
      { name: "Serenity CBD", desc: "CBD treatment to soothe tension and deeply relax the hands." },
      { name: "Golden Mystique", desc: "Gold-infused manicure to nourish, soften, and leave hands glowing." },
    ],
    addons: ["Gel Polish", "Dazzle Dry Polish"],
    systems: {
      acrylic: [
        "Acrylic Full Set",
        "Acrylic Fill",
        "Acrylic Color Powder Full Set",
        "Color Powder Fill",
        "Solar Pink & White",
      ],
      dip: ["Dip Powder", "Dip French", "Dip Color French w/ Cutter", "Dip Ombre"],
      gel: ["Gel Manicure", "Gel-X Extensions", "Builder Gel", "Hard Gel", "Poly Gel / Hybrid"],
      designs: ["Gel French", "Ombré / Chrome / Cat Eye / Marble", "Custom Design", "3+ Colors"],
      length: [
        "Shape & Length Upgrade",
        "Nail Extension",
        "Medium Length",
        "Long Length",
        "Extra Long & Up",
      ],
      soakoff: [
        "Dip / Gel / Gel-X Soak-Off with or without service",
        "Acrylic Powder Soak-Off with or without service",
      ],
      extras: [
        "Kid Pedi / Mani",
        "Cuticle Trim",
        "Cut Down",
        "Repair",
        "Paraffin",
        "Callus Removal",
        "Collagen Gloves / Socks",
      ],
      polishChange: [
        "Regular Polish Change — Hands or Feet",
        "Gel Polish Change — Hands or Feet",
      ],
      acrylicToes: [
        "Acrylic Toes — 2 Big Toes",
        "Acrylic Toes — Full Set Color",
        "Acrylic Toes — Full Set Clear",
      ],
    },
    waxing: {
      facial: [
        "Eyebrows",
        "Whole Ears",
        "Nose",
        "Lip",
        "Chin",
        "Sideburns",
        "Full Face (brows, lip, chin, and side areas)",
      ],
      body: [
        "Underarms",
        "Half Arms",
        "Full Arms",
        "Half Legs",
        "Full Legs",
        "Back",
        "Chest",
        "Stomach",
        "Fingers",
        "Toes",
      ],
      bikini: ["Bikini Line", "Extended Bikini", "Brazilian"],
      tinting: ["Eyebrow Tinting"],
    },
  };

  const SYSTEM_PROMPT = `You are Vanta Assistant, the friendly and professional chatbot for Vanta Nail Bar in Dallas, TX.
Answer ONLY using the salon information below. Be warm, clear, and concise.
If pricing is not listed, say prices are best confirmed when booking or by calling the salon.
If asked something unrelated to the salon, politely redirect to salon topics.
Always offer helpful next steps (book, call, email, directions) when relevant.

SALON FACTS:
Name: ${KNOWLEDGE.business.name}
Tagline: ${KNOWLEDGE.business.tagline}
About: ${KNOWLEDGE.business.about}
Phone: ${PHONE}
Email: ${EMAIL}
Address: ${ADDRESS}
Maps: ${MAPS}
Booking: ${BOOKING_URL}
Hours:
- Mon–Fri: 10:00 AM – 08:00 PM
- Saturday: 09:00 AM – 07:00 PM
- Sunday: 11:00 AM – 05:30 PM
Highlights: ${KNOWLEDGE.highlights.join("; ")}
Pedicures: ${KNOWLEDGE.pedicures.map((s) => `${s.name} — ${s.desc}`).join(" | ")}
Manicures: ${KNOWLEDGE.manicures.map((s) => `${s.name} — ${s.desc}`).join(" | ")}
Add-ons: ${KNOWLEDGE.addons.join(", ")}
Acrylic: ${KNOWLEDGE.systems.acrylic.join(", ")}
Dip: ${KNOWLEDGE.systems.dip.join(", ")}
Gel: ${KNOWLEDGE.systems.gel.join(", ")}
Designs: ${KNOWLEDGE.systems.designs.join(", ")}
Length upgrades: ${KNOWLEDGE.systems.length.join(", ")}
Soak-off: ${KNOWLEDGE.systems.soakoff.join(", ")}
Extras: ${KNOWLEDGE.systems.extras.join(", ")}
Polish changes: ${KNOWLEDGE.systems.polishChange.join(", ")}
Acrylic toes: ${KNOWLEDGE.systems.acrylicToes.join(", ")}
Facial waxing: ${KNOWLEDGE.waxing.facial.join(", ")}
Body waxing: ${KNOWLEDGE.waxing.body.join(", ")}
Bikini waxing: ${KNOWLEDGE.waxing.bikini.join(", ")}
Tinting: ${KNOWLEDGE.waxing.tinting.join(", ")}
Social: Instagram @vantanailbar, Facebook, Yelp
Website pages: Home, About Us, Services, Gallery, Contact Us, Privacy Policy.`;

  const history = [];

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9\s+#&/-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function includesAny(text, words) {
    return words.some((w) => text.includes(w));
  }

  function hoursText() {
    return KNOWLEDGE.hours
      .map((h) => `${h.days}: ${h.open} – ${h.close}`)
      .join("\n");
  }

  function isOpenNowAnswer() {
    try {
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      const parts = Object.fromEntries(
        fmt.formatToParts(new Date()).map((p) => [p.type, p.value])
      );
      const minutes = Number(parts.hour) * 60 + Number(parts.minute);
      const schedule = {
        Mon: [10 * 60, 20 * 60],
        Tue: [10 * 60, 20 * 60],
        Wed: [10 * 60, 20 * 60],
        Thu: [10 * 60, 20 * 60],
        Fri: [10 * 60, 20 * 60],
        Sat: [9 * 60, 19 * 60],
        Sun: [11 * 60, 17 * 60 + 30],
      };
      const range = schedule[parts.weekday];
      const open = range && minutes >= range[0] && minutes < range[1];
      return open
        ? `Yes — we're open now (Dallas time).\n\n${hoursText()}`
        : `We're closed right now (Dallas time).\n\nOur hours are:\n${hoursText()}`;
    } catch {
      return `Our hours are:\n${hoursText()}`;
    }
  }

  function localAnswer(question) {
    const q = normalize(question);
    if (!q) {
      return "Please ask me anything about Vanta Nail Bar — hours, services, booking, location, and more.";
    }

    if (
      ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"].some(
        (g) => q === g || q.startsWith(g + " ")
      )
    ) {
      return `Hi! I'm Vanta Assistant. I can help with hours, services, booking, location, and more for Vanta Nail Bar. What would you like to know?`;
    }

    if (includesAny(q, ["thank", "thanks", "appreciate"])) {
      return "You're welcome! If you need anything else about the salon, just ask.";
    }

    if (includesAny(q, ["open now", "are you open", "open today", "currently open", "open right now"])) {
      return isOpenNowAnswer();
    }

    if (includesAny(q, ["hour", "hours", "time", "schedule", "when are you open", "closing", "open"])) {
      return `Here are our business hours:\n${hoursText()}\n\nWould you like the booking link or directions next?`;
    }

    if (includesAny(q, ["address", "location", "where", "direction", "map", "parking", "find you", "located"])) {
      return `We're at ${ADDRESS}.\n\nGet directions: ${MAPS}\nPhone: ${PHONE}`;
    }

    if (includesAny(q, ["phone", "call", "number", "contact", "email", "reach"])) {
      return `You can reach us at:\nPhone: ${PHONE}\nEmail: ${EMAIL}\nAddress: ${ADDRESS}\n\nOr book online: ${BOOKING_URL}`;
    }

    if (includesAny(q, ["book", "booking", "appointment", "reserve", "schedule an", "availability"])) {
      return `You can book online here:\n${BOOKING_URL}\n\nYou can also call ${PHONE}. Booking ahead is recommended, especially on weekends.`;
    }

    if (includesAny(q, ["price", "prices", "cost", "how much", "rate", "rates", "fee"])) {
      return `Pricing depends on the exact service and add-ons. For the most accurate quote, book online or call ${PHONE} and our team will help you choose the right option.`;
    }

    if (includesAny(q, ["about", "story", "who are you", "what is vanta", "special", "why"])) {
      return `${KNOWLEDGE.business.about}\n\nWhat makes us shine:\n• ${KNOWLEDGE.highlights.join("\n• ")}`;
    }

    if (includesAny(q, ["instagram", "facebook", "yelp", "social", "follow"])) {
      return `Follow our beauty journey:\nInstagram: ${KNOWLEDGE.contact.instagram}\nFacebook: ${KNOWLEDGE.contact.facebook}\nYelp: ${KNOWLEDGE.contact.yelp}`;
    }

    if (includesAny(q, ["wax", "waxing", "brow", "brazilian", "bikini", "lip wax", "underarm"])) {
      return `Yes — we offer waxing and tinting:\n\nFacial: ${KNOWLEDGE.waxing.facial.join(", ")}\nBody: ${KNOWLEDGE.waxing.body.join(", ")}\nBikini: ${KNOWLEDGE.waxing.bikini.join(", ")}\nTinting: ${KNOWLEDGE.waxing.tinting.join(", ")}\n\nBook: ${BOOKING_URL}`;
    }

    if (includesAny(q, ["pedi", "pedicure", "feet", "foot"])) {
      const list = KNOWLEDGE.pedicures.map((s) => `• ${s.name}: ${s.desc}`).join("\n");
      return `Our pedicure menu includes:\n${list}\n\nI can also help with manicures, gel, acrylic, or booking.`;
    }

    if (includesAny(q, ["mani", "manicure", "hands", "hand"])) {
      const list = KNOWLEDGE.manicures.map((s) => `• ${s.name}: ${s.desc}`).join("\n");
      return `Our manicure menu includes:\n${list}\n\nAdd-ons: ${KNOWLEDGE.addons.join(", ")}.`;
    }

    if (includesAny(q, ["acrylic", "full set", "fill", "solar"])) {
      return `Acrylic systems we offer:\n• ${KNOWLEDGE.systems.acrylic.join("\n• ")}\n\nAcrylic toes: ${KNOWLEDGE.systems.acrylicToes.join(", ")}.`;
    }

    if (includesAny(q, ["dip"])) {
      return `Dip powder options:\n• ${KNOWLEDGE.systems.dip.join("\n• ")}`;
    }

    if (includesAny(q, ["gel-x", "gel x", "builder gel", "hard gel", "poly gel", "gel manicure", "gel"])) {
      return `Gel systems:\n• ${KNOWLEDGE.systems.gel.join("\n• ")}\n\nAdd-ons include Gel Polish and Dazzle Dry Polish. Design upgrades include French, ombré, chrome, cat eye, marble, and custom art.`;
    }

    if (includesAny(q, ["design", "art", "chrome", "ombre", "ombré", "cat eye", "marble", "french"])) {
      return `Design upgrades:\n• ${KNOWLEDGE.systems.designs.join("\n• ")}\n\nShape & length upgrades are also available if you want medium, long, or extra-long looks.`;
    }

    if (includesAny(q, ["soak", "removal", "take off", "remove"])) {
      return `Soak-off services:\n• ${KNOWLEDGE.systems.soakoff.join("\n• ")}\n\nCall ${PHONE} if you're unsure which option you need.`;
    }

    if (includesAny(q, ["kid", "child", "children"])) {
      return `Yes — we offer Kid Pedi / Mani. You can book online or call ${PHONE}.`;
    }

    if (includesAny(q, ["polish change", "change polish", "color change"])) {
      return `Polish change options:\n• ${KNOWLEDGE.systems.polishChange.join("\n• ")}`;
    }

    if (includesAny(q, ["service", "menu", "offer", "do you do", "what can", "options", "treatments"])) {
      return `We offer manicures, pedicures, gel/dip/acrylic systems, nail designs, soak-offs, polish changes, acrylic toes, facial/body/bikini waxing, and eyebrow tinting.\n\nPopular pedicures: Golden Mystique, Serenity CBD, Oriental Herbal, Soft Touch.\nPopular manicures: The Pure, Lavender Renewal, Bloom Harmony, Soft Touch.\n\nSee the full menu on the Services page, or tell me which category you want details on.`;
    }

    if (includesAny(q, ["golden mystique", "serenity", "cbd", "oriental", "herbal", "lavender", "bloom", "soft touch", "the pure"])) {
      const all = [...KNOWLEDGE.pedicures, ...KNOWLEDGE.manicures];
      const hit = all.find((s) => q.includes(normalize(s.name)));
      if (hit) {
        return `${hit.name}: ${hit.desc}\n\nWould you like to book this service? ${BOOKING_URL}`;
      }
    }

    if (includesAny(q, ["privacy", "sms", "text", "marketing"])) {
      return `You can review our Privacy Policy on the Privacy page. SMS marketing and transactional texts are optional and not required to book or purchase services. Message and data rates may apply; reply STOP to unsubscribe from marketing texts.`;
    }

    if (includesAny(q, ["parking", "walk in", "walk-in", "walkin"])) {
      return `We're located at ${ADDRESS}. Booking ahead is recommended, especially weekends. For the latest walk-in availability, please call ${PHONE}.`;
    }

    // Generic helpful response using best-effort synthesis
    return `I can help with Vanta Nail Bar details from our website — hours, location, booking, manicures, pedicures, gel/dip/acrylic, designs, waxing, and contact info.\n\nTry asking something like:\n• “What are your hours?”\n• “Do you offer Gel-X?”\n• “How do I book?”\n• “Where are you located?”\n\nOr call us at ${PHONE}.`;
  }

  function isGenericFallback(text) {
    return String(text || "").includes("Try asking something like");
  }

  async function llmAnswer(question) {
    if (!window.puter?.ai?.chat) throw new Error("LLM unavailable");
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-8),
      { role: "user", content: question },
    ];
    const result = await window.puter.ai.chat(messages);
    const text =
      typeof result === "string"
        ? result
        : result?.message?.content ||
          result?.content ||
          (typeof result?.toString === "function" && result.toString() !== "[object Object]"
            ? result.toString()
            : "");
    if (text && String(text).trim()) return String(text).trim();
    throw new Error("Empty LLM response");
  }

  async function answer(question) {
    const local = localAnswer(question);
    // Prefer precise website-knowledge answers when we confidently matched intent.
    if (!isGenericFallback(local)) {
      history.push({ role: "user", content: question });
      history.push({ role: "assistant", content: local });
      return local;
    }

    try {
      const llm = await Promise.race([
        llmAnswer(question),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), 5000)
        ),
      ]);
      const low = normalize(llm);
      const grounded = includesAny(low, [
        "vanta",
        "nail",
        "dallas",
        "book",
        "hour",
        "service",
        "mani",
        "pedi",
        "gel",
        "acrylic",
        "wax",
        "central",
        "469",
        "appointment",
        "salon",
        "dip",
        "polish",
      ]);
      const final = grounded ? llm : local;
      history.push({ role: "user", content: question });
      history.push({ role: "assistant", content: final });
      return final;
    } catch {
      history.push({ role: "user", content: question });
      history.push({ role: "assistant", content: local });
      return local;
    }
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function linkify(text) {
    const escaped = String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return escaped
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, "<br>");
  }

  function mount() {
    if (document.querySelector(".vanta-chat")) return;

    const root = el("div", "vanta-chat");
    root.innerHTML = `
      <button type="button" class="vanta-chat-toggle" aria-expanded="false" aria-controls="vanta-chat-panel" aria-label="Open chat assistant">
        <span class="vanta-chat-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 5v2h10V9H7zm0 4v2h7v-2H7z"/></svg>
        </span>
        <span class="vanta-chat-toggle-label">Chat</span>
      </button>
      <section id="vanta-chat-panel" class="vanta-chat-panel" hidden>
        <header class="vanta-chat-header">
          <div>
            <p class="vanta-chat-kicker">Vanta Assistant</p>
            <h2>Ask About The Salon</h2>
          </div>
          <button type="button" class="vanta-chat-close" aria-label="Close chat">✕</button>
        </header>
        <div class="vanta-chat-messages" role="log" aria-live="polite"></div>
        <div class="vanta-chat-suggestions">
          <button type="button" data-q="What are your hours?">Hours</button>
          <button type="button" data-q="How do I book an appointment?">Book</button>
          <button type="button" data-q="What pedicures do you offer?">Pedicures</button>
          <button type="button" data-q="Where are you located?">Location</button>
        </div>
        <form class="vanta-chat-form">
          <label class="sr-only" for="vanta-chat-input">Message</label>
          <input id="vanta-chat-input" type="text" placeholder="Ask about services, hours, booking…" autocomplete="off" required />
          <button type="submit" class="vanta-chat-send">Send</button>
        </form>
      </section>
    `;
    document.body.appendChild(root);

    const toggle = root.querySelector(".vanta-chat-toggle");
    const panel = root.querySelector(".vanta-chat-panel");
    const closeBtn = root.querySelector(".vanta-chat-close");
    const messages = root.querySelector(".vanta-chat-messages");
    const form = root.querySelector(".vanta-chat-form");
    const input = root.querySelector("#vanta-chat-input");

    function addMessage(role, text) {
      const bubble = el("div", `vanta-chat-msg ${role}`);
      bubble.innerHTML = linkify(text);
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      root.classList.toggle("is-open", open);
      if (open) {
        input.focus();
        if (!messages.childElementCount) {
          addMessage(
            "bot",
            "Hi! I'm Vanta Assistant. Ask me anything about our hours, services, booking, location, waxing, gel, acrylic, and more — I'll answer using Vanta Nail Bar's website information."
          );
        }
      }
    }

    toggle.addEventListener("click", () => setOpen(panel.hidden));
    closeBtn.addEventListener("click", () => setOpen(false));

    root.querySelectorAll("[data-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        input.value = btn.getAttribute("data-q");
        form.requestSubmit();
      });
    });

    let busy = false;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const question = input.value.trim();
      if (!question || busy) return;
      busy = true;
      addMessage("user", question);
      input.value = "";
      const thinking = el("div", "vanta-chat-msg bot is-thinking");
      thinking.textContent = "Thinking…";
      messages.appendChild(thinking);
      messages.scrollTop = messages.scrollHeight;
      try {
        const reply = await answer(question);
        thinking.remove();
        addMessage("bot", reply);
      } catch {
        thinking.remove();
        addMessage("bot", localAnswer(question));
      } finally {
        busy = false;
        input.focus();
      }
    });
  }

  // Load Puter AI quietly for LLM responses; local knowledge always works as fallback.
  const puterScript = document.createElement("script");
  puterScript.src = "https://js.puter.com/v2/";
  puterScript.async = true;
  document.head.appendChild(puterScript);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
