(function() {
  // Only run inside the Burner OS iframe
  if (window === window.top) return;

  const pages = [
    { name: "Missions", href: "https://hustle-trap.blogspot.com/p/missions.html?m=1" },
    { name: "Contacts", href: "https://hustle-trap.blogspot.com/p/contacts.html?m=1" },
    { name: "Inventory", href: "https://hustle-trap.blogspot.com/p/inventory_47.html?m=1" },
    { name: "Log", href: "https://hustle-trap.blogspot.com/p/log.html?m=1" }
  ];

  const current = window.location.href.split('#')[0];

  const footer = document.createElement('div');
  footer.id = 'redundancy-footer';
  footer.style.cssText = 'margin-top:20px; padding:10px; text-align:center; font-size:14px; color:#aaa; border-top:1px solid #333; background:#121212;';

  // Quick Access links for in-OS pages (exclude current)
  const links = pages
    .filter(p => p.href !== current)
    .map(p => `<a href="${p.href}" style="color:#8cf; text-decoration:none; margin:0 4px;">${p.name}</a>`)
    .join(' | ');

  footer.innerHTML = `<div>Quick Access: ${links}</div>`;

  document.body.appendChild(footer);
})();
