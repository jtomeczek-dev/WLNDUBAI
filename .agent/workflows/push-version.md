---
description: Automatczne wersjonowanie i przesyłanie zmian na GitHub
---

// turbo-all
Ten workflow pilnuje, aby każda zmiana w kodzie była powiązana z nową wersją aplikacji (bump version) i automatycznie trafiała na GitHub.

1. Zidentyfikuj wprowadzone zmiany.
2. Zaktualizuj plik `README.md` w języku angielskim o opis nowych zmian/funkcji.
3. Podbij wersję w pliku `package.json` (patch, minor lub major w zależności od zmian):
   - `npm version patch` (dla poprawek)
   - `npm version minor` (dla nowych funkcji)
   - `npm version major` (dla dużych zmian)
4. Zsynchronizuj wersję w stopce `index.html` (polecenie działa tak samo na Windowsie, macOS i Linuksie, bo korzysta wyłącznie z Node, bez `sed` i bez `jq`):
   `node -e "const fs=require('fs');const v=require('./package.json').version;fs.writeFileSync('index.html',fs.readFileSync('index.html','utf8').replace(/Version \d+\.\d+\.\d+/g,'Version '+v));"`
5. Dodaj wszystkie zmiany do git:
   `git add .`
6. Stwórz commit z opisem zmian i numerem wersji:
   `git commit -m "Update v$(node -p "require('./package.json').version"): Your description here"`
7. Prześlij zmiany wraz z tagami na repozytorium:
   `git push origin main --tags`

PAMIĘTAJ: Każdy nowy czat musi zacząć od przeczytania `.ai_rules`, aby zachować tę ciągłość.
