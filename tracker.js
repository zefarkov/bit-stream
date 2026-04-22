<script>
function track() {
  const cards = {
    "#farrukh": "farrukh",
    "#abdulaziz": "abdulaziz"
  };

  const card = cards[location.hash] || "";
  const eventType = card ? "card" : "visit";

  fetch("https://track.bit-stream.uz/", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      eventType,
      card,
      page: location.pathname,
      ref: document.referrer || "",
      ua: navigator.userAgent
    }),
    keepalive: true
  }).catch(() => {});
}

track();
window.addEventListener("hashchange", track);
</script>
