import random

def coin_flip_simulation(percobaan):
    angka = 0 
    gambar = 0 

    for _ in range(percobaan):
        flip = random.choice(['angka', 'gambar'])
        if flip == 'angka':
            angka += 1
        else:
            gambar += 1

    print(f"Angka : {angka}/{percobaan}")
    print(f"Gambar : {gambar}/{percobaan}")
    print(f"Probabilitas Angka: {angka / percobaan:.6f}")
    print(f"Probabilitas Gambar: {gambar / percobaan:.6f}")

coin_flip_simulation(1000000)
