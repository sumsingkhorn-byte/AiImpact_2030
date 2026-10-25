/* DATASET (20 JOB TITLES SUMMARIZED FROM 3,000 RECORDS) */
const JOBS_DATA = [
  {
    id: 1,
    title_th: "พนักงานขายหน้าร้าน (Retail Worker)",
    title_en: "Retail Worker",
    auto_prob: 0.83471,
    salary: 87208,
    exposure: 0.505548,
    tech_growth: 0.997161,
    risk: "High",
  },
  {
    id: 2,
    title_th: "พนักงานรักษาความปลอดภัย (Security Guard)",
    title_en: "Security Guard",
    auto_prob: 0.833052,
    salary: 87290,
    exposure: 0.515,
    tech_growth: 0.986558,
    risk: "High",
  },
  {
    id: 3,
    title_th: "คนงานก่อสร้าง (Construction Worker)",
    title_en: "Construction Worker",
    auto_prob: 0.825962,
    salary: 90800,
    exposure: 0.504808,
    tech_growth: 0.998397,
    risk: "High",
  },
  {
    id: 4,
    title_th: "พนักงานสนับสนุนลูกค้า (Customer Support)",
    title_en: "Customer Support",
    auto_prob: 0.825263,
    salary: 87487,
    exposure: 0.501504,
    tech_growth: 0.991353,
    risk: "High",
  },
  {
    id: 5,
    title_th: "พนักงานขับรถบรรทุก (Truck Driver)",
    title_en: "Truck Driver",
    auto_prob: 0.818627,
    salary: 84520,
    exposure: 0.520131,
    tech_growth: 1.026797,
    risk: "High",
  },
  {
    id: 6,
    title_th: "นักออกแบบกราฟิก (Graphic Designer)",
    title_en: "Graphic Designer",
    auto_prob: 0.529,
    salary: 96423,
    exposure: 0.527062,
    tech_growth: 0.9925,
    risk: "Medium",
  },
  {
    id: 7,
    title_th: "วิศวกรซอฟต์แวร์ (Software Engineer)",
    title_en: "Software Engineer",
    auto_prob: 0.508686,
    salary: 90265,
    exposure: 0.512914,
    tech_growth: 0.976057,
    risk: "Medium",
  },
  {
    id: 8,
    title_th: "นักวิทยาศาสตร์ข้อมูล (Data Scientist)",
    title_en: "Data Scientist",
    auto_prob: 0.496287,
    salary: 90630,
    exposure: 0.512874,
    tech_growth: 0.95994,
    risk: "Medium",
  },
  {
    id: 9,
    title_th: "เชฟ / พ่อครัว (Chef)",
    title_en: "Chef",
    auto_prob: 0.495674,
    salary: 91408,
    exposure: 0.528794,
    tech_growth: 1.081348,
    risk: "Medium",
  },
  {
    id: 10,
    title_th: "ผู้จัดการฝ่ายการตลาด (Marketing Manager)",
    title_en: "Marketing Manager",
    auto_prob: 0.494776,
    salary: 86458,
    exposure: 0.524478,
    tech_growth: 1.012164,
    risk: "Medium",
  },
  {
    id: 11,
    title_th: "นักวิจัยประสบการณ์ผู้ใช้ (UX Researcher)",
    title_en: "UX Researcher",
    auto_prob: 0.492395,
    salary: 87982,
    exposure: 0.475988,
    tech_growth: 0.986886,
    risk: "Medium",
  },
  {
    id: 12,
    title_th: "ผู้เชี่ยวชาญทรัพยากรบุคคล (HR Specialist)",
    title_en: "HR Specialist",
    auto_prob: 0.490764,
    salary: 89242,
    exposure: 0.489236,
    tech_growth: 0.986815,
    risk: "Medium",
  },
  {
    id: 13,
    title_th: "ทนายความ (Lawyer)",
    title_en: "Lawyer",
    auto_prob: 0.486439,
    salary: 92442,
    exposure: 0.509015,
    tech_growth: 1.015076,
    risk: "Medium",
  },
  {
    id: 14,
    title_th: "ช่างยนต์ (Mechanic)",
    title_en: "Mechanic",
    auto_prob: 0.485294,
    salary: 89808,
    exposure: 0.456544,
    tech_growth: 0.976471,
    risk: "Medium",
  },
  {
    id: 15,
    title_th: "นักวิเคราะห์การเงิน (Financial Analyst)",
    title_en: "Financial Analyst",
    auto_prob: 0.485099,
    salary: 88030,
    exposure: 0.464437,
    tech_growth: 1.027815,
    risk: "Medium",
  },
  {
    id: 16,
    title_th: "แพทย์ (Doctor)",
    title_en: "Doctor",
    auto_prob: 0.176742,
    salary: 89092,
    exposure: 0.505152,
    tech_growth: 0.963788,
    risk: "Low",
  },
  {
    id: 17,
    title_th: "ครู / ผู้สอน (Teacher)",
    title_en: "Teacher",
    auto_prob: 0.175783,
    salary: 90886,
    exposure: 0.497289,
    tech_growth: 1.008795,
    risk: "Low",
  },
  {
    id: 18,
    title_th: "พยาบาล (Nurse)",
    title_en: "Nurse",
    auto_prob: 0.175634,
    salary: 88955,
    exposure: 0.520563,
    tech_growth: 0.986408,
    risk: "Low",
  },
  {
    id: 19,
    title_th: "นักวิทยาศาสตร์การวิจัย (Research Scientist)",
    title_en: "Research Scientist",
    auto_prob: 0.174161,
    salary: 87205,
    exposure: 0.478591,
    tech_growth: 0.962081,
    risk: "Low",
  },
  {
    id: 20,
    title_th: "วิศวกรปัญญาประดิษฐ์ (AI Engineer)",
    title_en: "AI Engineer",
    auto_prob: 0.172214,
    salary: 90760,
    exposure: 0.474286,
    tech_growth: 0.9785,
    risk: "Low",
  },
];

