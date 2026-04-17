const recoveryGuides = [
  {
    id: "achilles",
    name: "Achilles rupture",
    window: "Often about 12 months for full recovery; strength goals can extend longer",
    notes: [
      "AAOS notes roughly six weeks of immobilization after repair before progressive rehab.",
      "Complete recovery can take about 12 months, and some patients need longer to reach all goals.",
      "Return-to-sport decisions are individualized and usually require formal functional testing."
    ],
    sources: [
      {
        label: "AAOS: Achilles Tendon Rupture (Tear)",
        url: "https://orthoinfo.aaos.org/en/diseases--conditions/achilles-tendon-rupture-tear"
      }
    ]
  },
  {
    id: "acl",
    name: "ACL tear",
    window: "Usually 6 to 9 months; competitive athletes may need longer",
    notes: [
      "Cleveland Clinic lists six to nine months as a typical recovery window.",
      "Competitive athletes are often held longer before full return to sport.",
      "Returning too early raises reinjury risk."
    ],
    sources: [
      {
        label: "Cleveland Clinic: ACL Tear",
        url: "https://my.clevelandclinic.org/health/diseases/16576-acl-anterior-cruciate-ligament-tears"
      }
    ]
  },
  {
    id: "meniscus",
    name: "Meniscus injury",
    window: "About 3 to 6 weeks after partial meniscectomy; about 3 to 6 months after repair",
    notes: [
      "AAOS distinguishes faster recovery after trimming from slower recovery after repair.",
      "A repair protects tissue but usually requires a longer rehab timeline.",
      "The exact window depends heavily on tear type and surgical approach."
    ],
    sources: [
      {
        label: "AAOS: Meniscus Tears",
        url: "https://orthoinfo.aaos.org/en/diseases--conditions/meniscus-tears/"
      },
      {
        label: "AAOS: Meniscus Repair",
        url: "https://orthoinfo.aaos.org/en/treatment/meniscus-repair/"
      }
    ]
  },
  {
    id: "ankle-sprain",
    name: "Ankle sprain",
    window: "Minor sprains can settle in 1 to 3 weeks; severe sprains may take weeks to months",
    notes: [
      "Mass General Brigham lists grade 1 ankle sprains around 1 to 3 weeks.",
      "Grade 2 sprains often take 4 to 6 weeks.",
      "Grade 3 or high ankle sprains can take several months."
    ],
    sources: [
      {
        label: "Mass General Brigham: Ankle Sprain",
        url: "https://www.massgeneralbrigham.org/en/patient-care/services-and-specialties/sports-medicine/conditions/foot-ankle/ankle-sprain"
      }
    ]
  },
  {
    id: "knee-sprain",
    name: "Knee sprain",
    window: "Usually at least a few weeks; severe sprains can take a few months",
    notes: [
      "Cleveland Clinic notes that many knee sprains improve over a few weeks.",
      "More severe sprains can take a few months.",
      "Instability, inability to bear weight, or major swelling should trigger evaluation."
    ],
    sources: [
      {
        label: "Cleveland Clinic: Knee Sprain",
        url: "https://my.clevelandclinic.org/health/diseases/knee-sprain"
      }
    ]
  }
];

