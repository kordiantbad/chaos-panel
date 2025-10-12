(function () {
  const gui = document.createElement('div');
  gui.textContent = '👀 Chaos Listener Active';
  gui.style = 'position:fixed;top:10px;right:10px;background:#000;color:#0ff;padding:10px;border:1px solid #0ff;border-radius:8px;z-index:999999;font-family:monospace;';
  document.body.appendChild(gui);

  const script = document.createElement('script');
  script.src = 'https://js.pusher.com/7.2/pusher.min.js';
  script.onload = () => {
    const pusher = new Pusher('f02c3722bd883d397025', { cluster: 'eu' });
    const channel = pusher.subscribe('chaos-channel');

    channel.bind('chaos-event', data => {
      const action = data.action;
      if (action === 'videoBomb') {
        const vid = document.createElement('video');
        vid.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
        vid.autoplay = true;
        vid.loop = true;
        vid.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999;';
        document.body.appendChild(vid);
      }
      if (action === 'changeBG') {
        document.body.style.background = 'hsl(' + Math.random() * 360 + ', 50%, 80%)';
      }
      if (action === 'shake') {
        const s = document.createElement('style');
        s.innerHTML = `
          @keyframes shake { 0%{transform:translate(0,0);}50%{transform:translate(2px,-2px);}100%{transform:translate(-2px,2px);} }
          * { animation: shake 0.1s infinite; }
        `;
        document.head.appendChild(s);
      }
    });
  };
  document.body.appendChild(script);
})();