/* TAB SWITCHING SYSTEM */
function switchDashboardTab(tabId) {
  document
    .querySelectorAll(".tab-view")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".sidebar-item")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-pill")
    .forEach((el) => el.classList.remove("active"));

  const targetView = document.getElementById("view-" + tabId);
  if (targetView) targetView.classList.add("active");

  const sideBtn = document.getElementById("side-" + tabId);
  if (sideBtn) sideBtn.classList.add("active");

  const topPills = document.querySelectorAll(".nav-pill");
  topPills.forEach((pill) => {
    if (pill.getAttribute("onclick").includes(tabId)) {
      pill.classList.add("active");
    }
  });

  const titleMap = {
    overview: "แดชบอร์ดสรุปภาพรวม (Executive Summary)",
    table: "ค้นหาและจัดอันดับอาชีพ (Jobs Directory)",
    charts: "การกระจายความเสี่ยง (Risk Distribution)",
    insights: "ข้อเสนอแนะเชิงกลยุทธ์ (Executive Insights)",
  };
  document.getElementById("tabHeadingTitle").innerText =
    titleMap[tabId] || "แดชบอร์ดข้อมูล";

  if (tabId === "charts") {
    renderChartsView();
  }
}

/* RENDER JOBS TABLE */
function renderTable() {
  const searchVal = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const riskVal = document.getElementById("riskFilter").value;
  const sortVal = document.getElementById("sortOrder").value;

  let filtered = JOBS_DATA.filter((item) => {
    const matchSearch =
      item.title_th.toLowerCase().includes(searchVal) ||
      item.title_en.toLowerCase().includes(searchVal);
    const matchRisk = riskVal === "ALL" || item.risk === riskVal;
    return matchSearch && matchRisk;
  });

  if (sortVal === "prob_desc")
    filtered.sort((a, b) => b.auto_prob - a.auto_prob);
  if (sortVal === "prob_asc")
    filtered.sort((a, b) => a.auto_prob - b.auto_prob);
  if (sortVal === "salary_desc")
    filtered.sort((a, b) => b.salary - a.salary);

  const tbody = document.getElementById("jobTableBody");
  tbody.innerHTML = "";

  filtered.forEach((job) => {
    const tr = document.createElement("tr");

    let badgeCls = "badge-medium";
    let riskText = "ความเสี่ยงปานกลาง";
    if (job.risk === "High") {
      badgeCls = "badge-high";
      riskText = "ความเสี่ยงสูง";
    }
    if (job.risk === "Low") {
      badgeCls = "badge-low";
      riskText = "ความเสี่ยงต่ำ";
    }

    tr.innerHTML = `
    <td style="font-weight: 600;">${job.title_th}</td>
    <td style="font-weight: 700; color: var(--violet-bright);">${(job.auto_prob * 100).toFixed(2)}%</td>
    <td>$${job.salary.toLocaleString()}</td>
    <td>${job.exposure.toFixed(2)}</td>
    <td>${job.tech_growth.toFixed(2)}</td>
    <td><span class="badge ${badgeCls}">${riskText}</span></td>
  `;
    tbody.appendChild(tr);
  });
}

