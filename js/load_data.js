function loadQueHacemosItems() {
  var _container = $("#what_we_do");

  for (let i = 0; i < que_hacemos.childs.length; i++) {
    var section = getSection(
      que_hacemos.childs[i].title,
      que_hacemos.childs[i].text,
      que_hacemos.childs[i].image_src
    );
    _container.append(section);
  }

  function getSection(title, text, image_src) {
    return `
            <div class="p-4 m-2 my-3 tarjeta-info">
                <div class="d-flex align-items-center" style="height: 7rem">
                    <div class="icono me-2">
                        <img src="${image_src}" height="50" width="50">
                    </div>
                    <span class="titulo-tarjeta-info ms-2">${title}</span>
                </div>

                <p class="pt-4">${text}</p>
            </div>
        `;
  }
}

function loadPricesItems() {
  var _container = $("#price_table");

  for (let i = 0; i < precios.childs.length; i++) {
    var section = getSection(precios.childs[i].name, precios.childs[i].price);
    _container.append(section);
  }

  function getSection(name, price) {
    return `
            <tr>
                <td>${name}</td>
                <td>${price}</td>
            </tr>
        `;
  }
}
