const body = document.body;
    const cursor = document.getElementById("cursor");

    body.addEventListener("mousemove", (event) => {
      cursor.style.left = event.clientX + "px";
      cursor.style.top = event.clientY + "px";
    });


        