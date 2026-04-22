<script>
function track() {
  let eventType = "visit";

  if (location.pathname.includes("/links") && location.hash) {
    eventType = "card";
  }

  fetch("https://track.bit-stream.uz/", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      eventType,
      page: location.href,
      ref: document.referrer || "",
      ua: navigator.userAgent
    }),
    keepalive: true
  }).catch(() => {});
}

track();
window.addEventListener("hashchange", track);
</script>
