const modal = document.getElementById("modal");
document.getElementById("open").onclick = () => modal.style.display = "flex";
document.getElementById("close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }