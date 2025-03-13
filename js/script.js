window.onload = function () {
  // Banner Slideshow
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) slideIndex = 1;
    else if (n < 1) slideIndex = imglist.length;

    for (i = 0; i < imglist.length; i++) {
      imglist[i].style.display = "none";
    }

    imglist[slideIndex - 1].style.display = "block";
  }

  setInterval(() => {
    plusDivs(1);
  }, 3000);
};

// Form Validasi
function validateForm() {
  // Mengambil nilai input dari form
  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let toko = document.getElementById("list-toko").value;

  // Mengecek apakah ada diamond yang dipilih
  let selectedDiamond = document.querySelector(".diamond-container.selected");

  // Validasi jika ada field yang kosong
  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return false;
  }
  if (email === "") {
    alert("Email tidak boleh kosong!");
    return false;
  }
  if (!email.includes("@")) {
    alert("Masukkan email yang valid!");
    return false;
  }
  if (toko === "") {
    alert("Pilih list toko!");
    return false;
  }
  if (!selectedDiamond) {
    alert("Pilih jumlah diamond terlebih dahulu!");
    return false;
  }

  // Mengambil informasi dari diamond yang dipilih
  let selectedDiamondPrice =
    selectedDiamond.querySelector(".diamond-price").textContent;

  // Jika semua valid, jalankan setSenderUI untuk menampilkan output
  setSenderUI(nama, email, toko, selectedDiamondPrice);

  return false;
}

// Message-us
function setSenderUI(nama, email, toko, diamond) {
  document.getElementById("output-nama").innerHTML = nama;
  document.getElementById("output-email").innerHTML = email;
  document.getElementById("output-toko").innerHTML = toko;
  document.getElementById("output-diamond").innerHTML = diamond;
}

// Pilihan Diamond (Menandai item yang dipilih)
document.addEventListener("DOMContentLoaded", function () {
  const diamondContainers = document.querySelectorAll(".diamond-container");

  diamondContainers.forEach((container) => {
    container.addEventListener("click", function () {
      // Hapus kelas "selected" dari semua container
      diamondContainers.forEach((item) => item.classList.remove("selected"));

      // Tambahkan kelas "selected" ke elemen yang diklik
      this.classList.add("selected");
    });
  });
});

// Username
document.addEventListener("DOMContentLoaded", function () {
  let inputField = document.getElementById("nameInput");
  let button = document.getElementById("changename");
  let spanUser = document.getElementById("username");

  // Tambahkan event listener ke tombol
  button.addEventListener("click", function () {
    let newName = inputField.value.trim();
    if (newName !== "") {
      spanUser.textContent = newName;
      inputField.value = ""; // Kosongkan input setelah mengganti nama
    } else {
      alert("Masukkan nama terlebih dahulu!");
    }
  });
});

// Eventlistener Input User
document.addEventListener("DOMContentLoaded", inputUser);

function inputUser() {
  let inputField = document.getElementById("nameinput");
  let button = document.getElementById("changename");
  let spanUser = document.getElementById("username");

  // Tambahkan event listener ke tombol
  button.addEventListener("click", function () {
    let newName = inputField.value.trim();
    if (newName !== "") {
      spanUser.textContent = newName;
      inputField.value = ""; // Kosongkan input setelah mengganti nama
    } else {
      alert("Masukkan nama terlebih dahulu!");
    }
  });
}
