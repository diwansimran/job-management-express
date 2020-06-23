const express562 = require('express')
const mysql562 = require('mysql')
const app562 = express562();

const db562 = mysql562.createConnection({
    host: process.env.RDS_HOSTNAME || 'diwan.mysql.database.azure.com',
    user: 'simran@diwan',
    password: 'MyAzurePassword!',
    port: '3306',
    database: 'diwan'
  })

db562.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySQL is connected.');
})


app562.use(express562.json());

app562.get('/', (req,res)=>{
    res.send("Hello World");
});

app562.get('/api562/jobs', (req,res)=>{
    let sql562='select * from jobs';
    let query562=db562.query(sql562,(err,job562)=>{
        if(err){
            throw err;
        }
        console.log(job562);
        res.send(job562);
    });
});

app562.get('/api562/jobs/:jobName/:partId', (req,res)=>{

    let sql562="select * from jobs where jobName = '"+req.params.jobName+"' and partId= "+req.params.partId;
    let query562=db562.query(sql562,(err,job562)=>{
        if(err){
            throw err;
        }
        console.log(job562);
        if(job562=="") {
            res.status(404).send('Job with name '+ req.params.jobName+ ' and part id '+req.params.partId+' was not found');
        }else{
        res.send(job562);
        }
    })
});

app562.post('/api562/jobs', (req,res)=>{
    if(!req.body.jobName || !req.body.partId || !req.body.qty){
        res.status(400).send('name of the jobs, parts id and quentity required.')
    }else{
        let sql562="select * from jobs where jobName = '"+req.body.jobName+"' and partId= "+req.body.partId;
        let query562=db562.query(sql562,(err,job562)=>{
            if(err){
                throw err;
            }
            if(job562==""){
                let sql="insert into jobs values ('"+req.body.jobName+"',"+req.body.partId+","+req.body.qty+")";
                let query=db562.query(sql,(err,job562)=>{
                    if(err){
                        throw err;
                    }
                    res.send("job detail with Name "+req.body.jobName+"' and partId "+req.body.partId+" and quentity "+req.body.qty+" is added to the database");
                });
            } else{ 
                res.status(404).send('Job with name '+ req.body.jobName+ ' and part id '+req.body.partId+' already exists');
            }
        })
    }
});

app562.put('/api562/jobs', (req,res)=>{
    if(!req.body.jobName || !req.body.partId || !req.body.qty){
        res.status(400).send('name of the jobs, parts id and quentity required.')
    }else{
        let sql562="select * from jobs where jobName = '"+req.body.jobName+"' and partId= "+req.body.partId;
        let query562=db562.query(sql562,(err,job562)=>{
            if(err){
                throw err;
            }
            if(job562==""){
                res.status(404).send('Job with name '+ req.body.jobName+ ' and part id '+req.body.partId+' not found.');
            } else{ 
                let sql562="update jobs set qty ="+req.body.qty+" where jobName='"+req.body.jobName+"' and partId= "+req.body.partId;
                let query562=db562.query(sql562,(err,job562)=>{
                    if(err){
                        throw err;
                    }
                    res.send("job detail with Name "+req.body.jobName+"' and partId "+req.body.partId+" and quentity "+req.body.qty+" is updated.");
                });            
            }
        })
    }
})

const port562 = process.env.PORT || 5000;
app562.listen(port562,()=>console.log(`listening on port ${port562}...`));