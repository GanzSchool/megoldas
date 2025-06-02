**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Bayer Milán Ákos (2006.04.28.) 
**Maximális pontszám**: 80 pont
**Elért pontszám**: 69 pont
**Érdemjegy**: **5 (jeles)**

---

### 📌 Ponthatárok

| Érdemjegy         | Elért pontszám | Teljesítmény |
| ----------------- | -------------- | ------------ |
| **5 (jeles)**     | 40–80 pont     | 50%–100%     |
| **4 (jó)**        | 32–39 pont     | 40%–49%      |
| **3 (közepes)**   | 24–31 pont     | 30%–39%      |
| **2 (elégséges)** | 16–23 pont     | 20%–29%      |
| **1 (elégtelen)** | 0–15 pont      | 0%–19%       |

---

### ✅ Értékelési szempontok (minden részmegoldás max. 5 pont)

| Részszempont                     | Leírás                                 |
| -------------------------------- | -------------------------------------- |
| Funkcionalitás (3 pont)          | A kód működik, helyes eredményt ad     |
| Kódstílus, olvashatóság (1 pont) | Átlátható, értelmezhető a megoldás     |
| Szintaxis, forma (1 pont)        | Nincs hiba, nyelvhelyes a megvalósítás |

---

### 📄 Részletes pontozás

| Feladat                 | Megoldás típusa  | Funkció | Stílus | Forma | Össz. |
| ----------------------- | ---------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | Alap             | ❌ 0     | ⚠️ 1   | ⚠️ 1  | **2** |
|                         | Refaktor 1       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**          | *Nem beérkezett* | —       | —      | —     | **0** |
|                         |                  |         |        |       |       |
|                         |                  |         |        |       |       |
|                         |                  |         |        |       |       |
| **3. Űrhajósok**        | Alap             | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3       | ⚠️ 1    | ⚠️ 1   | ⚠️ 1  | **3** |
| **4. Gaming alkatrész** | Alap             | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3       | ❌ 0     | ⚠️ 0   | ❌ 0   | **0** |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat (Alap)**: A `books.lenght` helytelen, nem fut le a ciklus → 0 pont a működésre.
* **1–4. refaktorok**: Jól felépítettek, fokozatosan fejlődnek.
* **2. feladat**: Nem érkezett be → 0 pont.
* **3. feladat utolsó refaktor**: `simulatorHours` helyett változó nélküli hivatkozás → nem működik → részpontok.
* **4. feladat utolsó refaktor**: `reduce(min, curr ? curr : min)` – szintaktikailag hibás, nincs definiálva a `min`, ezért 0 pont.

---

### 🎓 **Végeredmény: 69 / 80 pont → Jeles (5)**

A feladatok megoldásaid többsége igényes és átgondolt volt. Különösen jól sikerültek a refaktor megoldások, de figyelj oda a változónevek pontos írására és a rövid kódok szintaktikai helyességére is. Szép munka!
