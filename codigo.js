let miTitulo = document.querySelector(
  'input class="botons" type="submit" value="Registrar"'
);
miTitulo.onclick = function () {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
};
