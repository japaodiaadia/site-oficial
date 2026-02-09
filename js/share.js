document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.share;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Conheça esse site incrível sobre o Japão 🇯🇵");

    let shareUrl = "";

    switch(type){
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        break;
      case "line":
        shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case "copy":
        navigator.clipboard.writeText(window.location.href);
        alert("Link copiado!");
        return;
    }

    window.open(shareUrl, "_blank");
  });
});
