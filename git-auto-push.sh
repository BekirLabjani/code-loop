@echo off
cd /d GG:\develper\angular-projects\code-loop

echo 🔧 Starte Angular Build...
ng build --configuration=production

echo 🟢 Build abgeschlossen. Git-Vorgang beginnt...

git remote set-url origin git@github.com:BekirLabjani/go-taxi-web-page.git

git add .
git commit -m "Update 0.1"
git push origin main

echo ✅ Fertig!
pause
