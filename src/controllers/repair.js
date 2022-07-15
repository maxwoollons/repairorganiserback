import express from 'express';
import { allRepairs,archivedRepairs } from '../models/repair.js';
import { addRepair } from '../models/repair.js';
import { db_conn } from '../database.js';

const repairController = express.Router()

repairController.get('/all',(req,res)=>{
    allRepairs().then(data=>{
        res.status(200).json(data[0])
        console.log(data[0])
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
    

})

repairController.post('/add',(req,res)=>{
    console.log(req.body)
    addRepair(req.body.idrepairs,req.body.note,req.body.requiredby,req.body.tdc).then(data=>{
        res.status(200).json(data)
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
}
)

//delete repair id
repairController.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    db_conn.query("DELETE FROM repair.repairs WHERE id = ?",[req.params.id]).then(data=>{
        res.status(200).json(data)
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
}
)

//archive repair id
repairController.put('/archive/:id',(req,res)=>{
    console.log(req.params.id)
    db_conn.query("UPDATE repair.repairs SET archived = 1 WHERE id = ?",[req.params.id]).then(data=>{
        res.status(200).json(data)
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
}
)


//all archived repairs
repairController.get('/archived',(req,res)=>{
    archivedRepairs().then(data=>{
        res.status(200).json(data[0])
        console.log(data[0])
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
}
)







export default repairController


// http://localhost:8000/api/repairs/all
// http://localhost:8000/api/repairs/add