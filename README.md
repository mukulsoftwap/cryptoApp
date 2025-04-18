# 🚀 CryptoTracker

A real-time cryptocurrency tracker built with **React + TypeScript**, using the **CoinGecko API**, **Context API**, and **Chart.js** for historical charts. Easily mark your favorite coins and view live data updated every 30 seconds.

---

## 🌟 Features

- ✅ View top cryptocurrencies in real-time (auto-updating every 30s)
- ⭐ Add/remove coins to/from your favorites (saved in LocalStorage)
- 📈 View historical price chart per coin (7 days)
- ⚛️ Built with React Native CLI, TypeScript, Context API
- 📊 Chart rendering via `Victory Native`
- 💾 Persisted favorites with `AsyncStorage`

---

## 🛠️ Tech Stack

| Tool             | Description                             |
|------------------|-----------------------------------------|
| React Native     | Cross Platform Mobile Framework         |
| TypeScript       | Type safety                             |
| CoinGecko API    | Real-time crypto data                   |
| Chart.js         | Price history visualization             |
| Context API      | Global state management (Redux-style)   |
| AsyncStorage     | Persist favorites locally               |

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker

# 2. Install dependencies
npm install

# 3. Start the development server
npm run android // android
npm run ios // IOS

For running on Android you need to have Android SDK installed and JAVA_HOME setup.

For IOS you need to have XCode and Pods install

you can find APK file in apk folder.
