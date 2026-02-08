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
4. Dodaj wszystkie zmiany do git:
   `git add .`
5. Stwórz commit z opisem zmian i numerem wersji:
   `git commit -m "Update v$(jq -r .version package.json): Your description here"`
6. Prześlij zmiany wraz z tagami na repozytorium:
   `git push origin main --tags`

PAMIĘTAJ: Każdy nowy czat musi zacząć od przeczytania `.ai_rules`, aby zachować tę ciągłość.
