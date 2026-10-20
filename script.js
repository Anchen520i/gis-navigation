/* GIS Navigator
 * 自定义资源：编辑下面的 resources 数组即可。
 * 每项字段：name、short、category、description、url、tags、badge、color、glow
 */
const resources = [
  {
    name: "GMS", short: "GMS", category: "地下水模拟",
    description: "地下水建模系统，用于概念模型构建、网格生成与 MODFLOW 模拟。",
    url: "https://www.aquaveo.com/software/gms-groundwater-modeling-system",
    tags: ["地下水", "建模", "MODFLOW", "概念模型"], badge: "专业软件",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "MODFLOW 6", short: "MF6", category: "地下水模拟",
    description: "USGS 新一代地下水流动与运移模拟框架及官方文档。",
    url: "https://www.usgs.gov/mission-areas/water-resources/science/modflow",
    tags: ["地下水", "数值模拟", "USGS", "开源"], badge: "USGS",
    color: "#8bb7ff", glow: "rgba(139,183,255,.09)"
  },
  {
    name: "MODFLOW 2005", short: "MF", category: "地下水模拟",
    description: "经典 MODFLOW 地下水流动模型资料与相关资源入口。",
    url: "https://www.usgs.gov/mission-areas/water-resources",
    tags: ["地下水", "数值模拟", "USGS"], badge: "模型",
    color: "#8bb7ff", glow: "rgba(139,183,255,.08)"
  },
  {
    name: "Aquaveo Support", short: "AQ", category: "地下水模拟",
    description: "Aquaveo 产品支持、技术文档与软件学习资源。",
    url: "https://www.aquaveo.com/support",
    tags: ["GMS", "地下水", "文档", "教程"], badge: "技术支持",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "ArcGIS", short: "AG", category: "GIS 软件",
    description: "Esri 地理信息系统平台，支持制图、空间分析与数据管理。",
    url: "https://www.arcgis.com/",
    tags: ["GIS", "空间分析", "制图", "专业软件"], badge: "平台",
    color: "#7fa6ff", glow: "rgba(127,166,255,.09)"
  },
  {
    name: "ArcGIS Pro 文档", short: "Pro", category: "GIS 软件",
    description: "ArcGIS Pro 官方帮助文档、工具说明和工作流指南。",
    url: "https://pro.arcgis.com/",
    tags: ["GIS", "文档", "教程", "空间分析"], badge: "文档",
    color: "#7fa6ff", glow: "rgba(127,166,255,.09)"
  },
  {
    name: "QGIS", short: "Q", category: "GIS 软件",
    description: "免费开源 GIS，支持矢量、栅格、制图与空间处理。",
    url: "https://qgis.org/",
    tags: ["GIS", "开源", "空间分析", "制图"], badge: "开源",
    color: "#91d977", glow: "rgba(145,217,119,.09)"
  },
  {
    name: "QGIS 文档", short: "QDOC", category: "GIS 软件",
    description: "QGIS 用户指南、训练手册及各版本官方文档。",
    url: "https://docs.qgis.org/",
    tags: ["GIS", "开源", "文档", "教程"], badge: "文档",
    color: "#91d977", glow: "rgba(145,217,119,.09)"
  },
  {
    name: "Google Earth", short: "GE", category: "地图与地球",
    description: "浏览卫星影像、地形、三维地貌和全球地理位置。",
    url: "https://earth.google.com/web/",
    tags: ["地图", "卫星影像", "地形", "三维"], badge: "地图",
    color: "#82b6ff", glow: "rgba(130,182,255,.09)"
  },
  {
    name: "OpenStreetMap", short: "OSM", category: "地图与地球",
    description: "全球协作式开放地图，可浏览道路、地物与基础地图数据。",
    url: "https://www.openstreetmap.org/",
    tags: ["地图", "开源", "地理数据"], badge: "开放地图",
    color: "#9acb8a", glow: "rgba(154,203,138,.09)"
  },
  {
    name: "NASA Worldview", short: "NASA", category: "遥感与影像",
    description: "交互式浏览近实时卫星影像和地球观测图层。",
    url: "https://worldview.earthdata.nasa.gov/",
    tags: ["遥感", "卫星影像", "NASA", "地球观测"], badge: "卫星影像",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "USGS EarthExplorer", short: "USGS", category: "遥感与影像",
    description: "检索和下载 Landsat 等遥感影像及相关地学数据。",
    url: "https://earthexplorer.usgs.gov/",
    tags: ["遥感", "影像下载", "Landsat", "USGS"], badge: "数据检索",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "Copernicus Data Space", short: "CDS", category: "遥感与影像",
    description: "欧洲哥白尼计划数据平台，提供 Sentinel 等地球观测数据。",
    url: "https://dataspace.copernicus.eu/",
    tags: ["遥感", "Sentinel", "卫星影像", "开放数据"], badge: "开放数据",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "OpenTopography", short: "OT", category: "地形与高程",
    description: "访问高分辨率地形数据、激光雷达点云和 DEM 数据产品。",
    url: "https://opentopography.org/",
    tags: ["高程", "DEM", "地形", "LiDAR", "开放数据"], badge: "地形数据",
    color: "#d7b3ff", glow: "rgba(215,179,255,.09)"
  },
  {
    name: "USGS 3DEP", short: "3DEP", category: "地形与高程",
    description: "美国三维高程计划，提供高程数据产品与服务。",
    url: "https://www.usgs.gov/3d-elevation-program",
    tags: ["高程", "DEM", "地形", "USGS"], badge: "高程数据",
    color: "#d7b3ff", glow: "rgba(215,179,255,.09)"
  },
  {
    name: "Natural Earth", short: "NE", category: "地理空间数据",
    description: "适用于小比例尺制图的免费全球矢量与栅格地图数据。",
    url: "https://www.naturalearthdata.com/",
    tags: ["地理数据", "矢量", "栅格", "开源"], badge: "免费数据",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "HDX Humanitarian Data", short: "HDX", category: "地理空间数据",
    description: "人道主义数据交换平台，可查找国家与区域相关数据集。",
    url: "https://data.humdata.org/",
    tags: ["地理数据", "数据集", "开放数据"], badge: "数据平台",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "Google Dataset Search", short: "GDS", category: "地理空间数据",
    description: "搜索分布在网络各处的公开数据集，包括地理空间数据。",
    url: "https://datasetsearch.research.google.com/",
    tags: ["数据集", "搜索", "研究数据"], badge: "数据搜索",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "GitHub", short: "GH", category: "开发与文档",
    description: "托管 GIS 工具、处理脚本、开源项目和可复现工作流。",
    url: "https://github.com/",
    tags: ["开发", "开源", "代码", "工具"], badge: "开发",
    color: "#d5deed", glow: "rgba(213,222,237,.07)"
  },
  {
    name: "GDAL 文档", short: "GDAL", category: "开发与文档",
    description: "地理空间数据转换与处理工具集的官方文档。",
    url: "https://gdal.org/",
    tags: ["开发", "开源", "栅格", "矢量", "文档"], badge: "工具集",
    color: "#d5deed", glow: "rgba(213,222,237,.07)"
  },
  {
    name: "GeoPandas", short: "GP", category: "开发与文档",
    description: "Python 地理空间数据分析工具，扩展 pandas 的空间能力。",
    url: "https://geopandas.org/",
    tags: ["Python", "开发", "开源", "空间分析"], badge: "Python",
    color: "#d5deed", glow: "rgba(213,222,237,.07)"
  },
  {
    name: "USGS 美国地质调查局", short: "USGS", category: "地理空间数据",
    description: "美国地质调查局官方门户，汇集地球科学研究、地质、水资源、地形与遥感数据资源。",
    url: "https://www.usgs.gov/",
    tags: ["USGS", "地质", "水文", "地形", "地球科学", "官方数据"], badge: "官方门户",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "中国地质云", short: "地质云", category: "地理空间数据",
    description: "中国地质调查相关地学数据与信息服务入口。",
    url: "https://geocloud.cgs.gov.cn/",
    tags: ["中国", "地质", "地学数据", "地质调查", "云平台"], badge: "中国地学",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "ASF Vertex", short: "ASF", category: "遥感与影像",
    description: "阿拉斯加卫星设施数据检索平台，适用于 Sentinel-1 等 SAR 雷达影像搜索与下载。",
    url: "https://search.asf.alaska.edu/#/?zoom=11.000&center=-87.269,39.230",
    tags: ["遥感", "SAR", "Sentinel-1", "雷达影像", "合成孔径雷达", "ASF"], badge: "SAR 数据",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "中国科学院地理空间数据云", short: "GSCloud", category: "地理空间数据",
    description: "地理空间数据云入口，可查找遥感影像、数字高程及其他地理空间数据产品。",
    url: "http://www.gscloud.cn/#page5",
    tags: ["中国", "地理数据", "遥感影像", "DEM", "数据下载"], badge: "数据平台",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "GISRS 数据资源", short: "GISRS", category: "地理空间数据",
    description: "GIS 与遥感相关数据资源网站，可作为专题数据与资料检索入口。",
    url: "https://www.gisrsdata.com/",
    tags: ["GIS", "遥感", "数据下载", "专题数据", "中国"], badge: "数据资源",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "GISREAL 地理空间资源", short: "GISREAL", category: "地理空间数据",
    description: "地理信息与遥感相关资源入口，便于查找空间数据和应用资料。",
    url: "https://www.gisreal.cn/",
    tags: ["GIS", "遥感", "地理信息", "数据资源", "中国"], badge: "资源门户",
    color: "#6ce0c0", glow: "rgba(108,224,192,.08)"
  },
  {
    name: "ArcGIS Living Atlas Wayback", short: "Wayback", category: "遥感与影像",
    description: "探索 Esri World Imagery 的历史影像版本，比较不同时期的卫星与航空影像。",
    url: "https://livingatlas.arcgis.com/wayback/#active=13851&mode=explore&mapCenter=-115.29408%2C36.06406%2C14",
    tags: ["ArcGIS", "历史影像", "卫星影像", "时序", "变化检测", "Living Atlas"], badge: "历史影像",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "Google Earth Engine Code Editor", short: "GEE", category: "遥感与影像",
    description: "Google Earth Engine 在线代码编辑器，用 JavaScript 调用云端地球观测数据进行遥感分析。",
    url: "https://code.earthengine.google.com/",
    tags: ["Google", "Earth Engine", "GEE", "遥感", "JavaScript", "云计算", "影像分析"], badge: "云端分析",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  },
  {
    name: "NASA Landsat Science", short: "Landsat", category: "遥感与影像",
    description: "NASA Landsat 科学任务门户，介绍 Landsat 卫星、任务进展、影像及地表变化应用。",
    url: "https://landsat.gsfc.nasa.gov/",
    tags: ["NASA", "Landsat", "卫星", "遥感", "地表变化", "科学任务"], badge: "任务门户",
    color: "#f2a86c", glow: "rgba(242,168,108,.09)"
  }
];

