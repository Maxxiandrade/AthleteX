
const deleteItem = (req,res)=>{
    try {
        
        res.status(200).json('Ok')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}