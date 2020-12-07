class Users {
    constructor(){
        this.users = [
            {id: '1', 
             name:'Echo bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
             bot: true,
             online:false,
             link:'gif1.jpg',
             allMassages:[],             
            },
            {id: "2", 
             name:'Reverse bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
             bot: true,
             online:true,
             link:'gif2.jpg',
             allMassages:[],             
            },
            {id: "3", 
             name:'Spam bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
             bot: true,
             online:true,
             link:'gif3.jpg',
             allMassages:[],             
            },
            {id: "4", 
             name:'Ignor bot',
             description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
             bot: true,
             online:true,
             link:'gif4.jpg',
             allMassages:[],
            },
        ]; }
    add(user) {
        if (!this.users.find(u => u.id === user.id)) this.users.push(user)
    }
    get(id) {
        return this.users.find(user => user.id === id)
    }

    getAllUsers(){
        return this.users
    }
    getAllUsersOnline(){
        return this.users.filter(user=> user.online)
    }   
    addM(uppdateUser){
        uppdateUser.owner=false        
        this.users[this.users.findIndex(user=> user.id ===uppdateUser.to)].allMassages.push(uppdateUser)
        uppdateUser.owner=true
        this.users[this.users.findIndex(user=> user.id ===uppdateUser.from)].allMassages.push(uppdateUser)
    }
}

module.exports = function(){
    return new Users()
}