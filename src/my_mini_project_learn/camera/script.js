// ฝั่ง Client
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const response = await fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: form.name.value,
            photo: photoData.value
        })
    });

    const result = await response.json();
    console.log(result);
});

// ฝั่ง Server (Node.js + Express)
app.post('/upload', (req, res) => {
    const { name, photo } = req.body;

    // แปลง Base64 กลับเป็นไฟล์
    const base64Data = photo.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // บันทึกเป็นไฟล์
    fs.writeFileSync(`uploads/${name}.jpg`, buffer);

    res.json({ success: true });
});