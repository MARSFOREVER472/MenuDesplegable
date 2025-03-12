// FUNCIÓN PARA PODER VISUALIZAR TODOS LOS ELEMENTOS DEL MENÚ...

function toggleMenu(menuId)
{
    var main = document.getElementById(menuId);

    if (main.style.display === "block")
    {
        main.style.display = "none";
    }
    else
    {
        closeAllMenus();
        main.style.display = "block";
    }
}

// FUNCIÓN PARA CERRAR TODOS LOS MENÚS DE LA INTERFAZ...

function closeAllMenus()
{
    var mains = document.querySelectorAll('.dropdown-content');
    mains.forEach(main => main.style.display = "none");
}

window.onclick = function(event)
{
    if (!event.target.matches('button'))
    {
        closeAllMenus();
    }
}