/* RENDER CHARTS VIEW */
function renderChartsView() {
  const container = document.getElementById("barChartContainer");
  container.innerHTML = "";

  const sorted = [...JOBS_DATA].sort((a, b) => b.auto_prob - a.auto_prob);

  sorted.forEach((job) => {
    const pct = (job.auto_prob * 100).toFixed(1);
    let barColor = "linear-gradient(90deg, #ef4444, #f87171)";
    if (job.risk === "Medium")
      barColor = "linear-gradient(90deg, #f59e0b, #fbbf24)";
    if (job.risk === "Low")
      barColor = "linear-gradient(90deg, #10b981, #34d399)";

    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
    <div class="bar-lbl" title="${job.title_th}">${job.title_th}</div>
    <div class="bar-track">
      <div class="bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
    </div>
    <div class="bar-val">${pct}%</div>
  `;
    container.appendChild(row);
  });
}

/* STARFIELD CANVAS LOGIC */
const starsCanvas = document.getElementById("starsCanvas");
const sCtx = starsCanvas.getContext("2d");
let starsArr = [];

function initStars() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
  starsArr = [];
  const count = Math.floor(
    (starsCanvas.width * starsCanvas.height) / 2800,
  );
  for (let i = 0; i < count; i++) {
    starsArr.push({
      x: Math.random() * starsCanvas.width,
      y: Math.random() * starsCanvas.height,
      r: Math.random() * 1.3 + 0.2,
      a: Math.random() * 0.8 + 0.2,
    });
  }
}

function drawStars() {
  sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  sCtx.fillStyle = "#ffffff";
  starsArr.forEach((s) => {
    sCtx.globalAlpha = s.a;
    sCtx.beginPath();
    sCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    sCtx.fill();
  });
  sCtx.globalAlpha = 1;
}

/* FALLBACK CANVAS PLANET ARC */
const planetFallback = document.getElementById("planetCanvasFallback");
const pCtx = planetFallback.getContext("2d");

function drawPlanetFallback() {
  planetFallback.width = Math.min(window.innerWidth, 1672);
  planetFallback.height = 500;
  const w = planetFallback.width;

  pCtx.clearRect(0, 0, w, 500);

  pCtx.beginPath();
  pCtx.ellipse(w / 2, -150, w * 0.6, 320, 0, 0, Math.PI * 2);

  const grad = pCtx.createRadialGradient(
    w / 2,
    170,
    100,
    w / 2,
    170,
    w * 0.5,
  );
  grad.addColorStop(0, "rgba(160, 32, 255, 0.8)");
  grad.addColorStop(0.5, "rgba(122, 28, 248, 0.3)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");

  pCtx.strokeStyle = "rgba(160, 32, 255, 0.9)";
  pCtx.lineWidth = 4;
  pCtx.shadowColor = "#9312ff";
  pCtx.shadowBlur = 30;
  pCtx.stroke();

  pCtx.fillStyle = grad;
  pCtx.fill();
}

/* VIDEO LOAD HANDLING */
const planetVideo = document.getElementById("planetVideo");
const planetVideoContainer = document.getElementById(
  "planetVideoContainer",
);

planetVideo.addEventListener("playing", () => {
  planetVideoContainer.classList.add("loaded");
  planetFallback.style.display = "none";
});

window.addEventListener("resize", () => {
  initStars();
  drawStars();
  drawPlanetFallback();
});

/* INITIALIZATION */
window.onload = function () {
  initStars();
  drawStars();
  drawPlanetFallback();
  renderTable();
};
