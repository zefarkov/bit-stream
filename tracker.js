(() => {
  fetch("https://track.bit-stream.uz/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      eventType: "visit",
      page: location.href,
      ref: document.referrer || "",
      ua: navigator.userAgent
    }),
    keepalive: true
  }).catch(() => {});
})();