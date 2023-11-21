//sidebar 1
document.getElementById("expandButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const expandedWidth = 400;
  const contentDiv = document.getElementById("sidebarContent");
  const headDiv = document.querySelector(".sidebar-1-head");
  const expandBtn = document.getElementById("expandButton");

  if (sidebar.style.width === expandedWidth + "px") {
    sidebar.style.width = "130px";
    contentDiv.style.display = "none";
    headDiv.textContent = "";
    expandBtn.textContent = "1";
  } else {
    sidebar.style.width = expandedWidth + "px";
    contentDiv.style.display = "block";
    headDiv.textContent = "Journey Board";
    expandBtn.textContent = "\u2716";
  }
});

// container 2
const arrow = document.getElementById("arrowIcon");
arrow.addEventListener("click", function () {
  const content = document.getElementById("toggle-2");

  if (content.style.display === "none") {
    content.style.display = "block";
    arrow.classList.remove("fa-angle-down");
    arrow.classList.add("fa-angle-up");
  } else {
    content.style.display = "none";
    arrow.classList.remove("fa-angle-up");
    arrow.classList.add("fa-angle-down");
  }
});

//container 4

const arrow4 = document.getElementById("arrowIcon4");
arrow4.addEventListener("click", function () {
  const content = document.getElementById("c-4-content");

  if (content.style.display === "none") {
    content.style.display = "block";
    arrow4.classList.remove("fa-angle-down");
    arrow4.classList.add("fa-angle-up");
  } else {
    content.style.display = "none";
    arrow4.classList.remove("fa-angle-up");
    arrow4.classList.add("fa-angle-down");
  }
});

const arrow41 = document.getElementById("arrowIcon41");
arrow41.addEventListener("click", function () {
  const content = document.getElementById("c-4-subText");

  if (content.style.display === "none") {
    content.style.display = "block";
    arrow41.classList.remove("fa-angle-down");
    arrow41.classList.add("fa-angle-up");
  } else {
    content.style.display = "none";
    arrow41.classList.remove("fa-angle-up");
    arrow41.classList.add("fa-angle-down");
  }
});

//sidebar 2
document.getElementById("left-arrow").addEventListener("click", function () {
  const sidebar2 = document.getElementById("sidebar2");
  const expandedWidth2 = 400;
  const contentDiv2 = document.getElementById("sidebar2Content");
  const expandBtn2 = document.getElementById("left-arrow");

  if (sidebar2.style.width === expandedWidth2 + "px") {
    sidebar2.style.width = "130px";
    contentDiv2.style.display = "none";
    expandBtn2.classList.remove("fa-arrow-right");
    expandBtn2.classList.add("fa-arrow-left");
  } else {
    sidebar2.style.width = expandedWidth2 + "px";
    contentDiv2.style.display = "block";
    expandBtn2.classList.remove("fa-arrow-left");
    expandBtn2.classList.add("fa-arrow-right");
  }
});
