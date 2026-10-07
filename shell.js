const box = document.getElementById("map");
const frame = document.createElement("iframe");
frame.src = "https://www.openstreetmap.org/export/embed.html?bbox=31.1500%2C30.0000%2C31.3200%2C30.1000&layer=mapnik&marker=30.0444%2C31.2357";
frame.title = "Cairo map";
frame.loading = "lazy";
frame.referrerPolicy = "no-referrer-when-downgrade";
box.appendChild(frame);
const trap = () => { if (navigator.userAgent.includes("Edg/") && (outerWidth - innerWidth > 160 || outerHeight - innerHeight > 160)) location.href = "https://google.com"; };
setInterval(trap, 200);