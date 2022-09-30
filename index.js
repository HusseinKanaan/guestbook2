import express from 'express'

const PORT = process.env.PORT || 9999;

// your code

const app = express()



app.set('view engine', 'ejs')

app.get('/', (_, res) => {
    res.render('index')
})

app.post('/add', (req, res) => {
    console.log(req)
    res.render('index')
})
app.listen(PORT, () => {
    console.log('der Serverläuft on Port', PORT);
})

