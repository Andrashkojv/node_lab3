import Identy from "./model"

const identyControler = {
    register: (req,res)=>{
       const {login, password, confirmPassword} = req.body;
       
       if (!login || ! password || !confirmPassword){
           res.status(400).send("Не всі данні надіслано");
       }
       else if (password != confirmPassword){
           res.status(400).send("Не співпадають пароль і підтвердження");
       } 
       else {
         
           Identy.findOne({login:login}).then((result)=>{
                if (!result){
                    const newIdenty = new Identy ({login:login, password:password});                   
                    newIdenty.save().
                    then(result=>{
                        res.send(result);
                    });
                }  
                else{
                    res.status(400).send(`Коричтувач  ${login} вже зареєстрований`); 
                }              
           });
       }    
    }, 
    identyfy:(req,res)=>{        
        const login = req.query.login;
        Identy.findOne({login:login}).then((error, result)=>{
            if (result){
                res.send(true);
            }
            else
            {
                res.status(204).send(false);
            }
        });
    } ,
    login:(req,res)=>{
        const {login, password} = req.body;
        Identy.findOne({login:login}).then((user)=>{
            if (!user){
                res.status(404).send("Користувач з таким логіном не зареєстровано")
            }
            else{
                console.log(user);
            }
        });
    }
}
export default identyControler;