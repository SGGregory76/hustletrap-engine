// trust-bar.js
// Updates the trust bar for the current NPC profile page

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure RelationshipEngine is loaded
    if (typeof RelationshipEngine === 'undefined') return;

    const npcTag = 'BlazeTrap'; // adjust per page
    const trustValue = RelationshipEngine.getTrust(npcTag);
    const clamped = Math.min(100, Math.max(0, trustValue));

    const fill = document.getElementById('trust-fill');
    const label = document.getElementById('trust-percent');
    if (fill) {
      fill.style.width = `${clamped}%`;
    }
    if (label) {
      label.textContent = `${clamped}/100`;
    }
  });
})();