const categoryIcons = {
  "全部资源": "◈",
  "地下水模拟": "≈",
  "GIS 软件": "▦",
  "地图与地球": "◎",
  "遥感与影像": "▧",
  "地形与高程": "⌁",
  "地理空间数据": "◫",
  "开发与文档": "⌘"
};

const state = { query: "", category: "全部资源", favoritesOnly: false };
const FAVORITES_KEY = "gis-navigator-favorites";
const THEME_KEY = "gis-navigator-theme";
const grid = document.getElementById("resourceGrid");
const categoryNav = document.getElementById("categoryNav");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("siteSearch");

function getFavorites() {
  try { return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")); }
  catch (_) { return new Set(); }
}
function saveFavorites(favorites) {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites])); } catch (_) {}
}
function normalize(value) {
  return String(value || "").toLocaleLowerCase().trim();
}
function getCategories() {
  return ["全部资源", ...new Set(resources.map(item => item.category))];
}
const searchAliases = {
  "gee": ["google earth engine", "谷歌地球引擎", "云端遥感"],
  "google earth engine": ["gee", "谷歌地球引擎", "云端遥感"],
  "dem": ["数字高程模型", "高程", "地形"],
  "数字高程模型": ["dem", "高程", "地形"],
  "sar": ["合成孔径雷达", "雷达影像", "asf", "sentinel-1"],
  "modflow": ["地下水", "地下水模拟", "数值模拟"],
  "landsat": ["陆地卫星", "卫星影像", "遥感"],
  "sentinel": ["哥白尼", "copernicus", "卫星影像", "遥感"],
  "开源": ["qgis", "gdal", "geopandas", "openstreetmap"]
};
function expandedQuery(query) {
  const normalized = normalize(query);
  const aliases = searchAliases[normalized] || [];
  return [normalized, ...aliases.map(normalize)].filter(Boolean);
}
function filteredResources() {
  const queryTerms = expandedQuery(state.query);
  const favorites = getFavorites();
  return resources.filter(item => {
    const categoryMatch = state.category === "全部资源" || item.category === state.category;
    const favoriteMatch = !state.favoritesOnly || favorites.has(item.url);
    const haystack = normalize([item.name, item.short, item.category, item.description, item.url, ...(item.tags || [])].join(" "));
    const queryMatch = !state.query.trim() || queryTerms.some(term => haystack.includes(term));
    return categoryMatch && favoriteMatch && queryMatch;
  });
}
function renderCategories() {
  const categories = getCategories();
  categoryNav.innerHTML = "";
  categories.forEach(category => {
    const count = category === "全部资源"
      ? resources.length
      : resources.filter(item => item.category === category).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-button${state.category === category ? " active" : ""}`;
    button.setAttribute("aria-pressed", String(state.category === category));
    button.innerHTML = `<span class="cat-symbol">${categoryIcons[category] || "◈"}</span><span>${category}</span><span class="cat-count">${count}</span>`;
    button.addEventListener("click", () => {
      state.category = category;
      renderCategories();
      renderResources();
    });
    categoryNav.appendChild(button);
  });
}
function createCard(item, favorites) {
  const card = document.createElement("article");
  card.className = "resource-card";
  card.style.setProperty("--logo-color", item.color || "var(--accent)");
  card.style.setProperty("--card-color", item.color || "var(--accent)");
  card.style.setProperty("--card-glow", item.glow || "rgba(108,224,192,.05)");
  card.style.setProperty("--card-border", `${item.color || "#6ce0c0"}66`);
  card.style.setProperty("--logo-bg", `${item.color || "#6ce0c0"}14`);

  const top = document.createElement("div");
  top.className = "card-top";
  const logo = document.createElement("div");
  logo.className = "resource-logo";
  logo.textContent = item.short;
  logo.setAttribute("aria-hidden", "true");

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const favorite = document.createElement("button");
  favorite.type = "button";
  favorite.className = `favorite-button${favorites.has(item.url) ? " is-favorite" : ""}`;
  favorite.textContent = favorites.has(item.url) ? "★" : "☆";
  favorite.title = favorites.has(item.url) ? "取消收藏" : "加入收藏";
  favorite.setAttribute("aria-label", favorite.title);
  favorite.setAttribute("aria-pressed", String(favorites.has(item.url)));
  favorite.addEventListener("click", () => {
    const updated = getFavorites();
    if (updated.has(item.url)) updated.delete(item.url);
    else updated.add(item.url);
    saveFavorites(updated);
    renderResources();
  });
  const openMark = document.createElement("span");
  openMark.className = "open-mark";
  openMark.textContent = "↗";
  openMark.setAttribute("aria-hidden", "true");
  actions.append(favorite, openMark);
  top.append(logo, actions);

  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";
  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.name;
  titleRow.appendChild(title);
  if (item.badge) {
    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = item.badge;
    titleRow.appendChild(badge);
  }

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = item.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";
  const domain = document.createElement("span");
  domain.className = "card-domain";
  try { domain.textContent = new URL(item.url).hostname.replace(/^www\./, ""); }
  catch (_) { domain.textContent = item.url; }
  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = item.category;
  footer.append(domain, category);

  card.append(top, titleRow, description, footer);
  card.tabIndex = 0;
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", `打开 ${item.name}`);
  card.addEventListener("click", event => {
    if (event.target.closest("button")) return;
    window.open(item.url, "_blank", "noopener,noreferrer");
  });
  card.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target === card) {
      event.preventDefault();
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  });
  return card;
}
function renderResources() {
  const items = filteredResources();
  const favorites = getFavorites();
  grid.innerHTML = "";
  items.forEach(item => grid.appendChild(createCard(item, favorites)));
  emptyState.hidden = items.length !== 0;
  grid.hidden = items.length === 0;
  document.getElementById("visibleCount").textContent = items.length;
  document.getElementById("favoriteCount").textContent = favorites.size;
  const summary = document.getElementById("resultSummary");
  if (summary) {
    summary.textContent = state.query.trim() ? `“${state.query.trim()}”` : state.favoritesOnly ? "我的收藏" : state.category;
  }
  document.getElementById("allFilter").classList.toggle("active", !state.favoritesOnly);
  document.getElementById("favoritesFilter").classList.toggle("active", state.favoritesOnly);
}
function setSearch(value) {
  state.query = value;
  searchInput.value = value;
  renderResources();
}
document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  state.query = searchInput.value;
  renderResources();
});
searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderResources();
});
document.querySelectorAll("[data-quick]").forEach(button => {
  button.addEventListener("click", () => {
    const keyword = button.dataset.quick;
    setSearch(keyword);
    searchInput.focus();
  });
});
document.getElementById("allFilter").addEventListener("click", () => {
  state.favoritesOnly = false;
  renderResources();
});
document.getElementById("favoritesFilter").addEventListener("click", () => {
  state.favoritesOnly = true;
  renderResources();
});
document.getElementById("clearSearch").addEventListener("click", () => {
  state.query = "";
  state.category = "全部资源";
  state.favoritesOnly = false;
  searchInput.value = "";
  renderCategories();
  renderResources();
  searchInput.focus();
});
document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  root.classList.toggle("dark");
  try { localStorage.setItem(THEME_KEY, root.classList.contains("dark") ? "dark" : "light"); } catch (_) {}
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    renderResources();
    searchInput.blur();
  }
});

try {
  if (localStorage.getItem(THEME_KEY) === "dark") document.documentElement.classList.add("dark");
} catch (_) {}
document.getElementById("resourceCount").textContent = resources.length;
document.getElementById("categoryCount").textContent = resources.reduce((set, item) => set.add(item.category), new Set()).size;
renderCategories();
renderResources();
