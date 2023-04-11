import sql from '../db/database.js'

export const Wellcom = (req, res) => {
    res.send('<div><h2>Rest Api, App for post</h2><p>Made for Kevin Pava</p></div>')
}
export const Getposts = async(req, res) => {
    try {
        const [list] = await sql.query('select * from publication;')
        res.json(list)
    } catch (error) {
        res.json('<h1>Error 500</h1>')
    }
}
export const Getpost = async (req, res) => {
    try {
        const [list] = await sql.query('select * from publication WHERE id = ?',[req.params.id])
        res.json(list[0])
    } catch (error) {
        res.json('<h1>Error 500</h1>')
    }
}
export const GetpostCount = async (req, res) => {
    try {
        const [count ] = await sql.query('select count(*) from publication;')
        res.json(count[0]["count(*)"])
    } catch (error) {
        res.json('Error 500')
    }
}
export const CreatePost = async (req, res) => {
    try{
        const [result] = await sql.query('insert into publication (name, contener) values(?,?);',[
            req.body.name,
            req.body.contener
        ])
        res.json({
            id: result.insertId,
            ...req.body
        })
    }catch(error){
        res.json('Error')
    }
}
export const DeletePost = async (req, res) => {
    try{
        const result = await sql.query('delete from publication where id = ?',[
            req.params.id
        ])
        res.json('publicacion eliminada')
    }catch(error){
        res.json('Error 500')
    }
}
export const ModifPost = async (req, res) => {
    try{
        const result = await sql.query('update publication set ? where id = ?',[
            req.body,
            req.params.id
        ])
        res.json('se actualizaron las publicaciones')
    }catch(error){
        res.json('Error 500')
    }
}