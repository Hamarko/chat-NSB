class Users {
    constructor(){
        this.users = [
            {id: '1', 
             name:'Echo bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',            
             online:true,
             link:'gif1.jpg',                        
            },
            {id: "2", 
             name:'Reverse bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',            
             online:true,
             link:'gif2.jpg',                          
            },
            {id: "3", 
             name:'Spam bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',            
             online:true,
             link:'gif3.jpg',                        
            },
            {id: "4", 
             name:'Ignor bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',            
             online:true,
             link:'gif4.jpg',            
            },
        ]; }
    add(user) {
        this.users.push(user)
    }
    get(id) {
        return this.users.find(user => user.id === id)
    }

    getAllUsers(){
        return this.users
    }
    getAllUsersOnline(){
        return this.users.filter(u=>u.online)
    }
    uppdateUser(user){
       this.users[this.users.findIndex(u => u.id === user.id)]=user
    }
   
}

module.exports = function(){
    return new Users()
}