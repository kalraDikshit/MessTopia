
var express = require('express');
var pool = require('./components/dbconnection');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

const saltRounds = 10;


var router = express.Router();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Get Requests

app.get('/api/stdetails',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query('Select * from stDetails',function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    });
});

app.get('/api/stdetails/limit/:page',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query(`Select * from stDetails LIMIT 10 OFFSET ${(req.params.page-1)*10}`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    });
});


app.get('/api/stdetail/:id',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query('Select * from stDetails where id='+(req.params.id),function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    });
});

app.get('/api/messmenu/:hostelname',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query(`Select * from mess_menu where hostel = "${req.params.hostelname}"`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    })
});

app.get('/api/latesteat/:date/:meal',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query(`Select st.* from stDetails st where st.id not in (Select lm.id from latestmeal lm where date="${req.params.date}" and meal="${req.params.meal}")`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    })
});

app.get('/api/latestmeal/:id/:date/:meal',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query(`Select * from latestmeal where id = "${req.params.id}" and date = "${req.params.date} and meal =${meal}"`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    })
});

//POST Requests

app.post('/api/signup',function(req,res,next){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            pool.getConnection(function(err,connection){
                if(err){res.send(JSON.stringify({"status":500,"error":err,"response":null}))};
                if(req.body.level==0){
                    connection.query(`Insert into stDetails(name,rollNo,leaveCount,dates,totalMeals,email,phone,isPaid,hostelName) VALUES("${req.body.name}",${req.body.rollNo},${0},"",${0},"${req.body.email}",${req.body.phone},${0},"${req.body.hostel}")`,function(error,results,fields){
                        if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
                        else{
                            connection.query(`Insert into stLogin(id,email,password,name) VALUES(${results.insertId},"${req.body.email}","${hash}","${req.body.name}") `,function(er,result,field){
                                connection.release();
                                if(er){res.send(JSON.stringify({"status":500,"error":er,"response":null}));}
                                else{
                                    res.send(JSON.stringify({"status":200,"error":null,"response":'success'}));
                                }
                            });
                        }
                    });
                }else{
                    connection.query(`Insert into adminLogin(email,password,level,name) VALUES("${req.body.email}","${hash}",${1},"admin")`,function(error,results,fields){
                        if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
                        else{
                            res.send(JSON.stringify({"status":200,"error":null,"response":'success'}));
                        }
                    });
                }    
            });
        });
    });   
});

app.post('/api/login',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        var table = 'stLogin';
        if(req.body.level==0){
            table = 'stLogin';
        }else if(req.body.level==1){
            table = 'adminLogin';
        }
        connection.query(`Select id,password,level,name from ${table} where email = '${req.body.email}'`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                if(results.length==0){
                    res.send(JSON.stringify({"status":200,"error":"No email found.","response":null}));
                }else{
                    bcrypt.compare(req.body.password,results[0].password,function(err,result){
                        if(result){
                            res.send(JSON.stringify({"status":200,"error":null,"response":{'success':1,'level':results[0].level,'name':results[0].name,'id':results[0].id}}));
                        }
                        else{res.send(JSON.stringify({"status":200,"error":null,"response":{'success':0,'level':-1}}));}
                    });
                }   
            }
        });
    });
});

app.post('/api/latestmeal',function(req,res,next){
    pool.getConnection(function(err,connection){
        if(err){throw err};
        connection.query(`Insert into latestmeal(id,date,hostel,meal) Values(${req.body.id},"${req.body.date}","${req.body.hostel}","${req.body.meal}")`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":200,"error":null,"response":results}));
            }
        });
    })
});

//Delete requests
app.delete('/api/rmstudent/:id',function(req,res){
    pool.getConnection(function(err,connection){
        connection.query(`Delete from stDetails where id=${req.params.id}`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":500,"error":null,"response":results}));   
            }
        });
    });
});

app.delete('/api/rmstudent/hostel/:hostel',function(req,res){
    pool.getConnection(function(err,connection){
        connection.query(`Delete from stDetails where hostelName="${req.params.hostel}"`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":500,"error":null,"response":results}));   
            }
        });
    });
});

app.delete('/api/rmadmin/:id',function(req,res){
    pool.getConnection(function(err,connection){
        connection.query(`Delete from adminLogin where id=${req.params.id}`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":500,"error":null,"response":results}));   
            }
        });
    });
});

//Update Requests
app.put('/api/uppass/',function(req,res){
    pool.getConnection(function(err,connection){
        var table = 'stLogin';
        if(req.body.level==0){
            table = 'stLogin';
        }else if(req.body.level==1){
            table = 'adminLogin';
        }
        connection.query(`Select password from ${table} where email = "${req.body.email}"`,function(error,results,fields){
            if(error){res.send(JSON.stringify({"status":200,"error":error,"response":null}))}
            else{
                if(results.length==0){
                    res.send(JSON.stringify({"status":200,"error":"Email Not Registered","response":null}));
                }else{
                    bcrypt.compare(req.body.oldpassword,results[0].password,function(er,result){
                        if(result){
                            bcrypt.hash(req.body.newpassword,saltRounds,function(error,hash){
                                connection.query(`Update ${table} set password = "${hash}" where email = "${req.body.email}"`,function(e,r){
                                    connection.release();
                                    if(e){
                                        res.send(JSON.stringify({"status":200,"error":e,"response":null}));
                                    }else{
                                        res.send(JSON.stringify({"status":200,"error":null,"response":r}));
                                    }
                                });
                            });
                        }else{
                            res.send(JSON.stringify({"status":200,"error":"Current Password didn't match.","response":null}));
                        }
                    });
                }
            }
        });
    });
});


app.delete('/api/latestmeal/:id/:date/:meal',function(req,res){
    pool.getConnection(function(err,connection){
        connection.query(`Delete from latestmeal where id=${req.params.id} and date="${req.params.date}" and meal="${req.params.meal}"`,function(error,results,fields){
            connection.release();
            if(error){res.send(JSON.stringify({"status":500,"error":error,"response":null}))}
            else{
                res.send(JSON.stringify({"status":500,"error":null,"response":results}));   
            }
        });
    });
});


const server = app.listen(PORT,()=>{
    const {address,port} = server.address();
    console.log(`Server running at http://${address}:${port}`);
});
