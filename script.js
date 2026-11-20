const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const tableBody = document.getElementById("customerTableBody");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const pageButtons = document.querySelectorAll(".page-btn");

function renderTable(data) {
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" class="text-center">No matching customers found</td></tr>`;
    return;
  }

  data.forEach((customer) => {
    const statusClass =
      customer.status === "Active" ? "status-active" : "status-inactive";
    const row = `
      <tr>
        <td>${customer.name}</td>
        <td>${customer.company}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.country}</td>
        <td class="text-center">
          <span class="status-badge ${statusClass}">${customer.status}</span>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Qidiruv (Search) funksiyasi
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.company.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query) ||
      c.country.toLowerCase().includes(query),
  );
  renderTable(filtered);
});

// Saralash (Sort) funksiyasi
sortSelect.addEventListener("change", (e) => {
  let sorted = [...customers];
  if (e.target.value === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (e.target.value === "status") {
    sorted.sort((a, b) => a.status.localeCompare(b.status));
  }
  renderTable(sorted);
});

// Sahifalash tugmalari (Active holatini almashtirish)
pageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "<" || btn.textContent === ">") return;
    pageButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Boshlang'ich jadvalni chiqarish
renderTable(customers);