const cases = [
  {
    id: "kobe-achilles",
    athlete: "Kobe Bryant",
    league: "NBA",
    team: "Los Angeles Lakers",
    injuryFamily: "Achilles rupture",
    injuryLabel: "Left Achilles rupture",
    injuredDate: "2013-04-12",
    injuredLabel: "April 12, 2013",
    returnDate: "2013-12-08",
    returnLabel: "December 8, 2013",
    layoffDays: 240,
    outcome: "Returned to game action vs. Toronto after the 2013 rupture.",
    medicalWindow: "Achilles rupture: full recovery often about 12 months, sometimes longer.",
    summary:
      "NBA.com's retrospective places Bryant's Achilles rupture on April 12, 2013. NBA.com also has his first game back on December 8, 2013 against Toronto.",
    sources: [
      {
        label: "NBA.com: Kobe retrospective referencing April 12, 2013 Achilles rupture",
        url: "https://www.nba.com/news/morning-tip-heart-will-kobe-bryant-unmeasured"
      },
      {
        label: "NBA.com: Toronto at Lakers, Dec. 8, 2013 game summary",
        url: "https://www.nba.com/game/tor-vs-lal-0021300303/box-score"
      },
      {
        label: "NBA.com video: Kobe's first minutes back",
        url: "https://www.nba.com/watch/video/games/lakers/2013/12/08/0021300303-tor-lal-play3.nba"
      }
    ]
  },
  {
    id: "durant-achilles",
    athlete: "Kevin Durant",
    league: "NBA",
    team: "Golden State Warriors / Brooklyn Nets",
    injuryFamily: "Achilles rupture",
    injuryLabel: "Ruptured right Achilles tendon",
    injuredDate: "2019-06-10",
    injuredLabel: "June 10, 2019",
    returnDate: "2020-12-13",
    returnLabel: "December 13, 2020",
    layoffDays: 552,
    outcome: "Missed the full 2019-20 season and first returned in Brooklyn's preseason.",
    medicalWindow: "Achilles rupture: full recovery often about 12 months, sometimes longer.",
    summary:
      "Durant was injured in Game 5 of the 2019 Finals, confirmed a ruptured right Achilles on June 13, 2019, and first returned to game action 552 days later.",
    sources: [
      {
        label: "NBA.com: Durant suffers Achilles injury in Game 5",
        url: "https://www.nba.com/news/durant-achilles-injury"
      },
      {
        label: "NBA.com: Durant confirms ruptured right Achilles",
        url: "https://www.nba.com/news/warriors-durant-achilles-injury-update"
      },
      {
        label: "NBA.com: Durant sees action for first time in 552 days",
        url: "https://www.nba.com/news/brooklyns-kevin-durant-sees-action-for-1st-time-in-552-days"
      }
    ]
  },
  {
    id: "rose-acl",
    athlete: "Derrick Rose",
    league: "NBA",
    team: "Chicago Bulls",
    injuryFamily: "ACL tear",
    injuryLabel: "Left ACL tear",
    injuredDate: "2012-04-28",
    injuredLabel: "April 28, 2012",
    returnDate: "2013-10-29",
    returnLabel: "October 29, 2013",
    layoffDays: 549,
    outcome: "Missed the entire 2012-13 season and returned for Chicago's 2013-14 opener.",
    medicalWindow: "ACL tear: usually 6 to 9 months, often longer for elite return-to-sport.",
    summary:
      "NBA.com later described the ACL blowout in April 2012 and noted Rose missed the entire 2012-13 season. His first regular-season action back came on October 29, 2013.",
    sources: [
      {
        label: "NBA.com: Rose feature referencing April 2012 ACL blowout",
        url: "https://www.nba.com/news/derrick-rose-load-management-era-feature"
      },
      {
        label: "NBA.com: Bulls at Heat, Oct. 29, 2013 game summary",
        url: "https://www.nba.com/game/chi-vs-mia-0021300002"
      }
    ]
  },
  {
    id: "murray-acl",
    athlete: "Jamal Murray",
    league: "NBA",
    team: "Denver Nuggets",
    injuryFamily: "ACL tear",
    injuryLabel: "Torn left ACL",
    injuredDate: "2021-04-12",
    injuredLabel: "April 12, 2021",
    returnDate: "2022-10-03",
    returnLabel: "October 3, 2022",
    layoffDays: 539,
    outcome: "Returned to game action in preseason before the 2022-23 season.",
    medicalWindow: "ACL tear: usually 6 to 9 months, often longer for elite return-to-sport.",
    summary:
      "Denver announced the torn left ACL after the April 12, 2021 injury. NBA.com later covered Murray's return to action in October 2022 after missing the 2021-22 season.",
    sources: [
      {
        label: "NBA.com: Jamal Murray out with torn ACL",
        url: "https://www.nba.com/news/jamal-murray-out-indefinitely-with-torn-acl-in-left-knee"
      },
      {
        label: "NBA.com: Murray remains out after knee surgery",
        url: "https://www.nba.com/news/nuggets-guard-jamal-murray-remains-out-indefinitely-after-knee-surgery"
      },
      {
        label: "NBA.com: Jamal Murray and others make long-awaited returns",
        url: "https://www.nba.com/news/ben-simmons-kawhi-leonard-jamal-murray-make-long-awaited-returns/"
      }
    ]
  },
  {
    id: "paige-acl",
    athlete: "Paige Bueckers",
    league: "College",
    team: "UConn",
    injuryFamily: "ACL tear",
    injuryLabel: "Torn left ACL",
    injuredDate: "2022-08-01",
    injuredLabel: "August 1, 2022",
    returnDate: "2023-11-08",
    returnLabel: "November 8, 2023",
    layoffDays: 464,
    outcome: "Missed the full 2022-23 season and returned for UConn's 2023-24 opener.",
    medicalWindow: "ACL tear: usually 6 to 9 months, often longer for elite return-to-sport.",
    summary:
      "UConn officially announced the torn left ACL on August 3, 2022. UConn's preseason coverage confirmed her return to the court for November 2023.",
    sources: [
      {
        label: "UConn Athletics: Paige Bueckers suffers torn ACL",
        url: "https://uconnhuskies.com/news/2022/8/3/womens-basketball-paige-bueckers-suffers-torn-acl-will-miss-2022-23-season.aspx"
      },
      {
        label: "UConn Athletics: Paige Bueckers surgery update",
        url: "https://uconnhuskies.com/news/2022/8/9/womens-basketball-paige-bueckers-surgery-update"
      },
      {
        label: "UConn Athletics: returns to the court this month",
        url: "https://uconnhuskies.com/news/2023/10/25/womens-basketball-bueckers-named-ap-preseason-all-american"
      }
    ]
  },
  {
    id: "zion-knee-sprain",
    athlete: "Zion Williamson",
    league: "College",
    team: "Duke",
    injuryFamily: "Knee sprain",
    injuryLabel: "Grade 1 right knee sprain",
    injuredDate: "2019-02-20",
    injuredLabel: "February 20, 2019",
    returnDate: "2019-03-14",
    returnLabel: "March 14, 2019",
    layoffDays: 22,
    outcome: "Returned for Duke's ACC tournament quarterfinal against Syracuse.",
    medicalWindow: "Knee sprain: many improve over a few weeks; more severe sprains can take months.",
    summary:
      "NCAA.com carried Duke's official update that Williamson had a Grade 1 right knee sprain. NCAA.com also reported his return for the ACC tournament on March 14, 2019.",
    sources: [
      {
        label: "NCAA.com: Zion diagnosed with Grade 1 right knee sprain",
        url: "https://www.ncaa.com/news/basketball-men/2019-02-21/college-basketball-dukes-zion-williamson-listed-day-day-after-knee"
      },
      {
        label: "NCAA.com: Zion Williamson will return for Duke",
        url: "https://www.ncaa.com/news/basketball-men/2019-03-14/zion-williamson-will-return-duke-blue-devils-begin-acc-tournament"
      }
    ]
  }
];

