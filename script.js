function generarRecibo() {
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const monto = document.getElementById("monto").value;
    const fecha = document.getElementById("fecha").value;
  
    if (!cliente || !producto || !cantidad || !monto || !fecha) {
      alert("Por favor completa todos los campos");
      return;
    }
  
    document.getElementById("r-cliente").innerText = cliente;
    document.getElementById("r-producto").innerText = producto;
    document.getElementById("r-cantidad").innerText = cantidad;
  
    // Mostrar el monto formateado como moneda MXN
    const montoFormateado = parseFloat(monto).toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN"
    });
    document.getElementById("r-monto").innerText = montoFormateado;
  
    document.getElementById("r-fecha").innerText = fecha;
  
    document.getElementById("recibo").classList.remove("hidden");
  }
  function descargarImagen() {
    const element = document.getElementById("recibo-contenido");
    html2canvas(element).then(canvas => {
      const link = document.createElement("a");
      link.download = "recibo.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }