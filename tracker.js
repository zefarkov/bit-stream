(() => {
  fetch("https://track.bit-stream.uz/", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      eventType: "visit",
      page: location.hostname,
      ref: document.referrer || "",
      ua: navigator.userAgent
    }),
    keepalive: true
  }).catch(() => {});
})();