const state = {
  search: "",
  league: "All",
  injury: "All",
  sort: "longest",
  selectedId: "durant-achilles"
};

const sortModes = [
  { id: "longest", label: "Longest layoff", description: "Sorted by longest documented layoff" },
  { id: "recent", label: "Newest injury", description: "Sorted by most recent injury date" },
  { id: "fastest", label: "Fastest return", description: "Sorted by shortest documented layoff" }
];

const leagueFilters = ["All", "NBA", "College"];
const injuryFilters = ["All", ...new Set(cases.map((entry) => entry.injuryFamily))];

const searchInput = document.getElementById("searchInput");
const leagueFiltersEl = document.getElementById("leagueFilters");
const injuryFiltersEl = document.getElementById("injuryFilters");
const sortFiltersEl = document.getElementById("sortFilters");
const caseGrid = document.getElementById("caseGrid");
const guideGrid = document.getElementById("guideGrid");
const resultsCount = document.getElementById("resultsCount");
const resultsDescriptor = document.getElementById("resultsDescriptor");
const trackedCases = document.getElementById("trackedCases");
const injuryFamilies = document.getElementById("injuryFamilies");
const detailName = document.getElementById("detailName");
const detailMeta = document.getElementById("detailMeta");
const detailStats = document.getElementById("detailStats");
const detailStory = document.getElementById("detailStory");
const detailSources = document.getElementById("detailSources");

function createChip(label, isActive, onClick) {
  const button = document.createElement("button");
  button.className = `chip-button${isActive ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderFilterGroup(container, items, activeValue, setter) {
  container.innerHTML = "";
  items.forEach((item) => {
    container.appendChild(
      createChip(item, item === activeValue, () => {
        setter(item);
        renderAll();
      })
    );
  });
}

function sortCases(list) {
  const copy = [...list];

  if (state.sort === "longest") {
    return copy.sort((a, b) => b.layoffDays - a.layoffDays);
  }

  if (state.sort === "fastest") {
    return copy.sort((a, b) => a.layoffDays - b.layoffDays);
  }

  return copy.sort((a, b) => new Date(b.injuredDate) - new Date(a.injuredDate));
}

function filteredCases() {
  const term = state.search.toLowerCase().trim();

  return sortCases(
    cases.filter((entry) => {
      const leagueMatch = state.league === "All" || entry.league === state.league;
      const injuryMatch = state.injury === "All" || entry.injuryFamily === state.injury;
      const searchMatch =
        term === "" ||
        entry.athlete.toLowerCase().includes(term) ||
        entry.injuryLabel.toLowerCase().includes(term) ||
        entry.injuryFamily.toLowerCase().includes(term) ||
        entry.team.toLowerCase().includes(term);

      return leagueMatch && injuryMatch && searchMatch;
    })
  );
}

function renderCases(list) {
  if (!list.some((entry) => entry.id === state.selectedId) && list[0]) {
    state.selectedId = list[0].id;
  }

  caseGrid.innerHTML = "";

  if (!list.length) {
    caseGrid.innerHTML = `
      <article class="card case-card">
        <h3>No matches</h3>
        <p>Try a broader search or reset the filters.</p>
      </article>
    `;
    renderDetail(null);
    return;
  }

  list.forEach((entry) => {
    const card = document.createElement("article");
    card.className = `card case-card${entry.id === state.selectedId ? " active" : ""}`;
    card.innerHTML = `
      <div class="case-top">
        <div>
          <p class="eyebrow compact">${entry.league}</p>
          <h3>${entry.athlete}</h3>
        </div>
        <span class="mini-tag">${entry.injuryFamily}</span>
      </div>
      <p class="case-sub">${entry.team} • ${entry.injuryLabel}</p>
      <div class="case-stats">
        <article>
          <span class="stat-label">Injured</span>
          <strong>${entry.injuredLabel}</strong>
        </article>
        <article>
          <span class="stat-label">Returned</span>
          <strong>${entry.returnLabel}</strong>
        </article>
        <article>
          <span class="stat-label">Layoff</span>
          <strong>${entry.layoffDays} days</strong>
        </article>
        <article>
          <span class="stat-label">Typical window</span>
          <strong>${entry.injuryFamily}</strong>
        </article>
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedId = entry.id;
      renderAll();
    });
    caseGrid.appendChild(card);
  });

  renderDetail(list.find((entry) => entry.id === state.selectedId) || list[0]);
}

function renderDetail(entry) {
  if (!entry) {
    detailName.textContent = "No case selected";
    detailMeta.textContent = "There are no records matching the current filters.";
    detailStats.innerHTML = "";
    detailStory.textContent = "Reset or broaden the filters to restore the case list.";
    detailSources.innerHTML = "";
    return;
  }

  detailName.textContent = entry.athlete;
  detailMeta.textContent = `${entry.team} • ${entry.league} • ${entry.injuryLabel}`;
  detailStats.innerHTML = `
    <article>
      <span class="stat-label">Injured</span>
      <strong>${entry.injuredLabel}</strong>
    </article>
    <article>
      <span class="stat-label">Returned</span>
      <strong>${entry.returnLabel}</strong>
    </article>
    <article>
      <span class="stat-label">Layoff</span>
      <strong>${entry.layoffDays} days</strong>
    </article>
  `;
  detailStory.textContent = `${entry.summary} ${entry.outcome} Medical reference: ${entry.medicalWindow}`;
  detailSources.innerHTML = entry.sources
    .map(
      (source) =>
        `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`
    )
    .join("");

  renderFeatured(entry);
}

function renderGuides() {
  guideGrid.innerHTML = recoveryGuides
    .map(
      (guide) => `
        <article class="guide-card">
          <div class="guide-head">
            <h3>${guide.name}</h3>
            <span class="guide-window">${guide.window}</span>
          </div>
          <ul class="guide-list">
            ${guide.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
          <div class="guide-links">
            ${guide.sources
              .map(
                (source) =>
                  `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderFeatured(entry) {
  document.getElementById("featuredAthlete").textContent = entry.athlete;
  document.getElementById("featuredInjury").textContent = entry.injuryLabel;
  document.getElementById("featuredInjuredDate").textContent = entry.injuredLabel;
  document.getElementById("featuredReturnDate").textContent = entry.returnLabel;
  document.getElementById("featuredLayoff").textContent = `${entry.layoffDays} days`;
  document.getElementById("featuredSummary").textContent = entry.summary;
  document.getElementById("featuredFill").style.width = `${Math.min(100, Math.max(18, entry.layoffDays / 6))}%`;
}

function renderSummaryCounts() {
  trackedCases.textContent = cases.length;
  injuryFamilies.textContent = new Set(cases.map((entry) => entry.injuryFamily)).size;
}

function renderResultsMeta(list) {
  const descriptor = sortModes.find((item) => item.id === state.sort);
  resultsCount.textContent = `${list.length} case${list.length === 1 ? "" : "s"}`;
  resultsDescriptor.textContent = descriptor.description;
}

function renderAll() {
  renderFilterGroup(leagueFiltersEl, leagueFilters, state.league, (value) => {
    state.league = value;
  });
  renderFilterGroup(injuryFiltersEl, injuryFilters, state.injury, (value) => {
    state.injury = value;
  });
  renderFilterGroup(
    sortFiltersEl,
    sortModes.map((mode) => mode.label),
    sortModes.find((mode) => mode.id === state.sort).label,
    (value) => {
      state.sort = sortModes.find((mode) => mode.label === value).id;
    }
  );

  const list = filteredCases();
  renderResultsMeta(list);
  renderCases(list);
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderAll();
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.jump);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderSummaryCounts();
renderGuides();
renderAll();
