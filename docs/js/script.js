document.addEventListener('DOMContentLoaded', () => {

  // ─── Mobile Menu ───────────────────────────────────────────────
  const toggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active')
      navLinks.classList.toggle('active')
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : ''
    })

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active')
        navLinks.classList.remove('active')
        document.body.style.overflow = ''
      })
    })
  }

  // ─── Navbar Shrink ─────────────────────────────────────────────
  const navbar = document.querySelector('.navbar')
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y > 80) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
    lastScroll = y
  }, { passive: true })

  // ─── Floating Particles (hero) ─────────────────────────────────
  const hero = document.querySelector('.hero')
  if (hero) {
    const wrapper = document.createElement('div')
    wrapper.className = 'particles'
    hero.prepend(wrapper)
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = 60 + Math.random() * 40 + '%'
      p.style.animationDuration = 4 + Math.random() * 6 + 's'
      p.style.animationDelay = Math.random() * 4 + 's'
      p.style.width = p.style.height = 4 + Math.random() * 6 + 'px'
      wrapper.appendChild(p)
    }
  }

  // ─── Scroll Reveal ─────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  revealEls.forEach(el => revealObserver.observe(el))

  // ─── Counter Animation ─────────────────────────────────────────
  const counters = document.querySelectorAll('.stat-num')
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true'
        const target = parseInt(entry.target.dataset.target, 10) || parseInt(entry.target.textContent.replace(/\D/g, ''), 10)
        const suffix = entry.target.textContent.replace(/[\d]/g, '').trim()
        let current = 0
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          entry.target.textContent = current.toLocaleString() + (suffix ? ' ' + suffix : '')
        }, 24)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(c => {
    const raw = c.textContent.trim()
    const num = parseInt(raw.replace(/\D/g, ''), 10)
    if (!isNaN(num)) {
      const suffix = raw.replace(/[\d]/g, '').trim()
      c.dataset.target = num
      c.textContent = '0' + (suffix ? ' ' + suffix : '')
      counterObserver.observe(c)
    }
  })

  // ─── Tilt Effect on Service Cards ──────────────────────────────
  const cards = document.querySelectorAll('.service-card, .why-item')

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateX = ((y - cy) / cy) * -6
      const rotateY = ((x - cx) / cx) * 6
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
    })

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)'
    })
  })

  // ─── Smooth hover parallax on gallery ──────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item')
  galleryItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      const img = item.querySelector('img')
      if (img) {
        img.style.transform = `scale(1.15) translate(${x * 10}px, ${y * 10}px)`
      }
    })
    item.addEventListener('mouseleave', () => {
      const img = item.querySelector('img')
      if (img) img.style.transform = ''
    })
  })

  // ─── Smooth scroll for anchor links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        const offset = 80
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: targetPos, behavior: 'smooth' })
      }
    })
  })

})
