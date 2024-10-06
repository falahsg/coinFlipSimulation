function coinFlipSimulation(percobaan) {
  let angka = 0;
  let gambar = 0;

  for (let i = 0; i < percobaan; i++) {
    let flip = Math.random() < 0.5 ? "angka" : "gambar";
    if (flip === "angka") {
      angka++;
    } else {
      gambar++;
    }
  }

  console.log(`Angka (angka): ${angka}/${percobaan}`);
  console.log(`Gambar (gambar): ${gambar}/${percobaan}`);
  console.log(`Probabilitas Angka: ${(angka / percobaan).toFixed(6)}`);
  console.log(`Probabilitas Gambar: ${(gambar / percobaan).toFixed(6)}`);
}

coinFlipSimulation(1000000);
