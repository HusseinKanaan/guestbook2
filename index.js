import express from 'express'
import { persons } from './data.js'

const PORT = 9898;
const app = express()



app.set('view engine', 'ejs')

app.use(express.urlencoded({ extension: true }))

app.get('/', (_, res) => {
    res.render('index', {persons})
})

app.post('/add', (req, res) => {
    console.log(req.body.person);
    persons.push({
        name: req.body.person,
        email: req.body.personemail,
        betreff: req.body.betreff,
        inhalt: req.body.inhalt
    })
    console.log(persons)
    res.render('index', {persons})

})
app.listen(PORT, () => {
    console.log('der Serverläuft on Port', PORT);
})

