(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const statusEl = document.querySelector("[data-open-status]");
  const yearEl = document.querySelector("[data-year]");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    let backdrop = document.querySelector(".nav-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "nav-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      document.body.appendChild(backdrop);
    }

    // Keep a placeholder so the header layout stays stable, and park the
    // drawer on <body> so position:fixed is never trapped by header styles.
    const placeholder = document.createComment("nav-placeholder");
    const parkNavOnBody = () => {
      if (nav.parentElement !== document.body) {
        nav.parentNode.insertBefore(placeholder, nav);
        document.body.appendChild(nav);
      }
    };
    parkNavOnBody();

    const setMenuOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });
    backdrop.addEventListener("click", () => setMenuOpen(false));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
  }

  // Dallas hours (local America/Chicago)
  function getDallasParts(date = new Date()) {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = Object.fromEntries(
      fmt.formatToParts(date).map((p) => [p.type, p.value])
    );
    return {
      weekday: parts.weekday,
      minutes: Number(parts.hour) * 60 + Number(parts.minute),
    };
  }

  function isOpenNow() {
    const { weekday, minutes } = getDallasParts();
    const schedule = {
      Mon: [10 * 60, 20 * 60],
      Tue: [10 * 60, 20 * 60],
      Wed: [10 * 60, 20 * 60],
      Thu: [10 * 60, 20 * 60],
      Fri: [10 * 60, 20 * 60],
      Sat: [9 * 60, 19 * 60],
      Sun: [11 * 60, 17 * 60 + 30],
    };
    const range = schedule[weekday];
    if (!range) return false;
    return minutes >= range[0] && minutes < range[1];
  }

  if (statusEl) {
    const open = isOpenNow();
    const dot = statusEl.querySelector(".status-dot");
    statusEl.querySelector("[data-status-text]").textContent = open
      ? "Open now · Dallas time"
      : "Closed now · See hours below";
    if (dot) dot.classList.toggle("is-closed", !open);
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  // Service tabs
  const tabs = document.querySelectorAll("[data-service-tab]");
  const items = document.querySelectorAll("[data-service-cat]");
  if (tabs.length && items.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const cat = tab.getAttribute("data-service-tab");
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        items.forEach((item) => {
          const match = cat === "all" || item.getAttribute("data-service-cat") === cat;
          item.hidden = !match;
        });
      });
    });
  }

  // Gallery lightbox
  const galleryButtons = Array.from(document.querySelectorAll("[data-gallery-src]"));
  const lightbox = document.querySelector(".lightbox");
  if (galleryButtons.length && lightbox) {
    const img = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox.querySelector(".lightbox-nav.prev");
    const nextBtn = lightbox.querySelector(".lightbox-nav.next");
    let index = 0;

    const openAt = (i) => {
      index = (i + galleryButtons.length) % galleryButtons.length;
      const src = galleryButtons[index].getAttribute("data-gallery-src");
      const alt = galleryButtons[index].getAttribute("data-gallery-alt") || "Gallery image";
      img.src = src;
      img.alt = alt;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    galleryButtons.forEach((btn, i) => {
      btn.addEventListener("click", () => openAt(i));
    });
    closeBtn?.addEventListener("click", close);
    prevBtn?.addEventListener("click", () => openAt(index - 1));
    nextBtn?.addEventListener("click", () => openAt(index + 1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    window.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") openAt(index - 1);
      if (e.key === "ArrowRight") openAt(index + 1);
    });
  }

  // Contact form (client-side mailto handoff)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const topic = String(data.get("topic") || "General Information");
      const message = String(data.get("message") || "").trim();
      const note = form.querySelector(".form-note");

      if (!name || !email || !message) {
        if (note) {
          note.textContent = "Please fill in your name, email, and message.";
          note.classList.remove("is-success");
        }
        return;
      }

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Topic: ${topic}`,
        "",
        message,
      ].join("\n");

      const mailto = `mailto:vantanailbar@gmail.com?subject=${encodeURIComponent(
        `Vanta Nail Bar — ${topic}`
      )}&body=${encodeURIComponent(body)}`;

      if (note) {
        note.textContent = "Opening your email app to send the message…";
        note.classList.add("is-success");
      }
      window.location.href = mailto;
      form.reset();
    });
  }
})();
