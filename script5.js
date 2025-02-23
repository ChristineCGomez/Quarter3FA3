function generateScreenTime() {
            let apps = ["Facebook", "Instagram", "TikTok"];
            let num1 = Math.ceil(Math.random() * 20);
            let num2 = Math.ceil(Math.random() * 20);
            let num3 = Math.ceil(Math.random() * 20);
            
            let screenTimes = {
                "Facebook": num1,
                "Instagram": num2,
                "TikTok": num3
            };
            
            let biggest = Math.max(num1, num2, num3);
            let mostUsedApp = Object.keys(screenTimes).find(key => screenTimes[key] === biggest);
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let nthLetter = num1 <= 26 ? alphabet[num1 - 1] : "(Out of range)";
            let totalMinutes = num2 * num3;
            let hours = Math.floor(totalMinutes / 60);
            let minutes = totalMinutes % 60;
            
            document.getElementById("facebook-box").innerText = `Facebook: ${num1}h`;
            document.getElementById("instagram-box").innerText = `Instagram: ${num2}h`;
            document.getElementById("tiktok-box").innerText = `TikTok: ${num3}h`;
            document.getElementById("biggest").innerText = `⏳ Most used app: ${mostUsedApp} (${biggest} hours)`;
            document.getElementById("nth-letter").innerText = `📌 First letter of the username in TikTok you have the highest streak with: ${nthLetter}`;
            document.getElementById("time-breakdown").innerText = `⏱️ Total screen time in using Instagram: ${totalMinutes} mins (${hours}h ${minutes}m)`;
        }
